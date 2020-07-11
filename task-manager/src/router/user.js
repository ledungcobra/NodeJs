const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')
//List out all users
router.get('/users/me',auth,async (req,res)=>{
    res.send(req.user)     
})
//Login
router.post('/users/login',async (req,res)=>{

    try{
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        )
        const token = await user.generateAuthToken()
        
        res.send({token,user})
        
    }catch(e){
        res.status(400).send('Unable to login 4')
    }
})
//Logout one user
router.post('/users/logout',auth,async (req,res)=>{
    try{
    
        req.user.tokens = req.user.tokens.filter((tok)=>tok.token !== req.token)
        await req.user.save()
        res.send('Logged out')
    }catch(e){
        console.log(e)
    }
      
})

//Logout all user

router.post('/users/logoutAll',auth,async(req,res)=>{

    try {
        
        req.user.tokens = []
        await req.user.save()
        res.send('Logged out all successfully')

    } catch (error) {
        res.status(500).send({error:'Unable to logout all user'})
    }

})

//Get specific user
router.get('/users/:id', async (req,res)=>{
    const _id = req.params.id
    try{    
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send()
    }

})
//Update specific user
router.patch('/users/me', auth,async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update)=>{
        return allowUpdates.includes(update)
    })

    if(!isValidOperation) return res.status(400).send('Invalid update');

    try{
        const user = req.user
        updates.forEach((update)=>{
            user[update] = req.body[update]
        })
        await user.save()

        if(!user){
            return res.status(404).send();
        }            
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})
//Delete one user by id
router.delete('/users/me',auth,async(req,res)=>{
    
    try{
        
        await req.user.remove()
        res.send(req.user)

    }catch(e){
        res.status(400).send(e)
    }

})
//Register a new user
router.post('/users',async (req,res)=>{
    const user = new User(req.body)    
    try{
        await user.save() 
        const token =await user.generateAuthToken()
        res.status(201).send({user,token})

    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router
