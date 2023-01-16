export class Event {
    private _name :string;
    // private _type :string;
    // private _date :string;
    // private _location :string;
    private _price :number;

    // constructor(name:string, type:string, date:string, location:string, price:number){
    //     this._name=name;
    //     this._type=type;
    //     this._date=date;
    //     this._location=location;
    //     this._price=price;
    // }

    constructor(name:string, price:number){
        this._name=name;
        this._price=price;
    }


    public get name(): string{
        return this._name;
    }

    // public get type(): string{
    //     return this._type;
    // }

    // public get date(): string{
    //     return this._date;
    // }

    // public get location(): string{
    //     return this._location;
    // }

    public get price(): number{
        return this._price;
    }
}


