fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".name-product").textContent = data[1]["title"];
    document.querySelector(".img-product").src = data[1]["image"];
    document.querySelector(".price").textContent = data[1]["price"] + "$";
    document.querySelector(".description").textContent = data[1]["description"];

    document.querySelector(".name-product2").textContent = data[4]["title"];
    document.querySelector(".img-product2").src = data[4]["image"];
    document.querySelector(".price2").textContent = data[4]["price"] + "$";
    document.querySelector(".description2").textContent =
      data[4]["description"];

    document.querySelector(".name-product3").textContent = data[11]["title"];
    document.querySelector(".img-product3").src = data[11]["image"];
    document.querySelector(".price3").textContent = data[11]["price"] + "$";
    document.querySelector(".description3").textContent =
      data[10]["description"];

    const category1 = (document.querySelector(".category").textContent =
      data[1]["category"]);
    const category2 = (document.querySelector(".category2").textContent =
      data[4]["category"]);
    const category3 = (document.querySelector(".category3").textContent =
      data[11]["category"]);
    const mansCloath = document.querySelector(".card1");
    const juwelyr = document.querySelector(".card2");
    const electronik = document.querySelector(".card3");
    const select = document.getElementById("select-product");

    if (select.value == category1) {
      juwelyr.style.display = "none";
      electronik.style.display = "none";
    }
    select.addEventListener("change", changeCategory);
    function changeCategory() {
      if (select.value == category1) {
        juwelyr.style.display = "none";
        mansCloath.style.display = "block";
        electronik.style.display = "none";
      } else if (select.value == category2) {
        juwelyr.style.display = "block";
        mansCloath.style.display = "none";
        electronik.style.display = "none";
      } else if (select.value == category3) {
        mansCloath.style.display = "none";
        electronik.style.display = "block";
        juwelyr.style.display = "none";
      } else if (select.value == "all") {
        mansCloath.style.display = "block";
        electronik.style.display = "block";
        juwelyr.style.display = "block";
      }
    }
  })
  .catch((error) => console.error(error.massage));
