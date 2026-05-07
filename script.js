const myImgs = [
    "./assets/img/cherry_blossem.png",
    "./assets/img/city.png",
    "./assets/img/dog.png",
    "./assets/img/flower.png",
    "./assets/img/fox.png",
    "./assets/img/jellyfish.png",
    "./assets/img/mountain.png",
    "./assets/img/owl.png",
    "./assets/img/ozean.png",
    "./assets/img/snow_mountain.png",
    "./assets/img/swan.png",
    "./assets/img/highland_cow.png"
];
const myImgsDescription = [
    "Cherry Blossem",
    "City",
    "Dog",
    "Flowers",
    "Fox",
    "Jellyfish",
    "Mountains",
    "Owl",
    "Ozean",
    "Snow Mountains",
    "Swan",
    "Highland Cow"
];
let currentIndex = 0;

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

