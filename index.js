// console.log('hotdog');
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0); 
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('div.img-l')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')

    // var tempImg = img.src = image.style.backgroundImage.slice(4, -1).replace(/"/g, "images_HD/");
    var imgSrc = image.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var imgSrc1 = imgSrc.slice(0,6);
    var imgSrc2 = imgSrc.slice(6)
    var imgSrc_string = imgSrc1 + "_HD" + imgSrc2;

    // img.src = image.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    img.src = imgSrc_string;
    // console.log(image.style.backgroundImage.slice(4, -1).replace(/"/g, ""));
    // console.log(img.src);
    // console.log(imgSrc_string);


    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
