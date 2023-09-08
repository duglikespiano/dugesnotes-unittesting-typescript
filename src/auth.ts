import jwt from 'jsonwebtoken';

export function generateToken(userEmail: any, doneFn: any) {
	jwt.sign({ email: userEmail }, 'secret123', doneFn);
}
