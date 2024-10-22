import { status_add } from './application-status-manager.js';
import { application } from './application.js';
import { listener_documentLoad } from './listeners-manager.js';

// Start status
status_add(application.status.value.user.name, application.status.value.operation.start, application.status.value.location.root)

// Set refreshing listener
window.onbeforeunload = function(){
    status_add(application.status.now.user, application.status.value.operation.refreshPage, application.status.now.location)
      
}

// Load first page for user
document.addEventListener("DOMContentLoaded", listener_documentLoad);