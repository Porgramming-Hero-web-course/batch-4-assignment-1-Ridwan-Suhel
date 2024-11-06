{

    // declaring a type for countWordOccurrences where i expect a number in return and two string values as arguement
    type CountWord = (sentence: string, word: string) => number;
    
    // creating a function for coungting word occurrences
    const countWordOccurrences: CountWord = (sentence, word) => {
        const lowerCaseSentence: string = sentence.toLowerCase();
        const lowerCaseWord: string = word.toLowerCase();
        const countOccurence: number = lowerCaseSentence.split(lowerCaseWord).length - 1;
        return countOccurence 
    }

    // call the function here with a sentence and a word as arguement of countWordOccurrences function
    // const sentence: string = "TypeScript is great. I love TypeScript!";
    // const word: string = "typescript";
    // console.log(countWordOccurrences(sentence, word))

}