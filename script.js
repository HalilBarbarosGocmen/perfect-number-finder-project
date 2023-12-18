// MÜKEMMEL SAYI = 6' NIN BÖLENLERİ = 1 2 3 6 BUNLARI TOPLA = 12 6*2 = 12

let inputNumber = Number(prompt('sayı giriniz'))



function isPerfectNumber(number) {
    let toplam = 0;
    for (let i = 2; i<=number/2; i++) {
        if (number%i==0) {
            toplam+=i 
        }
    }
    toplam+=1+number; 
  
    if (number*2 == toplam) {
        alert('Mükemmel Sayıdır')
    } else {
        alert('Mükemmel sayı değildir.')
    }
    
}

isPerfectNumber(inputNumber)