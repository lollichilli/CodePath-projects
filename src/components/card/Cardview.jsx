import React, { useCallback, useState } from 'react';
import "./CardView.css"
import cards from '../../../server/card';
import Button from '../button/Button';

const CardView = () => {
    const [card, setCard] = useState(cards[0] ?? ''); 
    const [isFront, setFront] = useState(true);
  
    const handleFlipCard = () => {
      setFront(isFront => !isFront)
    }
    
    const handleSwitchCard = (dir) => {
        switch (dir) {
        case 'PREVIOUS':
          // const prevCard = cards.find(c => c.id === (card.id > 1 ? card.id - 1 : 1))
          const prevCard = cards[Math.floor(Math.random() * cards.length)]
          setCard(prevCard)
          setFront(true)
          break;
        
        case 'NEXT':
          // const nextCard = cards.find(c => c.id === (card.id < cards.length - 1 ? card.id + 1 : cards.length - 1))
          const nextCard = cards[Math.floor(Math.random() * cards.length)]
          setCard(nextCard)
          setFront(true)
          break;
        
        default:
          return
      }
    }
  
    const handlePrevCard = useCallback(() => handleSwitchCard('PREVIOUS'), [])
    const handleNextCard = useCallback(() => handleSwitchCard('NEXT'), [])
      
    return (
      <div>
        <div className={`flip-card ${card.level ?? ''}`} onClick={handleFlipCard}>
          <div className={`flip-card-inner ${isFront ? 'front' : ''}`} >
            <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
            <div className="flip-card-back">
              <p>{(card.answer ?? '')}</p>
            </div>
            {/* {
              (() => {
                switch (isFront) {
                  case true:
                    return <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
                  case false:
                    return <div className="flip-card-back"><p>{(card.answer ?? '')}</p></div>
                  default:
                    return null
                }
              })()
            } */}
          </div>
        </div>
        <div className='dir-btn'>
          {/* <Button onHandleCard={() => handleSwitchCard('PREVIOUS')}>Previous</Button> */}
          {/* <Button onHandleCard={() => handleSwitchCard('NEXT')}>Next</Button> */}
          <Button onHandleCard={handlePrevCard}>Previous</Button>
          <Button onHandleCard={handleNextCard}>Next</Button>
        </div>
      </div>
    );
  };

  export default CardView