let arr=[10,2,6,4,11]
const Heros=["megha","mahi","lakshya","neha"]
function double(x)
{
 return x*2
}
const d=arr.map(double)
console.log(d)

function triple(x)
{
    return x*3
}
const t=arr.map(triple)
console.log(t);

//function to return binary
function binary(x)
{
    return x.toString(2)
}
const b=arr.map(binary);
console.log(b)


console.log('map function work same as foreach')

Heros.map((el)=>{
    console.log(el.toUpperCase())
})

console.log(Heros);