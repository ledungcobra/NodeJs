const geocode = (address,callback)=>{
    data = {}
    setTimeout(() => {
       data = {
            latitude:10,
            longtitude:20
        }
        callback(data)
        
    }, 2000);
   
}


geocode('hihi',(newdata)=>console.log(newdata))
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (n1,n2,callback)=>{
    setTimeout(() => {
        const data = n1+n2
        callback(data)
    }, 2000);

}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})