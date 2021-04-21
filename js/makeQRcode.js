$(document).ready(function () {
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    qrcode.clear();
    qrcode.makeCode("https://real-john-cheung.github.io/NFT-Inflation/exec/");
});