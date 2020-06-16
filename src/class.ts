class User {
    readonly id: number
    name: string
    age: number
    gender: "男" | "女" = '男'
    pid: string
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}