import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({listFilm}) => {
    const {idm}= useParams()
    const pd = listFilm.find((el)=>el.id==idm)
  return (
    <div className='container' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        {pd.title }
       <img src={pd.postUrl}alt="" style={{height:"800px"}}/>
       <iframe  src={pd.Desc1}  style={{width:"800px", height:"400px"}}></iframe>

    </div>
  )
}

export default ProductDetails