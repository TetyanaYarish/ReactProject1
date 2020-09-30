import React from 'react';
import { useParams } from 'react-router-dom';

function ContactComplete() {
    const params = useParams();

    return (
        <>
         Your favorite colour is - {params.name}!
        </>
    );

}

export default ContactComplete;
