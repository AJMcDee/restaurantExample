import * as help from './helpers.js'

export function populateContactTab(){

    help.makeContentElement("h1", "contactTitle", "Contact Us")
    const contactForm = help.makeContentElement("form", "contactForm", "")

    contactForm.innerHTML = `
    <p class="inputtext" id="nameinput">Name:<br> <input type="text" id="name"></input></p>
    <p class="inputtext" id="phoneinput">Phone number:<br> <input type="text" id="phone"></input></p>
    <p class="inputtext" id="guestnumberinput">Number of people:<br><input type="number" id="numberofguests"></input></p>
    <p class="inputtext" id="dateinput">Reservation date and time:<br> <input type="datetime-local" id="bookingDate"></input></p>
    <p class="inputtext" id="detailsinput">Extra details:<br> <textarea rows="4" cols="30" name="details" form="contactForm"></textarea></p>
    `

    const submitContactForm = help.makeContentElement("button","submitContact","Make Booking")
}
