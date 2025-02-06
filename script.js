// Declare the initial enemy health
let enemyHealth = 7; // Set a max health value for the enemy (can be adjusted)

document.addEventListener('keydown', (event) => {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        attackSound.play(); // Mainkan efek suara

        // Scott attacks
        scott.style.transform = 'translateX(50px)';
        setTimeout(() => {
            scott.style.transform = 'translateX(0)';
        }, 200);

        // Musuh menerima damage
        enemyHealth--;

        // Update HP bar
        enemyHP.style.width = (enemyHealth / 7) * 100 + '%';

        if (enemyHealth <= 0) {
            enemy.style.display = 'none'; // Sembunyikan musuh saat kalah
            victorySound.play(); // Mainkan suara kemenangan
            wonMessage.style.display = 'block'; // Tampilkan "YOU WON!" dengan efek zoom
            message.classList.remove('hidden'); // Tampilkan pesan Happy Birthday dengan animasi zoom
            startMessage.style.display = 'none'; // Sembunyikan perintah 'Click to Start' setelah game dimulai
        }
    }
});