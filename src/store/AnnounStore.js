import { makeAutoObservable } from "mobx";

export default class AnnounStroe {
	constructor() {
		this._announs = [];
		this._page = 1;
		this._totalCount = 0;
		this._limit = 3;
		// -- Заставляем класс следить за измененями. Если изменение произошло, класс говорить функциями, у которых есть observer, что произошло изменение, и функция перерендеривается
		makeAutoObservable(this);
	}

	setAnnouns(announs) {
		this._announs = announs;
	}

	get announs() {
		return this._announs;
	}

	get totalCount() {
		return this._totalCount;
	}

	get page() {
		return this._page;
	}

	get limit() {
		return this._limit;
	}
}
