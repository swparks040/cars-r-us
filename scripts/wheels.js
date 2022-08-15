import {getWheels, setWheel} from "./database.js"

const wheels = getWheels()

export const WheelStyles = () => {
    let html = `<select name="wheels" id="wheels">
    <option value="0">Prompt to select resource...</option>`
    const listItems = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.style}</option>`
    })
    html += listItems.join("")
    html += "</select>"  
    return html    
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "wheels") {
            setWheel(parseInt(changeEvent.target.value)) 
        }
    }
)