import { application } from "../../../assets/javascript/application.js";
import { newDate } from "../../../assets/javascript/methods.js";
import { idGenerator } from "../../../assets/javascript/unique-identifier.js";

export function Post(text, user){
    this.text = text,
    this.date = newDate(),
    this.id = idGenerator(),
    this.author = user
    this.queue = Date.now(),
    this.category = null,
    this.tag = null,
    this.cover = null,
    this.like = 0,
    this.comment = 0,
    this.view = 0,
    this.isPublish = true

}