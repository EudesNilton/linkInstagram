import React from 'react'
import Instagram from '../assets/instagram.png';
import Linkedin from '../assets/linkedin.png';
import Mensagem from '../assets/mensagem.png';
import Perfil from '../assets/perfil.jpeg'

const Header = () => {
  return (
    <header className='header'>
        <img className='h-i' src={Perfil} alt="Foto aqui" />

        <h1 className='h-h1'>Eudes Nilton</h1>

        <p className='h-p'>@eudesnewton</p>

        <div className='h-d1'>
            <a className='h-a' target='_blank' href="https://www.instagram.com/eudesnewton/"><img src={Instagram} alt="" /></a>
            <a className='h-a' target='_blank' href="https://www.linkedin.com/in/eudesnilton/"><img src={Linkedin} alt="" /></a>
            <a className='h-a' target='_blank' href="mailto:eudesnewton@gmail.com"><img src={Mensagem} alt="" /></a>
        </div>
    </header>
  )
}

export default Header