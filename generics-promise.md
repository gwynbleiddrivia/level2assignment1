Generics are just type variables

When we use generic, it's to assure compiler that this type will be used everywhere where the variable is

In this code,

const pickFirst = <T>(toyArr:T[]):T =>{
	return toyArr[0]
}

This ensures that if I input ["football","fidget_spinner","latim"],
then, it is declared that the input array is a string array, and it is ensured that the return will definitely be a string. The hover over the return value will show string type.

If we input ["football","fidget_spinner",52], then the hover over the return value would be string | number.

So, we can dynamically maneuver the type in various places with type variables or generics like this.


Generic ensures the right type while working with the Promise response.

In this code,
const fetchName = async():Promise<{name:string}> => {
	return { name: "user er naam" }
}

const user = await fetchName();
console.log(user.name)


Promise<{name:string}> shows the Promise of an object and when we wait for it to fetch, it returns an object. If we did not use Promise <{name:string}> generic here, the compiler would be confused and just considered the user variable to be 'any' type.