import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
const Avatarr = (props) => {


    const handleChange = function loadFile(event) {
        if (event.target.files.length > 0) {

            toBase64(event.target.files[0]).then(r => props.onImageChange(r));
        }
       
    };

     const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    return (
        <div className="App">
            <input type="file" onChange={handleChange} id="upload" accept="image/*" style={{ display: "none" }} />
            <label htmlFor="upload">
                <IconButton color="primary" aria-label="upload picture" component="span">

                    <Avatar id="avatar" 
                        style={{

                            width: "110px",
                            height: "110px",
                        }}
                    >photo de profil </Avatar>
                </IconButton>
            </label>
            <label htmlFor="avatar" />
        </div>
    );
}



export default Avatarr
