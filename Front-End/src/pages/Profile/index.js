import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assests/logo.svg';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() =>{
        api.get('profile',{
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);    

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization:ongId
                }
            });
            setIncidents(incidents.filter(incidents => incidents.id !== id))
        } catch {
            alert('Erro ao deletar')
        }
    }

    function handleLogut(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-continer">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
            <span>Bem Vinda, {ongName} </span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogut} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
        <h1>Casos cadastrados</h1>
        <ul>
            {incidents.map(incidents => (
            <li key={incidents.id}>
                <strong>CASO:</strong>
                <p>{incidents.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{incidents.description}</p>

                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL'}).format(incidents.value)}</p>

                <button onClick={()=>handleDeleteIncident(incidents.id)} type="button">
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>))}
        </ul>
        </div>
    )
}