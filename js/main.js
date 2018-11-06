function listOfDistributors() {
    let btn = document.querySelector('.js-btn');
    let list = document.querySelector('.js-list');
    let opened = false;
    btn.addEventListener('click', function() {
        if (!opened) {
            this.classList.add('active');
            list.classList.add('active');
            opened = true;
        }
        else {
            this.classList.remove('active');
            list.classList.remove('active');
            opened = false;
        }
    })
}
listOfDistributors();
