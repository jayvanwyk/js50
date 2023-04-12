const labels = document.querySelectorAll('.form-control label');
const emailInput=  document.getElementById('emailInput');
labels.forEach(label => {
   label.innerHTML = label.innerText.split('')
       .map((letter, idx)=> `<span style="transition-delay: ${idx*50}ms">${letter}</span>`)
       .join('');
});

emailInput.focus();