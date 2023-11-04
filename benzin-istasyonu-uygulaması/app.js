
// ? İstediğimiz Bilgiler 

// ? Yakıt Tipi
// ? Yüklenecek Yakıt Litresi


let dizel = 24.53; // 1
let benzin = 22.25; // 2
let lpg = 11.1; // 3

alert(" 1: Dizel, 2: Benzin, 3: LPG");

let yakitTipi = Number(prompt("Yakıt Tipinizi Giriniz:"));
let yuklenecekYakitLitresi = Number(prompt("Yüklenecek Yakıt Litresini Yazınız:"));

let toplamFiyat = (yakitTipi*yuklenecekYakitLitresi);

if(yakitTipi == 1){
  toplamFiyat = (dizel*yuklenecekYakitLitresi);
  alert("Toplam Fiyat : " + toplamFiyat);
}

else if(yakitTipi == 2){
  toplamFiyat = (benzin*yuklenecekYakitLitresi);
  alert("Toplam Fiyat : " + toplamFiyat);
}

else if(yakitTipi == 3){
  toplamFiyat = (lpg*yuklenecekYakitLitresi);
  alert("Toplam Fiyat : " + toplamFiyat);
}

else {
  alert("Lütfen sayfayı yenileyin ve geçerli bir değer giriniz.")
}