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
    document.body.style.backgroundImage = "url('./img/cabin.jpg')"

    text.textContent = "I en liten stuga djupt inne i skogen bor Stella. En längtan som alltid funnits hos Stella är att ta sig ut i världen och se vad som finns där. Men då Stella bara ett äpple hög är det en stor risk att bege sig ut i världen. Men Stella har bestämt sig. Nu ska det ske. Frågan är vart Stella ska börja.";

    button1.textContent = "Skogen";
    button1.onclick = forestScene;

    button2.textContent = "Staden";
    button2.onclick = cityScene;
}

/**En förgrening till skogssenen med tillhörande element, bilder, text och knappar för fortsatt val framåt*/
function forestScene () {
    document.body.style.backgroundImage = "url('./img/forest.jpg')"

    text.textContent = "Stella börjar tryggt. Nära sitt hem och allt hon känner. Trevande börjar Stella gå mot okända vägar, ut mot något nytt, något spännande och kanske något helt underbart. Stella har inte hunnit längt när Dim och Sum hoppar fram bakom ett träd. Dim och Sum frågar om de kan följa med Stella på sin färd mot det okända?";

    button1.textContent = "Ja!";
    button1.onclick = forestSceneOne;

    button2.textContent = "Nej";
    button2.onclick = forestSceneTwo;
}

/** Fortsättning på skogsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneOne (){
    document.body.style.backgroundImage = "url('./img/castle.jpg')"

    text.textContent = "Dim och Sum följer efter Stella för att upptäcka det okända och efter en stund möts de av ett stort slott. Törs de gå in?";

    button1.textContent = "Ja";
    button1.onclick = forestSceneThree;

    button2.textContent = "Nej";
    button2.onclick = forestSceneFour;
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneTwo () {
    document.body.style.backgroundImage = "url('./img/forset.jpg')"

    text.textContent = "Stella orkar inte ha två virriga filurer efter sig och bestämmer sig för att vänligt säga ”Inte den här gången men kanske nästa gång”. Dim och Sum blir besvikna men glömmer helt bort sin fråga när de ser en fjäril flyga förbi. Bra tänker Stella, nu kan jag fortsätta i lugn och ro.";

    button1.textContent =">>";
    button1.onclick = oceanSceneStorm;

    button2.classList.add("hidden");
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneTwo () {
    document.body.style.backgroundImage = "url('./img/darkforest.jpg')"

    text.textContent = "Stella har gått länge nu och det börjar bli mörkt. Stella ångrar sig att inte Dim och Sum följde med. För sent att vara efterklok. Det är bara att bita ihop. Men mitt i tankarna ser Stella ett sken i mörkret. Ska jag våga gå dit tänker Stella. Det börjar ju trotts allt bli mörkt och jag är både hungrig och trött. Men Stella kunde inte ana vad som skulle ske när hon knackade på… ";

    button1.textContent =">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneThree () {
    document.body.style.backgroundImage = "url('./img/castle.jpg')"

    text.textContent = "Inne i det stora slottet är det tyst och mörkt. Lite kusligt är det. Stella hör något som knarrar och säger till Dim och Sum att vara tysta men ingen svarar. Stella vänder sig om för att upptäcka att hon är helt ensam trots att knarrandet fortsätter…";

    button1.textContent =">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneFour () {
    document.body.style.backgroundImage = "url('./img/darkforest.jpg')"

    text.textContent = "Slottet ser alldeles för otäckt ut. Stella, Dim och Sum tittar på varandra och bestämmer sig för att gå vidare. Efter vad som känns som flera timmar hittar de en inbjudande glänta där de tänkt övernatta. Mörkret faller och de lägger sig till rätta och somnar snabbt. Under natten händer det märkliga saker men vad som händer får Stella, Dim och Sum reda på där de vaknar…";

    button1.textContent =">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}


/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function forestSceneTwo () {
    document.body.style.backgroundImage = "url('./img/darkforest.jpg')"

    text.textContent = "Stella har gått länge nu och det börjar bli mörkt. Stella ångrar sig att inte Dim och Sum följde med. För sent att vara efterklok. Det är bara att bita ihop. Men mitt i tankarna ser Stella ett sken i mörkret. Ska jag våga gå dit tänker Stella. Det börjar ju trotts allt bli mörkt och jag är både hungrig och trött. Men Stella kunde inte ana vad som skulle ske när hon knackade på…  ";

    button1.textContent =">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

/** En förgrening till havsscen med bild, text och knappar för fortsatt val framåt*/
function cityScene () {
    document.body.style.backgroundImage = "url('./img/city.jpg')"

    text.textContent = "Efter veckor av letande hittar Stella Staden. Allt är stort, det går snabbt och det är ganska smutsigt. Innan Stella avfördar Staden helt måste Stella ge det en chans. Snabbt möter Stella råttan. En trevlig figur som erbjuder sig att visa Stella runt i Staden.";

    button1.textContent ="Ja";
    button1.onclick = citySceneOne;

    button2.textContent = "Nej"
    button2.onclick = citySceneTwo;
}

/** En fortsättning till havsscen med bild, text och knappar för fortsatt val framåt*/
function citySceneOne () {
    document.body.style.backgroundImage = "url('./img/city.jpg')"

    text.textContent = "Så vänligt, tänker Stella. Råttan drar med sig Stella och visar sina bästa delar av staden. Men de får se sig för. Människorna är många och då Stella bara är ett äpple högt är det extra viktigt att se sig för. Mitt i sina tankar ser Stella inte råttan längre. Vad händer nu, ensam i Staden. Ska Stella leta efter råttan eller ska Stella fortsätta på egen hand?";

    button1.textContent ="Leta";
    button1.onclick = citySceneThree;

    button2.textContent = "Fortsätta"
    button2.onclick = citySceneFour;
}

/** Fortsättning på havsscen med bild, text och knappar för fortsatt val framåt*/
function citySceneTwo () {
    document.body.style.backgroundImage = "url('./img/city.jpg')"

    text.textContent = "Även om råttan ser snäll ut vill Stella klara sig själv och tackar för erbjudandet men går vidare på egen hand. Med stor försiktighet går Stella ut i staden för att mötas av hus högre än berg. Stella blir helt vimmelkantig av alla intryck och måste sätta sig en stund. Stella märker att det börjar röra på sig och inser för sent att Stella har satt sig på en sparkcykel och farten är nu för hög för att Stella ska våga hoppa av…";

    button1.textContent = ">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

/** Fortsättning på havsscen med bild, text och knappar för fortsatt val framåt*/
function citySceneThree () {
    document.body.style.backgroundImage = "url('./img/city.jpg')"

    text.textContent = "Stella letar och letar i vimlet efter råttan och till slut står råttan där några meter bort. Åh vad skönt tänker Stella och skyndar sig fram bara för att upptäcka att råttan återigen är borta…";

    button1.textContent = ">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}

/** Fortsättning på havsscen med bild, text och knapp, en knapp är gömd, för fortsatt val framåt*/
function citySceneFour () {
    document.body.style.backgroundImage = "url('./img/city.jpg')"

    text.textContent = "Stella fortsätter själv, hur illa kan det gå? Stella känner en doft av stekos och blir påmind att det var ett tag sedan frukost. Lunch har redan passerat och det är redan middag. Stella följer doften av stekos och hamnar framför en korvkiosk. Nu måste bara Stella komma på ett sätt att få tag i mat…";

    button1.textContent = ">>";
    button1.onclick = endScene;

    button2.classList.add("hidden");
}
/**Slutscen där användaren får val att spela spelet igen */
function endScene () {
    document.body.style.backgroundImage = "url('./img/end.jpg')"

    text.textContent ="Här tog historien slut. Kanke den tar en annan vändning nästa gång Stella tar sig ut på äventyr. Spela igen så får du se.";

    button1.textContent = "Spela Igen";
    button1.onclick = newPage;

    button2.classList.add("hidden");

}/**den här funktionen laddar om sidan och spelet börjar om på nytt */
function newPage (){
    location.reload();
}