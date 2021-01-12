import React from 'react'

export default function Nav() {
    return (
        <div className = "navigation">
            <input type = "checkbox" className = "navigation__checkbox" id = "navi_toggle" />
            <label for = "navi_toggle" class = "navigation__button">
                <span className = "navigation__icon">&nbsp;</span>
            </label>
            <div className = "navigation__background"> &nbsp;</div>
            <div className = "navigation__nav">
                <ul className = "navigation__list">
                    <li className = "navigation__item"><a href= "#" className = "navigation__link"> nav </a></li>
                    <li className = "navigation__item"><a href= "#" className = "navigation__link"> nav </a></li>
                    <li className = "navigation__item"><a href= "#" className = "navigation__link"> nav </a></li>
                    <li className = "navigation__item"><a href= "#" className = "navigation__link"> nav </a></li>
                    <li className = "navigation__item"><a href= "#" className = "navigation__link"> nav </a></li>

                </ul>
            </div>

            
        </div>
    )
}
