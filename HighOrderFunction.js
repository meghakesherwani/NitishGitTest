const powertwo=(n)=>{
    return n*n;
}

function powercube(powertwo , n)
{
    return powertwo(n) *n;
}

console.log(powercube(powertwo,3));

//taking out the cube

function sayhello()
{
    return ()=>{

        console.log("Hello all");
    }
}
let say =sayhello()
console.log(say);

const Higherorder=n=>
{
    const oneFun=m=>
    {
        const twoFun=o=>{

            return m+n+o;
        }
        return twoFun;
    }
  

    return oneFun;
}

console.log(Higherorder(2)(3)(4));

function myname()
{
    console.log("Megha hereee")
}
//setInterval(myname,2000);
setTimeout(myname,4000)

