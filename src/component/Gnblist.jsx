import { useState } from "react"


export default function Gnblist({onClose}){


   return(
<div className='gnb-list'>
    <div className='logo_menu'>
        <h1><a href="/">Reciepe</a></h1>
        <div className="menu" onClick={()=>{onClose()}}><span class="material-symbols-outlined">
close
</span></div>
    </div>
    <div className='gnb'>
    <ul className='depth_1'>
        <li>
            <a href="/">MENU</a>
            <ul className='depth_2'>
                <li>menu1</li>
                <li>menu1</li>
                <li>menu1</li>
            </ul>
        </li>
        <li><a href="/">MENU</a>
            <ul className='depth_2'>
                <li>menu1</li>
                <li>menu1</li>
                <li>menu1</li>
            </ul>
        </li>
        <li><a href="/">MENU</a>
            <ul className='depth_2'>
                <li>menu1</li>
                <li>menu1</li>
                <li>menu1</li>
            </ul>
        </li>
        <li><a href="/">MENU</a>
        <ul className='depth_2'>
                <li>menu1</li>
                <li>menu1</li>
                <li>menu1</li>
            </ul>
        </li>            
    </ul>
    <div className='right'>
        <div className='search'>
            <input placeholder='search'></input>
            <span class="material-symbols-outlined">close</span>
            <span class="material-symbols-outlined serch-btn">search</span>
        </div>
        <ul className='sns'>
            <li><a><img src={process.env.PUBLIC_URL +  '/img/instagram.png'} width="70%" /></a></li>
            <li><a><img src={process.env.PUBLIC_URL +  '/img/facebook.png'} width="70%" /></a></li>
            <li><a><img src={process.env.PUBLIC_URL +  '/img/youtube.png'} width="70%" /></a></li>
        </ul>
    </div>
    </div>
   
</div>
   )
}
