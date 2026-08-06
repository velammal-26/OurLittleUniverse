// ======================================
// OUR LITTLE UNIVERSE
// script.js
// ======================================


// ===============================
// SCREEN SYSTEM
// ===============================

const screens = document.querySelectorAll(".screen");


function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");
        screen.style.display="none";

    });


    const target=document.getElementById(id);


    if(target){

        target.style.display="flex";

        setTimeout(()=>{

            target.classList.add("active");

        },50);

    }

}



// ===============================
// LOADING SCREEN
// ===============================


let percent=0;

const loadingPercent=document.getElementById("loadingPercent");


const loadingTimer=setInterval(()=>{


    percent++;


    if(loadingPercent){

        loadingPercent.innerHTML=percent+"%";

    }



    if(percent>=100){


        clearInterval(loadingTimer);



        setTimeout(()=>{

            showScreen("welcomeScreen");

        },1000);


    }


},30);





// ===============================
// MUSIC
// ===============================


const music=document.getElementById("bgMusic");

const musicButton=document.getElementById("musicButton");


let playing=false;



musicButton.onclick=()=>{


    if(!playing){


        music.play();

        musicButton.innerHTML="🔊";

        playing=true;


    }

    else{


        music.pause();

        musicButton.innerHTML="♫";

        playing=false;


    }


};








// ===============================
// WELCOME
// ===============================


document.getElementById("beginButton").onclick=()=>{


    showScreen("chapterOne");

    startChapterOne();


};








// ===============================
// CHAPTER 1 TYPEWRITER
// ===============================


const chapterLines=[


"Every beautiful story starts somewhere...",


"Ours started in a college...",


"Not with love...",


"Not with friendship...",


"Just two strangers...",


"Until one little message...",


"Hi Bro 👋"


];



let lineIndex=0;



function startChapterOne(){


    const box=document.getElementById("chapterOneTyping");


    box.innerHTML="";


    lineIndex=0;


    typeLine();


}



function typeLine(){


    const box=document.getElementById("chapterOneTyping");


    if(lineIndex>=chapterLines.length){


        document
        .getElementById("chapterOneNext")
        .classList.remove("hidden");


        return;


    }



    let text=chapterLines[lineIndex];

    let char=0;



    box.innerHTML="";



    const timer=setInterval(()=>{


        box.innerHTML+=text.charAt(char);


        char++;



        if(char>=text.length){


            clearInterval(timer);


            setTimeout(()=>{


                lineIndex++;

                typeLine();


            },900);



        }



    },45);



}







document.getElementById("chapterOneNext").onclick=()=>{


    showScreen("chapterTwo");


};






// ===============================
// CHAPTER 2
// ===============================


document.getElementById("meetingButton").onclick=()=>{


    showScreen("blueShirtScene");



    setTimeout(()=>{


        document
        .getElementById("blueShirtStory")
        .classList.remove("hidden");


    },2000);



    setTimeout(()=>{


        document
        .getElementById("blueShirtNext")
        .classList.remove("hidden");


    },4000);



};





document.getElementById("blueShirtNext").onclick=()=>{


    showScreen("phoneScene");


    startChat();


};






// ===============================
// PHONE CHAT
// ===============================


function startChat(){


    setTimeout(()=>{


        document
        .getElementById("firstMessage")
        .classList.remove("hidden");


    },800);





    setTimeout(()=>{


        document
        .getElementById("typingBubble")
        .classList.remove("hidden");


    },2500);





    setTimeout(()=>{


        document
        .getElementById("typingBubble")
        .classList.add("hidden");



        document
        .getElementById("replyMessage")
        .classList.remove("hidden");


    },4000);





    setTimeout(()=>{


        document
        .getElementById("notificationStory")
        .classList.remove("hidden");


    },5500);





    setTimeout(()=>{


        document
        .getElementById("phoneNext")
        .classList.remove("hidden");


    },7000);



}



document.getElementById("phoneNext").onclick=()=>{


    showScreen("chapterThree");


};

// ===============================
// CHAPTER 3 - FIRST MEMORY
// ===============================


document.getElementById("selfieRevealButton").onclick=()=>{


    showScreen("selfieScene");


    const polaroid=document.querySelector(".polaroid");


    if(polaroid){


        polaroid.style.opacity="0";

        polaroid.style.transform=
        "translateY(-250px) rotate(-15deg)";



        setTimeout(()=>{


            polaroid.style.transition="1.2s ease";

            polaroid.style.opacity="1";

            polaroid.style.transform=
            "translateY(0) rotate(-4deg)";


        },300);


    }


};





document.getElementById("selfieNext").onclick=()=>{


    showScreen("journeyScene");


};








// ===============================
// TIMELINE ANIMATION
// ===============================


const timelineItems=document.querySelectorAll(".timeline-item");



const timelineObserver=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{threshold:0.3});




timelineItems.forEach(item=>{


    timelineObserver.observe(item);


});






document.getElementById("journeyNext").onclick=()=>{


    showScreen("galleryScene");


};








// ===============================
// MEMORY GALLERY
// ===============================


const photos=document.querySelectorAll(".memory-photo");


const modal=document.getElementById("photoModal");

const modalImage=document.getElementById("modalImage");





photos.forEach(photo=>{


    photo.onclick=()=>{


        modal.classList.remove("hidden");


        modalImage.src=
        photo.getAttribute("data-image");


    };


});





document.getElementById("closePhotoModal").onclick=()=>{


    modal.classList.add("hidden");


};








// ===============================
// SECRET BUTTERFLY
// ===============================


const secretButterfly=
document.getElementById("secretButterfly");



let butterflyCount=0;



secretButterfly.onclick=()=>{


    butterflyCount++;



    secretButterfly.style.position="absolute";


    secretButterfly.style.left=
    Math.random()*70+"%";


    secretButterfly.style.top=
    Math.random()*70+"%";



    secretButterfly.style.transition="1s";





    if(butterflyCount>=5){


        document
        .getElementById("butterflySecret")
        .classList.remove("hidden");


        createHearts();


    }



};








document.getElementById("galleryNext").onclick=()=>{


    showScreen("flowerScene");


};








// ===============================
// FLOWER SURPRISE
// ===============================



document.getElementById("flowerButton").onclick=()=>{


    const flower=document.querySelector(".flower");


    flower.classList.add("bloom");



    document
    .getElementById("flowerMessage")
    .classList.remove("hidden");



    setTimeout(()=>{


        document
        .getElementById("flowerNext")
        .classList.remove("hidden");


    },1500);



};





document.getElementById("flowerNext").onclick=()=>{


    showScreen("giftScene");


};








// ===============================
// GIFT SURPRISE
// ===============================


document.getElementById("giftButton").onclick=()=>{


    const gift=document.querySelector(".gift");


    gift.classList.add("open");



    document
    .getElementById("giftMessage")
    .classList.remove("hidden");



    createConfetti();



    setTimeout(()=>{


        document
        .getElementById("giftNext")
        .classList.remove("hidden");


    },1800);



};






document.getElementById("giftNext").onclick=()=>{


    showScreen("letterScene");


};

// ===============================
// LOVE LETTER
// ===============================


const letterText=[


"Who knew...",


'One simple "Hi Bro 👋"',


"would become",


"one of the best moments",


"of my life.",


"",


"Thank you",


"For every smile",


"For every laugh",


"For every memory",


"For every little moment.",


"",


"No matter where life takes us...",


"You will always have",


"A special place",


"In my little universe.",


"",


"With love, 🤍"


];



let letterPosition=0;



document
.getElementById("envelopeButton")
.onclick=()=>{


    document
    .getElementById("letterPaper")
    .classList.remove("hidden");



    document
    .getElementById("envelopeHint")
    ?.classList.add("hidden");



    typeLetter();


};





function typeLetter(){


    const box=document.getElementById("letterTyping");



    if(letterPosition < letterText.length){



        box.innerHTML += 
        letterText[letterPosition] + "<br><br>";



        letterPosition++;



        setTimeout(typeLetter,700);



    }

    else{


        document
        .getElementById("letterSignature")
        .classList.remove("hidden");



        document
        .getElementById("letterNext")
        .classList.remove("hidden");


    }



}







document.getElementById("letterNext").onclick=()=>{


    showScreen("finalScene");


    startFinalScene();



};









// ===============================
// FINAL SCENE
// ===============================



const finalWords=[


"Every story has a beginning...",


"Ours is still being written...",


"Thank you",


"For being",


"My White Butterfly 🦋🤍"


];



let finalLine=0;



function startFinalScene(){



    const title=
    document.getElementById("finalTyping");



    title.innerHTML="";



    finalLine=0;



    writeFinalLine();



}





function writeFinalLine(){



    const title=
    document.getElementById("finalTyping");



    if(finalLine>=finalWords.length){



        document
        .getElementById("finalMessage")
        .classList.remove("hidden");



        setTimeout(()=>{


            document
            .getElementById("finalSurpriseButton")
            .classList.remove("hidden");



        },2000);



        return;



    }




    title.innerHTML +=
    finalWords[finalLine]
    +"<br>";



    finalLine++;



    setTimeout(writeFinalLine,1500);



}








// ===============================
// FINAL SURPRISE
// ===============================



document
.getElementById("finalSurpriseButton")
.onclick=()=>{


    createConfetti();


    createHearts();



    document
    .getElementById("theEnd")
    .classList.remove("hidden");



};









// ===============================
// CONFETTI
// ===============================



function createConfetti(){



    const container=
    document.getElementById("confettiContainer");



    for(let i=0;i<120;i++){



        const piece=
        document.createElement("div");



        piece.className="confetti";



        piece.style.left=
        Math.random()*100+"%";



        piece.style.animationDuration=
        (Math.random()*3+2)+"s";



        piece.style.background=
        Math.random()>0.5
        ?"white"
        :"#60a5fa";



        container.appendChild(piece);



        setTimeout(()=>{


            piece.remove();


        },6000);



    }



}









// ===============================
// FLOATING HEARTS
// ===============================



function createHearts(){



    for(let i=0;i<40;i++){



        const heart=
        document.createElement("div");



        heart.innerHTML=
        Math.random()>0.5
        ?"🤍"
        :"💙";



        heart.style.position="fixed";



        heart.style.left=
        Math.random()*100+"%";



        heart.style.bottom="-40px";



        heart.style.fontSize=
        (20+Math.random()*20)+"px";



        heart.style.animation=
        "heartFloat 6s linear forwards";



        document.body.appendChild(heart);




        setTimeout(()=>{


            heart.remove();


        },6000);



    }



}







// ===============================
// START WEBSITE
// ===============================


showScreen("loadingScreen");