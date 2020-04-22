import * as onLoad from './onload.js'
import * as help from './helpers.js'
import {populateContactTab} from './contactTab.js'
import {populateMenuTab} from './menuTab.js'


onLoad.homeLoad()

help.makeClassEvents("navTab", "click", e => {clearAndPopulate(e)})

const clearAndPopulate = function(e) {
    help.contentDiv.innerHTML = "";
    const source = e.target.id
    if (source.includes("home")) {
        onLoad.homeLoad()
    } else if (source.includes("menu")) {
        populateMenuTab()
    } else if (source.includes("contact")) {
        populateContactTab()
    }
}


