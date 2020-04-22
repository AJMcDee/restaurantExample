import * as help from './helpers.js'

help.contentDiv.insertAdjacentElement("beforebegin", help.navBar)

const homeTab = help.makeNavElement("a", "homeTab", "Home")
const menuTab =  help.makeNavElement("a", "menuTab", "Menu")
const contactTab = help.makeNavElement("a", "contactTab", "Contact")

const title = help.makeContentElement("h1", "title", "La Piazza Restaurant")

const pizzaImg = help.makeContentElement("img", "pizza", "");
document.getElementById("pizza").src = "https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg";

const promoCopy = "Mamma mia! What a great place to get some pizza! Don't miss out on this incredible experience, with each pizza crafted especially by the Italian masters themselves. Our restaurant not only provides an exceptional culinary experience, but also delivers a romantic setting perfect for that special night out."

const promoText = help.makeContentElement("p", "promoCopy", promoCopy);

export {
    title,
    pizzaImg,
    promoText,
}