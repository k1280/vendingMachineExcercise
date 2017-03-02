/// <reference path="./coin.ts" />
/// <reference path="typings/knockout.d.ts"/>
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: CocaCola){

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    paid = ko.observable(0);
    cells = ko.observableArray([]);

set size(giveSize: VendingMachineSize){
    for(let index = 0; index < giveSize; index++){
        let product = productFactory.getProduct();
        this.cells.push(new Cell(product));
    }
}

    acceptedCoins: Quarter[] = [new Quarter()];
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
}