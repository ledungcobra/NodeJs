const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50&lon=100&appid=cdcc349d30a74d01ea0c8c7a22576816&units=metric'

const req = https.request(url,(res)=>{
  let data = ''  
  res.on('data',(chunk)=>{
      data = JSON.parse(chunk)
  })
  res.on('end',()=>{
      console.log(data)
  })

})
req.on('error',(error)=>{
    console.log(error)
    
})
req.end()

