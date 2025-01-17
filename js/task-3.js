const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
function onInputChange() {
    const trimName = nameInput.value.trim();
    if (trimName === '') {
        nameOutput.textContent = 'Anonymous'
    } else {
        nameOutput.textContent = trimName;
    }
}
nameInput.addEventListener('input', onInputChange);
