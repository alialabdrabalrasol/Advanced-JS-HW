fetch("https://www.breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    let res = data.map((e) => {
      displayData(e);
      console.log(e);
    });
  });

function displayData(data) {
  const div = document.getElementById("container");
  const col = document.createElement("id");
  col.classList.add("col");
  col.classList.add("mb-3");
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("h-100");
 

  div.appendChild(card);

  const char_img = data.img;
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.classList.add("p-2")
  image.src = char_img;

  card.appendChild(image);

  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body");

  const name = data.name;
  const name_h = document.createElement("h5");
  name_h.classList.add("card-title");
  name_h.innerText = name;

  const occu = data.occupation;
  const occu_p = document.createElement("p");
  occu_p.classList.add("card-text");
  occu_p.innerText = occu;

  const cardfooter = document.createElement("div");
  cardfooter.classList.add("card-footer");

  const nickname = data.nickname;
  const nickname_h = document.createElement("h6");
  nickname_h.classList.add("card-text");
  nickname_h.innerText = nickname;

  cardfooter.appendChild(nickname_h);
  cardbody.appendChild(name_h);
  cardbody.appendChild(occu_p);

  card.appendChild(cardbody);
  card.appendChild(cardfooter);

  col.appendChild(card);
  div.appendChild(col);
}
