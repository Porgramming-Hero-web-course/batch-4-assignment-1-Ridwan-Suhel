{
    
    type Person = {
        name: string,
        age: number
    }

    // creating a generic function that returns a object property value by argument of property
    const getProperty = <T extends Person, Q extends keyof T>(object: T, property: Q) => {
        return object[property]
    }

    // call the function here with object literal data
    const data = getProperty({ name: "Alice", age: 30}, "name");
    console.log(data)
}