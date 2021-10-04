const list = document.getElementById('logoList1');
const list2 = document.getElementById('logoList2');
const images = ['imagens/logos/cynthia.png', 'imagens/logos/ayres.png', 'imagens/logos/amoremilho.png', 'imagens/logos/dmodas.png', 'imagens/logos/florescer.png', 'imagens/logos/higquality.png', 'imagens/logos/pizzarella.png', 'imagens/logos/wr.png', 'imagens/logos/alma.png', 'imagens/logos/nmmodas.png', 'imagens/logos/ceg.png', 'imagens/logos/personart.png', 'imagens/logos/saramodas.png'];
images.forEach((image, index) => {
    const logo = document.createElement('li');
    const atualImage = document.createElement('img');
    atualImage.src = image;
    atualImage.className = 'logo';
    logo.appendChild(atualImage);
    if (index >= 8) {
        list2.appendChild(logo);
    } else {
        list.appendChild(logo);
    }
});