import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assests/logo.svg';
import herosImg from '../../assests/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory('');
    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile')
        } catch (err){
            alert('Falha no login');
        }
    }

    return(
        <div className="logon-conteiner">
            <section className="form">
                <img src={logoImg} alt="BE The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input
                        placeholder="Sua Id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to='register'>
                        <FiLogIn size={16} color="6495ED" />
                        Nâo tem cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes"/>
        </div>
    );
}