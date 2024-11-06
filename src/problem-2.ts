{

    // creating a type for remove duplicate function 
    type RemoveDuplicateFunc = (data: number[]) => number[];

    // creating function that will remove all my duplicate numbers from an array
    const removeDuplicates : RemoveDuplicateFunc = (data) => {

        // storing my all new numbers that are unique
        let newArray: number[] = [];

        data.forEach((item: number) => {
            // checking is there any same item already includes in my newArray or not
            // if already not available, then newArray will push my new item
            if(!newArray.includes(item)){
                newArray.push(item);
            }
        })
        return newArray
    }

    // call the function here with a list of number in an array
    // it should return a unique number by removing any duplicate number
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}