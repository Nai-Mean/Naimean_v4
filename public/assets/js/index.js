// 1. Add a global lock variable
let isSecretPlaying = false;

// 2. Wrap your sound player
async function playSecretSound() {
    if (isSecretPlaying) return;
    
    isSecretPlaying = true;
    const audio = new Audio('/assets/audio/zelda_secret.wav');
    
    // Lock standard pings until this finishes
    audio.onended = () => {
        isSecretPlaying = false;
    };
    
    await audio.play();
}

// 3. Update your increment logic
function incrementCornerScore(amount) {
    localScore += amount;
    
    if (localScore === -999) {
        playSecretSound(); // This is now safe and locked
        return; 
    }

    // Only play the ping if the secret is NOT playing
    if (!isSecretPlaying) {
        playStandardPingSound(); 
    }

    syncLocalToWhiteboard();
    if (localScore > cornerScoreHighScoreValue) {
        syncCornerScoreInitialsPromptVisibility(true);
    }
}
