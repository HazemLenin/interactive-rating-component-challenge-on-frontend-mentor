let form = document.getElementById('form-rate');
let error = document.getElementById('error-container');
let wrapper = document.getElementById('wrapper');
let box = document.getElementById('box');
let rateGiven = document.getElementById('rate-given');

form.onsubmit = e => {
    e.preventDefault();
    const data = new FormData(form);
    const rate = data.get('rate');
    let errorTimeout;

    if (rate == null) {
        try {
            clearTimeout(errorTimeout); // incase user clicked multiple times
        } catch {}
        box.classList.add('error');
        errorTimeout = setTimeout(() => {
            box.classList.remove('error');
    }, 1000)
    } else {
        rateGiven.innerText = rate;
        wrapper.classList.add('flipped');
    }
}