
/*
HAFTANIN GÜNLERİ UYGULAMASI
switch(deger){
  case1:
  //kodlar
  break

    case2:
  //kodlar
  break
  

    case3:
  //kodlar
  break

   default:
  //kodlar
  break
  

}


*/ 

let sayi = prompt("Lütfen 1 ile 7 arasında sayı giriniz")

switch(sayi){// 1,2,3,4,5,6,7

  case  "1":
    alert( "Pazartesi")
    break;

    case  "2":
      alert( "Salı")
      break;


      case  "3":
        alert( "Çarşamba")
        break;


        case  "4":
          alert( "Perşembe")
          break;

          case  "5":
            alert( "Cuma")
            break;
            case  "6":
              alert( "Cumartesi")
              break;
              case  "7":
                alert( "Pazar")
                break;

          default :
            alert( "Girilen sayı 1 ile 7 arasında olmalıdır")
            break;

          

}