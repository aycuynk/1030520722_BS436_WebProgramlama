export const cards = document.querySelectorAll('.card'); // class'ı card olanları bir grup halinde hepsini alır

let turnedCard = false; // Dönmüş Kart olup olmadığını tanımlamak için
let firstCard, secondCard; //2 kart seçileceği için firstCard ve secondCard tanımladık
let counter=0;
//Kartı çeviren fonksiyon
function cardOperations() {

    this.classList.add('flip');

    //dönderme işlemini gerçekleştirir.

    //eğer dönmüş kart yoksa
    if (turnedCard === false) {
        turnedCard = true; //dönmüş kartı true yap
        firstCard = this; //ve dönenin ilk kart olduğunu belirle
        counter+=1;
        if(firstCard.dataset.name === 'kedi'){
            document.getElementById("alanId").style.display = 'none';
            document.getElementById("kazandiId").style.display = 'block';
        }

    }

    secondCard = this; // sonraki dönen kartı ikinci kart olarak belirler.


    if(firstCard.dataset.name ==='kopek' && secondCard.dataset.name ==='kopek'){
        document.getElementById("alanId").style.display = 'none';
        document.getElementById("yenildiId").style.display = 'block';
    }
}

//Yeni kart sıralamasını oluşturur
(function newOrder() {
    cards.forEach(card => {
        let ramdomPos = Math.ceil(Math.random() * 3); //3 tane kart olduğu için random pozisyon 3 ile çarpılır.
        card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', cardOperations)); //her kart için tıklama işlemini yapar ve cardOperations fonksiyonunu kullanır.
