function basla(){
    let denemeHakki = +prompt('How many times would you like to have guessing chance ? \n Kaç kere tahmin etme hakkınız olsun ? ');

    let sayi = Math.trunc(Math.random()*100);
    let sayac = 0;

    while(denemeHakki>0){
        let tahmin= +prompt("What's your guess ? \n Tahmininiz nedir?");
        denemeHakki-=1;
        sayac+=1;
        
        if(tahmin < sayi){alert('Tahmininizi yükseltin');}
        if(tahmin > sayi){alert('Tahmininizi düşürün');}

        if (tahmin == sayi && sayac==1){ alert("tebrikler tek seferde bildiniz."); break;}

        if (tahmin == sayi && sayac!=1){ alert("tebrikler doğru tahmin.");break;}
        if (tahmin == sayi && sayac!=1){ alert("tebrikler doğru tahmin.");break;}
        if (tahmin != sayi && denemeHakki==0){ alert("maalesef tahmin edemediniz.");break;}
    }
}