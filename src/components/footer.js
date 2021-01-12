import React from 'react'

export default function Footer() {
    return (
        <div className = 'footer'>
            <div className = "footer__logo-box">logo</div>
            <div className = "row">
                <div className = "col-1-of-2">
                    <div className = "footer__navigation">
                        <ul className ="footer__list">
                            <li className = "footer__item"><a href = "#" className = "footer__link">company</a></li>
                            <li className = "footer__item"><a href = "#" className = "footer__link">company</a></li>
                            <li className = "footer__item"><a href = "#" className = "footer__link">company</a></li>
                            <li className = "footer__item"><a href = "#" className = "footer__link">company</a></li>
                            <li className = "footer__item"><a href = "#" className = "footer__link">company</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "col-1-of-2">
                    <p className = "footer__copyright">
                        credits: <a href = "https://github.com/jonasschmedtmann" className = "footer__link"> Jonas Schmedtmann</a><br />
                        <a href = "https://github.com/pixellogic" className = "footer__link" >Recoded by Ashish Bajracharya</a>

                    </p>
                </div>
            </div>
        </div>
    )
}
