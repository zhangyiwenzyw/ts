type Deck = NormalCard[]
type Color = "♥️" | "♣️" | "♦️" | "♠️"
type NormalCard = {
    color: Color
    mark: number
}
function createDeck (): Deck {
    const deck: Deck = []
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: "♥️",
            mark: i
        })
        deck.push({
            color: "♣️",
            mark: i
        })
        deck.push({
            color: "♦️",
            mark: i
        })
        deck.push({
            color: "♠️",
            mark: i
        })
    }
    return deck
}

function printDeck(deck: Deck) {
    deck.forEach(card => {
        let str = ''
        str += card.color
        if (card.mark <= 10) {
            str += card.mark
        }
        if (card.mark = 11) {
            str += "J"
        }
        if (card.mark = 12) {
            str += "Q"
        }
        if (card.mark <= 13) {
            str += "K"
        }
        console.log(str)
    })
}
printDeck(createDeck())