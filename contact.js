import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactForm from './contactForm';
import ContactComplete from './contactComplete';
import './body.css';

function Contact() {
    return (
        <div className="page">
            <h1>Favorite colour: </h1>
            <Switch>
                <Route path="/contact" exact>
                    <ContactForm />
                </Route>
                <Route path="/contact/:name" exact>
                    <ContactComplete />
                </Route>
            </Switch>
        </div>
    );

}


export default Contact;
