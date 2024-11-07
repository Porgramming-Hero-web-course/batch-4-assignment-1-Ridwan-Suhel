## The significance of union and intersection types in Typescript.
--------------------
The union and intersection type is the typescript type that allows us to define complex types easily, combine multiple types and more. in modern day of javascript world it helps us to get multiple types in easier way by the help of typescript. Sometimes we need a combine data from two separate arrays or object, sometimes we need to check somekinds of type that must have to be in our result or output, in that case we can use the typescript union and intersection type. now let's check how we can get beneftied by using typescript union and untersection.

### Significance of union type:
----------------
    Union type is one of the most important and useful type. in typescript we use (|) pipe symbol to decribe a union type. it helps us to use multiple type in single output. let's say we assuming a value from api that can be a student id in a number type or a string type in that case if we are not sure what will be the value of that student then in that case we can use union type. lets check the code for more understand.

    function(studenId: string | number){
        // now we can check the function argument by using typeof operator and take an action
        if(typeof studenId === 'number'){
            // write your logic
        }
        if(typeof studenId === 'string'){
            // write your logic
        }
    }


### Significance of intersection type:
----------------
    Intersection definatley plays an important role in modern day typescript. in typescript we use (&) operator or symbol for using a intersection type. it helps us to include multiple types from other object or arrays. lets check how it can be useful. 
    lets say we have types

    type Phone = {
        name: string,
        model: string
    }

    type Pricing = {
        price: number,
    }

    type PhoneData = Phone & Pricing;

    in this case PhoneData is a intersection of Phone and Pricing, it must have to all the properties from Phone and Pricing. so we can say it helps us to combine several data into one type.

    So, we can say union and intersection type are a powerful feature that helps us to reduce our error on runtime programm. they giving us lots of flexibility to use types. 
