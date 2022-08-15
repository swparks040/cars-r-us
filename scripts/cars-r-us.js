import { InteriorStyles } from "./interiors.js";
import { TechnologyStyles } from "./technologies.js";
import { WheelStyles } from "./wheels.js";
import { PaintStyles } from "./paints.js";
import { TypeStyles } from "./types.js"
import { Orders } from "./orders.js"

let theInteriors = InteriorStyles()
let theTechnologies = TechnologyStyles()
let theWheels = WheelStyles()
let thePaints = PaintStyles()
let theTypes = TypeStyles()

export const carsRUs = () => {
  return `
    <h1>Cars-R-Us</h1>

    <article class="choices">
        </section>       
            <section class="choices__type options">
            <h2>Types</h2>
            ${theTypes}
        </section>
        <section class="choices__interior options">
            <h2>Interiors</h2>
            ${theInteriors}
        </section>
         <section class="choices__technology options">
            <h2>Technologies</h2>
            ${theTechnologies}
         </section>        
        <section class="choices__wheel options">
            <h2>Wheels</h2>
            ${theWheels}
         </section>       
            <section class="choices__paint options">
            <h2>Paints</h2>
            ${thePaints}
         </section>
    </article>

    <article>
            <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
    </article>
  `
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}