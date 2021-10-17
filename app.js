// imports express and saves in variabel
const express = require("express");
// instatiates express
const app = express();
// siger at de DTO'er vi bruger er json
app.use(express.json());

app.use(express.static(__dirname + '/public'));

/* NAVBAR LINKS */

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
});

app.get("/:language/portfolio", (req, res) => {
    const language = req.params.language;
    language === "da" || language === "en"
        ? res.sendFile(__dirname + `/public/html/${language}/portfolio.html`)
        : res.sendStatus(404);
});

/** COURSES LINKS */
app.get("/:language/courses/nodejs", (req, res) => {
    const language = req.params.language;
    language === "da" || language === "en"
        ? res.sendFile(__dirname + `/public/html/${language}/courses/node-js.html`)
        : res.sendStatus(404);
});











app.listen(8080, (error) => {
    error ? console.log("Server could not start up:", error) : console.log("Starting server on port", 8080)
});

