require('../task-manager/src/db/mongoose')
const Task = require('../task-manager/src/models/task')
const User = require('../task-manager/src/models/user')
const { update } = require('../task-manager/src/models/task')

// const updateAndCount = async (id,age)=>{
//     await User.findByIdAndUpdate(id,{age})
//     return await User.countDocuments()

// }
// updateAndCount("5f036edf1c766d0cc09a8ec1",10).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
const deleteAndCount = async (id)=>{
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteAndCount('5f03f281ed5c9b0675f4af23').then((result)=>{
    console.log(result)
}).catch((err)=>{console.log(err)})