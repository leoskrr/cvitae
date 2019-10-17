import React, { Fragment } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Home.css'

import picture from '../../../img/picture.jpg';

export default props => {
    return (
        <section className="home">
            <div className="info">
                <h4>Olá, Mundo!</h4>
                <h1>
                    Leonardo Viana
                </h1>
                <p className="job">Programador/Estudante</p>
                <p className="desc">Sou um programador apaixonado pelo que faço
                <br />e adoro criar soluções web/mobile!
                </p>
                <div className="contact">
                    <a href=""><i className="fa fa-facebook-square"></i></a>
                    <a href="https://github.com/leoskrr" target="_blank"><i className="fa fa-github-square"></i></a>
                    <a href="https://www.instagram.com/leokps/" target="_blank"><i className="fa fa-instagram"></i></a>
                </div>
                <div className="button">
                    <Link
                        activeClass="active"
                        to="ancora"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Ver mais
                    </Link>
                </div>
            </div>
            <div className="pic">
                <div className="img"></div>
                <div className="desc">
                    <p>Na foto sou o terceiro em pé
                    (da esquerda para a direita)
                    </p>
                </div>
            </div>
        </section>
    )
}
