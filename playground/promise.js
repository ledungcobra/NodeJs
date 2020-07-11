const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([13,3,2,3])
    },2000)
})
doWorkPromise.then((result)=>{
    console.log(result)
}).catch((er)=>{
    console.log(er)
}).finally((fi)=>{
    console.log(fi)
})


