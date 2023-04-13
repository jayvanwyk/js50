const eventKey = document.querySelector('#eventKey');
const eventKeyCode = document.querySelector('#eventKeyCode');
const eventCode = document.querySelector('#eventCode');

function updateElementWithSmChild(element, value){
    const sm = element.querySelector('small');
    element.innerHTML = value;
    if(sm)
        element.append(sm);
}
window.addEventListener('keydown', (e)=>{
    updateElementWithSmChild(eventKey, e.key===' '?'space':e.key);
    updateElementWithSmChild(eventKeyCode, e.keyCode);
    updateElementWithSmChild(eventCode, e.code);
});