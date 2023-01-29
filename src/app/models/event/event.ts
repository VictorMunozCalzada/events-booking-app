export class Event {
    private _id : number;
    private _name :string;
    private _type :string;
    private _date :string;
    private _location :string;
    private _price :number;

    constructor(id:number, name:string, type:string, date:string, location:string, price:number){
        this._id=id;
        this._name=name;
        this._type=type;
        this._date=date;
        this._location=location;
        this._price=price;
    }

    public get id(): number{
        return this._id;
    }

    public get name(): string{
        return this._name;
    }

    public get type(): string{
        return this._type;
    }

    public get date(): string{
        return this._date;
    }

    public get location(): string{
        return this._location;
    }

    public get price(): number{
        return this._price;
    }

    public set name(value){
        this._name=value;
    }

    public set type(value){
        this._type=value;
    }

    public set date(value){
        this._date=value;
    }

    public set location(value){
        this._location=value;
    }

    public set price(value){
        this._price=value;
    }


}


