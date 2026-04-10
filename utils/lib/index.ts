import { AUTH_EMAIL, AUTH_TOKEN_KEY } from "@constants";
import Cookies from "js-cookie";

export const signOut = () => {
	Cookies.remove(AUTH_TOKEN_KEY, { path: "/" });
	Cookies.remove(AUTH_EMAIL, { path: "/" });
	window.location.pathname = "/user/login";
};

export const getFirstCharacter = (str: string | undefined) => {
	return str?.charAt(0);
};
