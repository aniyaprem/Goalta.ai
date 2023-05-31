const express = require('express')
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const colors = require('colors');
const router = require('./router/route')
const bodyParser = require('body-parser')
const connectionDB = require('./db/config');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload');
const errorHandler = require('./middlewares/errorHandler')
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const bcrypt = require('bcryptjs');
const User = require('./models/User')


const app = express();
connectionDB();

const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/build')));
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(cors());
app.use(
    cors({
        origin: ['http://localhost:3000'],
        // origin: ['http://goalta.ai'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    })
);

let DB = [];

async function verifyGoogleToken(token) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });
        return { payload: ticket.getPayload() };
    } catch (error) {
        return { error: "Invalid user detected. Please try again" };
    }
}

app.post("/api/signup", async (req, res) => {
    try {
        console.log({ verified: verifyGoogleToken(req.body.credential) });
        if (req.body.credential) {
            const verificationResponse = await verifyGoogleToken(req.body.credential);
            if (verificationResponse.error) {
                return res.status(400).json({
                    message: verificationResponse.error,
                });
            }
  
            const profile = verificationResponse?.payload;
            DB.push(profile);
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash('General@123..', salt);
            let dbuser = await User.create({
                name:profile?.given_name+" "+profile?.family_name,
                email:profile?.email,
                image:profile?.picture,
                password:hashed
            });
            res.status(201).json({
                message: "Signup was successful",
                user: {
                    firstName: profile?.given_name,
                    lastName: profile?.family_name,
                    picture: profile?.picture,
                    email: profile?.email,
                    token: jwt.sign({ email: profile?.email }, "myScret", {
                        expiresIn: "1d",
                    }),
                },
            });
        }
    }catch(error) {
        res.status(500).json({
            message: "An error occurred. Registration failed.",
        });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        if (req.body.credential) {
            const verificationResponse = await verifyGoogleToken(req.body.credential);
            if (verificationResponse.error) {
                return res.status(400).json({
                    message: verificationResponse.error,
                });
            }
  
            const profile = verificationResponse?.payload;
            const existsInDB = User.findOne({email:profile?.email});
            if (!existsInDB) {
                return res.status(400).json({
                    message: "You are not registered. Please sign up",
                });
            }
  
            res.status(201).json({
                message: "Login was successful",
                user: {
                    firstName: profile?.given_name,
                    lastName: profile?.family_name,
                    picture: profile?.picture,
                    email: profile?.email,
                    token: jwt.sign({ email: profile?.email }, process.env.TOKEN_KEY, {
                        expiresIn: "1d",
                    }),
                },
            });
        }
    }catch(error) {
        res.status(500).json({
            message: error?.message || error,
        });
    }
});

app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    
    next()
});



// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })

app.use(fileUpload());
app.use(router);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server started on ${port}`.blue.bold);
});

process.on('unhandledRejection', error => {
    console.log(`unhandledRejection:${error}`.red.bold);
});