import { render_logInSignUp } from "./render.js";
import { application } from './application.js';
import { storageManager_get, storageManager_add } from "./storage-manger.js";
import { idGenerator } from "./unique-identifier.js";
import { newDate } from "./methods.js";
import { status_add } from "./application-status-manager.js";

/**
 * This function load and rendering first-page: login and signup
 */
export function listener_documentLoad(){
    //TODO if status ...

    // 1) Redirect to login-page
    status_add(application.status.now.user, application.status.value.operation.redirect, application.status.value.location.loginSignup)
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
            // Set Application Status
            status_add(application.status.now.name, application.status.value.operation.signup.usernameExist, application.status.value.location.loginSignup)
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
    const newUser = {
        username: user.name,
        password: user.password,
        id: idGenerator(),
        date: newDate()
    }
    // Set Application Status
    status_add(newUser.username, application.status.value.operation.signup.success, application.status.value.location.loginSignup)
    // Add data to local-storage
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
                // Set Application Status
                status_add(user.name, application.status.value.operation.login.success, application.status.value.location.loginSignup)
                // Show message to user
                silverBox({
                    title: {
                        text: "Success",
                        alertIcon: "success"
                    },
                    text: "🟢 You have successfully login the site. 🟢"
                })
                //TODO Render next page: Post Menu
                return

            // Enter the wrong password
            } else{
                // Set Application Status
                status_add(application.status.now.user, application.status.value.operation.login.wrongPassword, application.status.value.location.loginSignup)
                // Show the message to the user
                silverBox({
                    alertIcon: "error",
                    text: "⛔ Wrong password ⛔",
                    centerContent: true,
                    cancelButton: {
                        text: "OK"
                    }
                })
            }
        }
    }

    // 3) If Username don't exist
    // Set Application Status
    status_add(application.status.now.user, application.status.value.operation.login.userNotExist, application.status.value.location.loginSignup)
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