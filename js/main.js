const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};


const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});