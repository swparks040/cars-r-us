import {getPaints, setPaint} from "./database.js"

const paints = getPaints()

export const PaintStyles = () => {
    let html = `<select name="paints" id="paints">
    <option value="0">Prompt to select resource...</option>`
    const listItems = paints.map(paint => {
        return `<option value="${paint.id}">${paint.style}</option>`
    })
    html += listItems.join("")
    html += "</select>"  
    return html    
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paints") {
            setPaint(parseInt(changeEvent.target.value)) 
        }
    }
)