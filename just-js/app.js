const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler); //Adds listener to delete button

function showModalHandler() {
    if (modal) {
        return;
    }
    //Modal
    modal = document.createElement('div');
    modal.className = 'modal';

    const modalText = document.createElement('p');
    modalText.textContent = 'Are you sure?';

    const modalCancelAction = document.createElement('button'); //Cancel button
    modalCancelAction.textContent = 'Cancel';
    modalCancelAction.className = 'btn btn--alt';
    modalCancelAction.addEventListener('click', closeModalHandler);

    const modalConfirmAction = document.createElement('button'); //Confirm button
    modalConfirmAction.textContent = 'Confirm';
    modalConfirmAction.className = 'btn';
    modalConfirmAction.addEventListener('click', closeModalHandler)

    modal.append(modalText);
    modal.append(modalCancelAction);
    modal.append(modalConfirmAction);

    document.body.append(modal);

    //Backdrop
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', closeModalHandler);

    document.body.append(backdrop);
}

function closeModalHandler() { //remove modal  overlay 
    modal.remove();
    modal = null;

    backdrop.remove();
    backdrop = null;
}