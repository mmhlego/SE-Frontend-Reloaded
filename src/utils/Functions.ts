export function ValidatePassword(password: string): string | true {
	if (password.length < 8) return "طول رمز عبود وارد شده باید حداقل 8 کاراکتر باشد.";

	if (!/^.*[0-9].*/.test(password)) return "رمز عبود وارد شده باید شامل حداقل یک عدد باشد.";

	if (!/^.*[a-z].*/.test(password)) return "رمز عبود وارد شده باید شامل حداقل یک حرف کوچک باشد.";

	if (!/^.*[A-Z].*/.test(password)) return "رمز عبود وارد شده باید شامل حداقل یک حرف بزرگ باشد.";

	return true;
}
