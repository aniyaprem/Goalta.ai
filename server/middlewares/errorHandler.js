const errorHandler = (err, req, res, next)=>{
    console.log(`ErrorHandler:${err}`);
    const status = err.status || 400;
    let errMsg = err || 'Something went wrong';

    if(err.name === 'ValidationError'){
        errMsg = [];
        Object.values(err.errors).forEach((val)=>{
            errMsg.push(val.message);
        });
    }

    if(err.code === 11000){
        errMsg = [];
        errMsg.push(`Duplicate entry of ${err.keyValue.email}`);
    }

    res.status(status).json({
        success:false,
        error:errMsg
    });
}

module.exports = errorHandler;