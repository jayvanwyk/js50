const textArea = document.querySelector('textarea');
const tags = document.querySelector('.tags');
let tagItems = [];

textArea.focus();
function processText(content){
    tagItems = content.split(',').filter(tag=>tag.trim() !== '').map(tag=>tag.trim());
    tags.innerHTML = '';
    tagItems.forEach(item => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = item;
        tags.appendChild(span);
    });
}

function choose(){
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(()=>unHighlightTag(randomTag), 100);
    }, 100);

    setTimeout(()=>{
       clearInterval(interval);
       setTimeout(()=>{
           const randomTag = pickRandomTag();
           highlightTag(randomTag);
       }, 100);
    }, 100*times);
}

function pickRandomTag() {
    const tagsElements = document.querySelectorAll('.tag');
    return tagsElements[Math.floor(Math.random() * tagsElements.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}

textArea.addEventListener('keydown', (e)=>{
    processText(e.target.value);
    if(e.key === 'Enter'){
        e.preventDefault();
        setTimeout(()=>{
            textArea.value = null;
            textArea.focus();
            choose();
        }, 10)

    }
})