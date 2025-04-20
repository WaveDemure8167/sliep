const seven = [
    "deathofdoom.png",
    "isthatbart.png",
    "sliplovesballs.png",
    "slipreallylovesballs.png",
    "thebadgay.webp",
    "ilikeboys.png",
    "sliplovesboys.png"
];

const randomMessage = [
    "slip likes balls i think",
    "hmmm slip i think likes balls",
    "\"i love balls\" - slip",
    "THE BAD GAY!!!!!!",
    "slip likes boys",
    "i love boys",
    "mwah",
    "skibidi skibidi hawk tuah hawk",
    "spooky scary skibidi",
    "peenar explosion chamber!!!"
]

document.addEventListener("DOMContentLoaded", function() {
    var randomNum = Math.floor(Math.random() * randomMessage.length)

    document.getElementById("Sliep").innerHTML = randomMessage[randomNum]

    const imgContainer = document.getElementById("img");

    for (const key in seven) {
        const filename = seven[key];
        console.log("JSON data:", filename);

        const newImg = document.createElement("img");
        newImg.src = "assets/images/" + filename;
        imgContainer.appendChild(newImg); 
    }
});
