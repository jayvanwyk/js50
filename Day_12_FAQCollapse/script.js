const data = [
    {question: `Why shouldn't we trust atoms?`, answer: `They make up everything`},
    {question: `What do you call someone with no body and no nose?`, answer: `Nobody knows` },
    {question: `What's the object oriented way to become wealthy?`, answer: `Inheritance`},
    {question: `How many tickles does it take to tickle an octopus`, answer: `Ten-tickles`},
    {question: `What is 1 + 1?`, answer: 'Depends on who you are asking'}
];

const faqContainer = document.querySelector('.faq-container');

function loadContent(){
    data.forEach((q, idx)=>{
        const faq = document.createElement('div');
        faq.classList.add('faq');
        const questionText= document.createElement('h3');
        questionText.classList.add('title');
        questionText.innerText = q.question;
        const questionAnswer = document.createElement('p');
        questionAnswer.classList.add('faq-text');
        questionAnswer.innerText = q.answer;
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('faq-toggle');
        button.addEventListener('click', ()=>{
           faq.classList.toggle('active');
        });
        const expand = document.createElement('i');
        expand.classList.add('fas');
        expand.classList.add('fa-chevron-down');
        const close = document.createElement('i');
        close.classList.add('fas');
        close.classList.add('fa-times');
        button.appendChild(expand);
        button.appendChild(close);
        faq.appendChild(questionText);
        faq.appendChild(questionAnswer);
        faq.appendChild(button);
        faqContainer.appendChild(faq);
    });
}

loadContent();