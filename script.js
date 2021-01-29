const accordionQuestion = document.getElementsByClassName('questions__question');
for(i = 0; i < accordionQuestion.length; i++) {
    accordionQuestion[i].addEventListener('click', function() {
        this.classList.toggle('accordionActive')
    })
}
