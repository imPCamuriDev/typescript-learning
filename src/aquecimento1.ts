interface Orders {
    order_id: number;
    order: string;
    orderDate: string;
    price: number;
}

interface User {
    readonly personName:string;
    email:string;
    password:string;
    orders?: Orders[];
}

interface Seller {
    yourProducts:string[];
}

let user1:User & Seller = {
    personName: "Pedro G.",
    email: "pedrogabriel@gmail.com",
    password: "12345",
    orders: [
        {
            order_id: 1,
            order: "Notebook",
            orderDate: "18/03/2009",
            price: 3500,
        }
    ],
    yourProducts: ["iPhone", "Tablet"]
}

console.log(user1)
