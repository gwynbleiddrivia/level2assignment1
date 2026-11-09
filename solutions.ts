const multiplyValue = (value:number, multiplier:number=2): number => {
    return value*multiplier
}

const processInput = (value: string|number|boolean): string|number => {
	if(typeof value === "string"){
		return value.trim().toLowerCase()
	} else if(typeof value === "number"){
		return value*10
	} else {
		if(value){
			return "Active"
		}
		return "Inactive"
	}
}

const formatCoordinate = ( [latitude,longitude, locationName]:readonly [number, number, string]): string => {
	return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T>(...arrays:T[][]): T[]=> {
	let newArr:T[] = []
    for (let singleArr of arrays){
        newArr.push(...singleArr)
    }
    return newArr;
}