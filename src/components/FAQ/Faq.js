import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className='container'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How React Works?
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">First I'll give a little information about what React is - React is a Javascript library that was made by Facebook (in around 2013) to make dynamic UIs for the web.
                    The watchword here is dynamic, and that implies content on the page can change powerfully while you communicate with it. All in all, the page doesn't deliver simply static HTML.
                    For the sake of completeness, I thought I'd compose a layman clarification and a more specialized clarification of how React functions. In any case, I'm accepting this is a layman that knows what JavaScript and HTML are, however has hardly any familiarity with dynamic JavaScript systems like React, Vue, and Angular.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Difference of Props vs State?
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Props is an object passed to the part from its parent containg the data expected for it to be delivered. Props ought not be changed during the lifetime of the part and doing so won't significantly affect the part (except if its delivered once more)
                            State is an object that the component creates to keep track of its own state. State can be updated during the lifetime of the component and you can controll its effects on the component.
                            So, by picking either props and state, you can choose which factors to look for changes and which factors are simply instating boundaries.</div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Faq;