class Quarter {
    private value: number = .25;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "img/Quarter.png"
    }
}

class Dime {
    private value: number = .10;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "img/Dime.png"
    }
}

// var coin = new Quarter();
// var value = coin.Value;
// coin.Value = 25;