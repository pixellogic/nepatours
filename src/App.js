import React from 'react'
import './icons/icons.css'
import './styles.css'
import Features from './components/features'
import Header from './components/header'
import Tours from './components/tours'
import About from './components/about'
import Story from './components/stories'
import Booking from './components/bookings'
export default function App() {
    return (
        <div>
            <Header />
            <About />
            <Features />
            <Tours />
            <Story />
            <Booking />
        </div>
    )
}
