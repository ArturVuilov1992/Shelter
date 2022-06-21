const BURGER = document.querySelector(".burger");
const BURGERWRAPPER = document.querySelector(".burger-wrapper");
const burgerLogo = document.querySelector(".burger-logo");
const body = document.querySelector("body");
const burgernavlinks = document.querySelectorAll(".burger-navlink");
const burgernavlink = document.querySelector(".burger-navlink");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const CAROUSEL = document.querySelector(".carousel");
const sliderActive = document.querySelector(".slider-active");
const slider = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slider");
const cards = document.querySelectorAll(".card");
const card = document.querySelector(".card");

const sliderLeft = document.querySelector(".sliderLeft");
const sliderRight = document.querySelector(".sliderRight");
const html = document.querySelector("html");
const popupShadow = document.querySelector(".popupShadow");
const popupCross = document.querySelector(".popupCross");
const popupCard = document.querySelector(".popupCard");

const popupCardImage = document.querySelector(".popupCardImg");
const popupCardInfo = document.querySelector(".popupCardInfo");
const popupText = document.querySelector(".popupText");
const popupHeading = document.querySelector(".popupHeading");
const popupSubheading = document.querySelector(".popupSubheading");
const popupCardImg = document.querySelector(".popupCardImg");

const age = document.querySelector(".age");
const inoculations = document.querySelector(".inoculations");
const diseases = document.querySelector(".diseases");
const parasites = document.querySelector(".parasites");




function rotate_slide () {
    if (BURGER.classList.contains("rotate")){
            BURGER.classList.remove("rotate");
            BURGER.classList.add("rotateBack");

            BURGERWRAPPER.classList.remove("burger-transition-left");
            BURGERWRAPPER.classList.add("burger-transition-right");

            html.style.overflow="visible";
    } else {
        BURGER.classList.remove("rotateBack");
        BURGER.classList.add("rotate");
        BURGERWRAPPER.classList.remove("burger-transition-right");
        BURGERWRAPPER.classList.add("burger-transition-left");
        html.style.overflow="hidden";
    }
};

function close_menu () {
            BURGER.classList.remove("rotate");
            BURGER.classList.add("rotateBack");
            BURGERWRAPPER.classList.remove("burger-transition-left");
            BURGERWRAPPER.classList.add("burger-transition-right");
            html.style.overflow="visible";
}

function close_notarget (e){
    const target = e.target
if (target !== burgernavlink || target !== BURGER ) {
    
    BURGER.classList.remove("rotate");
    BURGER.classList.add("rotateBack");
    BURGERWRAPPER.classList.remove("burger-transition-left");
    BURGERWRAPPER.classList.add("burger-transition-right");            
    html.style.overflow="visible";
}

}
BURGER.addEventListener("click", rotate_slide)

for (let i=0;i<burgernavlinks.length;i++){
    burgernavlinks[i].addEventListener("click", close_menu)
}

BURGERWRAPPER.addEventListener("click", close_notarget)
















/////////!!!!!!!!!!!!!!!!!!!! ЕЗДА СЛАЙДЕРА И СОЗДЗАНИЕ НОВЫХ КАРТ
function carousel_left() {
    CAROUSEL.classList.add("carousel-left_phone");
    arrowLeft.removeEventListener("click", carousel_left)
    arrowRight.removeEventListener("click", carousel_right)
}

function carousel_right() {
    CAROUSEL.classList.add("carousel-right_phone");
    arrowLeft.removeEventListener("click", carousel_left)
    arrowRight.removeEventListener("click", carousel_right)
}

arrowLeft.addEventListener("click", carousel_left)
arrowRight.addEventListener("click", carousel_right)

const pet = [
    {
        id:0,
        name: "Katrine",
        img: "../../assets/images/pets-katrine.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"]
      }, 
    {
        id:1,
        name: "Jennifer",
        img: "../../assets/images/pets-jennifer.png",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"]
      },{
        id:2,
        name: "Woody",
        img: "../../assets/images/pets-woody.png",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"]
      },
      {
        name: "Sophia",
        img: "../../assets/images/sofia.png",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        name: "Scarlett",
        img: "../../assets/images/pets-scarlet.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        name: "Timmy",
        img: "../../assets/images/pets-timmy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"]
      },
      {
        name: "Freddie",
        img: "../../assets/images/pets-freddy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        name: "Charly",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
                img: "../../assets/images/pets-charly.png",
      }
];

let parentMas=[0];
let newMas=[];

function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }
     

    function func (){
        for (let i=0;i<100;i++){
            let result= getRandomIntInclusive(0, 7);
            if (!parentMas.includes(result) && !newMas.includes(result)){
                newMas.push(result);
            }
            if (newMas.length == 1){
                    return newMas;
            }
                }
        }
    
    const createCardTemplate = (i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardPhotoWrapper = document.createElement("div");
    cardPhotoWrapper.classList.add("cardPhotoWrapper");

    const cardPhotoName = document.createElement("p");
    cardPhotoName.classList.add("cardPhotoName");

    
    cardPhotoWrapper.style.backgroundImage=`url(${pet[i].img}`;
    cardPhotoName.innerText = pet[i].name;
   
    const cardBtn = document.createElement("button");
    cardBtn.classList.add("cardBtn");

    const cardBtnTxt = document.createElement("p");
    cardBtnTxt.classList.add("cardBtnTxt");
    cardBtnTxt.innerText = "Learn more";

    card.appendChild(cardPhotoWrapper);
    card.appendChild(cardPhotoName);
    card.appendChild(cardBtn);
    cardBtn.appendChild(cardBtnTxt);

    return card;
  }


CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
   if (animationEvent.animationName === "carousel-left_phone") {
    CAROUSEL.classList.remove("carousel-left_phone");
    changedItem = sliderLeft;
    func();
        for (let i=0;i<1;i++){
            let card = createCardTemplate(newMas[i]);
            sliderLeft.appendChild(card);
            }
        sliderActive.innerHTML = sliderLeft.innerHTML;
        parentMas = newMas;
        newMas=[];
} else {
    CAROUSEL.classList.remove("carousel-right_phone");
    changedItem = sliderRight;
    func();
        for (let i=0;i<1;i++){
            let card = createCardTemplate(newMas[i]);
            sliderRight.appendChild(card);
        }
        sliderActive.innerHTML = sliderRight.innerHTML;
        parentMas = newMas;
        newMas=[];
         }   
     changedItem.innerHTML="";
    arrowLeft.addEventListener("click", carousel_left)
    arrowRight.addEventListener("click", carousel_right)
  })  
  
 
////открытие закрытие попапа нажатием
CAROUSEL.addEventListener("click",function func (e){
      
  if (e.target == CAROUSEL.children[1].children[0] || e.target == CAROUSEL.children[1].children[0].children[0] || e.target == CAROUSEL.children[1].children[0].children[1] || e.target == CAROUSEL.children[1].children[0].children[2] ){
    console.log(CAROUSEL.children[1].children[0],CAROUSEL.children[1].children[0].children)
    popupShadow.style.display="block";
      html.style.overflow="hidden";
      popupText.innerHTML = pet[parentMas[0]].description;
      popupHeading.innerHTML = pet[parentMas[0]].name;
      popupSubheading.innerHTML = pet[parentMas[0]].type + "-" + pet[parentMas[0]].breed;
      popupCardImage.style.backgroundImage=`url(${pet[parentMas[0]].img}`
      
      age.innerHTML = pet[parentMas[0]].age;
      inoculations.innerHTML = pet[parentMas[0]].inoculations;
      diseases.innerHTML = pet[parentMas[0]].diseases;
      parasites.innerHTML = pet[parentMas[0]].parasites;  
  }
 

  if (e.target == CAROUSEL.children[1].children[1] || e.target == CAROUSEL.children[1].children[1].children[0] || e.target == CAROUSEL.children[1].children[1].children[1] || e.target == CAROUSEL.children[1].children[1].children[2] ){
    popupShadow.style.display="block";
      html.style.overflow="hidden";
      popupText.innerHTML = pet[parentMas[1]].description;
      popupHeading.innerHTML = pet[parentMas[1]].name;
      popupSubheading.innerHTML = pet[parentMas[1]].type + "-" + pet[parentMas[1]].breed;
      popupCardImage.style.backgroundImage=`url(${pet[parentMas[1]].img}`
      
      age.innerHTML = pet[parentMas[1]].age;
      inoculations.innerHTML = pet[parentMas[1]].inoculations;
      diseases.innerHTML = pet[parentMas[1]].diseases;
      parasites.innerHTML = pet[parentMas[1]].parasites;   
    }


    if (e.target == CAROUSEL.children[1].children[2] || e.target == CAROUSEL.children[1].children[2].children[0] || e.target == CAROUSEL.children[1].children[2].children[1] || e.target == CAROUSEL.children[1].children[2].children[2] ){
      popupShadow.style.display="block";
      html.style.overflow="hidden";
      popupText.innerHTML = pet[parentMas[2]].description;
      popupHeading.innerHTML = pet[parentMas[2]].name;
      popupSubheading.innerHTML = pet[parentMas[2]].type + "-" + pet[parentMas[2]].breed;
      popupCardImage.style.backgroundImage=`url(${pet[parentMas[2]].img}`
      
      age.innerHTML = pet[parentMas[2]].age;
      inoculations.innerHTML = pet[parentMas[2]].inoculations;
      diseases.innerHTML = pet[parentMas[2]].diseases;
      parasites.innerHTML = pet[parentMas[2]].parasites;   
    }



}) 

for (let i=0;i<cards.length;i++){
cards[i].addEventListener("click",function (e) {

if (e.target.closest(".card")){
popupShadow.style.display="block";
html.style.overflow="hidden";

popupText.innerHTML = pet[parentMas[i]].description;
popupHeading.innerHTML = pet[parentMas[i]].name;
popupSubheading.innerHTML = pet[parentMas[i]].type + "-" + pet[parentMas[i]].breed;
popupCardImage.style.backgroundImage=`url(${pet[parentMas[i]].img}`

age.innerHTML = pet[parentMas[i]].age;
inoculations.innerHTML = pet[parentMas[i]].inoculations;
diseases.innerHTML = pet[parentMas[i]].diseases;
parasites.innerHTML = pet[parentMas[i]].parasites;
}
} )}



/////popup interactivity
popupCross.addEventListener("click", ()=>{
popupShadow.style.display="none";
html.style.overflow="visible";
})

popupShadow.addEventListener("click", function func (e) {
if (e.target == this) {
popupShadow.style.display="none";
html.style.overflow="visible";
} else {
return
}

})

popupCard.addEventListener("mouseenter", function func (e) {
popupCross.classList.remove("popupShadowHover");

})
popupCard.addEventListener("mouseleave", function func (e) {
popupCross.classList.add("popupShadowHover");

})
/////////////////
 