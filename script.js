// Question 1

var outOfstock = true;
if(outOfstock === true){
    console.log("Out of stock");
}else{
    console.log("In stock");
}

// Question 2
// Create a for loop that counts from 15 to 25. Console log the value of the counter
// variable inside the loop only if it's equal to 17 or 20.

for (let i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i)
    }
}

// Question 3

var h2 = document.querySelector('h2');
var ul = document.querySelector('ul');
var games = [{
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];
var text = "";
for (i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5) {
        text += "<li>" + games[i].title + ":" + games[i].rating + "</li>" + "<br>";
    }
}
ul.innerHTML = text;


//  Question 4

function whatIDontlike(dontlike) {
    if (typeof dontlike === 'string') {
        console.log("I don't like" + dontlike);

    } else {
        console.log('Please send in a string');

    }
}
whatIDontlike('Giraffes');


// Question 5
// Create a function that accepts two arguments.

// Inside the function, try to convert the arguments to numbers.

function subtraccionFuc(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        console.log('Invalid argument(s)');
    } else {
        console.log(a - b);
        return a - b;
    }
}

subtraccionFuc(10, 5);


// ... Question 6 ...

var h1 = document.querySelector('h1');
var ul = document.querySelector('ul');
var btn = document.querySelector('button');
var title = document.querySelector('title');
var body = document.querySelector('body');
var li = document.querySelector('li');
btn.addEventListener('click', function () {
    title.innerHTML = "Updated title";
    body.style.backgroundColor = 'yellow';
    h1.style.color = 'green';
    h1.style.fontFamily = 'impact';
    h1.innerHTML = "<a href='#'>" + "Programming Fundations Course Assigament" + "</a>";
    ul.style.listStyle = "none";
    ul.style.padding = "0px";
});

// Question 7
// Select the button with the class price.

var button = document.querySelector('.btn');
var total = document.getElementById('#total');
button.addEventListener('click', function (){

    var istotalprice = [15.6, 28.3, 0, 89.99];
    var sum = istotalprice.reduce((total, n) => total + n, 0);
    console.log(sum)
});

