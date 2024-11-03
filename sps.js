
let x=0,y=0;


for(let i=1;i<=5;++i){
function comp(){
    let random=Math.random();
    if(random>=0 && random<0.3){
        compPlay="ROCK";
    }
    else if(random>=0.3 && random<0.6){
        compPlay="SCISSOR";
    }
    else{
        compPlay="PAPER" ;
    }
    
    return compPlay;

}




function hum(){
    let human;
    human=prompt("Enter ROCK,PAPER OR SCISSOR");
    return human ;


}



let a=comp();
let b=hum();

console.log(a);
console.log(b);







function rules(a,b){
    if((a==="ROCK" && b==="SCISSOR") || (a==="PAPER" && b==="ROCK") || (a==="SCISSOR" && b==="PAPER")  ){
        
        x+=1;
    }
    else if(a===b){
    
        x+=0;
        y+=0;
    }
    
    else{
        
        y+=1;
    }
    console.log(`Your score is :${y} `) ;
    console.log(`computer score is :${x} `) ;
}
rules(a,b);
}
let comps=x;
let hums=y;

if(comps>hums){
    console.log("YOU LOST THE GAME");
}
else if(hums>comps){
    console.log("YOU WIN THE GAME");
}
else{
    console.log("DRAW");

    }







    


    






    





