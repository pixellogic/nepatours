import React from 'react'
import './icons/icons.css'
import './styles.css'
import Features from './components/features'
import Header from './components/header'
import Tours from './components/tours'
import About from './components/about'
import Story from './components/stories'
import Booking from './components/bookings'
import Footer from './components/footer'
import Nav from './components/nav'
import Popup from './components/popup'
export default function App() {
    return (
        <div>
             <Nav />
            <Header />
            <About />
            <Features />
            <Tours />
            <Story />
            <Booking />
            <Popup />
            <Footer />
            
        </div>
    )
}
