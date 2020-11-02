interface IProductList {
    [index: number]: {
        name: string,
        category: string,
        price: number
    }
}
const phoneList: IProductList = [
    {name: "iphone12", category: "Apple", price: 2000}, 
    {name: "Note10", category: "Samsung", price: 2000},
    {name: "P40", category: "Huaway", price: 2000}
];

