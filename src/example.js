import { create } from "./index.js"

const user = create({
    username: "asd123",
    mail: "asd123@gmail.com",
    age: 1,
}, {
    incrementAge: () => {
        user.value.age++
    }
})
user.subscribe((value) => {
    console.log(value)
}, user)

user.methods.incrementAge()
user.value = {
    username: "asd1232",
    mail: "asd123@gmail.com",
    age: user.value.age
}