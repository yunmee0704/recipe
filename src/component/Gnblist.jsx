import { useState } from "react"


export default function Gnblist(){
    const [isOpen, setMenu] =useState(false);
    const gnb = document.querySelector('.gnb-list');

   return(
    <div className='gnb-list'>
    <div className='logo_menu'>
        <h1><a href="/">Reciepe</a></h1>
        <div className="menu" onClick={()=>{setMenu(!isOpen)}}>X</div>
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
            <span>X</span>
            <button>검색</button>
        </div>
        <ul className='sns'>
            <li><a>인스타</a></li>
            <li><a>페이스북</a></li>
            <li><a>유튜브</a></li>
        </ul>
    </div>
    </div>
    {/* {
                isOpen === true? gnb.setStyle({display:'none'}) :  gnb.setStyle({display:'block'})
            } */}
</div>
   )
}
