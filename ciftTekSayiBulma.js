let sayiAdedi= Number(prompt("kaç adet sayı girmek istiyorsun"));
let sayilar=[];

for (let i = 0; i < sayiAdedi; i++) {
    let sayi = Number(prompt(`${i + 1}. sayıyı giriniz:`));
    sayilar.push(sayi);
}



let ciftSayilar=[];
let tekSayilar=[];
for (const sayi of sayilar) {
    let mod=sayi%2
    console.log(mod);
    if(mod===0){
        ciftSayilar.push(sayi);
    }else{
        tekSayilar.push(sayi);
    }
   
    
}
alert(`çift sayılar : ${ciftSayilar}, Tek sayılar: ${tekSayilar}`);