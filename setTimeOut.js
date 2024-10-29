function x()
{
    var a=7;
    setTimeout( function y()
    {
        console.log(a)
    },3000)
    a=111;
    console.log("Hello all")
}
x();

function xx()
{
   // var a1=22;
   for( var i=1;i<=5 ;i++)
   {
    setTimeout( function(){
        console.log(i)
    },i*3000)

    console.log('calling setout function using var')
   }
    
}
xx();

function xxx()
{
   // var a1=22;
   for( let i=1;i<=5 ;i++)
   {
    setTimeout( function(){
        console.log(i)
    },i*3000)

    console.log('calling setout function using let')
   }
    
}
xxx();