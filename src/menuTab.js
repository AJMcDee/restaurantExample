import * as help from './helpers.js'

class MenuItem {
    constructor(name,details,price) {
        this.name = name
        this.details = details
        this.price = price
    }

        insert() {
            const newRow = help.makeElement("tr", "", "", menuTable)
            for (const item in this) {
                const newCell = help.makeElement("td", "", this[item], newRow)
            }
        }
}

export function populateMenuTab(){

    help.makeContentElement("h1", "menuTitle", "Menu")
    const menuTable = help.makeContentElement("table", "menuTable", "")
    menuTable.innerHTML = `<tr id="columnTitles"><td>Item<td>Description<td>Price</tr>`


    let item1 = new MenuItem("Tiramisu", "Delicious tiramisu is so delicious!", "$3.99").insert()

    let item2 = new MenuItem("Spaghetti Bolognese", "Mmmm a classic from mama's kitchen", "$9.99").insert()

    let item3 = new MenuItem("Carbonara", "ITSA SO CREAMY", "$11.80").insert()

}
