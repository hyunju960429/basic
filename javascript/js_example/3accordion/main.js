let acc=document.getElementsByClassName('accordion');

console.log(acc[0])
console.log(acc.length)

/* for( ⑴ ; ⑵; ⑷){
    ⑶
} */

for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        console.log(i)
    })
}