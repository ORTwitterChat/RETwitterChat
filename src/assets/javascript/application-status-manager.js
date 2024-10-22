import { application } from  "./application.js";
import { newDate } from "./methods.js";
import { storageManager_add } from "./storage-manger.js";
import { idGenerator } from "./unique-identifier.js";

/**
 * This function store every move in application
 * @param {string} user Username
 * @param {string} operation User operation
 * @param {string} section With section is user on
 */
export function status_add(user, operation, location){
    // 1) Create new status
    const status = {
        user: user,
        operation: operation,
        location: location,
        id: idGenerator(),
        date: newDate()

    }

    // 2) Set last user data
    application.status.now.user = user
    application.status.now.operation = operation
    application.status.now.location = location

    // END) Add new status
    storageManager_add(application.status.ls.name, status)
}