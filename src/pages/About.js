import React from 'react'

export default function About() {

  return (
    <div className='about content-container'>
        <div className='about-title'>Hieman meistä</div>
        <p className='about-content'>Olemme Suomen yksi suurimmista retkeilytarvikeliikkeistä, joka on levinnyt laajemmalle maailmaan. Oulussa 1985 perustettu yrityksemme on pikkuhiljaa kiivennyt retkeilytarvikkeiden myynnin ja asiantuntijuuden isompaan liigaan ja asiakkaidemme luoton ansainneeksi. Tarjoamme laajan valikoiman tuotteita, joita työntekijämme ovat testanneet* ja todenneet luotettavaksi. Työllistämme 200 henkeä ympäri Suomea sekä Yhdysvalloissa 5 myymälän voimin. </p>
        <div className='about-title'>Tietoa sivusta</div>
        <h5 className='about-title'>Sijainnit</h5>
        <ul className='about-content'>
            <li>Oulu, Kaitoväylä 4, 90570</li>
            <li>Tampere, Porontaljatie 5, 34270</li>
            <li>Helsinki, Vanha talvitie, 00580</li>
            <li>Vaasa, Kirkkotie 76, 65800</li>
            <li>Albuquerque New Mexico, Holly Avenue, 87113 United States</li>
        </ul>
        <h5 className='about-title'>Tekijät</h5>
        <p className='about-content'> Aku Nikula: Front-end ja etusivu</p>
        <p className='about-content'>Kalle Rasvala: Scrum master</p>
        <p className='about-content'>Jutta Anttila: UI/Graaffinen suunnittelu</p>
        <p className='about-content'>Eemil Toukomies: UI/Graaffinen suunnittelu</p>
        <p className='about-content'>Jesse Impiö: Back-end</p>
        <p className='about-content'>Max Perunka: Tuotteen omistaja</p>
    </div> 
  )

}
