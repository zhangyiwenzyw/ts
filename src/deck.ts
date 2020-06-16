import { Card, Joker } from "./types";
import { Mark, Color } from "./enum";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck
}

export class Deck {
    cards: Card[] = [];
    constructor(cards?:Card[]) {
        if (cards) {
            this.cards = cards
        } else {
            this.init()
        }
    }
    private init() {
            const marks = Object.values(Mark)
            const colors = Object.values(Color)
            for (const m of marks) {
                for (const c of colors) {
                    this.cards.push(<Card>{
                        color: c,
                        mark: m,
                        getString() {
                            return this.color + this.mark
                        }
                    })
                }
            }
            let joker: Joker = {
                type: "small",
                getString() {
                    return 'jo'
                }
            }
            this.cards.push(joker)
            joker = {
                type: "big",
                getString() {
                    return 'Jo'
                }
            }
            this.cards.push(joker)
            return this.cards
        }
    print() {
        let result = '';
        this.cards.forEach((card, i) => {
            let str = card.getString();
            result += str + '\t';
            if ((i + 1) % 4 === 0) {
                result += '\n';
            }
        })
        console.log(result)
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[targetIndex]
            this.cards[targetIndex] = temp
        }
    }

    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        return {player1, player2, player3, left}
    }

    private takeCards(n: number) {
        let cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(<Card> this.cards.shift())
        }
        return new Deck(cards)
    }

    private getRandom(min: number, max: number) {
        const dec = max - min
        return Math.floor(Math.random() * dec + min)
    }
}