import React from 'react';


const Footer = (props) => {
    const { company,email}= props;

    return (
       <div>Powered by { company } | Contact by Email : { email}</div>
    )
}

export default Footer;