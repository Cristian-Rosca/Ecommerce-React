import { Product } from "./Product";

export type Category = {
    id: number;
    title: string;
    imageUrl: string;
    products: Product[];
    route: string
}