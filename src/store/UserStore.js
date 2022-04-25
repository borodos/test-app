import { makeAutoObservable } from "mobx";

export default class UserStroe {
	constructor() {
		this._isAuth = false;
		this._user = {};
		// -- Заставляем класс следить за измененями. Если изменение произошло, класс говорить функциями, у которых есть observer, что произошло изменение, и функция перерендеривается
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}
}
