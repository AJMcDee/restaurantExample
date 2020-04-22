import * as help from './helpers.js'

export function populateContactTab(){

    help.makeContentElement("h1", "contactTitle", "Contact Us")
    const contactForm = help.makeContentElement("form", "contactForm", "")

    contactForm.innerHTML = `
    Name: <input type="text" id="name"></input><br>
    Phone number: <input type="text" id="phone"></input><br>
    Number of people:<input type="number" id="phone"></input><br>
    Reservation date: <input type="date" id="bookingDate"></input><br><br>
    Extra details: <input type="text" id="phone"></input><br>
    `

    const submitContactForm = help.makeContentElement("button","submitContact","Make Booking")
}
