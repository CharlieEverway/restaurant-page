import ramenImg from './ramen.png';

export function loadHomePage() {
    const contentArea = document.querySelector('#content')
    //content area
    const homeContentArea = document.createElement('div');
    homeContentArea.id = "home-content"
    contentArea.appendChild(homeContentArea)
    //home content area

    const headlineContent = document.createElement('div');
    headlineContent.id = "headline-content";
    homeContentArea.appendChild(headlineContent);

    const headline = document.createElement('div');
    headline.textContent = "Enjoy Our Delicious Ramen."
    headline.id = 'headline';
    headlineContent.appendChild(headline)
    //headline


    const headlineSubtext = document.createElement('div');
    headlineSubtext.textContent = `
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    headlineSubtext.id = 'headline-subtext';
    headlineContent.appendChild(headlineSubtext)
    //headline subtext

    const bookingButton = document.createElement('button');
    bookingButton.textContent = "Book A Table"
    bookingButton.className = 'booking-button';
    headlineContent.appendChild(bookingButton)
    //headline subtext

    const headerImg = document.createElement('img');
    headerImg.src = ramenImg;
    headerImg.id = 'header-img';
    homeContentArea.appendChild(headerImg);
    //header img


}

