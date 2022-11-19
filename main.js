window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLParagraphElement} ändrar texten i varje scen */
let text;
/** @type {HTMLButtonElement} ger användaren valmöjlighet i form av en knapp */
let button1;
/** @type {HTMLButtonElement} ger användaren valmöjlighet i form av en knapp */
let button2;

/**
 * den här funktionen startar spelet
 * hämtar knappar och text till varje scen
 */
function main (){
    allElements();
    startScene();
}

/**Innehåller alla element till varje scen */
function allElements(){
    text = document.getElementById("text");
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
} 

/** första scenen i spelet med tillhörande element, bilder, text och knappar */
function startScene () {
    document.body.style.backgroundImage = "url('./img/house.jpg')"

    text.textContent = "Hej! Du ska ut på äventyr i skogen eller till havet. Vad väljer du?";

    button1.textContent = "Skogen";
    button1.onclick = forestScene;

    button2.textContent = "Havet";
    button2.onclick = oceanScene;
}

/**En förgrening till skogssenen med tillhörande element, bilder, text och knappar för fortsatt val framåt*/
function forestScene () {
    document.body.style.backgroundImage = "url('./img/forest.jpg')"

    text.textContent = "I skogen hittar du en koja bakom berg och sly. Vill du gå in?";

    button1.textContent = "Ja!";
    button1.onclick = forestSceneOne;

    button2.textContent = "Nej det verkar läskigt. Låt oss gå till havet istället";
    button2.onclick = oceanScene;
}
/** Fortsättning på skogsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneOne (){
    document.body.style.backgroundImage = "url('./img/forest.jpg')"

    text.textContent = "HJÄLP! SPRING! Här bodde visst ett troll som inte var så sugen på besök. Vart vill du fly?";

    button1.textContent = "Till Havet";
    button1.onclick = oceanScene;

    button2.textContent = "Hem!";
    button2.onclick = endScene;
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function oceanScene () {
    document.body.style.backgroundImage = "url('./img/ocean.jpg')"

    text.textContent = "Åh vilka friska vindar här är, en sjöman älskar havets våg. Vad sägs om att ta båten och fiska?";

    button1.textContent ="Nja, det var lite för friska vindar. Jag går hem";
    button1.onclick = endScene;

    button2.textContent = "Låt oss se om vi får napp!"
    button2.onclick = oceanSceneOne;
}

/** Fortsättning på havsscen med bild, text och knappar för fortsatt val framåt*/
function oceanSceneOne () {
    document.body.style.backgroundImage = "url('./img/ocean.jpg')"

    text.textContent = "En fisk på kroken, hurra! Vad vill du göra nu, gå hem eller fortsätta fiska?";

    button1.textContent = "Gå Hem";
    button1.onclick = endScene;

    button2.textContent = "Fortsätta fiska";
    button2.onclick = oceanSceneTwo;
}

/** Fortsättning på havsscen med bild, text och knappar för fortsatt val framåt*/
function oceanSceneTwo () {
    document.body.style.backgroundImage = "url('./img/ocean.jpg')"

    text.textContent = "WOW, en fisk till! Vill du fortsätta testa din fiskelycka eller känner du dig redo att gå hem?";

    button1.textContent = "Gå hem";
    button1.onclick = endScene;

    button2.textContent = " Fortsätta Fiska";
    button2.onclick = oceanSceneThree;
}

/** Fortsättning på havsscen med bild, text och knapp, en knapp är gömd, för fortsatt val framåt*/
function oceanSceneThree () {
    document.body.style.backgroundImage = "url('./img/ocean.jpg')"

    text.textContent = "Tyvärr så fick du ingen mer fisk på kroken. Dags att gå hem.";

    button1.textContent = "Gå Hem";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}
/**Slutscen där användaren får val att spela spelet igen */
function endScene () {
    document.body.style.backgroundImage = "url('./img/house.jpg')"

    text.textContent ="Nu är du hemma och kan tänka tillbaka på ditt äventyr";

    button1.textContent = "Spela Igen";
    button1.onclick = newPage;

    button2.classList.add("hidden");

}/**den här funktionen laddar om sidan och spelet börjar om på nytt */
function newPage (){
    location.reload();
}