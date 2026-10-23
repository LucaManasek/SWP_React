import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Gif from './components/Gif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1>Doggos</h1>
      <List Item1="Susi" Item2="Bello" Item3="Luna" />
      <div className="cardContainer">
        <Card title="Susi" imgSrc="https://cdn.prod.website-files.com/6409c3f606e95979a7715d87/6759b5238f442d48ac86bb7f_Leo.jpg" description="Susi is a loyal doggo" />
        <Card title="Bello" imgSrc="https://i.redd.it/s0rrluzbe1v01.jpg" description="Bello is a playful doggo" />
        <Card title="Luna" imgSrc="https://i.pinimg.com/736x/de/12/11/de1211c90f928e1d57b6f330667cae07.jpg" description="Luna is a cute doggo" />
        <div className="gifContainer">
          <Gif imgSrc="https://media.tenor.com/WKJLMVH0E1oAAAAM/sealdog-black-dog.gif" />
          <Gif imgSrc="https://cdn.onwardstate.com/uploads/2015/05/oie_14175751vZSQRLEn.gif" />
        </div>
      </div>
    </>
  )
}

export default App
