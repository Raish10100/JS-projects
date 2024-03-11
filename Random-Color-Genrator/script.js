 function getColor(){
    const colorNumber = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + colorNumber.toString(16);

    document.body.style.backgroundColor = colorCode;

    navigator.clipboard.writeText(colorCode);

    document.querySelector('#color-code').innerText = colorCode;

 }

 const btn = document.getElementById("btn");
 btn.addEventListener(
    'click',
    getColor
 )

 getColor()