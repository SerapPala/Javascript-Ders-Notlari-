/* 
VERİ TİPLERİ
----- Primitive (ilkel veriler) ------
1-String
2-Number
3-Boolean
4-Null
5-Undefined
----- Referance(referans tipler -> gelişmiş veri tipleridir. ram belllekte  yerleri vardır) ------ 
6-Object
7-Function
*/
//çift ya da tek tırnak içerisinde yazabiliriz.
//1-String
let isim = "serap 23"
//alert(typeof isim);

//2-Number-> çift tırnak içerisinde tanımlanmayanlar, rakamlar number tipindedir.
//let sayi = 10
let sayi = 10.5
//alert(typeof sayi);

//rakamı string yani tırnak içerisinde yazdığımız için burada string olarak algılar.iki string toplanmaz. iki string birleştirilir.
let a = "5"
let b = "3"
//alert (a+b)

//3-Boolean true false döndürür. Evet hayır gibi iki ihtimalin olduğu verilerde kullanılır.
console.log(5>4);


//4-Null -> boş değer.içerisine herhangi bir değer atanmamıştır.Bir değişkenin değerini boşaltmak veya başlangıç değerini vermek için kullanabiliriz.
let abc = null;
console.log(abc)
abc = 6456
console.log(abc)

//5-Undefined-> tanımlanmamış. herhangi bir değer atamadan, değer vermeden oluşturulan değişken
let tanimsiz;
console.log(tanimsiz)


//6-Object
let insan = {
    isim : "Serap",
    soyisim : "Pala",
    yas : 31,
}
console.log(insan)
console.log(typeof insan)
//diziler object olarak geçer veri tiplerinde
var dizi = [{ ad: "John", soyad: "Doe" },{ ad: "John", soyad: "Doe" },{ ad: "John", soyad: "Doe" }];
console.log(dizi)
console.log(typeof dizi)
console.log('dizi mi?', Array.isArray(dizi))


//7*Function
let func = function(){
    console.log("Merhaba")
}
func()
console.log(typeof func)