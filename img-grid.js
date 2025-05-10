const imageSources = [
    'img/birria.JPG',
    'img/birria2.JPG',
    'img/birria3.JPG',
    'img/birria4.JPG',
    'img/birria5.JPG',
    'img/birria6.JPG',
    'img/birria7.JPG',
    'img/birria8.JPG',
    'img/birria9.JPG',
    'img/birria10.JPG',
    'img/chilo.JPG',
    'img/chilo2.JPG',
    'img/chilo3.JPG',
    'img/chilo4.JPG',
    'img/chilo5.JPG',
    'img/chilo6.JPG',
    'img/chilo7.JPG',
    'img/chilo8.JPG',
    'img/chilo9.JPG',
    'img/chilo10.JPG',
    'img/chilo11.JPG',
    'img/chilo13.JPG',
    'img/chilo14.JPG',
    'img/chilo15.JPG',
    'img/chilo16.JPG',
    'img/nydosas.JPG',
    'img/nydosas2.JPG',
    'img/nydosas3.JPG',
    'img/nydosas4.JPG',
    'img/nydosas5.JPG',
    'img/nydosas6.JPG',
    'img/nydosas7.JPG',
    'img/nydosas9.JPG',
    'img/nydosas10.JPG',
    'img/nydosas11.JPG',
    'img/nydosas12.JPG',
    'img/nydosas13.JPG',
    'img/nydosas14.JPG',
    'img/up.JPG',
    'img/up2.JPG',
    'img/up3.JPG',
    'img/up4.JPG',
    'img/up5.JPG',
    'img/up6.JPG',
    'img/up7.JPG',
    'img/up8.JPG',
    'img/up9.JPG',
    'img/up10.JPG',
    'img/up11.JPG',
    'img/up12.JPG',
    'img/up13.JPG',
    'img/up14.JPG',
    'img/up15.JPG',
    'img/up16.JPG',
    'img/up17.JPG',
    'img/up18.JPG',
    'img/moshe.JPG',
    'img/moshe2.JPG',
    'img/moshe3.JPG',
    'img/moshe4.JPG',
    'img/moshe5.JPG',
    'img/moshe6.JPG',
    'img/moshe7.JPG',
    'img/moshe8.JPG',
    'img/moshe9.JPG',
    'img/moshe10.JPG',
    'img/moshe11.JPG',
    'img/moshe12.JPG',
    'img/moshe13.JPG',
    'img/moshe14.JPG',
  ];

const gallery = document.getElementById('gallery');
imageSources.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.onclick = () => openLightbox(index);
    gallery.appendChild(img);
});

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = imageSources[currentIndex];
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeLightbox(event) {
    if (event.target.id === 'lightbox') {
      document.getElementById('lightbox').style.display = 'none';
    }
  }

  function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    document.getElementById('lightbox-img').src = imageSources[currentIndex];
  }

  function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % imageSources.length;
    document.getElementById('lightbox-img').src = imageSources[currentIndex];
  }