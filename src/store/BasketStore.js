import { makeAutoObservable } from "mobx";

export default class BasketStore {
	constructor() {
		this._orders = [];
		// -- Заставляем класс следить за измененями. Если изменение произошло, класс говорить функциями, у которых есть observer, что произошло изменение, и функция перерендеривается
		makeAutoObservable(this);
	}

	setOrders(announs) {
		this._orders = announs;
	}

	get orders() {
		return this._orders;
	}
}
