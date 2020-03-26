import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="container">
            <section className="form">
                <img src={logoimg} alt="Be the hero" />

                <form>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="Sua ID" />
                    <Link to="/profile">
                        <button className="button" type="submit">Entrar</button>
                    </Link>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}