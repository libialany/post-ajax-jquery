const { Router } = require('express');
const router  = Router();
const path =require('path');
const pool  = require('../database');

//login
router.get('/',async (req,res)=>{
    const users=await pool.query('SELECT * FROM users');
    console.log(users);
    res.render('sign-in/index');
});
//
//login
router.get('/listar',async (req,res)=>{
    const users=await pool.query('SELECT * FROM users');
    console.log(users);
    res.json({users: users});
});
//guardar
router.post('/',async (req, res) =>{
    const {email,password} = req.body;
    const user={email,password};
    await pool.query('INSERT INTO users set ?',[user]);
    res.render('sign-in/index');
});

//eliminar
router.post('/eliminar/:id',async (req,res)=>{
    const id= req.params.id;
    await pool.query('DELETE FROM users WHERE id= ?',[id]);
    res.redirect('/');
});

module.exports = router;