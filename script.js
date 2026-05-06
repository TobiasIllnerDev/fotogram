let myImgs = [
    "./assets/img/bird.png",
    "./assets/img/bird_on_stone.png",
    "./assets/img/cat.png",
    "./assets/img/city_night.png",
    "./assets/img/clouds_from_top.png",
    "./assets/img/duck.png",
    "./assets/img/lake_with_mountain.png",
    "./assets/img/men_in_night.png",
    "./assets/img/mountain_with_snow.png",
    "./assets/img/rainy_clouds.png",
    "./assets/img/sky_with_mountain.png",
    "./assets/img/tree_with_snow.png"
];

let myImgsDescription = [
    "Bird",
    "Bird on stone",
    "Cat",
    "City at Night",
    "Clouds from Space",
    "duck",
    "lake with Mountains",
    "Men at Night",
    "Mountain with snow",
    "Rainy clouds",
    "Sky with Mountains",
    "Tree with snow"
];

function render() {
    let contentRef = document.getElementById('main_img_section');
    for (let i = 0; i < myImgs.length; i++){
        contentRef.innerHTML  += getNotesHTML(i);
    }  
}

function getNotesHTML(index) {
    return `
        <div class="img_for_main">
            <img src="${myImgs[index]}" 
                alt="${myImgsDescription[index]}" 
                onclick="openDialog(${index})"/>
        </div>
    `;
}

let currentIndex = 0;

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
