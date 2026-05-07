// ===== BILDDATEN =====

// Dateipfade der Bilder für Galerie 1
const myImgs = [
    "./assets/img/cherry_blossem.png",
    "./assets/img/city.png",
    "./assets/img/dog.png",
    "./assets/img/flower.png",
    "./assets/img/fox.png",
    "./assets/img/jellyfish.png",
];

// Dateipfade der Bilder für Galerie 2
const myImgsSecound = [
    "./assets/img/mountain.png",
    "./assets/img/owl.png",
    "./assets/img/ozean.png",
    "./assets/img/snow_mountain.png",
    "./assets/img/swan.png",
    "./assets/img/highland_cow.png"
];

// Beschriftungen für Galerie 1 (Index muss mit myImgs übereinstimmen)
const myImgsDescription = [
    "Cherry Blossem",
    "City",
    "Dog",
    "Flowers",
    "Fox",
    "Jellyfish",
];

// Beschriftungen für Galerie 2 (Index muss mit myImgsSecound übereinstimmen)
const myImgsDescriptionSecound = [
    "Mountains",
    "Owl",
    "Ozean",
    "Snow Mountains",
    "Swan",
    "Highland Cow"
];

// Merkt sich welches Bild gerade im Dialog von Galerie 1 angezeigt wird
let currentIndex = 0;

// Merkt sich welches Bild gerade im Dialog von Galerie 2 angezeigt wird
let currentIndexSecound = 0;


// ===== GALERIE 1 =====

// Rendert alle Bilder der ersten Galerie in den Container "main_img_section"
function render() {
    const contentRef = document.getElementById('main_img_section');
    for (let i = 0; i < myImgs.length; i++){
        contentRef.innerHTML += getNotesHTML(i); // HTML für jedes Bild anhängen
    }  
}

// Erstellt und gibt den HTML-Code für ein Bild der ersten Galerie zurück
function getNotesHTML(index) {
    return `
        <div class="img_for_main">
            <!-- Klick öffnet den Lightbox-Dialog mit dem passenden Bild -->
            <button onclick="openDialog(${index})">
                <img src="${myImgs[index]}" alt="${myImgsDescription[index]}" />
            </button>
        </div>
    `;
}

// Öffnet den Lightbox-Dialog von Galerie 1 mit dem angeklickten Bild
function openDialog(index) {
    currentIndex = index; // Aktuellen Index speichern

    // Alle benötigten Dialog-Elemente aus dem DOM holen
    let dialog  = document.getElementById("myDialog");
    let img     = document.getElementById("dialogImg");
    let text    = document.getElementById("dialogText");
    let counter = document.getElementById("dialogCounter");

    // Dialog mit Bild, Beschriftung und Zähler befüllen (z.B. "2/6")
    img.src        = myImgs[currentIndex];
    text.innerText = myImgsDescription[currentIndex];
    counter.innerText = `${currentIndex + 1}/${myImgs.length}`;

    dialog.classList.add("opened"); // CSS-Klasse für Styling setzen
    dialog.showModal();             // Nativen HTML-Dialog öffnen
}

// Springt zum nächsten Bild — nach dem letzten kommt wieder das erste (Wraparound)
function nextPicture() {
    currentIndex = (currentIndex + 1) % myImgs.length;
    updateDialog();
}

// Springt zum vorherigen Bild — vor dem ersten kommt wieder das letzte (Wraparound)
function backPicture() {
    currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
    updateDialog();
}

// Aktualisiert Bild, Beschriftung und Zähler im Dialog (ohne ihn neu zu öffnen)
function updateDialog() {
    document.getElementById("dialogImg").src          = myImgs[currentIndex];
    document.getElementById("dialogText").innerText   = myImgsDescription[currentIndex];
    document.getElementById("dialogCounter").innerText = `${currentIndex + 1}/${myImgs.length}`;
}

// Schließt den Dialog von Galerie 1 und entfernt die CSS-Klasse
function closeDialog() {
    let dialog = document.getElementById("myDialog");
    dialog.classList.remove("opened");
    dialog.close();
}


// ===== GALERIE 2 =====

// Rendert alle Bilder der zweiten Galerie in den Container "main_img_section_secound"
function renderSecound() {
    const contentRefSecound = document.getElementById('main_img_section_secound');
    for(let j = 0; j < myImgsSecound.length; j++){
        contentRefSecound.innerHTML += getNotesHTMLSecound(j); // HTML für jedes Bild anhängen
    }
}

// Erstellt und gibt den HTML-Code für ein Bild der zweiten Galerie zurück
function getNotesHTMLSecound(j){
    return `
        <div class="img_for_main_secound">
            <!-- Klick öffnet den Lightbox-Dialog von Galerie 2 -->
            <button onclick="openDialogSecound(${j})">
                <img src="${myImgsSecound[j]}" alt="${myImgsDescriptionSecound[j]}" />
            </button>
        </div>
    `;
}

// Öffnet den Lightbox-Dialog von Galerie 2 mit dem angeklickten Bild
function openDialogSecound(j) {
    currentIndexSecound = j; // Aktuellen Index speichern

    // Alle benötigten Dialog-Elemente aus dem DOM holen
    let dialog  = document.getElementById("myDialogSecound");
    let img     = document.getElementById("dialogImgSecound");
    let text    = document.getElementById("dialogTextSecound");
    let counter = document.getElementById("dialogCounterSecound");

    // Dialog mit Bild, Beschriftung und Zähler befüllen (z.B. "3/6")
    img.src        = myImgsSecound[currentIndexSecound];
    text.innerText = myImgsDescriptionSecound[currentIndexSecound];
    counter.innerText = `${currentIndexSecound + 1}/${myImgsSecound.length}`;

    dialog.classList.add("opened"); // CSS-Klasse für Styling setzen
    dialog.showModal();             // Nativen HTML-Dialog öffnen
}

// Springt zum nächsten Bild in Galerie 2 — mit Wraparound
function nextPictureSecound() {
    currentIndexSecound = (currentIndexSecound + 1) % myImgsSecound.length;
    updateDialogSecound();
}

// Springt zum vorherigen Bild in Galerie 2 — mit Wraparound
function backPictureSecound() {
    currentIndexSecound = (currentIndexSecound - 1 + myImgsSecound.length) % myImgsSecound.length;
    updateDialogSecound();
}

// Aktualisiert Bild, Beschriftung und Zähler im Dialog von Galerie 2
function updateDialogSecound() {
    document.getElementById("dialogImgSecound").src          = myImgsSecound[currentIndexSecound];
    document.getElementById("dialogTextSecound").innerText   = myImgsDescriptionSecound[currentIndexSecound];
    document.getElementById("dialogCounterSecound").innerText = `${currentIndexSecound + 1}/${myImgsSecound.length}`;
}

// Schließt den Dialog von Galerie 2 und entfernt die CSS-Klasse
function closeDialogSecound() {
    let dialog = document.getElementById("myDialogSecound");
    dialog.classList.remove("opened");
    dialog.close();
}