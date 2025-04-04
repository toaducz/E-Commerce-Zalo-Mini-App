export interface Flower{
    id: number;
    name:string;
    price:number;
    source:string;
    category:Category.name;
    available:boolean;
};

export interface Category {
    id: number;
    title:string;
    name: string;
    image: string;
  }  

export interface CartItem{
    id:number;
    flower: Flower;
    count:number;
}

export interface News{
    id:number;
    title:string;
    date:date;
    content:string;
    link?:string;
    image:string;
}

export type cart = CartItem[];