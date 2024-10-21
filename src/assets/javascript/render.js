import { application } from "./application.js"
import { listener_signup, listener_login } from "./listeners-manager.js"
import { template_logInSignUp } from "./template.js"

/**
 * This function manage rendering of login and signup page
 * - Inject HTML DOM
 * - Implement styles
 * - Active event listeners
 */
export function render_logInSignUp(){
    // 1) Change Styles
    document.getElementById(application.css.id).href = application.section.logInSignUp.css.filePath

    // 2) Change DOM
    document.body.appendChild(template_logInSignUp())

    // 3) Add Listeners
    document.getElementById(application.section.logInSignUp.elements.form.signup.id).addEventListener('submit', listener_signup);
    document.getElementById(application.section.logInSignUp.elements.form.login.id).addEventListener('submit', listener_login);

}