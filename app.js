// imports express and saves in variabel
const express = require("express");
// instatiates express
const app = express();
// 
app.use(express.json());

app.use(express.static(__dirname + '/public'));


app.get("/:language", (req, res) => {
    const language = req.params.language;
    language === "da" || language === "en" 
        ? res.sendFile(__dirname + `/public/html/${language}/index.html`) 
        : res.sendStatus(404);
});

app.get("/:language/courses", (req, res) => {
    const language = req.params.language;
    language === "da" || language === "en"
        ? res.sendFile(__dirname + `/public/html/${language}/courses.html`)
        : res.sendStatus(404);
})











app.listen(8080, (error) => {
    error ? console.log("Server could not start up:", error) : console.log("Starting server on port", 8080);;
});