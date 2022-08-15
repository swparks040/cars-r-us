import {getInteriors, setInterior} from "./database.js"

const interiors = getInteriors()

export const InteriorStyles = () => {
    let html = `<select name="interiors" id="interiors">
    <option value="0">Prompt to select resource...</option>`
    const listItems = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.style}</option>`
    })
    html += listItems.join("")
    html += "</select>"  
    return html    
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interiors") {
            setInterior(parseInt(changeEvent.target.value))        }
    }
)