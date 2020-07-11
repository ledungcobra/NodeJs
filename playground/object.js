const product = {
    label:'abc',
    price:20,
    stock:'xyz'
}
const transaction = (type,{label,price})=>{
    console.log(price)
}

transaction(10,product)