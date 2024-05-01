import React from 'react'
import Galery from '../components/Galery'

function Uvod() {
  return (
    <div>
      <div className='slogan'>
        <h1 className='nadpis-slogan'>CITÁT</h1>
        <p className='slogan-text'>„Pretekanie a súťaženie je v mojej krvi. Je to súčasť mňa, je to súčasť môjho života; Robím to celý život. Staviam to pred všetko ostatné.“ - AYRTON SENNA</p>
      </div>
      <h1 className='nadpis-galeria'>NAŠE VÍŤAZSTVÁ A PRETEKY</h1>
      <Galery />
      <div className='footer-uvod'>
        <p>©SKID-KART</p>
      </div>
    </div>
  )
}
export default Uvod
