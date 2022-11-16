window.addEventListener("DOMContentLoaded", main);

function main (){
    startScene();
}

function startScene () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    text.textContent = "Hej! Du ska ut på äventyr i skogen eller till havet. Vad väljer du?";

    button1.textContent = "Skogen";
    button1.addEventListener("click", forestScene);

    button2.textContent = "Havet";
    button2.addEventListener("click", oceanScene);
}

