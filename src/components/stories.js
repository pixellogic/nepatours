import React from 'react'
import HeadingSecondary from './headings/headingSecondary'
import image from '../photo/bg1.jpg'
export default function Story() {
    return (
        <div className = "section-stories">
            <HeadingSecondary cta = "we make people genuienly happy" />
            <div className = "row">
                <div className = "story">
                    <figure className = "story__shape">
                        <img src = {image} className = "story__image" />
                        <figcaption className = "story__caption">Nepa tours</figcaption>
                    </figure>
                    <div className = "story__text">
                        <h3 className = "heading-tertiary margin-bottom-2">i had the best week</h3>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  page when looking at its layout. is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </div>
                <div className = "story">
                    <figure className = "story__shape">
                        <img src = {image} className = "story__image" />
                        <figcaption className = "story__caption">Nepa tours</figcaption>
                    </figure>
                    <div className = "story__text">
                        <h3 className = "heading-tertiary margin-bottom-2">i had the best week</h3>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  page when looking at its layout. is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>
                </div>
                <a href = "#" className = "btn-text u-margin-bottom-8">&rarr; Read all stories</a>
            </div>
        </div>
    )
}
