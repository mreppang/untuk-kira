document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const messageText = document.getElementById('message-text');
    const bubbleContainer = document.getElementById('bubble-container'); // Kontainer baru

    // Array berisi pesan-pesan manis
    const sweetMessages = [
        "janganki sedih trus sayang, jangki baku bombe na sama ummie. Demi kita ji itu sayang, juga sapatau kerja i. Bisaji kapan kapan toh",
        "Aku bangga padamu, apa pun yang terjadi.",
        "nda bakal ku tinggali ki",
        "Cantik ki baikki,cukup mki menurutku. Nda ada duanya itu!",
        "Dunia lebih indah karena kamu ada di dalamnya. Serius!",
        "Peluk virtual (kiriman dariku!). 🤗",
        "Ketawa ta paling kusuka jadi jangki sedihna",
        "Tidak ada yang bisa menggantikanmu.",
        "Coba tarik napas dalam-dalam lagi. Itu dia! ✨",
        "Aku ada di sisimu, selalu."
    ];

    // Daftar foto pacar Anda
    const photoFiles = [
        "pacar1.jpg", 
        "pacar2.jpg", 
        "pacar3.jpg"
        // Tambahkan lebih banyak nama file foto di sini jika ada!
    ];

    let lastMessageIndex = -1; 
    let bubbleCount = 0; // Untuk membatasi jumlah bubble agar tidak terlalu banyak

    function getRandomMessage() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * sweetMessages.length);
        } while (randomIndex === lastMessageIndex); 

        lastMessageIndex = randomIndex;
        return sweetMessages[randomIndex];
    }

    // --- FUNGSI BARU: MEMBUAT BUBBLE FOTO ---
    function createPhotoBubble() {
        if (photoFiles.length === 0 || bubbleCount >= 10) return; // Batasi jumlah bubble

        const bubble = document.createElement('div');
        bubble.classList.add('photo-bubble');

        const img = document.createElement('img');
        img.src = photoFiles[Math.floor(Math.random() * photoFiles.length)]; // Pilih foto acak
        bubble.appendChild(img);

        // Atur ukuran bubble secara acak untuk variasi
        const size = Math.random() * (120 - 70) + 70; // Antara 70px dan 120px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Posisi awal acak
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.left = `${Math.random() * 100}vw`;

        // Atur properti CSS variabel untuk animasi float
        bubble.style.setProperty('--duration', `${Math.random() * 15 + 10}s`); // Durasi float 10-25s
        bubble.style.setProperty('--float-y', `${Math.random() * 50 - 25}px`); // Float +/- 25px vertikal
        bubble.style.setProperty('--float-x', `${Math.random() * 50 - 25}px`); // Float +/- 25px horizontal
        bubble.style.setProperty('--scale-end', `${Math.random() * (
