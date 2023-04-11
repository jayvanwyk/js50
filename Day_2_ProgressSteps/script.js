const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentIndex = 1;

function updateButtons(){
    prev.disabled = currentIndex === 1;
    next.disabled = currentIndex === circles.length;
}

function updateActiveStep(){
    circles.forEach((circle, idx)=>{
        if(idx < currentIndex){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    const totalActive = document.querySelectorAll('.active');
    progress.style.width = `${((totalActive.length-1)/(circles.length-1))*100}%`;
}
function updateProgress(){

}
function updateCurrentIndex(isIncrease = true){
    if(isIncrease){
        if(currentIndex < circles.length){
            currentIndex++;
        }
    }else{
        if(currentIndex > 1){
            currentIndex--;
        }
    }
    updateActiveStep();
    updateProgress();
    updateButtons();
}



prev.addEventListener('click', ()=> updateCurrentIndex(false));
next.addEventListener('click', () => updateCurrentIndex());

