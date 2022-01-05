import './App.css';
import { FaFacebook } from "react-icons/fa";
import React from "react";

function App() {
  return (
    <>
    <head>
        <link rel="stylesheet" href="./css/style.css"/>
        {/* <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/> */}
        <link rel="shortcut icon" href="/imag/favicon.png" type="image/x-icon" />
        <title>doggo shoppe</title>
    </head>

    <body>
        <header>
            <div class="menu-principal">
                <div class="header-1">
                    <div class="logo">
                        <img src="./imag/doggo_logo.png"/>
                    </div>
                    <div class="titulo">
                        <h1>DOGGO SHOPPE</h1>
                    </div>
                    <div class="redes">
                        <div class="redes-sociais">
                            <a href="https://www.facebook.com/doggoshoppe"><img src="./imag/face.png"/></a>
                            <a href="https://www.instagram.com/doggo_shoppe_2022/"><img src="./imag/insta.png"/></a>
                            <a href="https://br.pinterest.com/lukealter20210008/"><img src="./imag/pinterest.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
                <div class="header-2">
                    <div class="paginas">
                        <div class="botoes">
                            <a class="HOME" href="">HOME</a>
                            <a class="SOBRE" href="">SOBRE</a>
                            <a class="SERVICOS" href="">SERVI�OS</a>
                            <a class="PAGINAS_item" href="">P�GINAS</a>
                            <a class="BLOG" href="">BLOG</a>
                            <a class="CONTATO" href="">CONTATO</a>
                        </div>
                        <div class="buscar">
                            <input placeholder="BUSCAR" type="text" id="search1"/>
                            <ul class="list-group" id="list"></ul>
                        </div>
                    </div>                
                </div>
            <div class="banner1" id="banner1">
            </div>
            <div class="publicacoes" id="pubs">
                <ul class="pubList" id="pubList"></ul>
            </div>
            <div class="rodape">
                <div class="rodape-centro">
                    <div class="redes-sociais-rp">
                        <a href="https://www.facebook.com/doggoshoppe"><img src={ FaFacebook }/></a>
                        <a href="https://www.instagram.com/doggo_shoppe_2022/"><img src="./imag/insta.png"/></a>
                        <a href="https://br.pinterest.com/lukealter20210008/"><img src="./imag/pinterest.png"/></a>
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
