const contentDiv = document.getElementById("content");
const navBar = document.createElement("nav")



function makeContentElement(element, id, textContent) {
    const newEl = document.createElement(element)
    newEl.id = id;
    newEl.textContent = textContent;
    contentDiv.appendChild(newEl);
    return newEl
}

function makeNavElement(element, id, textContent) {
    const newEl = document.createElement(element)
    newEl.id = id;
    newEl.textContent = textContent;
    navBar.appendChild(newEl);
    return newEl
}

export {
    navBar,
    contentDiv,
    makeNavElement,
    makeContentElement

}