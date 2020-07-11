const mongoose = require('../task-manager/src/db/mongoose')
const User = require('../task-manager/src/models/user')
//
User.findByIdAndUpdate("5f036edf1c766d0cc09a8ec1",{age:42},{new:true}).then(()=>{
    return User.countDocuments({age:{
        $gt:10
    }})
}).then((result)=>console.log(result))

