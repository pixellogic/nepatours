import React from 'react'
import './icons/icons.css'
import './styles.css'
import Features from './components/features'
import Header from './components/header'

import About from './components/about'
export default function App() {
    return (
        <div>
            <Header />
            <About />
            <Features />
        </div>
    )
}
