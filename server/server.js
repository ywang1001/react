/*const express = require('express');
const app = express();
const mongoose = require('mongoose');
const armyRouter = require('./restapi');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/armylist');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type,Accept,Authorization");
    next();
})

app.use('/api', armyRouter);

app.get('/',(req, res) => {
    res.send('express done');
})

app.listen(4000, () => {
    console.log('listening 4000');
})*/
const express = require('express');
const app = express();
const router = express.Router();
const {mongodbConnection} = require('./mongodbConnection');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Method", "*");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.sendStatus(200);
    } else {
        console.log("------------------------------------\n");
        next();
    }
});

app.use((req, res, next) => {
    console.log(`request user-agent url: ${req.url} \n`);
    console.log(`request user-agent IP: ${req.ip} \n`);
    next();
});

app.use('/api', router);

const conn = new mongodbConnection();

//first page
router.get("/users/firstpage/list", (req, res) => {
    conn.getFP(req, res)
})

router.get("/users/sortlist", (req,res) => {
    conn.getSortData(req, res);
})

//whole list
router.get("/users/list", (req, res) => {
    //conn.getAllUser(res);
    conn.getAUser(res);
})

router.get("/users/all", (req, res) => {
    conn.getUsers(req,res);
})

//get user
router.get("/users/:id", (req, res) => {
    conn.getUserById(res, req.params.id);
})

//get valid user who could be curNode's father
router.get("/users/valid/:id", (req, res) => {
    conn.getValidSuperiorById(res, req.params.id);
})

//get son of curNode
router.get("/users/next/:id", (req, res) => {
    conn.getDirectChildById(res, req.params.id, req);
})

//get father of curNode
router.get("/users/sup/:id", (req, res) => {
    conn.getSuperiorById(res, req.params.id);
})

//insert node
router.post("/users/insert", (req,res) => {
    conn.insertUser(res, req.body);
})

//edit node
router.put("/users/edit/:id", (req, res) => {
    console.log(req.body);
    conn.updateUserById(res, req.params.id, req.body);
})

//delete node
router.delete("/users/delete", (req, res) => {
    conn.deleteUserById(res, req.body);
})

app.listen(4000, () => {
    console.log('server start on 4000');
})


