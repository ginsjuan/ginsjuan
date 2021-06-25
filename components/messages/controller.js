const store = require('./store');

function addMessage(user, message) {
    return new Promise((result, reject) => {

        if(!user || !message){
            console.error('[messageController] no hay usuario ni mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
    
        store.add(fullMessage);
        result(fullMessage);
    });

}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessages
}