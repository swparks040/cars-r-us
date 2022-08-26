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
    //modify total cost based on type. 
    // const costPlusType = (vehicleType, vehicleCost) => {
    //     return 0
    // }
    
    let totalCost = 
    foundInterior.price +
    foundTechnology.price +
    foundWheel.price +
    foundPaint.price +
    foundType.price;
    
    // let overallPrice = costPlusType(foundType, totalCost) => {
    //     if (foundType.style === "SUV") {
    //     return totalCost * 1.5
    // } else if (foundType.style === "Truck") {
    //     return totalCost * 2.25
    // }
    //     return totalCost
    // }

    const costString = totalCost.toLocaleString("en-US", {
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