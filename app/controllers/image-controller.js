import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage(){
  document.getElementById("bg-image").style.backgroundImage = `url(${store.State.image.myImage})`;
}



export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage);
    ImageService.getImage();
  }
}
