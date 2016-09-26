import {Observable} from "data/observable";
import {Square} from "nativescript-square";

export class HelloWorldModel extends Observable {
  public message: string;
  private square: Square;

  constructor() {
    super();

    this.square = new Square();
    this.message = this.square.message;
  }
}