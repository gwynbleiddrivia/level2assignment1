Type Alias and Interface both govern the shape of a type.

But Type Alias is connected to literals, tuples, unions and primitives.
Whereas Interface is connected to shape of an Object.

We can write 
type ID = number
Or we can use union like this 
type ID = number | string
Or we can use strings with union
type Status = "loggedIn" | "loggedOut" | "unRegistered"
We can never do that with inteface
interface must have the shape of an object


And we can also define shape of an object with a Type Alias too, just like interface.
type Bird = {
    fly: string,
    call: string
}
interface IBird {
    fly:string,
    call:string
}


We can merge interface defined even in two separate files.

interface Geometry {
    shape: string
}
interface Geometry{
    side: number
}

const triangle:Geometry = {
    shape: "triangle",
    side:3
}

But once we define a type alias, you cannot redefine or merge it.


We can use extend keyword for interface to inherit from each other

interface Animal {
    breath: string
}
interface Bird extends Animal{
    fly:string
}
const sparrow:Bird = {
    breath: "It is breathing",
    fly: "It can fly"
}

But we cannot use extend keyword for type alias

type TAnimal = {
    breath: string
}
type TBird = TAnimal & {
    fly: string
}
const Tsparrow:TBird = {
    breath: "Breathing",
    fly: "flying"
}