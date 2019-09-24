class AGreatClass {
    constructor(greatNumber) {
        this.greatNumber = greatNumber;
    }

    returnGreatThings() {
        return this.greatNumber;
    }
}

class AnotherGreatClass extends AGreatClass{
    constructor(greatNumber, greatWord) {
        super(greatNumber);

        this.greatWord = greatWord;
    }
    returnGreatThings() {
        let greatNumber = super.returnGreatThings();

        return [greatNumber, this.greatWord];
    }
}

const AGreatObject = new AnotherGreatClass(42, 'adventure');
console.log(AGreatObject.returnGreatThings());