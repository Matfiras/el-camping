
var A=[0,0,0,0,0,0,0]; //how many nights of each element
var B=[0,18,55,10,3,1,15]; //rent price per day
var C=[0,99,499,119,150,10,120]; //buy price
var T=[0,0,0,0,0,0,0]; // total price for each item
var N=[0,0,0,0,0,0,0]; //number of items
var buy=[false, false, false, false, false, false, false,]

function increment(i){
    if (buy[i]==false){
    A[i]++;
    document.getElementById('item'+i+'number').innerText=A[i];
    T[i]=A[i]*B[i];
    document.getElementById('tot'+i+'price').innerText=T[i];
    document.getElementById('tot-price').innerText=T.reduce((a,b)=>a+b);
    N[i]++;
    document.getElementById('items-nbr').innerText=N.reduce((a,b)=>a+b);
    }
}
function decrement(i){

    
    if (buy[i]==false){
    if (A[i]<=0){
        document.getElementById('item'+i+'number').innerText=0;
        T[i]=0;
        document.getElementById('tot'+i+'price').innerText=T[i];
        document.getElementById('tot-price').innerText=T.reduce((a,b)=>a+b);
        N[i]=0;
        document.getElementById('items-nbr').innerText=N.reduce((a,b)=>a+b);
    }
    else{
        A[i]--;
        document.getElementById('item'+i+'number').innerText=A[i];
        T[i]=A[i]*B[i];
        document.getElementById('tot'+i+'price').innerText=T[i];
        document.getElementById('tot-price').innerText=T.reduce((a,b)=>a+b);
        N[i]--;
        document.getElementById('items-nbr').innerText=N.reduce((a,b)=>a+b);
    }
}
}

function buyitem(i){
    buy[i]=true;
    A[i]=0;
    document.getElementById('item'+i+'number').innerText=0;
    T[i]=C[i];
    document.getElementById('tot'+i+'price').innerText=T[i];
    document.getElementById('tot-price').innerText=T.reduce((a,b)=>a+b);
    N[i]=1;
    document.getElementById('items-nbr').innerText=N.reduce((a,b)=>a+b);
}
function cancel(i){
    buy[i]=false;
    A[i]=0;
    document.getElementById('item'+i+'number').innerText=0;
    T[i]=0;
    document.getElementById('tot'+i+'price').innerText=T[i];
    document.getElementById('tot-price').innerText=T.reduce((a,b)=>a+b);
    N[i]=0;
    document.getElementById('items-nbr').innerText=N.reduce((a,b)=>a+b);
}