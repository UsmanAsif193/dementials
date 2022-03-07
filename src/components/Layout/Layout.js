import React from 'react'
import NavBar from '../NavBar/NavBar';
import MintADemental from '../MintADemental/MintADemental';
import Counter from '../Counter/Counter';
import Description from '../Description/Description';
import Mentals from '../Mentals/Mentals';
import Mentalverse from '../Mentalverse/Mentalverse';

//css
import './Layout.css'
import Footer from '../Footer/Footer';
import Roadmap from '../Roadmap/Roadmap';
import Faq from '../Faq/Faq';
import Explore from '../Explore/Explore';
import Gallery from '../Gallery/Gallery';

function Layout() {
    return (
        <div>
           <div className='bg_image'>
                <NavBar />
                <MintADemental />
            </div> 
            <Counter />
            <Description />  
            <Explore />
            <Mentalverse /> 
            <Gallery/>
            <Roadmap />
            <Mentals />
            <Faq />
            <Footer />
        </div>
    )
}

export default Layout