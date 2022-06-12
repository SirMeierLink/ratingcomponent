const card = document.querySelector('.card');
const thank_you = document.querySelector('.thank-you');
const rating_numbers = document.querySelectorAll('.rating-numbers div');
let user_choice = document.querySelector('.user_selection');
const btn = document.querySelector('button');

// Display message to user to select number to submit feedback
function displayMessage() {
    const message = document.querySelector('.must-select');
    message.classList.toggle('hide');
}

// Having only one of the numbers active
rating_numbers.forEach( number => {
    number.addEventListener('click', () => {
        
        rating_numbers.forEach ( remove_active => {
            remove_active.classList.remove('active');
        });
        
        number.classList.add('active');
    });
} );

// Create action after pressing the button to display thank you
btn.addEventListener('click', ()=> {

    const active_number = document.querySelector('.active');

    if (active_number) {
        card.classList.add('hide');
        thank_you.classList.remove('hide');
        user_choice.textContent = `You selected ${active_number.textContent} out of 5`
    } else {
        displayMessage();
    }
    setTimeout(displayMessage, 2_000);
    
});

