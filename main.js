//create an array for the quotes that will be display (may change to dictionary of words)
let sentences = ["Be kind, for everyone you meet is fighting a harder battle", 
                "We can easily forgive a child that is afraid of the dark; the real tragedy of life is when men are afraid of the light",
                "The price good men pay for indifference to public affairs is to be ruled by evil men",
                "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself",
                "I am the wisest man alive, for I know one thing, and that is I know nothing",
                "If women are expected to do the same work as men, we must teach them the same things",
                "Human behavior flows from three main sources: desire, emotion, and knowledge",
                "There are two things a person should never be angry at, what they can help, and what they cannot",
                "The object of education is to teach us to love what is beautiful",
                "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers",
                "No man should bring children into the world who is unwilling to perservere to the end in their nature and education",
                "Good actions give strength to ourselves and inspire good actions in others"];

//add constants
const quoteDiv = document.getElementById("holder");
const startBtn = document.getElementById("startButton");


//take away divs and display randomized quote when start button is pressed 
function start() {
    //remove the elements
    document.getElementById("descriptiveDiv").style.display = "none";
    document.getElementById("descriptiveDivTwo").style.display = "none";
    //document.getElementsByClassName("startButton")[0].style.display = "none";
    document.getElementsByClassName("startButton")[0].classList.add("hiddenDisplay");    
    //the sentences appear in a grayish color 
    

    let text = sentences[parseInt(Math.random() * sentences.length)]

    const characters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.classList.add("word");
        span.innerText = char;
        quoteDiv.appendChild(span);
        return span;
    });

    let quoteIndex = 0;
    let characterMark = characters[quoteIndex];


    let startTimer = null;

    const typingListener = ({key}) => {
        if(startTimer === null) {
            startTimer = new Date();
        }

        if(quoteIndex >= characters.length) {
            //document.getElementById("startButton")[0].classList.add("startButton");
            document.removeEventListener("keydown", typingListener);
            const endTimer = new Date();
            const difference = endTimer - startTimer;
            const seconds = difference / 1000;
            const amountOfWords = text.split(" ").length;
            const wps = amountOfWords / seconds;
            const wpm = Math.floor(wps * 60);
            document.getElementById("result").innerText ="WPM = " + wpm; 
            return;
        }

        if(key === characterMark.innerText) {
            characterMark.classList.remove("word");
            characterMark.classList.add("correct");
            characterMark = characters[++quoteIndex];
        }
    }

    document.addEventListener("keydown", typingListener);
  

}












