const user = require('./armyMethod');
const mongoose = require('mongoose');


class mongodbConnection{
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/armylist', {useNewUrlParser: true}, (err) => {
            if(err) {
                console.log('Db connect err', err);
                return;
            }
            console.log('Db connect success');
        });
    }
    
    getSortData(req, res) {
        user.getSortData(req, res);
    }

    getFP(req, res){
        user.getFP(req, res);
    }

    getUsers(req, res) {
        user.getUsers(req, res);
    }

    getAllUser(res) {
        let tp = 5;
        user.getAllUser(res, tp*8);
       // ++tp;
    }

    getAUser(res) {
        user.getAUser(res);
    }

    getUserById(res, id) {
        user.getUserById(res, id);
    }

    insertUser(res, data) {
        user.insertUser(res, data);
    }

    updateUserById(res, id, data) {
        console.log('server mongoConnection');
        console.log(data);
        user.updateUserById(res, id, data);
    }

    deleteUserById(res, data) {
        user.deleteUserById(res, data);
    }
    
    getValidSuperiorById(res, id) {
        user.getValidSuperiorById(res, id);
    }

    getDirectChildById(res, id, req) {
        user.getDirectChild(res, id, req);
    }

    getSuperiorById(res, id) {
        user.getSuperior(res, id);
    }
}

module.exports = {mongodbConnection};