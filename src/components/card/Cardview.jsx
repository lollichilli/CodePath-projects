import React from 'react';
import "./Cardview.css"
import { useState } from 'react';
import cards from '../../../server/card';
import Button from '../button/Button';

const Cardview = () => {

    const [card, setCard] = useState(cards[0] ?? '');
    const [isFront, setFront] = useState(true)

    const handleCardFlip = () => {
        setFront(isFront => !isFront)
        console.log(isFront)
    }

    const handleCardSwitch = (dir) => {
        switch (dir) {
            case 'PREVIOUS':

                // const preCard = cards.find(c => c.id === ( card.id > 1 ? card.id - 1 : 1))
                const preCard = cards[Math.floor(Math.random() * cards.length)]
                setCard(preCard)
                setFront(true)

                break
            case 'NEXT':
                // const nextCard = cards.find(c => c.id === (card.id < cards.length - 1 ? card.id + 1: cards.length - 1))             
                const nextCard =  cards[Math.floor(Math.random() * cards.length)]  
                setCard(nextCard)
                setFront(true)
                break
            default: 
                return

        }

}

    return (
    <div>

        <div className='card-view'>
            <div className={`flip-card ${card.level ?? ''}`} onClick={handleCardFlip}>
               {( () => {
                switch(isFront) {
                    case true:
                        return <div className='fli[-card-front'>{(card.question ?? '')}</div>
                    case false:
                        return <div className='fli[-card-back'>{(card.answer ?? '')}</div>
                    default:
                        return
                }
               }

               ) ()}
            </div>

        </div>

        <div className='dir-btn'>
            <Button content="Previous" onHandleCard= {() => handleCardSwitch('PREVIOUS')}></Button>
            <Button content="Next" onHandleCard={() => handleCardSwitch('NEXT')}></Button>
        </div>
    </div>
    );
};

export default Cardview;