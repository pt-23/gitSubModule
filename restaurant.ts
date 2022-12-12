import {Order, Currency} from "./gitSubModuleSharedLib/merchant"

function createOrder(order: Order) {
    return "Order is, " + JSON.stringify(order);
}
const newOrder: Order = {
    id: "123",
    status: "preparing",
    payment: {
        amount: 12,
        currency: Currency.CAD
    },
    items: [
        {
            id: "123",
            name: "noodles",
            itemCategory: "lunch",
            price: 123,
            unit: 2,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    ],
    createdAt: Date.now(),
    updatedAt: Date.now()
}

console.log(createOrder(newOrder));