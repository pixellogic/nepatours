import React from 'react'

export default function Header() {
    return (
        <div className = "header">
            <div className = "header__logo">
                NepaTours
            </div>
            <div className = "heading__primary">
                <span className = "heading__primary--main">outdoors</span>
                <span className = "heading__primary--sub">is where life happens</span>
                <a href = "#" className = "btn btn--white btn--animated">Discover our tours</a>
            </div>
        </div>
    )
}
