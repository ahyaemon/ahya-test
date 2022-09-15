import cat from "../assets/cat.webp";
import dog from "../assets/dog.webp";
import fox from "../assets/fox.webp";
import rabbit from "../assets/rabbit.webp";
import gorilla from "../assets/gorilla.webp";
import obasan from "../assets/obasan.webp";
import ojisan from "../assets/ojisan.webp";
import musume from "../assets/musume.webp";

export function preloadImages() {
    [obasan, musume, ojisan, cat, dog, fox, rabbit, gorilla].forEach(src => {
        const img = document.createElement('img')
        img.src = src
    })
}
