import React from 'react'
import HeadingSecondary from'./headings/headingSecondary'
import compositionPhoto from '../photo/bg1.jpg'

export default function About() {
    return (
        <div className = "section-about">
            <HeadingSecondary cta = "Exciting Tours for Adventurous People"/>
            <div className = "row">
                <div className = "col-1-of-2">
                    <div className = "heading-tertiary u-margin-bottom-2">
                        You're going to fall in love with nature
                    </div>
                    <p className = "paragraph">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    </p>
                    <div className = "heading-tertiary u-margin-bottom-2">
                        You're going to fall in love with nature
                    </div>
                    <p className = "paragraph">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    </p>
                    <a href = "#" className = "btn-text">&rarr;     Learn More</a>
                </div>
                 <div className = "col-1-of-2">
                        <div className = "composition">
                            <img src = {compositionPhoto} className = "composition__photo composition__photo--p1" />
                            <img src = {compositionPhoto} className = "composition__photo composition__photo--p2" />
                            <img src = {compositionPhoto} className = "composition__photo composition__photo--p3" />
                        </div>
                </div>
            </div>
          
        </div>
    )
}
