import { defineReactive } from "defineReactive";

export function Wue(arg) {
	this.data = arg.data;
	defineReactive(this.data);
}


