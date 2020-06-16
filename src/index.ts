 import  { sum }  from "./interface"
import { Deck } from "./deck"

const deck = new Deck
deck.shuffle()

const result = deck.publish();

console.log("------player1------")
result.player1.print()
console.log("------player2------")
result.player2.print()
console.log("------player3------")
result.player3.print()
console.log("------地主牌------")
result.left.print()

const num = sum([3,5,6,7,9], (n) => n % 2 !== 0)
console.log(num)
// let name:string;

// function sum(a: number, b: number) {
//     return a + b
// }

// function isOdd(n: number) :boolean {
//     return n % 2 === 0
// }

// let num = sum(10, 2)
// console.log(num)