const myImgs = [
    "./assets/img/cherry_blossem.png",
    "./assets/img/city.png",
    "./assets/img/dog.png",
    "./assets/img/flower.png",
    "./assets/img/fox.png",
    "./assets/img/jellyfish.png",

];
const myImgsSecound = [
    "./assets/img/mountain.png",
    "./assets/img/owl.png",
    "./assets/img/ozean.png",
    "./assets/img/snow_mountain.png",
    "./assets/img/swan.png",
    "./assets/img/highland_cow.png"
]
const myImgsDescription = [
    "Cherry Blossem",
    "City",
    "Dog",
    "Flowers",
    "Fox",
    "Jellyfish",
];
const myImgsDescriptionSecound = [
    "Mountains",
    "Owl",
    "Ozean",
    "Snow Mountains",
    "Swan",
    "Highland Cow"
]
let currentIndex = 0;
let currentIndexSecound = 0;

function render() {
    const contentRef = document.getElementById('main_img_section');
    for (let i = 0; i < myImgs.length; i++){
        contentRef.innerHTML  += getNotesHTML(i);
    }  
}

function getNotesHTML(index) {
    return `
        <div class="img_for_main">
            <button onclick="openDialog(${index})"><img src="${myImgs[index]}" 
                alt="${myImgsDescription[index]}" />
            </button>
        </div>
    `;
}

function openDialog(index) {
    currentIndex = index;
    let dialog = document.getElementById("myDialog");
    let img = document.getElementById("dialogImg");
    let text = document.getElementById("dialogText");
    let counter = document.getElementById("dialogCounter");

    img.src = myImgs[currentIndex];
    text.innerText = myImgsDescription[currentIndex];
    counter.innerText = `${currentIndex + 1}/${myImgs.length}`;

    dialog.classList.add("opened");
    dialog.showModal();
}

function nextPicture() {
    currentIndex = (currentIndex + 1) % myImgs.length;
    updateDialog();
}

function backPicture() {
    currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
    updateDialog();
}

function updateDialog() {
    document.getElementById("dialogImg").src = myImgs[currentIndex];
    document.getElementById("dialogText").innerText = myImgsDescription[currentIndex];
    document.getElementById("dialogCounter").innerText = `${currentIndex + 1}/${myImgs.length}`;
}

function closeDialog() {
    let dialog = document.getElementById("myDialog");
    dialog.classList.remove("opened"); 
    dialog.close();
}

// Secound

function renderSecound() {
    const contentRefSecound = document.getElementById('main_img_section_secound');
    for(let j = 0; j < myImgsSecound.length; j++){
        contentRefSecound.innerHTML += getNotesHTMLSecound(j);
    }
}

function getNotesHTMLSecound(j){
    return `
        <div class="img_for_main_secound">
            <button onclick="openDialog(${j})"><img src="${myImgsSecound[j]}" 
                alt="${myImgsDescriptionSecound[j]}" />
            </button>
        </div>
    `;
}

function openDialogSecound(j) {
    currentIndexSecound = j;
    let dialog = document.getElementById("myDialogSecound");
    let img = document.getElementById("dialogImgSecound");
    let text = document.getElementById("dialogTextSecound");
    let counter = document.getElementById("dialogCounterSecound");

    img.src = myImgsSecound[currentIndexSecound];
    text.innerText = myImgsDescriptionSecound[currentIndexSecound];
    counter.innerText = `${currentIndexSecound + 1}/${myImgsSecound.length}`;

    dialog.classList.add("opened");
    dialog.showModal();
}

function nextPictureSecound() {
    currentIndexSecound = (currentIndexSecound + 1) % myImgsSecound.length;
    updateDialogSecound();
}

function backPictureSecound() {
    currentIndexSecound = (currentIndexSecound - 1 + myImgsSecound.length) % myImgsSecound.length;
    updateDialogSecound();
}

function updateDialogSecound() {
    document.getElementById("dialogImgSecound").src = myImgsSecound[currentIndexSecound];
    document.getElementById("dialogTextSecound").innerText = myImgsDescriptionSecound[currentIndexSecound];
    document.getElementById("dialogCounterSecound").innerText = `${currentIndexSecound + 1}/${myImgsSecound.length}`;
}

function closeDialog() {
    let dialog = document.getElementById("myDialogSecound");
    dialog.classList.remove("opened"); 
    dialog.close();
}

