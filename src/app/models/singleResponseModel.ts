import { ResponseModel } from "./responseModel";


// responseModel'i Token'i da ersiebilecek sekilde genislettik
export interface SingleResponseModel<T> extends ResponseModel{
    data:T

}