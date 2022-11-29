const names = ["Guadalupe", "Ollie", "Aki"];


const writeCards = (names, event) => {
    let giftMsgs = [];
    for (let i = 0; i < names.length; i++){
        let giftMsg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        giftMsgs.push(giftMsg)
    }

    return giftMsgs;
}
writeCards(names, "surprise");


const countDown = (n) => {
    let i = n;
    while(i >= 0){
        console.log(i);
        i--
    }

}

countDown(10)
Footer
