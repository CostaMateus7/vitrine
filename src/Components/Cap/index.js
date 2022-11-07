import React, {useEffect, useState} from "react";
import { PgCap } from "../../Service/Api";
import { BsFillCartPlusFill } from "react-icons/bs";
import CardGeneric from "../CardGeneric";
import ContainerGeneric from "../ContainerGeneric";
import Paragrafo from "../Paragrafo";
import Header from "../Header"
import Footer from "../Footer"

export default function CardHome(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    PgCap()
    .then(
      (response)=>{
        const data = response.data
        setProducts(data)
      }
    )
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  return(
    <>
    <Header/>
    <ContainerGeneric>
      {products?.map((product,key)=>{
        return(
        <CardGeneric key={product.id}>
        
           <img src={product.avatar} alt={product.description}/> 
          <div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <Paragrafo>R$ {product.Price} <BsFillCartPlusFill size={35}/> </Paragrafo>
          </div>
          
        </CardGeneric>)
      })}
    </ContainerGeneric>
    <Footer/>
    </>
  )
}