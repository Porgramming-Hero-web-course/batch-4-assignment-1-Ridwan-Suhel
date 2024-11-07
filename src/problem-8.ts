{
    type User = {
        name: string, 
        age: number, 
        email: string
    }

    // declaring a type for validate keys
    type ValidateType = <T extends User>(obj: T, keys: (keyof T)[]) => boolean;
    
    // creating a function for validatekeys
    const validateKeys : ValidateType = (obj, keys): boolean => {
        // using every method to check my obj has key of keys
        const data : boolean = keys.every((key) => key in obj);
        return data
    }

    const person: User = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}