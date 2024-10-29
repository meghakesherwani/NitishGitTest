const Heros=["megha","mahi","lakshya","neha"]

Heros.forEach((el)=>{
    console.log(el.toUpperCase())
})

console.log(Heros);

Heros.map((el)=>{
    console.log(el.toUpperCase())
})

console.log(Heros);

const fil=Heros.filter((h)=>
{
    console.log(h.endsWith("gha"));
    return h.endsWith("a")
})
console.log(fil);

//check if all values are numbers
const score=[123,345,34,56,234,765]
console.log(typeof score[0])

const gameScorecheck=score.every(h=> typeof v ==="number")
console.log(gameScorecheck)

//find score above 200
const above2=score.find( e=> e>200)
console.log(above2)