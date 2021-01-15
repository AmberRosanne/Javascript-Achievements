    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(onderwerp.length);
        let index2 = randomizer(werkwoord.length);
        let index3 = randomizer(restwoord.length);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["he", "Amber", "she", "Mathijs"];
    const werkwoord = ["works", "runs", "drinks", "walks", "kills"];
    const restwoord = ["hard", "at school", "coffee", "slow", "tea"];
        
    let plaatjes = ["https://media0.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif?cid=ecf05e47em3f1fexjewva15omx846zvx5q179zo2op3m9wmx&rid=giphy.gif", "https://media3.giphy.com/media/LPgFwCQg4HQBvPihcn/giphy.gif", "https://media0.giphy.com/media/UogSmj4xDjQZO/giphy.gif", "https://media2.giphy.com/media/3oD3YkOgoiOT9xlLOw/giphy.gif?cid=ecf05e4784o2mkd19rd4y45xp3dshrb75087jjmw93ogv4iu&rid=giphy.gif"]
    let arrayLength = onderwerp.length;
