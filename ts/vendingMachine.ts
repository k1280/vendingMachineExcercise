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
    constructor(public product: CocaCola) {

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new CocaCola()));
    cells = ko.observableArray([]);
    acceptedCoins: Quarter[] = [new Quarter()];
    // pureComputer will calculate automatically when one of the observable metioned in the expression changes
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);


    set size(giveSize: VendingMachineSize) {
        for (let index = 0; index < giveSize; index++) {
            let product = productFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we are out of that product!");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100)) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}