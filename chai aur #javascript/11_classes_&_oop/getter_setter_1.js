class User {
    constructor(email, password)
    {
        this.email = email
        this.password = password
    }
    // Getters & Setters
    // For email
    get email()
    {
        return this._email.toUpperCase()
    }
    
    set email(value)
    {
        this._email = value
    }

    // For password
    get password()
    {
        // return this._email.toUpperCase()
        return `${this._password}omkar`
    }

    set password(value)
    {
        // this._email = value.toUpperCase()
        this._password = value
    }
}   

const omkar = new User("Omkar@gmail.com", "123")
console.log(omkar.email);
console.log(omkar.password);