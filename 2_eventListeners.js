// Event Listeners: 

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() { 
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
        revealBtn.innerHTML = 'Show More'
    
    } else {
         hiddenContent.classList.add('reveal-btn')
         revealBtn.innerHTML = 'Show Less'
        }
}

revealBtn.addEventListener('click', revealContent)

