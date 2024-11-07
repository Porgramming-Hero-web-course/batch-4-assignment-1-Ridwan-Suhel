{
    class Car {
        // creating constructor for initializing with the public properties
        constructor(public make: string, public model: string, public year: number){}

        // creating a method to get the exact car age 
        getCarAge(): number | string{
            const todaysYear : number = new Date().getFullYear();
            if(todaysYear > this.year){
                const carAge: number = todaysYear - this.year;
                console.log(carAge)
                return carAge
            }else {
                const error = `Your provided year ${this.year} is greater than current year ${todaysYear}`;
                console.log(error);
                return error
            }
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge()
}