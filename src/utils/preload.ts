import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import fox from "../assets/fox.png";
import rabbit from "../assets/rabbit.png";
import gorilla from "../assets/gorilla.png";
import obasan from "../assets/obasan.png";
import ojisan from "../assets/ojisan.png";
import musume from "../assets/musume.png";

export function preloadImages() {
    [obasan, musume, ojisan, cat, dog, fox, rabbit, gorilla].forEach(src => {
        const img = document.createElement('img')
        img.src = src
    })
}
