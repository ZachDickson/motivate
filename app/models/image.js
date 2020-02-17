export default class Image {
constructor(data){
  this.myImage = data.url
}

get imageTemplate(){
  return /*html*/`
  <img src="${this.myImage}" alt="">
  
  `
}


}