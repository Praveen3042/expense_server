const express = require("express");
const router = express.Router();

const expense=require('../Contorllers/expence.controller')
const users=require('../Contorllers/expense.user.controller') 
const income=require('../Contorllers/income.controller')
//expense
router.post('/post',expense.create)

router.get('/data/:userId',expense.data)

router.delete('/delete/:id',expense.delete)

router.put('/put/:id',expense.update)

//income
router.post('/income/post',income.create)

router.get('/income/data/:userId',income.data)

router.delete('/income/delete/:id',income.delete)

router.put('/income/put/:id',income.update)

//user api
router.post('/user/post',users.create)
router.get('/user/data',users.data)

router.post('/user/login',users.login)
module.exports = router;

//"https://expense-server-nljb.onrender.com"