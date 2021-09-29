import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  var container = document.createElement("div");
  container.className = "container";
  for (var i = 0; i < 5; i++) {
    var wiki_item = document.createElement("div");
    wiki_item.className = "wiki-item";
    var wiki_header = document.createElement("h1");
    wiki_header.className = "wiki-header";
    wiki_header.innerText = "Test";
    var wiki_content = document.createElement("div");
    wiki_content.className = "wiki-content";
    var wiki_text = document.createElement("p");
    wiki_text.className = "wiki-text";
    wiki_text.innerText = "TEST 2";
    var image_container = document.createElement("div");
    image_container.className = "img_container";
    var wiki_img = document.createElement("img");
    wiki_img.className = "wiki-img";

    wiki_item.appendChild(wiki_header);
    image_container.appendChild(wiki_img);
    wiki_content.appendChild(image_container);
    wiki_item.appendChild(wiki_content);
    wiki_content.appendChild(wiki_text);
    container.appendChild(wiki_item);
  }
  document.body.appendChild(container);
  var dogs = ["pug", "retriever", "beagle", "coonhound", "spaniel"];
  for (var j = 0; j < 5; j++) {
    getWebContent(dogs[j], j);
    getWikiText(dogs[j], j);
  }
}

async function getWebContent(name, num) {
  var headers = document.getElementsByClassName("wiki-header");
  var images = document.getElementsByClassName("wiki-img");
  const response = await fetch(
    "https://dog.ceo/api/breed/" + name + "/images/random"
  );
  const content = await response.json();
  headers[num].innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
  images[num].src = content.message;
}

async function getWikiText(name, num) {
  var text = document.getElementsByClassName("wiki-text");
  const response = await fetch(
    "https://en.wikipedia.org/api/rest_v1/page/summary/" + name
  );
  const content = await response.json();
  text[num].innerHTML = content.extract;
}
