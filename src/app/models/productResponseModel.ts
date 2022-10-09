import { Product } from "./product";
import { ResponseModel } from "./responseMOdel";

export interface ProductResponseModel extends ResponseModel{
    data:Product[]
}