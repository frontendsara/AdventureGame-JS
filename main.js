window.addEventListener("DOMContentLoaded", main);

/**
 * den här funktionen startar spelet
 */
function main (){
    startScene();
}

/**
 * den här funktionen hämtar knappar och textfält från HTML
 * 
 * första scenen i spelet
 */
function startScene () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    text.textContent = "Hej! Du ska ut på äventyr i skogen eller till havet. Vad väljer du?";

    button1.textContent = "Skogen";
    button1.onclick = forestScene;

    button2.textContent = "Havet";
    button2.onclick = oceanScene;
}

function forestScene () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('forest.jpg')"

    text.textContent = "I skogen hittar du en koja bakom berg och sly. Vill du gå in?";

    button1.textContent = "Ja!";
    button1.onclick = forestSceneOne;

    button2.textContent = "Nej det verkar läskigt. Låt oss gå till havet istället";
    button2.onclick = oceanScene;
}

function forestSceneOne (){
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('forest.jpg')"

    text.textContent = "HJÄLP! SPRING! Här bodde visst ett troll som inte var så sugen på besök. Vart vill du fly?";

    button1.textContent = "Till Havet";
    button1.onclick = oceanScene;

    button2.textContent = "Hem!";
    button2.onclick = endScene;
}

function oceanScene () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('ocean.jpg')"

    text.textContent = "Åh vilka friska vindar här är, en sjöman älskar havets våg. Vad sägs om att ta båten och fiska?";

    button1.textContent ="Nja, det var lite för friska vindar. Jag går hem";
    button1.onclick = endScene;

    button2.textContent = "Låt oss se om vi får napp!"
    button2.onclick = oceanSceneOne;
}

function oceanSceneOne () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('ocean.jpg')"

    text.textContent = "En fisk på kroken, hurra! Vad vill du göra nu, gå hem eller fortsätta fiska?";

    button1.textContent = "Gå Hem";
    button1.onclick = endScene;

    button2.textContent = "Fortsätta fiska";
    button2.onclick = oceanSceneTwo;
}

function oceanSceneTwo () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('ocean.jpg')"

    text.textContent = "WOW, en fisk till! Vill du fortsätta testa din fiskelycka eller känner du dig redo att gå hem?";

    button1.textContent = "Gå hem";
    button1.onclick = endScene;

    button2.textContent = " Fortsätta Fiska";
    button2.onclick = oceanSceneThree;
}

function oceanSceneThree () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('ocean.jpg')"

    text.textContent = "Tyvärr så fick du ingen mer fisk på kroken. Dags att gå hem.";

    button1.textContent = "Gå Hem";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

function endScene () {
    const text = document.getElementById("text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    document.body.style.backgroundImage = "url('house.jpg')"

    text.textContent ="Nu är du hemma och kan tänka tillbaka på ditt äventyr";

    button1.textContent = "Spela Igen";
    button1.onclick = newPage;

    button2.classList.add("hidden");

}/**den här funktionen laddar om sidan och spelet börjar på nytt */
function newPage (){
    location.reload();
}