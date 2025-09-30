document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const messageText = document.getElementById('message-text');
    const bubbleContainer = document.getElementById('bubble-container'); 

    // Array berisi pesan-pesan manis dan pemicu senyuman
    const sweetMessages = [
        "janganki sedih trus sayang jangki baku bombe na sama ummie, demi kita ji itu sayang juga sapatau kerja i,bisaji kapan kapan toh",
        "Aku bangga padamu, apa pun yang terjadi.",
        "nda bakal ku tinggali ki",
        "Cantik ki baikki,cukup mki menurutku",
        "Dunia lebih indah karena kamu ada di dalamnya.",
        "Peluk virtual (kiriman dariku!). 🤗",
        "Ketawa ta paling kusuka jadi jangki sedihna",
        "Tidak ada yang bisa menggantikanmu.",
        "Coba tarik napas dalam-dalam lagi. Itu dia! ✨",
        "Aku ada di sisimu, selalu."
    ];

    // Daftar foto pacar Anda - WAJIB GANTI INI!
    const photoFiles = [
        "pacar1.jpg", 
        "pacar2.jpg", 
        "pacar3.jpg"
        // GANTI INI DENGAN NAMA FILE FOTO ASLI ANDA! (Pastikan huruf besar/kecil sama)
    ];

    let lastIndex = -1;
    let bubbleCount = 0; 

    function getRandomMessage() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * sweetMessages.length);
        } while (randomIndex === lastIndex);

        lastIndex = randomIndex;
        return sweetMessages[randomIndex];
    }
    
    // FUNGSI MEMBUAT BUBBLE FOTO
    function createPhotoBubble() {
        if (photoFiles.length === 0 || bubbleCount >= 10) return; 

        const bubble = document.createElement('div');
        bubble.classList.add('photo-bubble');

        const img = document.createElement('img');
        img.src = photoFiles[Math.floor(Math.random() * photoFiles.length)]; 
        bubble.appendChild(img);

        // Atur properti acak
        const size = Math.random() * (120 - 70) + 70; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.left = `${Math.random() * 100}vw`;

        // Atur variabel CSS untuk animasi
        bubble.style.setProperty('--duration', `${Math.random() * 15 + 10}s`);
        bubble.style.setProperty('--float-y', `${Math.random() * 50 - 25}px`);
        bubble.style.setProperty('--float-x', `${Math.random() * 50 - 25}px`);
        bubble.style.setProperty('--scale-end', `${Math.random() * (1.2 - 0.8) + 0.8}`);
        bubble.style.setProperty('--rotation-duration', `${Math.random() * 20 + 10}s`);

        bubbleContainer.appendChild(bubble);
        bubbleCount++;

        // Hapus bubble setelah selesai animasi
        setTimeout(() => {
            bubble.remove();
            bubbleCount--;
        }, 
        (parseFloat(bubble.style.getPropertyValue('--duration')) * 2 + 2) * 1000); 
    }

    // Inisialisasi: Buat 5 bubble saat halaman dimuat dan terus buat yang baru
    for (let i = 0; i < 5; i++) {
        setTimeout(createPhotoBubble, i * 1500);
    }
    setInterval(createPhotoBubble, 3000); 

    loveButton.addEventListener('click', () => {
        // 1. Dapatkan pesan baru
        const newMessage = getRandomMessage();

        // 2. Efek pesan
        messageText.style.opacity = '0';
        messageText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            messageText.textContent = newMessage;
            messageText.style.opacity = '1';
            messageText.style.transform = 'translateY(0)';
        }, 200);

        // 3. Tambahkan 3 bubble ekstra saat diklik
        for (let i = 0; i < 3; i++) {
            setTimeout(createPhotoBubble, i * 300);
        }
    });
});
