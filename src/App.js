import './App.css';
import './main.js';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import logo from "./imag/doggo_logo.png";
import React from "react";

function App() {
  return (
    <>
    <head>
        <link rel="stylesheet" href="./css/style.css"/>
        <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link rel="shortcut icon" href="/imag/favicon.png" type="image/x-icon" />
        <title>doggo shoppe</title>
    </head>

    <body>
        <header>
            <div className="menu-principal">
                <div className="header-1">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <div className="titulo">
                        <h1>DOGGO SHOPPE</h1>
                    </div>
                    <div className="redes">
                        <div className="redes-sociais">
                            <a href="https://www.facebook.com/doggoshoppe"><FaFacebook/></a>
                            <a href="https://www.instagram.com/doggo_shoppe_2022/"><AiFillInstagram /></a>
                            <a href="https://br.pinterest.com/lukealter20210008/"><BsPinterest /></a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="header-2">
                    <div className="paginas">
                        <div className="botoes">
                            <a className="HOME" href="">HOME</a>
                            <a className="SOBRE" href="">SOBRE</a>
                            <a className="SERVICOS" href="">SERVIÇOS</a>
                            <a className="PAGINAS_item" href="">PÁGINAS</a>
                            <a className="BLOG" href="">BLOG</a>
                            <a className="CONTATO" href="">CONTATO</a>
                        </div>
                        <div className="buscar">
                            <input placeholder="BUSCAR" type="text" id="search1"/>
                            <ul className="list-group" id="list"></ul>
                        </div>
                    </div>                
                </div>
            <div className="banner1" id="banner1">
            </div>
            <div className="publicacoes" id="pubs">
                <ul className="pubList" id="pubList"></ul>
            </div>
            <div className="rodape">
                <div className="rodape-centro">
                    <div className="redes-sociais-rp">
                        <a href="https://www.facebook.com/doggoshoppe"><FaFacebook /></a>
                        <a href="https://www.instagram.com/doggo_shoppe_2022/"><AiFillInstagram /></a>
                        <a href="https://br.pinterest.com/lukealter20210008/"><BsPinterest/></a>
                    </div>
                </div>
            </div>
        </header>
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/javascript" src="./javascript/main.js"></script>
    </body>
    </>
  );
};

export default App;
