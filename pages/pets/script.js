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

const circle1Sign = document.querySelector(".circle1Sign");
const circle2Sign = document.querySelector(".circle2Sign");
const circle4Sign = document.querySelector(".circle4Sign");
const circle5Sign = document.querySelector(".circle5Sign");
const circleNumber = document.querySelector(".circleNumber");

const wrapper33 = document.querySelector(".wrapper33");
const arrowNavigation = document.querySelector(".arrow__navigation");
const button = document.querySelector(".circle");
const hate = document.querySelector(".circle3background");
const circlelist = document.querySelectorAll(".circle");

let num=1;


/* console.log(circlelist)
for (let i =0;i<circlelist.length;i++){
  circlelist[i].addEventListener("click",function (e){
if (e.target == circle4Sign){
  circleNumber.innerText = 6;
}    
if (e.target = circle1Sign){
  circleNumber.innerText -= 1;
}     */

arrowNavigation.children[0].addEventListener("click",function (e){

          if (num ===1) return;

  num = 1;        
    circleNumber.innerText = num;

    let y = randomNumber(0, 7);
    wrapper33.innerHTML='';
    for (let i=0;i<cards.length;i++){
        console.log("f",y)

      let card = createCardTemplate(y[i]);
      wrapper33.appendChild(card); } 

})

arrowNavigation.children[1].addEventListener("click",function (e){
  if(num === 1){return};
  num--;
  circleNumber.innerText = num;
  let y = randomNumber(0, 7);
  wrapper33.innerHTML='';
  for (let i=0;i<cards.length;i++){
      console.log("f",y)

    let card = createCardTemplate(y[i]);
    wrapper33.appendChild(card); } 
})

arrowNavigation.children[3].addEventListener("click",function (e){
  if(num === 6){return};
  num++;
  circleNumber.innerText = num;
  let y = randomNumber(0, 7);
  wrapper33.innerHTML='';
  for (let i=0;i<cards.length;i++){
      console.log("f",y)

    let card = createCardTemplate(y[i]);
    wrapper33.appendChild(card); } 
})
arrowNavigation.children[4].addEventListener("click",function func (e){
  if (num ===6) {return};

  num = 6;
  

  circleNumber.innerText = num;
  let y = randomNumber(0, 7);
  wrapper33.innerHTML='';
  for (let i=0;i<cards.length;i++){
      console.log("f",y)

    let card = createCardTemplate(y[i]);
    wrapper33.appendChild(card); } 
})



function rotate_slide () {
  if (BURGER.classList.contains("rotate")){
    BURGER.classList.remove("rotate");
    BURGER.classList.add("rotateBack");
    
    BURGERWRAPPER.classList.remove("burger-transition-left");
    BURGERWRAPPER.classList.add("burger-transition-right");

          body.style.overflow="visible";
  } else {
    BURGER.classList.remove("rotateBack");
    BURGER.classList.add("rotate");
    BURGERWRAPPER.classList.remove("burger-transition-right");
    BURGERWRAPPER.classList.add("burger-transition-left");
      body.style.overflow="hidden";
  }
};
function close_menu () {
            BURGER.classList.remove("rotate");
            BURGERWRAPPER.classList.remove("burger-transition-left");
            BURGERWRAPPER.classList.add("burger-transition-right");
            body.style.overflow="visible";
}

function close_notarget (e){
    const target = e.target
if (target !== burgernavlink || target !== BURGER ) {
    
    BURGER.classList.remove("rotate");
    BURGERWRAPPER.classList.remove("burger-transition-left");
    BURGERWRAPPER.classList.add("burger-transition-right");            
    body.style.overflow="visible";
}

} 
BURGER.addEventListener("click", rotate_slide)

for (let i=0;i<burgernavlinks.length;i++){
    burgernavlinks[i].addEventListener("click", close_menu)
}

BURGERWRAPPER.addEventListener("click", close_notarget)
 














 

/////////!!!!!!!!!!!!!!!!!!!! ЕЗДА СЛАЙДЕРА И СОЗДЗАНИЕ НОВЫХ КАРТ
/* function carousel_left() {
    CAROUSEL.classList.add("carousel-left");
    arrowLeft.removeEventListener("click", carousel_left)
    arrowRight.removeEventListener("click", carousel_right)
}

function carousel_right() {
    CAROUSEL.classList.add("carousel-right");
    arrowLeft.removeEventListener("click", carousel_left)
    arrowRight.removeEventListener("click", carousel_right)
}

arrowLeft.addEventListener("click", carousel_left)
arrowRight.addEventListener("click", carousel_right) */

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

let parentMas=[0,1,2,3,4,5,6,7,8,9,10];
let newMas=[];

let randomNumber = function generateArrayRandomNumber (min, max) {
  let totalNumbers = max - min + 1,
  arrayTotalNumbers = [],
  arrayRandomNumbers = [],
  tempRandomNumber;
  
  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }
  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;
}
let y = randomNumber(0, 7);
 document.addEventListener("DOMContentLoaded",function(){
   
   console.log(y);
   wrapper33.innerHTML='';
    for (let i=0;i<cards.length;i++){
    
      let card = createCardTemplate(y[i]);
      wrapper33.appendChild(card);         
    
    }
}) 



/* let inner=Number(circleNumber.innerHTML);
 *//* circleNumber.innerHTML = inner; */
/* circleNumber.innerHTML = num;
 */
 /*  num++;
console.log(num)
 circle1Sign.addEventListener("click", function func(){
  circleNumber.innerHTML--;
  num++;
  if(circleNumber.innerHTML == -1){
    circle1Sign.removeEventListener("click", func);
  }
  console.log(circleNumber.innerHTML)
})  

circle2Sign.addEventListener("click", function func(){
  circleNumber.innerHTML--;
  console.log(circleNumber.innerHTML)
}) 
  
circle4Sign.addEventListener("click", function func(){
      circle1Sign.addEventListener("click", func);

  circleNumber.innerHTML++;
  if(circleNumber.innerHTML == 2){
    circle4Sign.removeEventListener("click", func);

  }
  console.log(circleNumber.innerHTML)
}) 
  
circle5Sign.addEventListener("click", function func(){
  circleNumber.innerHTML++;
  console.log(circleNumber.innerHTML)
}) */

/* wrapper33.addEventListener("click", function (e){
  console.log(e.target)
   let t =  this.innerHTML=3;

    if (e.target = arrowNavigation.children[0]){
      t--;
      console.log(t)
    }
    if (e.target = arrowNavigation.children[1]){
      circleNumber.innerHTML--;
      console.log("1233")

    }
if (e.target = arrowNavigation.children[3]){
  circleNumber.innerHTML++;

}
if (e.target = arrowNavigation.children[4]){
  circleNumber.innerHTML++
  wrapper33.innerHTML == 33;
}
}) */




   







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

/* 

 CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
   if (animationEvent.animationName === "carousel-left") {
    CAROUSEL.classList.remove("carousel-left");
    changedItem = sliderLeft;
    func();
        for (let i=0;i<3;i++){
            let card = createCardTemplate(newMas[i]);
                        sliderLeft.appendChild(card);
        }
        sliderActive.innerHTML = sliderLeft.innerHTML;
        parentMas = newMas;
        newMas=[];
} else {
    CAROUSEL.classList.remove("carousel-right");
    changedItem = sliderRight;
    func();
        for (let i=0;i<3;i++){
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
  }) */  
   
////открытие закрытие попапа нажатием
   wrapper33.addEventListener("click",function func (e){
        if (e.target == wrapper33.children[0].children[0] ){
                console.log("1")

          popupShadow.style.display="block";
          body.style.overflow="hidden";
            popupText.innerHTML = pet[y[0]].description;
            popupHeading.innerHTML = pet[y[0]].name;
            popupSubheading.innerHTML = pet[y[0]].type + "-" + pet[y[0]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[0]].img}`
            
            age.innerHTML = pet[y[0]].age;
            inoculations.innerHTML = pet[y[0]].inoculations;
            diseases.innerHTML = pet[y[0]].diseases;
            parasites.innerHTML = pet[y[0]].parasites;  
        }
       if (e.target == wrapper33.children[1].children[0]){
        console.log("2")

        popupShadow.style.display="block";
        body.style.overflow="hidden";
            popupText.innerHTML = pet[y[1]].description;
            popupHeading.innerHTML = pet[y[1]].name;
            popupSubheading.innerHTML = pet[y[1]].type + "-" + pet[y[1]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[1]].img}`
            
            age.innerHTML = pet[y[1]].age;
            inoculations.innerHTML = pet[y[1]].inoculations;
            diseases.innerHTML = pet[y[1]].diseases;
            parasites.innerHTML = pet[y[1]].parasites;   
          }


          if (e.target == wrapper33.children[2].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[2]].description;
            popupHeading.innerHTML = pet[y[2]].name;
            popupSubheading.innerHTML = pet[y[2]].type + "-" + pet[y[2]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[2]].img}`
            
            age.innerHTML = pet[y[2]].age;
            inoculations.innerHTML = pet[y[2]].inoculations;
            diseases.innerHTML = pet[y[2]].diseases;
            parasites.innerHTML = pet[y[2]].parasites;   
          }

          if (e.target == wrapper33.children[3].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[3]].description;
            popupHeading.innerHTML = pet[y[3]].name;
            popupSubheading.innerHTML = pet[y[3]].type + "-" + pet[y[3]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[3]].img}`
            
            age.innerHTML = pet[y[3]].age;
            inoculations.innerHTML = pet[y[3]].inoculations;
            diseases.innerHTML = pet[y[3]].diseases;
            parasites.innerHTML = pet[y[3]].parasites;   
          }

          if (e.target == wrapper33.children[4].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[4]].description;
            popupHeading.innerHTML = pet[y[4]].name;
            popupSubheading.innerHTML = pet[y[4]].type + "-" + pet[y[4]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[4]].img}`
            
            age.innerHTML = pet[y[4]].age;
            inoculations.innerHTML = pet[y[4]].inoculations;
            diseases.innerHTML = pet[y[4]].diseases;
            parasites.innerHTML = pet[y[4]].parasites;   
          }

          if (e.target == wrapper33.children[5].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[5]].description;
            popupHeading.innerHTML = pet[y[5]].name;
            popupSubheading.innerHTML = pet[y[5]].type + "-" + pet[y[5]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[5]].img}`
            
            age.innerHTML = pet[y[5]].age;
            inoculations.innerHTML = pet[y[5]].inoculations;
            diseases.innerHTML = pet[y[5]].diseases;
            parasites.innerHTML = pet[y[5]].parasites;   
          }

          if (e.target == wrapper33.children[6].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[6]].description;
            popupHeading.innerHTML = pet[y[6]].name;
            popupSubheading.innerHTML = pet[y[6]].type + "-" + pet[y[6]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[6]].img}`
            
            age.innerHTML = pet[y[6]].age;
            inoculations.innerHTML = pet[y[6]].inoculations;
            diseases.innerHTML = pet[y[6]].diseases;
            parasites.innerHTML = pet[y[6]].parasites;   
          }

          if (e.target == wrapper33.children[7].children[0]){
            popupShadow.style.display="block";
            body.style.overflow="hidden";
            popupText.innerHTML = pet[y[7]].description;
            popupHeading.innerHTML = pet[y[7]].name;
            popupSubheading.innerHTML = pet[y[7]].type + "-" + pet[y[7]].breed;
            popupCardImage.style.backgroundImage=`url(${pet[y[7]].img}`
            
            age.innerHTML = pet[y[7]].age;
            inoculations.innerHTML = pet[y[7]].inoculations;
            diseases.innerHTML = pet[y[7]].diseases;
            parasites.innerHTML = pet[y[7]].parasites;   
          }



})  














for (let i=0;i<cards.length;i++){
  cards[i].addEventListener("click",function (e) {
      if (e.target.closest(".card")){
      popupShadow.style.display="block";
      body.style.overflow="hidden";

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
  body.style.overflow="visible";
})

popupShadow.addEventListener("click", function func (e) {
  if (e.target == this) {
    popupShadow.style.display="none";
    body.style.overflow="visible";
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


 
 