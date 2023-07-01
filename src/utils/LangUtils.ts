import { ProductStates } from "../models/Product";

export function ProductStateToString(state?: number) {
	switch (state) {
		case ProductStates.ComingSoon:
			return "به زودی";
		case ProductStates.AddPending:
			return "در انتظار افزوده شدن";
		case ProductStates.UpdatePending:
			return "در انتظار آپدیت شدن";
		case ProductStates.Available:
			return "موجود";
		case ProductStates.ProductionStopped:
			return "توقف تولید";
	}
	return "";
}
