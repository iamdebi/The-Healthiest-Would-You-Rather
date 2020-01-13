import html2canvas from 'html2canvas';

export default {
  takeScreenshot() {
    html2canvas(document.querySelector(".summary"))
    //this grabs the div with class summary then
    .then(a => {
      a.href = canvas.toDataURL("image/jpeg")
      a.download = 'screenshot.jpg';
    })
  }
};
