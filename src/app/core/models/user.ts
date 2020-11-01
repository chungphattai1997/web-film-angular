export class User {
    id: number;
    username: string;
    password: string;
    fullname: string;
    address: string;
    email: string;
    phone: string;
    is_admin: boolean;

    constructor(id: number, username: string, password: string, fullname: string, address: string, email: string, phone: string, is_admin: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.is_admin = is_admin;
    }
}