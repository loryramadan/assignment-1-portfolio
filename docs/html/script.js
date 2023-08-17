// burger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// rename docs
const express = require("express");
const app = express();
const port = 3000;
x
app.use(express.static(__dirname + "/docs"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact.html", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/resume.html", (req, res) => {
    res.sendFile(__dirname + "/resume.html");
});

app.listen(port, () => {
    console.log('example app listening at http://localhost:port');
});

