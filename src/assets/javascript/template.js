import { application } from "./application.js"
import l from './lib/dom-generator.js';

/**
 * This function by using DOM-Generator create template for login and signup page
 * @returns HTML Node
 */
export function template_logInSignUp(){
    return l({
		tag: "div",
       	attributes: { class: "main" },
		children: [
			{
				tag: "input",
				attributes: { type: "checkbox", id: "chk", 'aria-hidden': "true" },
			},
			{
				tag: "div",
				attributes: { class: "signup" },
			 	children: [
					{
						tag: "form",
						attributes: { id: application.section.logInSignUp.elements.form.signup.id},
						children: [
							{
								tag: "label",
								attributes: { for: "chk", 'aria-hidden': "true"},
								properties: { textContent: "Sing up" },
							},
							{
								tag: "input",
								attributes: { id: application.section.logInSignUp.elements.input.signupUsername.id, type: "text", name: "txt", placeholder: "User name", required: "" },
							},
							{
								tag: "input",
								attributes: { id: application.section.logInSignUp.elements.input.signupPassword.id, type: "password", name: "pswd", placeholder: "Password", required: "",  autocomplete: "false" },
							},
							{
								tag: "button",
								properties: { textContent: "Sing up" },
							},
						]

					}
				]
			},
			{
				tag: "div",
				attributes: { class: "login" },
			 	children: [
					{
						tag: "form",
						attributes: { id: application.section.logInSignUp.elements.form.login.id},
						children: [
							{
								tag: "label",
								attributes: { for: "chk", 'aria-hidden': "true"},
								properties: { textContent: "Log in" },
							},
							{
								tag: "input",
								attributes: { id: application.section.logInSignUp.elements.input.loginUsername.id, type: "text", name: "txt", placeholder: "User name", required: "" },
							},
							{
								tag: "input",
								attributes: { id: application.section.logInSignUp.elements.input.loginPassword.id, type: "password", name: "pswd", placeholder: "Password", required: "",  autocomplete: "false" },
							},
							{
								tag: "button",
								properties: { textContent: "Log in" },
							},
						]

					}
				]
			},
		]
	})
}