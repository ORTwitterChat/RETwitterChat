import { application } from "../../../assets/javascript/application.js";
import { storageManager_add } from "../../../assets/javascript/storage-manger.js";
import { Post } from "./post.js";

export function listener_addNewPost(){
    // Create new post
    const post = new Post(document.getElementById("postMessage").value, application.status.now.name)

    // Add new post to local-storage
    console.log(application.status.now.name, post)
    storageManager_add(application.section.postManager.ls.name, post)

}