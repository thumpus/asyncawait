const baseURL = 'https://deckofcardsapi.com/api/deck'

//1
    async function getCard(){
        let response = await axios.get(`${baseURL}/new/draw/`);
        let { suit, value } = response.data.cards[0];
        console.log(`${value} of ${suit}`);
    }

//2
    async function getTwoCards(){
        let firstCard = await axios.get(`${baseURL}/new/draw`);
        let deckId = firstCard.data.deck_id;
        let secondCard = await axios.get(`${baseURL}/${deckId}/draw`)
        console.log(`${firstCard.data.cards[0].value} of ${firstCard.data.cards[0].suit}`)
        console.log(`${secondCard.data.cards[0].value} of ${secondCard.data.cards[0].suit}`)
    }

//3 
    async function setup(){
        let $button = $('button');
        let $cardZone = $('cardzone');
        let deck = await axios.get(`${baseURL}/new/shuffle/`)

        $button.on('click', async function(){
            let card = await axios.get(`${baseURL}/${deck.deck_id}/draw/`)
            $cardZone.append(`<img src=${card.data.cards[0].image}>`);
        })
    }   
    setup();