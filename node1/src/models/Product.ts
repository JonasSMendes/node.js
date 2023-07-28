type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title:'bolo', price: 10},
    {title:'carne', price: 40},
    {title:'frango', price: 20},
    {title:'torta', price: 70},  
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number):Product[] => {
        return data.filter(item => {
            if(item.price >= price){
                return true
            }else{
                return false
            }
        })
    }
}