const contentDiv = document.getElementById("content");
const navBar = document.createElement("nav")

function makeElement(element, id, textContent, parentNode) {
    const newEl = document.createElement(element)
    newEl.id = id;
    newEl.textContent = textContent;
    parentNode.appendChild(newEl);
    return newEl
}

function makeContentElement(element, id, innerHTML) {
    const newEl = document.createElement(element)
    newEl.id = id;
    newEl.innerHTML = innerHTML;
    contentDiv.appendChild(newEl);
    return newEl
}

function makeNavElement(element, id, textContent) {
    const newEl = document.createElement(element)
    newEl.id = id;
    newEl.style.cursor = "pointer";
    newEl.classList.add("navTab")
    newEl.textContent = textContent;
    navBar.appendChild(newEl);
    return newEl
}

function makeClassEvents(cssClass, eventName, eventFunc) {

    const allElements = document.getElementsByClassName(cssClass)

        for (let i = 0; i < allElements.length; i++) {
            allElements[i].addEventListener(eventName, eventFunc)
        }
    
}

export {
    makeClassEvents,
    navBar,
    contentDiv,
    makeElement,
    makeNavElement,
    makeContentElement

}