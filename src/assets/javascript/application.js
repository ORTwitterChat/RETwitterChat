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
                    
                }
            },
            location:{
                loginSignup: 'login-signup',
                root: '/'
        
            },
            user: {
                name: 'anonymous-user',
        
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
    css: {
        id: 'main-css-file-manager'
        
    },
    section: {
        logInSignUp: {
            css: {
                filePath: './assets/style/log_in-sign_up.css'

            },
            elements: {
                input: {
                    loginUsername: {id: 'input-login-username'},
                    loginPassword: {id: 'input-login-password'},
                    signupUsername: {id: 'input-signup-username'},
                    signupPassword: {id: 'input-signup-password'}

                },
                form: {
                    login: {id: 'form-login'},
                    signup: {id: 'form-signup'}

                }
            },
            ls: {
                name: 'DB_Users'

            },
            regex: {
                user: new RegExp('/^[a-zA-Z0-9]{1, 50}$/'),
                password: new RegExp('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/')

            }
            
        },
    }
}