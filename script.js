document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const messageText = document.getElementById('message-text');

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

    let lastIndex = -1; 

    function getRandomMessage() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * sweetMessages.length);
        } while (randomIndex === lastIndex); 

        lastIndex = randomIndex;
        return sweetMessages[randomIndex];
    }

    loveButton.addEventListener('click', () => {
        const newMessage = getRandomMessage();
        
        messageText.style.opacity = '0';
        messageText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            messageText.textContent = newMessage;
            messageText.style.opacity = '1';
            messageText.style.transform = 'translateY(0)';
        }, 200);
    });
});