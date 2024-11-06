{

    // creating a type/interface for sumArray function
    type Add = (data: number[]) => number;

    // creating a function for summation all the array of numbers
     const sumArray: Add = (data) => {
        let total: number = 0;
        data.forEach((item: number) => {
            total += item;
        });
        return total;
    }

    // call the function here with a list of number in an array
    // it should return a summation number
    // console.log(sumArray([1, 2, 3, 4, 5]))
}