import { useEffect, useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

//Matched eşleşme özelligi
const cardList = [
  {
    "path": "/img/1.jpeg",
    matched: false

  },
  {
    "path": "/img/2.jpeg",
    matched: false

  },
  {
    "path": "/img/3.jpeg",
    matched: false
  },
  {
    "path": "/img/4.jpeg",
    matched: false
  },
  {
    "path": "/img/5.jpeg",
    matched: false
  },
  {
    "path": "/img/6.jpeg",
    matched: false
  }
]
function App() {
  const [cards, setCards] = useState([])
  const [selectedOne, setSelectedOne] = useState(null)
  const [selectedTwo, setSelectedTwo] = useState(null)
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0)

  const prepareCards = () => {
    const sortedCards = [...cardList, ...cardList].sort(() => 0.5 - Math.random()).map((card) => ({ ...card, id: Math.random() }))
    setCards(sortedCards)
    setSelectedOne(null)
    setSelectedTwo(null)
    setScore(0)
  }

  const handleSelected = (card) => {
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card) //1.seçim yapılmış ve içi boş degil ise 2.seçime gönder degilse tam tersi

  }

  useEffect(() => {
    prepareCards()
  }, [])

  useEffect(() => {
    if (selectedOne && selectedTwo) {
      if (selectedOne.path == selectedTwo.path) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.path == selectedOne.path) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetState()
      } else {
        setTimeout(() => {
          resetState()
        }, 1000)
      }
    }
  }, [selectedOne, selectedTwo])


  const resetState = () => {
    setSelectedOne(null)
    setSelectedTwo(null)
    setDisabled(false)
    setScore(prevScore => prevScore + 1) //mevcut bilginin üstüne +1 ekle
  }

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button onClick={prepareCards}>Oyunu Başlat</button>
      <p>{score}</p>
      <div className="card-grid">
        {
          cards.map(card => (
            <div className="card">
              <MemoryCard
                disabled={disabled}
                handleSelected={handleSelected}
                card={card}
                key={card.id}
                rotated={card === selectedOne || card === selectedTwo || card.matched} //ilk seçim de kartı aç
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
