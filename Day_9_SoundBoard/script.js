const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function createSounds(){
    console.log('Adding sounds');
    soundNames.forEach(soundName=>{
       const audioElement = new Audio(`./sounds/${soundName}.mp3`);
       audioElement.id = `${soundName}Sound`;
       audioElement.title = soundName;
       audioElement.autoplay = false;
       audioElement.loop = false;
       document.querySelector('body').appendChild(audioElement);

       const soundButton = document.createElement('button');
       soundButton.type = 'button';
       soundButton.classList.add('btn');
       soundButton.innerText = soundName.toUpperCase();
       soundButton.title = soundName;
       soundButton.addEventListener('click', (buttonClicked)=>{
           let match = null;
           document.querySelectorAll('audio').forEach(audioItem=>{
               if(audioItem.title === buttonClicked.target.title)
                   match = audioItem;
               audioItem.pause();
           });
           if(match){
               match.currentTime = 0;
               match.play();
           }
       });
       document.querySelector('.container').appendChild(soundButton);
    });
}

createSounds();