export interface Product{  // bu alanlar backend ile uyumlu olmalı.büyük küçük harf ayrımı yok
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number
    unitPrice:number
}