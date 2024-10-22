import { idGenerator } from "../../../assets/javascript/unique-identifier.js";
import { newDate } from "../../../assets/javascript/methods.js";

export function User(username, password,){
    this.username = username,
    this.password = password,
    this.id = idGenerator(),
    this.date = newDate()

}