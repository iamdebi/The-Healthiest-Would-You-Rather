import html2canvas from 'html2canvas';

export default {
  takeScreenshot() {
    html2canvas(document.querySelector(".summary"))
    //this grabs the div with class summary then
    .then(canvas => {document.body.appendChild(canvas)})
    // this adds it to the webpage don't know what to do with the div
  }
};
