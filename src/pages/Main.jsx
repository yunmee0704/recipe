
import React from 'react';
import { useState } from 'react';
import Gnblist from '../component/Gnblist';
import Bigcell from '../component/Bigcell';
import SmallCell from '../component/SmallCell';


export default function Main(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div>
            <header>
                <div className='logo_menu'>
                    <h1><a href="/">Reciepe</a></h1>              
                        <span class="menu material-symbols-outlined"onClick={()=>{toggleMenu()}}>menu</span>                   
                        {isMenuOpen && <Gnblist onClose={() => setIsMenuOpen(false)} />}
                </div>
                <div className='gnb'>
                <ul>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">MENU</a></li>
                </ul>
            </div>        
       
            </header>
            <div className='sector-visual'>               
                <div className='title'>
                    <p>오늘의 요리</p>
                    <h3>향과 맛이 일품! 오징어볶음</h3>
                </div>
            </div>
         
            <h1 className='post-title'>TODAY'S STORIES</h1>
            <div className='post'>
                <Bigcell/>
            <div className='grid-cell'>          
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>         
            </div>
            </div>

            <h1 className='post-title'>BEST STORIES</h1>
            <div className='post'>
            <div className='grid-cell block'>          
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>         
            </div>
            </div>
            
            <h1 className='post-title'>NEW</h1>
            <div className='post'>               
            <div className='grid-cell'>          
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>         
            </div>
            <Bigcell/>
            </div>

            <h1 className='post-title'>BEST STORIES</h1>
            <div className='post'>
            <div className='grid-cell block'>          
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>
               <SmallCell/>                     
            </div>
            </div>
            <footer>
                <div className='footer-box'>
                    <h2>Reciepe</h2>
                    <p>Reciepe.CO.KR IS OPERATED BY DOOSAN MAGAZINE</p>
                </div>
            </footer>
        </div>
        
    )

}