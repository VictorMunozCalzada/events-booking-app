export class User {
    private _username :string;
    private _password :string;
    private _role :string;
    private _email :string;
    private _civilStatus :string;
    private _gender :string;
    private _interest_info:string [];

    constructor(username:string, password:string, email:string, civilStatus:string, gender:string, interest_info:string []){
        this._username=username;
        this._password=password;
        this._role="comprador";
        this._email=email;
        this._civilStatus=civilStatus;
        this._gender=gender;
        this._interest_info=interest_info;
    }

    public get username(): string{
        return this._username;
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
        return this._civilStatus;
    }
    public get gender(): string{
        return this._gender;
    }
    public get interest_info(): string [] {
        return this._interest_info;
    }
}
