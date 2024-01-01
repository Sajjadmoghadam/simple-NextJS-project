import React from 'react'
import banner from '@/public/assets/banner.jpg'
import style from'./page.module.css'
export default function Home() {
  return (
    <>
    <div  >
      <img className={style.banner} src={banner.src}/>


    </div>
    
    
    </>
  )
}
