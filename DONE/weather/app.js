const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(address === undefined){
     console.log('Please provide an address')
}else
     geocode(address,(error,data)=>{
     if(error){
               console.log(error)
     }else {
               console.log('Your location is '+ data.place_name)
               forecast(data.lat,data.long,(error,data)=>{
               if(error){ 
                    console.log(error) 
               }else{
                    console.log(data)
               }
          })
     }

})
