const shareBtn = document.querySelector('#share-btn');
const btnCircle = document.querySelector('.btn-circle');
const mediaBox = document.querySelector('.media-box');
const triangle = document.querySelector('#triangle');

shareBtn.addEventListener('click', showMe);
shareBtn.addEventListener('keypress', showMe);


function showMe() {
    mediaBox.classList.toggle('show');
    mediaBox.classList.toggle('hide');
    triangle.classList.toggle('show');
    triangle.classList.toggle('hide');

        if(mediaBox.classList.contains('show')) {
            btnCircle.style.backgroundColor = "var(--VeryDarkGrayishBlue)";
        } else {
            btnCircle.style.backgroundColor = "var(--GrayishBlue)";
        }
};