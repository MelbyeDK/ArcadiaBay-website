document.addEventListener("DOMContentLoaded", () => {
    // COPYRIGHT
    const copyrightEl = document.getElementById("copyright");
    if (copyrightEl) {
        copyrightEl.textContent = String(new Date().getFullYear());
    }

    // MUSIC AND TOGGLE BUTTON
    const toggleBtn = document.getElementById("soundToggle");
    const music = document.getElementById("bgMusic");

    // Only proceed if BOTH elements exist
    if (!toggleBtn || !music) return;

    const soundText = toggleBtn.querySelector(".sound-text");
    let isPlaying = localStorage.getItem("musicOn") === "true";

    function updateButton() {
        if (soundText) {
            soundText.textContent = isPlaying ? "" : "";
        }
    }

    // Apply saved state
const audioEl = document.querySelector<HTMLAudioElement>("#music");
if (music instanceof HTMLAudioElement) {
    updateButton();

    if (isPlaying) {
        music.volume = 0.5;

        music.play().catch(() => {
            isPlaying = false;
            localStorage.setItem("musicOn", "false");
            updateButton();
        });
    }
}



    // Toggle button click
    toggleBtn.addEventListener("click", () => {
        if (!music) return; // extra safety
        if (isPlaying) {
            music.pause();
        } else {
            music.volume = 0.5;
            music.play().catch(() => {});
        }

        isPlaying = !isPlaying;
        localStorage.setItem("musicOn", isPlaying.toString());
        updateButton();
    });
});