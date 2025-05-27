import { API_AUTH_URL } from "../constants/api";
import { getErrorMessage } from "./errors";

export interface CustomError {
	message: string;
	statusCode?: number;
	details?: string;
}

export const post = async (path: string, data: FormData | object) => {
	const body =
		data instanceof FormData ? Object.fromEntries(data.entries()) : data;
	const response = await fetch(`${API_AUTH_URL}/${path}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const parsedRes = await response.json();

	if (!response.ok) {
		return { error: getErrorMessage(parsedRes) };
	}

	return { error: "", data: parsedRes };
};
