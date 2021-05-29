import './FAQLayer.css';
import React from 'react'

function FAQitem({text}){
    return(
        <div className="faq__item">
            <p>{text}</p>
            <p>+</p>
        </div>
    )
}

function FAQLayer() {
    return (
        <div className="faq__layer">
            <div className='inside_faq__layer'>
                <p>Frequently Asked Questions</p>
                <ul>
                    <li><FAQitem text='What is Netflix?' /></li>
                    <li><FAQitem text='How much does netflix cost?' /></li>
                    <li><FAQitem text='Where can I watch?' /></li>
                    <li><FAQitem text='How do I cancel?' /></li>
                    <li><FAQitem text='What Can I watch on Netflix?' /></li>
                    <li><FAQitem text='Is Netflix for kids?' /></li>
                </ul>
                
                <div className="final__texts">
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <input type="text" placeholder='Email address'/>
                    <button>Get Started ></button>
                </div>
                
            </div>
        </div>
    )
}

export default FAQLayer;
