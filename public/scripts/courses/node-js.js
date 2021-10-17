const mainContentWrapper = document.getElementById('main-content-wrapper');

//! functions 
function hideElement(elementToHide) {
    if(elementToHide.style.display === "none") {
        elementToHide.style.display = "block";
    } else {
        elementToHide.style.display = "none";
    }
}

/*adds 3 elements to each other
adds el1 to el2 --> then el2 to el3
*/
function append3Elements(el1, el2, el3) {
    el2.appendChild(el1);
    el3.appendChild(el2);
}

function createSection(wrapper, headline, typeOfSection) {
    // headline
    const divHeadline = typeOfSection(headline); // headline
    wrapper.appendChild(divHeadline);
    // content 
    const content = document.createElement('div');
    divHeadline.addEventListener('click', function() {
        hideElement(content)}
    );

    return content;
}


//¤ terminal section
const terminalWrapper = createContentGroup();
const terminalContent = createSection(terminalWrapper, 'Terminal', createHeadline);

// adds content to 
terminalContent.appendChild(createText(
    'Vi har igennem kurset brugt terminalen til at navigere mellem mapper,' + 
    ' til at uploade til og hente projekter fra Github vha. git-kommandoer og ' + 
    'til at starte vores servere og køre vores kode via node.js og nodemon'));



//      & Terminal kommandoer subsection
const terminalCommandsWrapper = createContentGroup();
const terminalCommandsContent = createSection(terminalCommandsWrapper, 'Terminal kommandoer', createSubheadline);

terminalCommandsContent.appendChild(createText(
    'I terminal-kommando-eksemplerne som jeg skriver her på siden, ' + 
    'vil firkantede parenteser [] signalere, når der er noget dynamisk som skrives. <br>' +
    'Fx. vil \'cd [mappenavn]\' betyde at mappenavn ikke er et keyword,' + 
    'men et dynamisk mappenavn som skal skrive i kommandoen')
);

//          + SUBSUB1
terminalCommandsContent.appendChild(createSubSubheadline('For at få stien til den mappe man står i: '));
terminalCommandsContent.appendChild(createTerminalSnippet('pwd'));

terminalCommandsContent.appendChild(createSubSubheadline('For at se hvad der ligger i den mappe man står i: '));
terminalCommandsContent.appendChild(createTerminalSnippet('ls'));

terminalCommandsContent.appendChild(createSubSubheadline('For at gå videre ind i en mappe: '));
terminalCommandsContent.appendChild(createTerminalSnippet('cd [mappenavn]'));

terminalCommandsContent.appendChild(createSubSubheadline('For at gå én mappe tilbage: '));
terminalCommandsContent.appendChild(createTerminalSnippet('cd ..'));

terminalCommandsContent.appendChild(createSubSubheadline('For at oprette en ny mappe: '));
terminalCommandsContent.appendChild(createTerminalSnippet('mkdir [nytMappenavn]'));

terminalCommandsContent.appendChild(createSubSubheadline('For at køre .js-fil: '));
terminalCommandsContent.appendChild(createTerminalSnippet('node [filnavn.js]'));

terminalCommandsContent.appendChild(createSubSubheadline('For at køre .js-fil med nodemon: '));
terminalCommandsContent.appendChild(createTerminalSnippet('nodemon.cmd [filnavn.js]'));

terminalCommandsContent.appendChild(createSubSubheadline('For at stoppe serveren igen: '));
terminalCommandsContent.appendChild(createTerminalSnippet('[ctrl + c]'));

// TODO add more subsections here

//! terminal subsection
// adds subContent to subWrapper to sectionContent
append3Elements(terminalCommandsContent, terminalCommandsWrapper, terminalContent);

//! terminal section
// adds sectionContent to sectionWrapper to mainContentWrapper
append3Elements(terminalContent, terminalWrapper, mainContentWrapper);



//¤ Git kommandoer
const gitWrapper = createContentGroup();
const gitContent = createSection(gitWrapper, 'Git', createHeadline);


//& upload til git
const gitUploadWrapper = createContentGroup();
const gitUploadContent = createSection(gitUploadWrapper, 'Upload til github via terminal', createSubheadline);


gitUploadContent.appendChild(createSubSubheadline('1. Opret repository på github'));
gitUploadContent.appendChild(createText('Afkryds \'Add a README file\'' + 
'og \'Add .gitignore\' og vælg node.js template'));
gitUploadContent.appendChild(createSubSubheadline('2. Hent repository lokalt'));

gitUploadContent.appendChild(createText('Gå først ind i den mappe hvor du vil hente det nye repo ned, vha.:' ));
gitUploadContent.appendChild(createTerminalSnippet('cd [mappenavn]'));
gitUploadContent.appendChild(createText('Kopier dernæst linket til det nye repo, og brug det i følgende kommando:' ));
gitUploadContent.appendChild(createTerminalSnippet('git clone [linkTilRepo]'));

gitUploadContent.appendChild(createSubSubheadline('3. Pull fra repo'));
gitUploadContent.appendChild(createTerminalSnippet('git pull')); 

gitUploadContent.appendChild(createSubSubheadline('4. Tilføj filer til repo'));
gitUploadContent.appendChild(createText('Tilføj enten en enkelt fil ad gangen via: ' ));
gitUploadContent.appendChild(createTerminalSnippet('git add [filnavn.type]'));
gitUploadContent.appendChild(createText('Eller tilføj alle filer via: ' ));
gitUploadContent.appendChild(createTerminalSnippet('git add -A'));

gitUploadContent.appendChild(createSubSubheadline('5. Commit filer'));
gitUploadContent.appendChild(createTerminalSnippet('git commit -m [commitBesked]'));

gitUploadContent.appendChild(createSubSubheadline('6. Push committede filer'));
gitUploadContent.appendChild(createTerminalSnippet('git push'));


//! git upload subsection
// adds subContent to subWrapper to sectionContent
append3Elements(gitUploadContent, gitUploadWrapper, gitContent);

//! git section
// adds sectionContent to sectionWrapper to mainContentWrapper
append3Elements(gitContent, gitWrapper, mainContentWrapper);


//¤ Javascript
const javascriptWrapper = createContentGroup();
const javascriptContent = createSection(javascriptWrapper, 'Javascript', createHeadline);


//&     datatyper
const datatypesWrapper = createContentGroup();
const datatypesContent = createSection(datatypesWrapper, 'Datatyper', createSubheadline);

datatypesContent.appendChild(createText('De forskellige datatyper som findes i javascript er: '));

// TODO add more types
datatypesContent.appendChild(createSubSubheadline('Boolean'));
datatypesContent.appendChild(createSubSubheadline('Number'));

/* 
Primitive values (immutable datum represented directly at the lowest level of the language)
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type
Objects (collections of properties)

*/
//+ 

//+     strings
datatypesContent.appendChild(createSubSubheadline('String'));
datatypesContent.appendChild(createText('Man kan definere en string på 3 forskellige måder. Ved:  <br>'));
datatypesContent.appendChild(createText('1. Gåseøjne'));
datatypesContent.appendChild(createCodesnippet('const s1 = "String med gåseøjne";'));

datatypesContent.appendChild(createText('2. Apostrof'));
datatypesContent.appendChild(createCodesnippet('const s1 = \'String med apostrof\';'));

datatypesContent.appendChild(createText('3. Back tick'));
datatypesContent.appendChild(createCodesnippet('const s1 = `String med back-ticks`;'));

datatypesContent.appendChild(createText('Uanset hvilken måde man vælger at definere en string på, ' + 
'skal man, hvis man vil skrive det tegn man bruger til at definere den med, skrive en escape character for det tegn. <br>' +
'Dvs. hvis man har defineret en string med gåseøjne skal man skrive \\\" for at skrive et gåseøje i teksten.'));

datatypesContent.appendChild(createSubSubheadline('Objects'));
datatypesContent.appendChild(createText('Der findes mange forskellige inbyggede typer objekter i javascript <br>' + 
'som fx arrays, maps, lister. <br>Et normalt Javascript objekt består af key-value par. Det har følgende syntaks: '));
datatypesContent.appendChild(createCodesnippet('const me = {<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;name: "Vibe", <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;age: 26, <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;likesNode: true <br>' +
'};'));

//+ undefined og null
datatypesContent.appendChild(createSubSubheadline('Undefined og null'));
datatypesContent.appendChild(createText('I javascript kan en varibale også have værdien undefined eller null. <br>' + 
'En variabel er undefined, hvis den er blevet deklareret men ikke har fået tildelt en værdi endnu. Fx:'));
datatypesContent.appendChild(createCodesnippet('let a;<br>console.log(a);', '// vil printe: undefined'));
datatypesContent.appendChild(createText('En variabel er null, hvis der skulle have været en object-værdi, men der ikke er det. ' + 
'Man skal altså selv sætte noget til null for at det bliver det. Fx:'));
datatypesContent.appendChild(createCodesnippet('function createPerson(nameParam, ageParam) {<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; if(nameParam && ageParam) { <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return { name: nameParam, age: ageParam }; <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; } else { <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return null;<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; }<br><br>' +
'}<br>' +
'createPerson();', '// returnerer null;'));

//& Type inference
const typeInferenceWrapper = createContentGroup();
const typeInferenceContent = createSection(typeInferenceWrapper, 'Type inference', createSubheadline);

typeInferenceContent.appendChild(createText('Type inference sker når javascript prøver at lægge to forskellige datatypder sammen<br>' +
    'I dette tilfælde prøver javascript at gætte sig frem til hvilken type der kommer ud af det, og det kan der komme lidt uforventelige resultater ud af.' +
    'Når vi console.log()\'er noget, så er det typisk for at vi vil se en eller anden værdi. ' +
    'Derfor er det upraktisk hvis type inference roder med resultatet vi får printet ud. ' +
    'Dette er grunden til at vi når vi printer ud, så er det smart at lave en template literal, som kan indeholde variabler.'));

typeInferenceContent.appendChild(createSubSubheadline('Eksempel: template literal'));
typeInferenceContent.appendChild(createCodesnippet(
    'const a = 5; <br>' +
    'const isTrue = true; <br>' +
    'console.log(a + isTrue);', '// vil printe: 6'
));
typeInferenceContent.appendChild(createText('I ovenstående kode vil der blive printet \'6\' ud, da boolean\'en isTrue vil blive evalueret til 1. <br>' +
'Hvis jeg printer værdierne ud fordi jeg vil se hvad de indholder individuelt, får jeg IKKE det ønskede resultat pga. type inference. <br>' +
'Jeg kan rette op på det ved at bruge en template literal i min console.log(): '
));

typeInferenceContent.appendChild(createCodesnippet(
    'const a = 5; <br>' +
    'const isTrue = true; <br>' +
    'console.log(`${a} ${isTrue}`);', '// vil printe: 5 true'
));


//& funktioner
const functionsWrapper = createContentGroup();
const functionsContent = createSection(functionsWrapper, 'Funktioner', createSubheadline);

functionsContent.appendChild(createText('I javascript er syntaxen for en funktion således ' + 
'(hvor firkantede paranteser signalerer at noget ikke er påkrævet):'));
functionsContent.appendChild(createCodesnippet(
    'function functionName([params]) { <br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    '[return someValue;] <br>' +
    '}'));

functionsContent.appendChild(createText('Et eksempel på en funktion kunne altså være:'));
functionsContent.appendChild(createCodesnippet(
    'function addCatToList(cat) { <br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'catList.add(cat); <br>' +
    '}'));

//+ lambda udtryk
const catList =  'let cats = [{id: 1, name: "Cleo"}, <br> ' + 
'&nbsp;&nbsp;&nbsp;&nbsp;' +
'{id: 2, name: "Billy"}, <br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;' +
'{id: 3, name: "Kiske"}, <br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;' +
'{id: 4, name: "Miske"}]; <br><br>';

functionsContent.appendChild(createSubSubheadline('Lambdaudtryk'));
functionsContent.appendChild(createText(
    'Et lambdaudtryk er et nemt og hurtigt alternativ til at skrive en funktion. ' +
    'Et lambdaudtryk er altså en måde at lave en anonymous function på (dvs. en funktion uden navn). ' +
    'Et eksempel på hvordan man kan bruge et lambdaudtryk ses inde i filter her:'
    )
);

functionsContent.appendChild(createCodesnippet(
    catList +
    'console.log(cats.filter(cat => cat.id === id)[0]});'));

functionsContent.appendChild(createText(
    'I dette eksempel bruges lambda-udtrykket til at sætte en condition op i for filter-funktionen. ' +
    'Hvis dette skulle skrives uden lambda ville det se sådan ud:'
    )
);

functionsContent.appendChild(createCodesnippet(
    catList +
    'console.log(cats.filter(<br>' + 
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'function(cat) { <br> ' + 
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'return cat.id === id;<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    '})[0]); <br>'));

//+ Gem i variabel
functionsContent.appendChild(createSubSubheadline('Gem i variabel'));
functionsContent.appendChild(createText(
    'I javascript kan man gemme en funktion i en variabel, som så referer til den.' +
    'En af de helt store fordele ved det, er at man dermed kan passe en funktion som parameter til en anden funktion.'
    ));
// TODO illustrer dette

// java udfører ting asynkront
//  - det der loop med 1-second vent - venter ikke 1.sek med at udføre næste iteration af loopet, men udfører alle iterationer

// hvordan man laver en funktion i javascript
//      kan ikke overloades
// lambda-udtryk
// callback funktioner
//      == en funktion som kalder en anden funktion
// JSON
// Javascript objects

// TODO lav subsection omkring let, const, var

//! git upload subsection
// adds subContent to subWrapper to sectionContent
append3Elements(datatypesContent, datatypesWrapper, javascriptContent);
append3Elements(typeInferenceContent, typeInferenceWrapper, javascriptContent);
append3Elements(functionsContent, functionsWrapper, javascriptContent);

//! git section
// adds sectionContent to sectionWrapper to mainContentWrapper
append3Elements(javascriptContent, javascriptWrapper, mainContentWrapper);




//¤ Servers
const serversWrapper = createContentGroup();
const serversContent = createSection(serversWrapper, 'Servers', createHeadline);

serversContent.appendChild(createText('Node er en måde at laver server-environment til javascript på.<br>' +
'Client-Server er forholdet mellem clienten (som er browseren eller fx postman), som sender http-requests ' +
'og fx beder om en bestemt resource og serveren, som besvarer requesten med et http-response.'));

//& Express
const expressWrapper = createContentGroup();
const expressContent = createSection(expressWrapper, 'Express', createSubheadline);

expressContent.appendChild(createText('Express er et bibliotek/webframework til node, som vi bruger til at lave servere,' + 
' som udstiller api\'er. <br> Det kan installeres på flere måder.<br>' + 
'Først skal man dog altid oprette en package.json fil, hvori der som det mindste står:' )); 
expressContent.appendChild(createCodesnippet('{}'));

expressContent.appendChild(createSubSubheadline('Installer via terminal'));
expressContent.appendChild(createText('Den ene måde at installere express på ' + 
'er via terminalen. Brug først \'cd [mappeNavn]\'-kommandoen for at komme hen til den mappe ' + 
'hvor package.json-filen ligger. Indtaste derefter følgende kommando i terminalen: '));
expressContent.appendChild(createTerminalSnippet('npm install express'));

expressContent.appendChild(createSubSubheadline('Installer via tilføjelse af dependency i package.json'));
expressContent.appendChild(createText('Man kan også installere express ved at tilføje dependencien i package.json-filen manuelt:'));
expressContent.appendChild(createCodesnippet('{<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp; "dependencies": {<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "express": "4.17.1"<br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; }<br>' +
'}'));

expressContent.appendChild(createText('Begge metoder vil instalere node-modules, hvor filerne for express-biblioteket vil ligge. ' +
'Man sletter altså express fra projektet, hvis man slette node-modules mappen.'));

expressContent.appendChild(createText('Når man definerer et endpoint i express, skal det starte med /. Fx:'));
expressContent.appendChild(createCodesnippet('app.get("/myPage");'));

//& hvordan opretter man en server
const createServerWrapper = createContentGroup();
const createServerContent = createSection(createServerWrapper, 'Hvordan opretter man en server', createSubheadline);

//+ installer express
createServerContent.appendChild(createSubSubheadline('Installer express'));
createServerContent.appendChild(createText('For at oprette en ny server, skal man først installere express. ' + 
'Dette gøres ved først at følge vejledningen under forrige afsnit \'Express\'. <br>' +
'Tjek at express er installeret korrekt i terminalen via kommandoen:'));
createServerContent.appendChild(createTerminalSnippet('npm express --version'));
createServerContent.appendChild(createText('Dette vil udskrive den installerede version af express.'));

//+ opret app.js
createServerContent.appendChild(createSubSubheadline('Opret app.js'));
createServerContent.appendChild(createText('Derefter skal man oprette filen, som starter serveren og hvor man laver sine endpoints.<br>' + 
'Det er konventionen at denne kaldes: app.js')); 
createServerContent.appendChild(createText('I denne fil skal man: '));

//+ importere express
createServerContent.appendChild(createSubSubheadline('Importere express'));
createServerContent.appendChild(createCodesnippet('const express = require("express");'));

//+ instantiere express
createServerContent.appendChild(createSubSubheadline('... og instantiere express: ' ));
createServerContent.appendChild(createCodesnippet('const app = express();'));

//+ opstarte server
createServerContent.appendChild(createSubSubheadline('... og starte serveren op på en bestemt port. Fx 8080:'));
createServerContent.appendChild(createCodesnippet('app.listen(8080);'));

createServerContent.appendChild(createText('Man kan også tilføje at serveren skriver ud i terminalen når den starter op ' +
'samt hvis der var en fejl og den ikke starter op: '));
createServerContent.appendChild(createCodesnippet('app.listen(8080, (error) => { <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; ' + 
'error ? console.log("Server could not start up:", error) <br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: console.log("Starting server on port", 8080)<br>' +
'});'));

createServerContent.appendChild(createText('Vi kan derefter definere, at de DTO\'er, som vi vil tage imod og sende retur, skal være JSON: '));
createServerContent.appendChild(createCodesnippet('app.use(express.json());'));

createServerContent.appendChild(createText('Samlet ser app.js nu sådan ud: '));
createServerContent.appendChild(createCodesnippet('const express = require("express");<br>' +
'const app = express(); <br>' +
'app.use(express.json()); <br><br>' +
'app.listen(8080, (error) => { <br>' +
'&nbsp;&nbsp;&nbsp;&nbsp; ' + 
'error ? console.log("Server could not start up:", error) <br>' + 
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: console.log("Starting server on port", 8080)<br>' +
'});'));

//& HTTP-methods
const httpWrapper = createContentGroup();
const httpContent = createSection(httpWrapper, 'HTTP-metoder', createSubheadline);

httpContent.appendChild(createText('Her findes et overblik over de standard http-metoder: <br>' +
'GET: henter et eller flere elementer <br>' +
'POST: opretter et eller flere elementer <br>' +
'PATCH: opdaterer et element delvist <br>' +
'PUT: sender et nyt objekt, som erstatter et HELT objekt <br>' +
'DELETE: sletter et element'));

//& REST dok
const restWrapper = createContentGroup();
const restContent = createSection(restWrapper, 'REST', createSubheadline);

restContent.appendChild(createText('Når man laver en RESTful webservice,' + 
' skal man følge nogle bestemte konventioner for hvordan endpointet skal se ud. ' +
'Derudover sender REST-API\'er data tilbage i json-format.'));

// <img src="../../images/REST-syntax.PNG" alt="Rest syntax">
const img = document.createElement('img');
img.src = "../../images/REST-syntax.PNG";
img.alt = "Rest syntax";
img.classList.add('rest-syntax');



restContent.appendChild(img);

//& implementing endpoints
const endpointsWrapper = createContentGroup();
const endpointsContent = createSection(endpointsWrapper, 'Implementering af endpoints', createSubheadline);

endpointsContent.appendChild(createText('Jeg vil nu vise hvordan man implementerer forskellige endpoints med express:'));



//+ GET
endpointsContent.appendChild(createSubSubheadline('GET-request - alle'));
endpointsContent.appendChild(createCodesnippet(
    catList+
    'app.get("/cats", (req, res) => { <br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'res.send({cats: cats}); <br>' +
    '});'));

endpointsContent.appendChild(createSubSubheadline('GET-request - efter id'));
endpointsContent.appendChild(createCodesnippet(
    catList +
    'app.get("/cats/:id", (req, res) => { <br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'res.send({cats: cats.filter(cat => cat.id === id)[0]}); <br>' +
    '});'));

/* // afprøvningskode
let cats = [{id: 1, name: "Cleo"}, 
    {id: 2, name: "Billy"},
    {id: 3, name: "Kiske"},
    {id: 4, name: "Miske"}];

let id = 1;
console.log(cats.filter(cat => cat.id === id)[0]);

console.log('hej', cats.filter(
    function(cat) { 
        return cat.id === id;
    }
)[0]);


let AUTO_INCREMENT = 4;

const catsToAdd = [{name: "Mivmiv"}, {name: "Fede"}];

catsToAdd.forEach(cat => {
    cat.id = ++AUTO_INCREMENT;
    cats.push(cat);
});

console.log(cats);
*/


//+ POST
endpointsContent.appendChild(createSubSubheadline('POST-request'));
endpointsContent.appendChild(createCodesnippet(
    'let AUTO_INCREMENT = 4; <br><br>' + catList +
    'app.post("/cats", (req, res) => { <br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'const catsToAdd = req.body; <br><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'catsToAdd.forEach(cat => {<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    'cat.id == ++AUTO_INCREMENT;<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    'cats.push(cat);<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    '});<br><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;' +
    'res.send(catsToAdd);<br>' +
    '});'));

// TODO put-req
/* TODO put-req
endpointsContent.appendChild(createSubSubheadline('PUT-request'));
endpointsContent.appendChild(createCodesnippet(
        'let AUTO_INCREMENT = 4; <br><br>' +
        'let cats = [{id: 1, name: "Cleo"}, <br> ' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;' +
        '{id: 2, name: "Billy"}, <br>' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;' +
        '{id: 3, name: "Kiske"}, <br>' + 
        '&nbsp;&nbsp;&nbsp;&nbsp;' +
        '{id: 4, name: "Miske"}]; <br><br>' +
        
        'app.put("/cats/:id", (req, res) => { <br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;' +
        'const catToReplace = req.body; <br><br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;' +

        'cats.forEach(cat => {<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        'cat.id == ++AUTO_INCREMENT;<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        'cats.push(cat);<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;' +
        '});<br><br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;' +

        'res.send(catsToAdd);<br>' +
        '});'));
*/

//! servers subsections
// adds subContent to subWrapper to sectionContent
append3Elements(expressContent, expressWrapper, serversContent);
append3Elements(createServerContent, createServerWrapper, serversContent);
append3Elements(httpContent, httpWrapper, serversContent);
append3Elements(restContent, restWrapper, serversContent);
append3Elements(endpointsContent, endpointsWrapper, serversContent);

//! servers section
// adds sectionContent to sectionWrapper to mainContentWrapper
append3Elements(serversContent, serversWrapper, mainContentWrapper);




/*
contentGroup.appendChild(createCodesnippet(
    'function noget(text) {' + 
    '<br> &nbsp;&nbsp;&nbsp;&nbsp;' +
    'const hej = document.createElement(\'div\'); <br>' +
    '}'));

    */



// adds content-group with all the content
//mainContentWrapper.appendChild(contentGroup);
// mainContentWrapper.insertBefore(createLargeBorder(), document.getElementById('contact'));



