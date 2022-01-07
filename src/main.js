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
}

searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value && value.trim().toLowerCase();
        setList(pgs.filter(pg => {
            return pg.name.includes(value);
        }).sort((pgA, pgB) => {
            return getRelevancy(pgB.name, value) - getRelevancy(pgA.name, value);
        }));
    } else {
        clearList();
    }});

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
    pubList.appendChild(pub);
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

$(".banner1").slick({
    slidesToShow: 3,
    slidesToScroll: 17,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true
});