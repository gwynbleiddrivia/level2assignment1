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

interface Course {
	title: string,
	students: number,
	isPublished: boolean
}
const getPopularCourses = (courseArr:Course[],minStudents:number):Course[] => {
	return courseArr.filter(course=>course.students>=minStudents && course.isPublished)
} 

const pluckValues = <T,K extends keyof T>(arrObj:T[],key:K):T[K][] => {
	return arrObj.map(obj=>obj[key])
}

class Employee {
	protected name:string
	private baseSalary:number
	constructor(name:string, baseSalary:number){
		this.name = name
		this.baseSalary = baseSalary
	}
	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
	}
}

class Manager extends Employee{
	private department:string
	constructor(name:string, baseSalary:number, department:string){
		super(name, baseSalary)
		this.department = department
	}
	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`
	}
}

const validateAgeAsync = (age:number):Promise<string> => {
	return new Promise((resolve, reject)=>{
		if(age>=18){
		setTimeout(()=>{resolve("Access Granted")},1000)
		} else {
		reject(new Error("Access Denied: Must be 18 or older"))
		}
	})
}