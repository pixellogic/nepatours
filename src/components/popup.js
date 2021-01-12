import React from 'react'
import image from '../photo/bg1.jpg'
import HeadingSecondary from './headings/headingSecondary'
export default function Popup() {
    return (
        <div className = "popup" id = "popup">
            <div className = "popup__content">
               
                    <a href = "#section-tours" className = "popup__close">&times;</a>
                    <HeadingSecondary cta = "Start Booking Now"/>
                    <div className = "heading-tertiary u-margin-bottom-2" style = {{marginTop: '-5rem'}}>Important &ndash; please read theese terms before booking</div>
                    <p className = "popup__text">
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chun
                    </p>
                    <a href = "#" className = "btn btn--green">book now</a>
               
            </div>
            
        </div>
    )
}
