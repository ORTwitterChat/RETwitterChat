import { status_add } from "../../../assets/javascript/application-status-manager.js"
import { storageManager_get } from "../../../assets/javascript/storage-manger.js";
import { application } from "../../../assets/javascript/application.js"

export function isUserLogin(){
    //! Username Validation
    const loginLogs = {
        refreshing: storageManager_get(application.status.ls.name).at(-1),
        redirection: storageManager_get(application.status.ls.name).at(-2),
        successLogin: storageManager_get(application.status.ls.name).at(-3)

    };

    // Username Checking
    if(
        !(
            loginLogs.refreshing.user !== application.status.value.user.anonymous &&
            loginLogs.redirection.user !== application.status.value.user.anonymous &&
            loginLogs.successLogin.user !== application.status.value.user.anonymous
        )
    ) { redirectUserToAuthPage(); return }

    // Operation Checking
    if (
        !(
            loginLogs.refreshing.operation === application.status.value.operation.refreshPage &&
            loginLogs.redirection.operation === application.status.value.operation.redirect &&
            (
                loginLogs.successLogin.operation === application.status.value.operation.login.success ||
                loginLogs.successLogin.operation === application.status.value.operation.signup.success
            )
        )
    ) { redirectUserToAuthPage(); return }

    // Section Checking
    if (
        !(
            loginLogs.refreshing.location === application.status.value.location.postManager &&
            loginLogs.redirection.location === application.status.value.location.postManager &&
            loginLogs.successLogin.location === application.status.value.location.loginSignup
        )
    ) { redirectUserToAuthPage(); return }

    // If all thing ok
    return
}

function redirectUserToAuthPage(){
    // Set Application Status
    status_add(application.status.now.user, application.status.value.operation.accessTo.forbidden, application.status.value.location.postManager)
    // Show the message to the user
    silverBox({
        alertIcon: "error",
        text: "⛔ You must first login to our site ⛔",
        centerContent: true,
        cancelButton: {
            text: "OK"
        }
    })
    setTimeout(() => {
        // Set Application Status
        status_add(application.status.now.user, application.status.value.operation.redirect, application.status.value.location.postManager)
        window.location.href = '/src/auth/'

    }, 2000)
}