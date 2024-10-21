export const application = {
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
            
        }
    }
}