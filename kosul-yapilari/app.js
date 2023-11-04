/*
if(koşul){
    //kodlar
}else {
    //kodlar
}

DERS ORTALAMASI BULMA UYGULAMASI
*/
//VİZE %30, VİZE %30, FİNAL %40

let vize1 = Number(prompt("1. Vize Notunuzu Giriniz:"))
let vize2 = Number(prompt("2. Vize Notunuzu Giriniz:"))
let final = Number(prompt("Final Notunuzu Giriniz:"))

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Geçtiniz")
    console.log("Geçtiniz")

}else{
    alert("Kaldınız")
    console.log("Kaldınız")
}