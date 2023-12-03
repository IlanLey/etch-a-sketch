//Created a Selector for the Grid
const mainGridContainer = document.getElementById("mainGridContainer");
    //Checking Grid
    console.log(mainGridContainer);

//Loop Over 16x16 Times, Creating a new Element that is Appended to the Main Grid Container (Grid)
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let gridSquare = document.createElement("div");
        //Checking Grid Squares Inside Grid
        console.log(gridSquare);
    
        //Add a Div Class of gridSquare
        gridSquare.classList.add("gridSquare");

        //Append Child to the Father Node
        mainGridContainer.appendChild(gridSquare);

        //Added a Pixel Effect Whenever Mouse is Hovering Over gridSquare, Generating a Random Color
        gridSquare.addEventListener('mouseover', (event) => {
            event.target.style.filter = 'pixelate(10px)';
            event.target.style.background = randomColor();
        });

        //Restores gridSquare to it's Original Design
        gridSquare.addEventListener('mouseout', (event) => {
            event.target.style.filter = "";
            event.target.style.background = "";
        });
    }
}

//When Hovering Over Grid, This Will Generate a Random Color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Select the Button Element
const mainGridButton = document.getElementById("mainGridButton");
let userPrompt;

//Add an Event Listener that will prompt a number
mainGridButton.addEventListener('click', () => {
    checkUserPrompt();
});

//Asking User for a Number of Grid Squares
function checkUserPrompt() {
    //This check for numbers below 0 or over 100
    do {
        userPrompt = prompt("Please Enter Number:");
    } while (userPrompt > 100 || userPrompt <= 0);
}