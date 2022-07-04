import React, {useState} from 'react';
import {TextField} from '@components/forms';

function PersonInfo() {
    const [photo, setPhoto] = useState('');

    const handlePhoto = (e) => {
        const file   = e.target.files[0],
              reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => setPhoto(reader.result);
    };

    return (
        <div>
            {/* Cargar imagen y mostrarla */}
            <div>
                <input
                    type="file"
                    name="input-photo"
                    id="input-photo"
                    accept="image/*"
                    onChange={(e) => handlePhoto(e)}
                />
                <div 
                    style={{
                        backgroundImage: `url(${photo})`,
                        width: 300,
                        height: 300,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    id="photo"
                ></div>
            </div>
            {/* Desplegar campo para el nombre */}
                <TextField />
            {/* Desplegar lista de contacto */}
        </div>
    );
}; 

export default PersonInfo;