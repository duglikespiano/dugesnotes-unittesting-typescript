export class User {
	email: any;
	constructor(email: any) {
		this.email = email;
	}
	updateEmail(newEmail: any) {
		this.email = newEmail;
	}
	clearEmail() {
		this.email = '';
	}
}
