import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import logo from "./imag/doggo_logo.png";
import { useState } from 'react';
import React from "react";
import prod1 from "./imag/catal/prod1.jpg"
import prod2 from "./imag/catal/prod2.jpg"
import prod3 from "./imag/catal/prod3.jpg"
import prod4 from "./imag/catal/prod4.jpg"
import prod5 from "./imag/catal/prod5.jpg"

function App() {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
    <head>
        <link rel="stylesheet" href="./css/style.css"/>
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
                            <input placeholder="BUSCAR" type="text" id="search1" onChange={event => {setSearchTerm(event.target.value)}} />
                                {JSONDATA.filter((val)=> {
                                    if (searchTerm == "") {
                                        return false
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                    
                                }).map((val, key) => {
                                    return (
                                    <div className='user' key={key}>
                                        <a href={val.href}>{val.name}</a>
                                    </div>
                                    );
                                })}
                        </div>
                    </div>                
                </div>
            <div className="banner1" id="banner1">
                    <div className='pub'>
                        <div className='imag'><img src={prod1}></img></div>
                        <div className='desc'>
                            <h1>{JSONDATA.name}</h1>
                            <h3>{JSONDATA.desc}</h3>
                            <a className='buy' href={JSONDATA.href}>comprar</a>
                        </div>
                    </div>
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

    </body>
    </>
  );
};

export default App;