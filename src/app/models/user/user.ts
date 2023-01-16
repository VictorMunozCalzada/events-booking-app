export class User {
    private _name :string;
    private _password :string;
    private _role :string;
    private _email :string;
    private _civil_status :string;
    private _gender :string;
    private _interest_info:string;
    private _conditions :string;

    constructor(name:string, password:string, role:string, email:string, civil_status:string, gender:string, interest_info:string, conditions:string){
        this._name=name;
        this._password=password;
        this._role=role;
        this._email=email;
        this._civil_status=civil_status;
        this._gender=gender;
        this._interest_info=interest_info;
        this._conditions=conditions;
    }

    public get name(): string{
        return this._name;
    }
    public get password(): string{
        return this._password;
    }
    public get role(): string{
        return this._role;
    }
    public get email(): string{
        return this._email;
    }
    public get civil_status(): string{
        return this._civil_status;
    }
    public get gender(): string{
        return this._gender;
    }
    public get interest_info(): string{
        return this._interest_info;
    }
    public get conditions(): string{
        return this._conditions;
    }
}
