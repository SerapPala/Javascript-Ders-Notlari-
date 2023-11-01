//1-window -> direkt erişebiliriz.
console.log(window);
alert("Hoş geldiniz.");
var sayi1=prompt("Sayı giriniz:");
function kapat()
{
    var karar=confirm("Sayfadan ayrılmak istiyor musunuz?");
    
    if(karar==true)
    {
        window.close();
        }
    }
    window.close();

    //2-document için öncelikle window dememiz gerekiyor.