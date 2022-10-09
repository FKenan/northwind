import { Category } from "./category";
import { ResponseModel } from "./responseMOdel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}