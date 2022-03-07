let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileDscrp = document.querySelector('.profile__description');
    profileName = nameInput.value;
    profileDscrp = jobInput.value;
    profileName.textContent = nameInput.value;
    profileDscrp.textContent = jobInput.value;
    formElement.addEventListener('submit', formSubmitHandler);
}

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let saveButton = document.querySelector('.popup__save-button');

editButton.addEventListener('click', function () {
    formElement.classList.toggle('popup_opened');
});
closeButton.addEventListener('click', function () {
    formElement.classList.toggle('popup_opened');
});
saveButton.addEventListener('click', function () {
    formElement.classList.toggle('popup_opened');
});