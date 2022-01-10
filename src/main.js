const pgs = [
    { name: "coleira que brilha no escuro", href: "https://s.click.aliexpress.com/e/_AchOwy", desc: "O carregamento de usb conduziu o colar do c�o anti-perdido/evita o colar do acidente do carro para c�es cachorros coleiras do c�o conduz fontes conduzidas produtos do animal de estima��o", img: "./imag/catal/prod1.jpg" },
    { name: "escova para remo��o de pelos", href: "https://s.click.aliexpress.com/e/_AFHdpW", desc: "Escova para remo��o de pelos de animais de estima��o, pente para c�es e gatos, escova desembara�adora e aparadora de pelos longos, foscos", img: "./imag/catal/prod2.jpg" },
    { name: "capa para transporte de c�es no carro", href: "https://s.click.aliexpress.com/e/_ASF9qo", desc: "Prodigen c�o capa de assento do carro � prova dwaterproof �gua pet travel c�o transportadora hammock traseira do carro traseiro protetor de assento esteira transportadora seguran�a para c�es", img: "./imag/catal/prod3.jpg" },
    { name: "escova de banho para pets", href: "https://s.click.aliexpress.com/e/_9gOCCC", desc: "Casa de banho cachorro grande c�o gato banho massagem luvas escova macio seguran�a silicone pet acess�rios para c�es gatos ferramentas maschas produtos", img: "./imag/catal/prod4.jpg" },
    { name: "escova de pelo de cao", href: "https://s.click.aliexpress.com/e/_9AUYbm", desc: "Kimpets gato pente de c�o pente de cabelo de gato pente de cabelo de c�o de estima��o especial agulha pente de gato limpeza de cabelo e produtos de beleza", img: "./imag/catal/prod5.jpg" },
    { name: "pote de racao de acr�lico", href: "https://s.click.aliexpress.com/e/_99OXdW", desc: "Bacia dobro antiderrapante do c�o da bacia do gato com animal de estima��o do suporte que alimenta a bacia da �gua do gato para o alimento dos gatos", img: "./imag/catal/prod6.jpg" },
    { name: "ropinha para pets", href: "https://s.click.aliexpress.com/e/_ABZHAC", desc: "C�o quente roupas para c�es pequenos m�dio malha gato camisola pet roupas para chihuahua bulldogs filhote de cachorro traje casaco inverno", img: "./imag/catal/prod7.jpg" },
    { name: "brinquedo bolinha com efeito sonoro", href: "https://s.click.aliexpress.com/e/_A4gTqs", desc: "Gato inteligente brinquedos interativos bola catnip gato treinamento brinquedo do animal de estima��o jogando bola pet squeaky suprimentos produtos brinquedo para gatos gatinho", img: "./imag/catal/prod8.jpg" },
    { name: "coleira de Nylon", href: "https://s.click.aliexpress.com/e/_AsxM56", desc: "Coleira de c�o de n�ilon personalizado colar de animal de estima��o gravado identifica��o tag placa reflexiva para pequeno m�dio grande c�es pitbull pug", img: "./imag/catal/prod9.jpg" },
    { name: "escova que tira pelos do sofa", href: "https://s.click.aliexpress.com/e/_ACidYm", desc: "Pet removedor de p�los escova port�til removedor de fiapos escova de cabelo fuzz tecido barbeador escova ferramenta de prepara��o de c�es gato de madeira escova de suprimentos de c�es", img: "./imag/catal/prod10.jpg" },
    { name: "escova que tira pelos do sofa2", href: "https://s.click.aliexpress.com/e/_97dBE2", desc: "Escova removedora de pelos de animais de estima��o, raspador de pelo para gatos, cachorros, remo��o de fiapos para sof�, carpetes, acess�rios de limpeza, produtos para animais de estima��o", img: "./imag/catal/prod11.jpg" },
    { name: "aparador de garras", href: "https://s.click.aliexpress.com/e/_AtVXVu", desc: "Aparador el�trico para unhas de cachorro, cortador de unha para c�es, recarreg�vel, usb, carregamento, pet, silencioso, gato, patas, ferramentas de cuidado", img: "./imag/catal/prod12.jpg" },
    { name: "pote de ra�ao para animais de grande porte", href: "https://s.click.aliexpress.com/e/_Affh3y", desc: "C�o duplo tigelas com suporte altura ajust�vel tigela prato de alimenta��o para animais de estima��o m�dio grande c�o elevados alimentadores de �gua comida gato mesa elevador", img: "./imag/catal/prod13.jpg" },
    { name: "cama de gato", href: "https://s.click.aliexpress.com/e/_AW96NM", desc: "Gato e c�o de estima��o cama de canil macio casa de dormir saco de dormir esteira tenda pet morno e confort�vel c�o casa de cachorro macio velo canil c�o", img: "./imag/catal/prod14.jpg" },
    { name: "coleira com guia", href: "https://s.click.aliexpress.com/e/_9xaU86", desc: "Coleira e coleira de nylon para animais de estima��o, guia para corrida, treinamento de c�es e gatos", img: "./imag/catal/prod15.jpg" },
    { name: "protetor de sof� para gato de arranhar", href: "https://s.click.aliexpress.com/e/_97vmEI", desc: "Protetor para gato/sof�, adesivo dur�vel para arranhar, poste para m�veis, sof�, protetor anti-gato, arranhador, almofadas para pata, garra", img: "./imag/catal/prod16.jpg" },
    { name: "cama de gato na janela", href: "https://s.click.aliexpress.com/e/_A6Gh4W", desc: "Gato cama de rede confort�vel gatinho rede balan�o gato pendurado cama ensolarado janela assento montagem rede para gatos na janela", img: "./imag/catal/prod17.jpg" },
    { name: "mochila de carregar pet", href: "https://s.click.aliexpress.com/e/_Adclzu", desc: "Gato portador sacos respir�vel pet portadores pequeno c�o gato mochila viagem espa�o c�psula gaiola pet transporte saco para gatos", img: "./imag/catal/prod18.jpg" },
    { name: "caminha puf para pets", href: "https://s.click.aliexpress.com/e/_AYkfnM", desc: "C�o redondo colch�o macio de pel�cia gato cama c�o gato inverno quente dormir pet canil remov�vel lav�vel c�o sof� almofada grande c�o hous", img: "./imag/catal/prod19.jpg" },
    { name: "almofadinha de brinquedo para gatos", href: "https://s.click.aliexpress.com/e/_A9JlOE", desc: "Catnip de pel�cia para animais de estima��o, brinquedo interativo divertido com erva de gato, gatinho, brinquedo para mastigar, garras, polegar, de hortel� para gatos loucos", img: "./imag/catal/prod20.jpg" },
    { name: "coleira retr�til", href: "https://s.click.aliexpress.com/e/_9gnj8m", desc: "Rojeco coleira retr�til de c�es, correia de trela extens�vel autom�tica para c�es, ajust�vel, gato, cachorro, caminhada, corrida, coleira com corda", img: "./imag/catal/prod21.jpg" },
    { name: "coleira de treinamento multifun��es", href: "https://s.click.aliexpress.com/e/_AFLQSm", desc: "Rojeco 1000m coleira de treinamento do c�o el�trico luz � prova dwaterproof �gua recarreg�vel pet anti casca controle colarinho para c�es choque el�trico", img: "./imag/catal/prod22.jpg" },
    { name: "capa de assento", href: "https://s.click.aliexpress.com/e/_9QdC6e", desc: "Capa de assento para carro para cachorro, protetor � prova d'�gua, almofada para animal de estima��o, banco traseiro, rede de prote��o para carro", img: "./imag/catal/prod23.jpg" },
    { name: "cama de cachorro", href: "https://s.click.aliexpress.com/e/_AqSVb8", desc: "Cama para animais de estima��o, tecido lav�vel de algod�o, macio para c�es, gatos e filhotes pequenos m�dios e grandes", img: "./imag/catal/prod24.jpg" },
    { name: "kit cercado e lona a prova d'�gua", href: "https://s.click.aliexpress.com/e/_AoBeUS", desc: "Novo tpu acolchoado pet cerca dampproof esteira do c�o imperme�vel e resistente � sujeira esteira do c�o camas de c�o extra grandes para c�es pequenos luxo", img: "./imag/catal/prod25.jpg" },
    { name: "bola de football americano", href: "https://s.click.aliexpress.com/e/_A7rnIa", desc: "Brinquedos de rugby do plut�nio do brinquedo da tra��o da bola da corda do c�o para cachorrinhos multi-funcionais brinquedos do enigma", img: "./imag/catal/prod26.jpg" },
    { name: "frisbee uma pe�a", href: "https://s.click.aliexpress.com/e/_9RQ8j0", desc: "1 p�s discos de v�o do c�o de estima��o brinquedos do c�o de estima��o treinamento discos voadores interativos mordida resistente s�lica gel macio personalizado foto discos voadores", img: "./imag/catal/prod27.jpg" }
];

const searchInput = document.getElementById("search1");

const list = document.getElementById("list");

function setList(group) {
    clearList();
    for (const pg of group) {
        const item = document.createElement("li");
        const itemButton = document.createElement("a");
        itemButton.href = pg.href;
        item.classList.add("list-group-item");
        itemButton.classList.add("item-button");
        const text = document.createTextNode(pg.name);
        item.appendChild(itemButton);
        itemButton.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

function setNoResults() {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    const text = document.createTextNode("sem resultados");
    item.appendChild(text);
    list.appendChild(item);
};

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else {
        return -1;
    }
};

const pubList = document.getElementById("pubList");

for (const pg of pgs) {
    const pub = document.createElement("li");
    pub.classList.add("pub");
    const img = document.createElement("img");
    img.src = pg.img;
    const post_text = document.createElement("div");
    post_text.classList.add("post-txt");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const bt = document.createElement("a");
    const name = document.createTextNode(pg.name);
    const desc = document.createTextNode(pg.desc);
    const buy = document.createTextNode("comprar");
    h1.appendChild(name);
    h3.appendChild(desc);
    bt.href = pg.href;
    post_text.appendChild(h1);
    post_text.appendChild(h3);
    bt.appendChild(buy);
    post_text.appendChild(bt);
    pub.appendChild(img);
    pub.appendChild(post_text);
    document.getElementById("pubList").appendChild(pub);
};

const banner1 = document.getElementById("banner1");

for (const pg of pgs) {
    const imag = document.createElement("div");
    imag.classList.add("imag");
    const img = document.createElement("img");
    img.src = pg.img;
    imag.href = pg.href;
    imag.appendChild(img);
    banner1.appendChild(imag);
};