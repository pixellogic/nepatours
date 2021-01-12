import React from 'react'
import HeadingSecondary from './headings/headingSecondary'
export default function Bookings() {
    return (
        <div className = "section-book">
           <div className = "row">
               <div className = "book">
                  <div className = "book__form">
                      <HeadingSecondary cta = "start booking now" />
                      <form className = "form" action = "#">
                          <div className = "form__group">
                              <input type = "text" className = "form__input" placeholder = "Full Name" id = "name" required />
                              <label for = "name" className = "form__label">Full Name</label>
                          </div>
                          <div className = "form__group">
                              <input type = "email" className = "form__input" placeholder = "Email Address" id = "email" required />
                              <label for = "email" className = "form__label">Email</label>
                          </div>
                          <div className = "form__group">
                             <div className = "form__radio-group">
                                 <input type = "radio" className = "form__radio-input" id= "small" name = "size" />
                                 <label for = "small" className = "form__radio-label">
                                     <span className = "form__radio-button"></span>
                                     Small tour group
                                     </label>
                             </div>
                             <div className = "form__radio-group">
                                 <input type = "radio" className = "form__radio-input" id= "large" name = "size" />
                                 <label for = "large" className = "form__radio-label">
                                 <span className = "form__radio-button"></span>
                                     large tour group
                                     </label>
                             </div>
                          </div>
                          <div className = "form__group">
                             <button className = "btn btn--green">Next step &rarr;</button>
                          </div>
                      </form>
                  </div>
               </div>
           </div>
        </div>
    )
}
