import React, { useEffect } from 'react';
import api from '../../services/api'

export default function Dashboard() {
    useEffect(() => {
        async function loadSpots(){
            const response = await api.get('/dashboard')
        }
    }, []);

    return <div></div>
}