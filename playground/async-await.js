


const add = (a,b)=>{
    return new Promise((res, reject)=>{
        setTimeout(()=>{
            if(a<0 || b <0 ){
                return reject('Error')
            }
            res(a+b);
        },1000)
    })
}

const doWork = async ()=>{
    const res = await add(10,20)
    const res2 = await add(res,-30)
    return res2
    
}
doWork().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
})

