const database = {
    interiors: [
        { id: 1, style: "Beige Fabric", price: 1000},
        { id: 2, style: "Charcoal Fabric", price: 1000},
        { id: 3, style: "White Leather", price: 2500},
        { id: 4, style: "Black Leather", price: 3000},
    ],
    technologies: [
        { id: 1, style: "Basic Package", price: 350},
        { id: 2, style: "Navigation Package", price: 1100},
        { id: 3, style: "Visibility Package", price: 1600},
        { id: 4, style: "Ultra Package", price: 2500},
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial Silver", price: 600},
        { id: 2, style: "17-inch Pair Radial Black", price: 750},
        { id: 3, style: "18-inch Pair Spoke Silver", price: 1000},
        { id: 4, style: "18-inch Pari Spoke Black", price: 1500},
    ],
    paints: [
        { id: 1, style: "Silver", price: 2000},
        { id: 2, style: "Midnight Blue", price: 2000},
        { id: 3, style: "Firebrick Red", price: 2000},
        { id: 4, style: "Spring Green", price: 2000},
    ],
    customOrders: [
        {
            id: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            paintId: 1,
            timestamp: 1259039521
        }
    ],
    orderBuilder: {}
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
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