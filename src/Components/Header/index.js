import React, { useState } from "react";
import { HeaderContainer, Title, Sale, FooterHeader, Menu} from './style'
import { SlBasket } from 'react-icons/sl'
import { GiHamburgerMenu } from 'react-icons/gi'
import './style.css'
import { Link } from 'react-router-dom';
import MenuMobile from "../MenuMobile"


export default function Header(){
  const [mobile, setMobile] = useState(false);
  return(
    <> 
    <MenuMobile
    menuVisible={mobile}
    setMenuVisible={setMobile}
    />
    <HeaderContainer>
    
      <Menu>
      <GiHamburgerMenu className="menu" onClick={()=>setMobile(true)}/>
      </Menu>
        <Title>Loja do Programador</Title>
      <Sale>
        <button>1</button>
        <SlBasket className="icone"/>
        
      </Sale>
    </HeaderContainer>

    <FooterHeader>
      <Link to="/">Home</Link>
      <Link to="/camisa">Camisetas</Link>
      <Link to="/bone">Bonés</Link>
      <Link to="/meia">Meias</Link>
      <Link to="/moletom">Moletons</Link>
      <Link to="/caneca">Canecas</Link>
    </FooterHeader>
    </>
  )
}