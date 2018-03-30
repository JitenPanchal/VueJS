import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import medium from '../assets/medium.jpg';
import '../styles/image_viewer.css';

export default () => {
    System.import('../styles/image_viewer.css').then(module => {
    });
    const image = document.createElement("img");
    // image.src = "http://lorempixel.com/400/400/";
    image.src = small;
    document.body.appendChild(image);
};