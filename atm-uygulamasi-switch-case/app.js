
/*
ATM UYGULAMASI

1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

*/ 
const newLine ="\r\n" ;
let balanceAmount = 1000;

let text = "1-see balance amount"+ newLine
+"2-withdrawal"+ newLine
+ "3-deposit"+ newLine 
+ "4-exit" + newLine 
+"please choose a value";

let value = prompt(text);

switch(value){

    case "1" : 
    alert("balance amount:"+balanceAmount);
    break;

    case "2" :
        let withdrawalAmount = Number(prompt("Please enter the amount you want to withdraw :"));
        if(balanceAmount>= withdrawalAmount){
            balanceAmount -= withdrawalAmount
            alert("withdrawal succesful :" + withdrawalAmount);
            alert("available balance :" + balanceAmount);
            
        }else{
        alert("Insufficient balance :" + balanceAmount);
        
         }
        break;

    case "3" :
        let deposit = Number(prompt("Please enter the amount you want to deposit"));
        balanceAmount += deposit;
        alert("new balance amount:"+ balanceAmount);
        break;



     case "4": 
     alert("logging out");
     break;

     

     default :
        alert("please choose a value between 1-4");
        break;

}