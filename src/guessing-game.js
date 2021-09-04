class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        return Math.round((this.start + this.end) / 2);
    }

    lower() {
        this.end = this.guess();
    }

    greater() {
        this.start = this.guess();
    }
}

module.exports = GuessingGame;
