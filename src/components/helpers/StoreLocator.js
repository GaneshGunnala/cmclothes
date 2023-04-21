import React, { useEffect, useState, useReducer } from "react";

export const StoreLocator = () => {
    
    return (
        <>
            <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.87352427040284!2d78.53928720162602!3d17.460844187253617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b2c29ece697%3A0x78f5b493fda214b!2sCMCG%20Custom%20made%20clothes%20gallery!5e0!3m2!1sen!2sus!4v1682060043249!5m2!1sen!2sus" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                {/* <iframe src="[your unique google URL] " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </>
    );
}
