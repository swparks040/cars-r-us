import {getTypes, setType} from "./database.js"

const types = getTypes()

export const TypeStyles = () => {
    let html = `<select name="types" id="types">
    <option value="0">Prompt to select resource...</option>`
    const listItems = types.map(type => {
        return `<option value="${type.id}">${type.style}</option>`
    })
    html += listItems.join("")
    html += "</select>"  
    return html    
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "types") {
            setType(parseInt(changeEvent.target.value)) 
        }
    }
)