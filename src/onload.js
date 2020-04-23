import * as help from './helpers.js'

help.contentDiv.insertAdjacentElement("beforebegin", help.navBar)

const homeTab = help.makeNavElement("a", "homeTab", "Home")
const menuTab =  help.makeNavElement("a", "menuTab", "Menu")
const contactTab = help.makeNavElement("a", "contactTab", "Contact")

// homeTab.addEventListener("click", e => {
//     console.log(e)
// })

function homeLoad() {
    const title = help.makeContentElement("h1", "title", "La Piazza Restaurant")

    const promoCopy = `Mamma mia!! What a great place to get some pizza!`

    const promoText = help.makeContentElement("p", "promoCopy", promoCopy);

    const openingHoursInfo = `<h4>Opening Hours</h4>
    Tuesday - Friday: 11am - 10pm<br>
    Saturday: 11am - Midnight<br>
    Sunday: 11am - 8pm<br>`

    help.makeContentElement("p", "openinghours", openingHoursInfo)


}

export {
    homeLoad,
}