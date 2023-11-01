/*
Scope: KAPSAM
Bir şeyin kapsadığı bölüm demektir.
*/

 /*1-Global Scope
 2-Function Scope
 3-Block Scope
 */


 /*
 1-Global Scope
 Bir değişken tanımı yapmak gerekiyorsa var let const kullanılabilir.
  süslü parantez içerisinde olmamalı. en dışta olmalı global olması için.

 Global Scope en geniş scopedur->
  avantajı: sınırı yoktur, her yerden erişilebilir.
  dezantajı : kullanmadığımız değişkenlerin de ram bellekte yer kaplama durumu.Programın yavaş çalışmasına sebep olabilir bu durumda.
 */
/*var firstVariable = 10

if(true){
    console.log(firstVariable + " " + "değişkene console üzerinden eriştim");
}

function method1(){
    console.log(firstVariable + " " +  "değişkene fonksiyon içerisinden eriştim");
}
method1()

//süslü parantez içerisinde olmamalı. en dışta olmalı global olması için.Aşağıdaki gibi yaparsak 
// a is not defined hatası alırız.
if(true){
    let a = 20
}
console.log(a + " " + "hata");
*/

 /*
 2-Function Scope
//süslü parantez içerisinde olmamalı. en dışta olmalı global olması için.Aşağıdaki gibi yaparsak 
// a is not defined hatası alırız.
sadece süslü içerisindeki değişkene ulaşabiliriz.
 */
 function kodlayalim() {
    let kodla = "Kodla";
      console.log(kodla);
  }
kodlayalim();
/* 
console.log(kodla) yaparsak burada
kodla is not defined */

// 3-Block Scope
//if else yapısı while do while döngüsü gibi blocklarda kullanılan değişkenlerdir.
function blockTest (){
    if(true){
var blockDenemeDegiskeni = 20
console.log(blockDenemeDegiskeni)
    }
    console.log(blockDenemeDegiskeni)
}
blockTest()