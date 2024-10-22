import { application } from "../../../assets/javascript/application.js";
import { status_add } from "../../../assets/javascript/application-status-manager.js";
import { listener_login, listener_signup } from "./listeners-manager.js";

// Start status
status_add(application.status.value.user.anonymous, application.status.value.operation.start, application.status.value.location.root)
status_add(application.status.now.user, application.status.value.operation.redirect, application.status.value.location.loginSignup)

// Set refreshing listener
window.onbeforeunload = function(){
    status_add(application.status.now.user, application.status.value.operation.refreshPage, application.status.now.location)
      
}

// Add default listeners
document.getElementById('form-sing_up').addEventListener('submit', listener_signup);
document.getElementById('form-log_in').addEventListener('submit', listener_login);