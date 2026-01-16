const qrImage = document.getElementById("qrImage");
const qrBox = document.querySelector(".qr-box");
const qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.trim() === "") {
    alert("Please enter a link or text");
    return;
  }

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(qrText.value);

  qrBox.style.display = "block";
}
