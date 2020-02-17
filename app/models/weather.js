export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
let fTemp = data.main.temp * 9/5 - 459.67;

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.temp = fTemp.toFixed(2)
  }

  get weatherTemplate(){
    return /*html*/`

    <h1>${this.city}</h1>
    <h2>${this.temp}</h2>
    `
  }
}