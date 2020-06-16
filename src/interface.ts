interface Condition {
    (n: number): boolean
}

export function sum(number: number[], callback: Condition) {
    let s = 0;
    number.forEach(n => {
        if (callback(n)) {
            s = s + n
        }
    })
    return s
}

interface User {
    readonly id: String,  //修饰符，只能第一次赋值
    name: String,
    age: Number
}

let u: User = {
    id: '1',
    name: 'zyw',
    age: 27
}