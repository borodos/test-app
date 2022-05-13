import { makeAutoObservable } from "mobx";

export default class UserStroe {
	constructor() {
		this._isAuth = false;
		this._basketMessages = 0;
		this._userMessages = 0;
		this._user = {};
		this._userInfo = {};
		// -- Заставляем класс следить за измененями. Если изменение произошло, класс говорить функциями, у которых есть observer, что произошло изменение, и функция перерендеривается
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setBasketMessages(messages) {
		this._basketMessages = messages;
	}

	setUserMessages(messages) {
		this._userMessages = messages;
	}

	setUser(user) {
		this._user = user;
	}

	setUserInfo(userInfo) {
		this._userInfo = userInfo;
	}

	get isAuth() {
		return this._isAuth;
	}

	get basketMessages() {
		return this._basketMessages;
	}

	get userMessages() {
		return this._userMessages;
	}

	get user() {
		return this._user;
	}

	get userInfo() {
		return this._userInfo;
	}
}
