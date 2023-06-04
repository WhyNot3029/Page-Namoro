function sim() {
    alert("Você aceitou namorar comigo! :)");
}

function deflect(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = randomNumber(10, 90);
    btn.style.left = randomNumber(10, 90);
    console.log('im dont miss a shot...');
}

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}