import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("div.gallery");

console.log(galleryItems);

for (const el of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.dataset.source = el.original;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
};

galleryBox.onclick = (event) => {
event.preventDefault();

  const instance = basicLightbox
    .create(
      `
		<img width="1280" src = ${event.target.dataset.source}>
	`
    )
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) {
      instance.close();
    }
  });
};

