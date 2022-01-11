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
                            <h1>coleira que brilha no escuro</h1>
                            <h3>O carregamento de usb conduziu o colar do cão anti-perdido/evita o colar do acidente do carro para cães cachorros coleiras do cão conduz fontes conduzidas produtos do animal de estimação</h3>
                            <a className='buy' href="https://s.click.aliexpress.com/e/_AchOwy">comprar</a>
                        </div>
                    </div>
                    <div className='pub'>
                        <div className='imag'><img src={prod2}></img></div>
                        <div className='desc'>
                            <h1>escova para remoção de pelos</h1>
                            <h3>Escova para remoção de pelos de animais de estimação, pente para cães e gatos, escova desembaraçadora e aparadora de pelos longos, foscos</h3>
                            <a className='buy' href="https://s.click.aliexpress.com/e/_AFHdpW">comprar</a>
                        </div>
                    </div>
                    <div className='pub'>
                        <div className='imag'><img src={prod3}></img></div>
                        <div className='desc'>
                            <h1>capa para transporte de cães no carro</h1>
                            <h3>Prodigen cão capa de assento do carro à prova dwaterproof água pet travel cão transportadora hammock traseira do carro traseiro protetor de assento esteira transportadora segurança para cães</h3>
                            <a className='buy' href="https://s.click.aliexpress.com/e/_ASF9qo">comprar</a>
                        </div>
                    </div>
                    <div className='pub'>
                        <div className='imag'><img src={prod1}></img></div>
                        <div className='desc'>
                            <h1>escova de banho para pets</h1>
                            <h3>Casa de banho cachorro grande cão gato banho massagem luvas escova macio segurança silicone pet acessórios para cães gatos ferramentas maschas produtos</h3>
                            <a className='buy' href="https://s.click.aliexpress.com/e/_9gOCCC">comprar</a>
                        </div>
                    </div>
                    <div className='pub'>
                        <div className='imag'><img src={prod1}></img></div>
                        <div className='desc'>
                            <h1>escova de pelo de cao</h1>
                            <h3>Kimpets gato pente de cão pente de cabelo de gato pente de cabelo de cão de estimação especial agulha pente de gato limpeza de cabelo e produtos de beleza</h3>
                            <a className='buy' href="https://s.click.aliexpress.com/e/_9AUYbm">comprar</a>
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