export let application = {
    status:{
        value:{
            operation:{
                redirect: 'redirecting-to-another-page',
                start: 'application-stating',
                refreshPage: 'refreshing-page',
                signup: {
                    usernameExist: 'signup-user-is_exist',
                    success: 'signup-user-success'
        
                },
                login:{
                    wrongPassword: 'login-user-wrong_password',
                    userNotExist: 'login-user-username_not_exist',
                    success: 'login-user-success'
                    
                },
                accessTo: {
                    forbidden: 'access-to-forbidden-page'
                    
                }
            },
            location:{
                loginSignup: 'login-signup',
                root: '/',
                postManager: 'post-manager'
        
            },
            user: {
                anonymous: 'anonymous-user',
        
            },
        },
        now: {
            user: 'anonymous-user',
            location: '/',
            operation: 'init'

        },
        ls: {
            name: 'DB_application-status'

        }
    },
    section: {
        logInSignUp: {
            ls: {
                name: 'DB_Users'

            },
        },
        postManager: {
            ls: {
                name: 'DB_Posts'
                
            }
        }
    }
}