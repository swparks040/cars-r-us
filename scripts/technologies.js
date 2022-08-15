import {getTechnologies, setTechnology} from "./database.js"

const technologies = getTechnologies()

export const TechnologyStyles = () => {
    let html = `<select name="technologies" id="technologies">
    <option value="0">Prompt to select resource...</option>`
    const listItems = technologies.map(technology => {
        return `<option value="${technology.id}">${technology.style}</option>`
    })
    html += listItems.join("")
    html += "</select>"  
    return html    
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "technologies") {
            setTechnology(parseInt(changeEvent.target.value)) 
        }
    }
)