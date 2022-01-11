import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import logo from "./imag/doggo_logo.png";
import { useState } from 'react';
import React from "react";


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
                                        return val }
                                    else if (val.name.toLowerCase().includes(searchTerm.toLowerCase)) {
                                        return val;
                                    }
                                    }
                                ).map((val, key) => {
                                    return (
                                    <div className='user' key={key}>
                                        <p>{val.name}</p>
                                    </div>
                                    );
                                })};
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

    </body>
    </>
  );
};

export default App;



// const searchInput = document.getElementById("search1");

// const list = document.getElementById("list");

// function setList(group) {
//     clearList();
//     for (const pg of group) {
//         const item = document.createElement("li");
//         const itemButton = document.createElement("a");
//         itemButton.href = pg.href;
//         item.classList.add("list-group-item");
//         itemButton.classList.add("item-button");
//         const text = document.createTextNode(pg.name);
//         item.appendChild(itemButton);
//         itemButton.appendChild(text);
//         list.appendChild(item);
//     }
//     if (group.length === 0) {
//         setNoResults();
//     }
// };

// function clearList() {
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
// };

// function setNoResults() {
//     const item = document.createElement("li");
//     item.classList.add("list-group-item");
//     const text = document.createTextNode("sem resultados");
//     item.appendChild(text);
//     list.appendChild(item);
// };

// function getRelevancy(value, searchTerm) {
//     if (value === searchTerm) {
//         return 2;
//     } else if (value.startsWith(searchTerm)) {
//         return 1;
//     } else if (value.includes(searchTerm)) {
//         return 0;
//     } else {
//         return -1;
//     }
// };

// searchInput.addEventListener("input", (event) => {
//     let value = event.target.value;
//     if (value && value.trim().length > 0) {
//         value && value.trim().toLowerCase();
//         setList(pgs.filter(pg => {
//             return pg.name.includes(value);
//         }).sort((pgA, pgB) => {
//             return getRelevancy(pgB.name, value) - getRelevancy(pgA.name, value);
//         }));
//     } else {
//         clearList();
//     }});

// const pubList = document.getElementById("pubList");

// for (const pg of pgs) {
//     const pub = document.createElement("li");
//     pub.classList.add("pub");
//     const img = document.createElement("img");
//     img.src = pg.img;
//     const post_text = document.createElement("div");
//     post_text.classList.add("post-txt");
//     const h1 = document.createElement("h1");
//     const h3 = document.createElement("h3");
//     const bt = document.createElement("a");
//     const name = document.createTextNode(pg.name);
//     const desc = document.createTextNode(pg.desc);
//     const buy = document.createTextNode("comprar");
//     h1.appendChild(name);
//     h3.appendChild(desc);
//     bt.href = pg.href;
//     post_text.appendChild(h1);
//     post_text.appendChild(h3);
//     bt.appendChild(buy);
//     post_text.appendChild(bt);
//     pub.appendChild(img);
//     pub.appendChild(post_text);
//     pubList.appendChild(pub);
// };

// const banner1 = document.getElementById("banner1");

// for (const pg of pgs) {
//     const imag = document.createElement("div");
//     imag.classList.add("imag");
//     const img = document.createElement("img");
//     img.src = pg.img;
//     imag.href = pg.href;
//     imag.appendChild(img);
//     banner1.appendChild(imag);
// };