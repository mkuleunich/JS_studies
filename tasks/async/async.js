const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printData(arg, data){
        console.log(data);
    }
    callbackFunction(printData);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then(data => {
        console.log(data);
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let data = await promiseFunction();
    console.log(data);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function throeErr(err) {
        throw err;
    }
    callbackFunctionError(throeErr);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(err => {
        console.log(err);
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    let err  = await promiseFunctionError();
    console.log(err);
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
