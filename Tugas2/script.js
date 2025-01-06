function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "EDITOR",
    "GAMERS"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

function filterTable() {
    const filter = document.getElementById("filterSelect").value; // Ambil nilai dari combo box
    const table = document.querySelector("table"); // Ambil tabel
    const rows = table.getElementsByTagName("tr"); // Ambil semua baris di tabel

    for (let i = 1; i < rows.length; i++) { // Mulai dari 1 untuk melewatkan header tabel
        const cell = rows[i].getElementsByTagName("td")[0]; // Ambil sel pertama (Certificate Name)
        if (cell) {
            const text = cell.textContent || cell.innerText; // Ambil teks dalam sel
            if (filter === "all" || text === filter) {
                rows[i].style.display = ""; // Tampilkan baris jika cocok
            } else {
                rows[i].style.display = "none"; // Sembunyikan baris jika tidak cocok
            }
        }
    }
}
function filterGalery() {
    const filter = document.getElementById("filterSelect").value; // Ambil nilai filter yang dipilih
    const items = document.querySelectorAll(".gallery-item"); // Ambil semua elemen galeri

    items.forEach((item) => {
        const img = item.querySelector("img"); // Ambil elemen gambar dalam item
        const category = img.classList.contains(filter.toLowerCase()); // Periksa apakah gambar memiliki class yang cocok
        if(filter=='all'){
            item.style.display = "block"; // Tampilkan item
            img.style.width = "100%"; // Ubah ukuran gambar menjadi 50%        
        }
        else if (category) {
            item.style.display = "block"; // Tampilkan item
            img.style.width = "25%"; // Ubah ukuran gambar menjadi 50%
        } else {
            item.style.display = "none"; // Sembunyikan item
            img.style.width = "100%"; // Kembalikan ke ukuran asli jika disembunyikan
        }
    });
}

function filterProject() {
    // Mendapatkan elemen dropdown dan tabel
    const filter = document.getElementById("filterSelect").value; // Ambil nilai dari combo box
    const table = document.querySelector("table"); // Ambil tabel
    const rows = table.getElementsByTagName("tr"); // Ambil semua baris di tabel

    for (let i = 1; i < rows.length; i++) { // Mulai dari 1 untuk melewatkan header tabel
        const cell = rows[i].getElementsByTagName("td")[0]; // Ambil sel pertama (Certificate Name)
        if (cell) {
            const text = cell.textContent || cell.innerText; // Ambil teks dalam sel
            if (filter === "all" || text === filter) {
                rows[i].style.display = ""; // Tampilkan baris jika cocok
            } else {
                rows[i].style.display = "none"; // Sembunyikan baris jika tidak cocok
            }
        }
    }
}



window.onload = typeWriter
