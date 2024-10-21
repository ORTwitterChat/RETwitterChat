import { render_logInSignUp } from "./render.js";
import { application } from './application.js';
import { storageManager_get, storageManager_add } from "./storage-manger.js";
import { idGenerator } from "./unique-identifier.js";

/**
 * This function load and rendering first-page: login and signup
 */
export function listener_documentLoad(){
    // 1) Redirect to login-page
    render_logInSignUp()

}

/**
 * This function managing user signup
 * @param {EventListener} e Default event listener object
 * @returns 
 */
export function listener_signup(e){
    // 0) Prevent default ...
    e.preventDefault()

    // 1) Get User inputs
    const user = {
        name: document.getElementById(application.section.logInSignUp.elements.input.signupUsername.id).value,
        password: document.getElementById(application.section.logInSignUp.elements.input.signupPassword.id).value

    }

    //TODO -) Validation
    // code ...
    
    // 2) Check for >>> Is Username exist
    let users = storageManager_get(application.section.logInSignUp.ls.name)
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.name){
            // Show the message to the user
            silverBox({
                alertIcon: "error",
                text: "⛔ Username already exists ⛔",
                centerContent: true,
                cancelButton: {
                    text: "OK"
                }
            })
            return
            
        }
    }
    
    // 3) Add new user to local-storage
    const date = new Date()
    const newUser = {
        username: user.name,
        password: user.password,
        id: idGenerator(),
        date: {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    }
    storageManager_add(application.section.logInSignUp.ls.name, newUser)
    // Show message to user
    silverBox({
        title: {
            text: "Success",
            alertIcon: "success"
        },
        text: "🟢 Your registration was successful. 🟢"
    })

    //TODO render_postMenu()
    setTimeout(() => { document.body.innerHTML = ''; }, 2000);
}

/**
 * This function managing user login
 * @param {EventListener} e Default event listener object
 * @returns 
 */
export function listener_login(e){
    e.preventDefault()

    const user = {
        name: document.getElementById(application.section.logInSignUp.elements.input.loginUsername.id).value,
        password: document.getElementById(application.section.logInSignUp.elements.input.loginPassword.id).value

    }

    //TODO -) Validation
    // code ...
    
    // 2) Check for >>> Is Username exist
    let users = storageManager_get(application.section.logInSignUp.ls.name)
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.name){
            if (users[i].password === user.password){
                // Show message to user
                silverBox({
                    title: {
                        text: "Success",
                        alertIcon: "success"
                    },
                    text: "🟢 You have successfully login the site. 🟢"
                })
                //TODO -) render_postMenu()
                return

            // Enter the wrong password
            } else{
                // Show the message to the user
                silverBox({
                    alertIcon: "error",
                    text: "⛔ Invalid password ⛔",
                    centerContent: true,
                    cancelButton: {
                        text: "OK"
                    }
                })
            }
        }
    }

    // 3) If Username don't exist
    // Show the message to the user
    silverBox({
        alertIcon: "error",
        text: "⛔ Username not exist, Pleas first signup ⛔",
        centerContent: true,
        cancelButton: {
            text: "OK"
        }
    })
}