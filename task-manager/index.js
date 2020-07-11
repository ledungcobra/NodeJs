const express = require('express')
const app = express()
require('./src/db/mongoose')




const userRouter = require('./src/router/user')
const taskRouter = require('./src/router/task')

const port = process.env.PORT ||3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('App is listening on port ' + port)
})

