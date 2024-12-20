const popup = document.getElementById('popup');
const startSongBtn = document.getElementById('startSongBtn');
const audioPlayer = document.getElementById('audioPlayer');
const blurBackground = document.getElementById('blur-background');
const polaroidGallery = document.querySelector('.polaroid-gallery');
const polaroidModal = document.getElementById('polaroidModal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');
const overlay = document.getElementById('overlay'); 

window.onload = () => {
    popup.style.display = 'block';  
    overlay.style.display = 'block';
    popup.style.opacity = 0;  
    setTimeout(() => {
        popup.style.transition = 'opacity 1s ease-out';
        popup.style.opacity = 1;  
    }, 10);  
};

const playlist = [
    'assets/audio/wave to earth.mp3', 
    'assets/audio/glue song.mp3',    
    'assets/audio/hkst.mp3',
    'assets/audio/sailor.mp3',
    'assets/audio/anthem.mp3', 
    'assets/audio/turn.mp3', 
    'assets/audio/eternal flower.mp3'
];


let currentSongIndex = 0;


function playSong(index) {
    audioPlayer.src = playlist[index]; 
    audioPlayer.play();               
}


startSongBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    blurBackground.style.display = 'none';
    polaroidGallery.style.opacity = 1; 
    currentSongIndex = 0;              
    playSong(currentSongIndex);        
});


audioPlayer.addEventListener('ended', () => {
    currentSongIndex++;                
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;          
    }
    playSong(currentSongIndex);       
});

document.querySelectorAll('.polaroid img').forEach((image) => {
    image.addEventListener('click', function () {
        const imgSrc = this.src;
        const text = this.alt; 

        modalImage.src = imgSrc;
        modalText.textContent = text;
        polaroidModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    polaroidModal.style.display = 'none';
});
