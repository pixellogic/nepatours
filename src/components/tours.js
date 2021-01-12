import React from 'react'
import HeadingSecondary from './headings/headingSecondary'
import Cards from'./cards'
export default function Tours() {
    return (
        <div className = "section-tours " id = "section-tours">
            <HeadingSecondary cta = "Explore our tours" />
            <div className= "row">
                <div className = "col-1-of-3">
                   <Cards front= "card__side card__side--front card__side--front--1 " back = "card__side card__side--back card__side--back--1" picture = "card__picture card__picture--1"  heading = "card__heading card__heading--1" details = "card__details"  />
                </div>
                <div className = "col-1-of-3">
                    <Cards front = "card__side card__side--front card__side--front--2" back = "card__side card__side--back card__side--back--2" picture = "card__picture card__picture--2"  heading = "card__heading card__heading--2" details = "card__details"/>
                </div>
                <div className = "col-1-of-3">
                    <Cards front = "card__side card__side--front card__side--front--3 " back = "card__side card__side--back card__side--back--3" picture = "card__picture card__picture--3"  heading = "card__heading card__heading--3" details = "card__details" />
                </div>
            </div>
            <div class = "u-center-text u-margin-bottom-8">
                <a href = "#popup" className = "btn btn--green">discover all tours</a>
            </div>
        </div>
    )
}
