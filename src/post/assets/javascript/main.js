import { application } from "../../../assets/javascript/application.js";
import { storageManager_get } from "../../../assets/javascript/storage-manger.js";
import { listener_addNewPost } from "./listeners-manager.js";
import { template_post } from "./template.js";
import { isUserLogin } from "./userChecking.js";

isUserLogin()

// Add event listener
document.getElementById('submitPost').addEventListener('click', listener_addNewPost)

// render all post
function render_allPosts(){
    // Get all post form local-storage
    let div = document.getElementById('massageBox')
    const posts = storageManager_get(application.section.postManager.ls.name)
    for (let i = 0; i < posts.length; i++) {
        div.innerHTML += template_post(posts[i])

    }


}; render_allPosts()