import React, { useState, useEffect } from 'react';

import { Typography } from '@mui/material';

import ApiComponent from 'src/components/api/ApiComponent';

export default function T() {
    // État pour stocker les données de la réponse
    const [time, setTime] = useState(null);

    useEffect(() => {
        // Utilisez la fonction ApiComponent pour effectuer une requête
        ApiComponent('time/', 'GET')
            .then(response => {
                // Mettez à jour l'état avec les données de la réponse
                setTime(response.time);
            })
            .catch(error => console.error('Erreur de la requête:', error));
    }, []); // Utilisation de useEffect pour déclencher la requête une fois que le composant est monté

    return (
        <div>
            {/* Utilisation de Typography de Material-UI */}
            <Typography variant="h1">Mon composant avec requête API</Typography>

            {/* Affichez les données de la réponse si elles sont disponibles */}
            {time && (
                <div>
                    <Typography variant="body1">Réponse de l API :</Typography>
                    <pre>{time}</pre>
                </div>
            )}

            {/* Ajoutez ici d'autres éléments ou rendus si nécessaire */}
        </div>
    );
}
