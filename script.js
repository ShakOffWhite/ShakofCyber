const audio = document.getElementById("myAudio");
const audioBtn = document.getElementById("audioBtn");

function toggleAudio() {
	audio.volume = 0.1;
  if (audio.paused) {
    audio.play();
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i> Turn sound off';
    audioBtn.classList.add("active");
  } else {
    audio.pause();
    audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Turn sound on';
    audioBtn.classList.remove("active");
  }
}

const menuItems = document.querySelectorAll('.neon-menu li');
const audioElements = document.querySelectorAll('.neon-menu audio');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Удаляем класс "active" у всех элементов списка
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Добавляем класс "active" только для выбранного элемента
    item.classList.add('active');
    
    // Остановить воспроизведение всех аудиофайлов
    audioElements.forEach(audio => {
      audio.pause();
    });
    
    // Воспроизвести соответствующий аудиофайл
    audioElements[index].currentTime = 0;
    audioElements[index].play();
  });
});

const gif = document.getElementById('gif');
let x = 0;
let y = 0;
let xVelocity = 2;
let yVelocity = 2;

function animate() {
  x += xVelocity;
  y += yVelocity;

  if (x + gif.offsetWidth > window.innerWidth || x < 0) {
    xVelocity *= -1;
  }

  if (y + gif.offsetHeight > window.innerHeight || y < 0) {
    yVelocity *= -1;
  }

  gif.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();

	










