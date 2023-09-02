import jwt from 'jsonwebtoken';

export function generateToken(userEmail: any, doneFn: any) {
	jwt.sign({ email: userEmail }, 'secretcode', doneFn);
}

export function generateTokenPromise(userEmail: any) {
	const promise = new Promise((resolve, reject) => {
		jwt.sign({ email: userEmail }, 'secretcode', (error: any, token: any) => {
			if (error) {
				reject(error);
			} else {
				resolve(token);
			}
		});
	});
	return promise;
}
