import { getInteriors, getTechnologies, getWheels, getPaints, getTypes, getOrders } from "./database.js";

let interiors = getInteriors()
let technologies = getTechnologies()
let wheels = getWheels()
let paints = getPaints()
let types = getTypes()

const buildOrderListItem = (order) => {
    
    const foundInterior = interiors.find((interior) => {
        return interior.id === order.interiorId;
    })

    const foundTechnology = technologies.find((technology) => {
        return technology.id === order.technologyId;
    })

    const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId;
    })

    const foundPaint = paints.find((paint) => {
        return paint.id === order.paintId;
    })

    const foundType = types.find((type) => {
        return type.id === order.typeId;
    })
    
    const costPlusType = () => {
        for (const type of types) {
            let totalCost = 
            foundInterior.price +
            foundTechnology.price +
            foundWheel.price +
            foundPaint.price +
            foundType.price;
            if (type.style === "SUV") {
                return totalCost * 1.5
            } else if (type.style === "Truck") {
                return totalCost * 2.25
            }
            return totalCost
        }
    }
    
    const costString = costPlusType().toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return `
        <li> Order number ${order.id} costs ${costString} and was placed on ${order.timestamp}</li>
        `;
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}