import cat from "../assets/cat.svg";
import dog from "../assets/dog.svg";
import fox from "../assets/fox.svg";
import rabbit from "../assets/rabbit.svg";
import gorilla from "../assets/gorilla.svg";

export function preloadImages() {
    [cat, dog, fox, rabbit, gorilla].forEach(src => {
        const img = document.createElement('img')
        img.src = src
    })
}
