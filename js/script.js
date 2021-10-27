




const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// selezioni elemanti

const itemsCont = document.querySelector(".items");
const thumbsCont = document.querySelector(".thumbs");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let item = "";
let thumbs= "";

// output elementi

for( let i = 0; i < items.length; i++){
    item += `
    <div class="item">
    <img src="${items[i]}" alt="">
      <div class="text">
        <h3>${title[i]}</h3>
        <p>${text[i]}</p>
      </div>
    </div>`;

    thumbs +=`
    <div class="thumb">
    <img src="${items[i]}" alt="">
    </div>`;

};

itemsCont.innerHTML= item;
document.getElementsByClassName("item")[0].classList.add("active");
thumbsCont.innerHTML= thumbs;
document.getElementsByClassName("thumb")[0].classList.add("active");

let activeAct = 0;

next.addEventListener("click",

function() {
    ++activeAct;
    document.querySelector(".item.active").classList.remove("active");
    document.getElementsByClassName("item")[activeAct].classList.add("active");
    document.querySelector(".thumb.active").classList.remove("active");
    document.getElementsByClassName("thumb")[activeAct].classList.add("active");

}

);

prev.addEventListener("click",

function() {
    --activeAct;
    document.querySelector(".item.active").classList.remove("active");
    document.getElementsByClassName("item")[activeAct].classList.add("active");
    document.querySelector(".thumb.active").classList.remove("active");
    document.getElementsByClassName("thumb")[activeAct].classList.add("active");
}

);