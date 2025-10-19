export function loadAboutPage() {
    const contentArea = document.querySelector('#content')
    //content area

    const headlineSubtext = document.createElement('div');
    headlineSubtext.textContent = `I AM THE ABOUT PAGE`;
    headlineSubtext.id = 'headline-subtext';
    contentArea.appendChild(headlineSubtext)
    //headline subtext

    const bookingButton = document.createElement('button');
    bookingButton.textContent = "Book A Table"
    bookingButton.className = 'booking-button';
    contentArea.appendChild(bookingButton)
    //headline subtext
}

