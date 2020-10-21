import React from 'react'
import './Welcome.css'
import Header from './Header'
import Caption from './Caption'
import WelcomeBody from './WelcomeBody'
import Featured from './Featured'
import TopPicks from './TopPicks'
import AppickManager from './AppickManager'
import Boxes from './Boxes'
// import SlantDiv from './SlantDiv'
import Footer from './Footer'


function Welcome() {
    return (
        <div className="welcome">
            <Header />
            <Caption />
            <WelcomeBody />
            <Featured />
            <TopPicks name1="Top Picks" name2="Most Bought" />
            <AppickManager />
            {/* <SlantDiv /> */}
            <TopPicks name1="For You" name2="New"  />
            <Boxes />
            <Footer />
            
          


           
           
            
        </div>
    )
}

export default Welcome
