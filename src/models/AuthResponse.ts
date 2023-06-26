export interface AuthResponse {
	userName: string;
	role: string;
	jwtToken: string;
	expiresIn: number;
}
