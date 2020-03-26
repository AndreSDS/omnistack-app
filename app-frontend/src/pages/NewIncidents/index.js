import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncidents() {
    return (
        <div className="container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para 
                        encontrar um herói para resolver isso.
                    </p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Ver casos cadastrados
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder="Título do caso" />
                    <textarea type="text" placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};