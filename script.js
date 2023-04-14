const collection = [
    {
        Name: "Manchester United",
        Coach: "Sir Alex Ferguson",
        Creation: "1878",
        Championship: "England",
        Picture: "../img/FC-Porto.jpg",

    }

]

[
    {
        Name: "Liverpool",
        Coach: "Jurgen Klopp",
        Creation: "1892",
        Championship: "England",
        Picture: "../img/benfica.jpg",

    }
]

[
    {
        Name: "Real Madrid",
        Coach: "Carlo Ancelotti",
        Creation: "1902",
        Championship: "Spain",
        Picture: "../img/Real Madrid.jpg",
    }
]

[
    {
        Name: "Fc Barcelona",
        Coach: "Xavi",
        Creation: "1899",
        Championship: "Spain",
        Picture: "../img/FC Barcelona.jpg",
    }
]

[
    {
        Name: "Milan Ac",
        Coach: "Stephano Pioli",
        Creation: "1899",
        Championship: "Italy",
        Picture: "../img/Logo-Milan-1.jpg",
    }
]
[
    {
        Name: "Juventus",
        Coach: "Massimo Allegri",
        Creation: "1878",
        Championship: "Italy",
        Picture: "../img/Juventus-Emblème.jpg",
    }
]
[
    {
        Name: "Psg",
        Coach: "Christophe Galtier",
        Creation: "1970",
        Championship: "France",
        Picture: "../img/psg.jpeg",

    }
]

[
    {
        Name: "Marseille",
        Coach: "Igor Tudor",
        Creation: "1899",
        Championship: "France",
        Picture: "../img/marseille.jpg",

    }
]

[
    {
        Name: "Borussia Dortmund",
        Coach: "Edin Terzic",
        Creation: "1909",
        Championship: "Germany",
        Picture: "../img/Borussia-Dortmund-Logo-1.jpg",
    }
]

[
    {
        Name: "Bayern Munich",
        Coach: "Thomas Tuchel",
        Creation: "1900",
        Championship: "Germany",
        Picture: "../img/Logo-Bayern-Munich-1.jpg",
    }
]

[
    {
        Name: "Fc Porto",
        Coach: "Sergio Conceicao",
        Creation: "1893",
        Championship: "Portugal",
        Picture: "../img/FC-Porto.jpg",
    }
]

[
    {
        Name: "BenFica",
        Coach: "Roger Schmidt",
        Creation: "1904",
        Championship: "Portugal",
        Picture: "../img/benfica.jpg",
    }
]

collection.forEach(function (objet) {
 
  let team = document.createElement("div");
  team.classList.add("team");

 
  let picture = document.createElement("img");
  picture.src = objet.picture;
  team.appendChild(picture);
  

  let Championship = document.createElement("h3");
  Championship.textContent = objet.Championship;
  team.appendChild(Championship);
  console.log(Championship);

  let Coach = document.createElement("p");
  Coach.textContent = objet.Coach;
  team.appendChild(Coach);
  console.log(Coach)

  let Creation = document.createElement("h6");
  Creation.textContent = objet.Creation;
  team.appendChild(Creation);
  console.log(Creation)

 document.body.appendChild(team);
});