import { useEffect, createState } from "./index.js"

const user = createState({
    username: "asd123",
    mail: "asd123@gmail.com"
})
useEffect((value) => {
    console.log(value)
}, user)

user.value = {
    username: "asd1232",
    mail: "asd123@gmail.com"
}