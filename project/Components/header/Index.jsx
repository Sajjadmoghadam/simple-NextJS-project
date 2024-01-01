'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/logo.png'
import Link from 'next/link'
import 'boxicons'
import { useRouter } from 'next/navigation'

export default function Header() {
    return (
        <>
            <div className='logo d-flex justify-content-center my-1'>
                <Image
                    src={logo.src}
                    width={80}
                    height={80}
                    alt="logo"
                />
            </div>
            <div className='nav d-flex justify-content-between my-3 align-items-center '>
                <div className='social-media'>
                    <ul className='d-flex justify-content-center'>
                        <li className='mx-3'><Link href={'/'}><box-icon type='logo' name='instagram'></box-icon></Link></li>
                        <li className='mx-3'><Link href={'/'}><box-icon name='telegram' type='logo' ></box-icon></Link></li>
                        <li className='mx-3'><Link href={'/'}><box-icon name='whatsapp' type='logo' ></box-icon></Link></li>
                    </ul>
                </div>
                <div >
                    <ul className='d-flex justify-content-center  '>
                        <li className='mx-3 fw-bold'><Link href={'/'}>Home</Link></li>
                        <li className='mx-3 fw-bold'><Link href={'/'}>Shop</Link></li>
                        <li className='mx-3 fw-bold'><Link href={'/'}>Contact us</Link></li>
                        <li className='mx-3 fw-bold'><Link href={'/'}>About us</Link></li>
                        <li className='mx-3 fw-bold'><Link href={'/'}>Login/Register</Link></li>

                    </ul>
                </div>
                <div className='search-bar '>
                    <div className='d-flex justify-content-center flex-row-reverse align-items-center border border-dark p-2 rounded'>
                        <div className='d-flex align-items-center'><box-icon name='search-alt-2'></box-icon></div>
                        <div><input className='border-0' type="text" /></div>
                    </div>

                </div>

            </div>


        </>
    )
}
