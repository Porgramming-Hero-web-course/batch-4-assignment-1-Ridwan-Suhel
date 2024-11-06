{

    // declaring type for shapes 
    type ShapeArea = {
        shape: "rectangle" | "circle",
        width?: number ,
        height?: number,
        radius?: number
    }
    
    // creating calculate shape area function
    const calculateShapeArea = (data: ShapeArea): string | number => {
        const {shape, radius, width, height} = data;
        
        // get shape area
        if(shape === 'circle'){
            if(radius === undefined){
                throw new Error("Please provide a number value for radius");
            }else{
                if(typeof radius === 'number'){
                    const shapeArea: number = Math.PI * radius * radius;
                    return shapeArea.toFixed(2)
                }else{
                    throw new Error("Please provide a number value of radius");
                }
                
            }
            
        }

        // get rectangle area
        if(shape === 'rectangle'){
            if(width === undefined || height === undefined){
                throw new Error("Please provide a number value of width and height");
            }else{
                if(typeof width === 'number' || typeof height === 'number'){
                    const shapeArea: number = width * height;;
                    return shapeArea;
                }
                
            }
            
        }
        
        throw new Error('Something went wrong!')
        
    };


    // call the calculateShapeArea for geting shape area
    console.log(calculateShapeArea({ shape: "circle", radius: 5 }))
}