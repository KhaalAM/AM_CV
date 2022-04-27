


function DeffilerImag() {
    document.getElementById("arriere");
    document.getElementById("degrade");
    document.getElementById("image");
    im = 1;




}

function Diapo() {

      setTimeout(imgSuiv, 2000);



}


function imgSuiv() {
    var Img = 0;
    var nbImageMax = document.images.length - 1;
    document.images[Img].style.display = "none";
    if (Img < nbImageMax)
        Img ++;
    else
        Img = 0;
    document.images[Img].style.display = "block";
    setTimeout(imgSuiv, 2000);
}


















img = new Image();
img.src = "https://diaporamaprofessionnel.files.wordpress.com/2018/04/diaporama-en-ligne.jpg";
img.addEventListener('load', initOnImage, false);

function initOnImage() {
    cvs = document.getElementById('CanvasCV');
    ctx = cvs.getContext('2d');
    cvs.width = img.width;
    cvs.height = img.height;
    cvs.style.border = "10px solid blue";
    ctx.drawImage(img, 0, 0);
    document.onmousedown = onImageClick;
}

function onImageClick(e) {
    shift.x = last;
    mouse.x = e.pageX;
    clearTimeout(tmt);  //arrêt de l'éffet eventuel d'amorti en cours.
    document.onmousemove = stickImage;
    document.onmouseup = launchImage;
}


function stickImage(e) {
    var xs = e.pageX - mouse.x + shift.x;
    speed = xs - last;  //mémorisation de la vitesse lors de ce déplacement
    putImage(xs);
}

function launchImage(e) {
    shift.x = e.pageX - mouse.x + shift.x;
    document.onmousemove = null;
    tmt = setTimeout(inertialImage, 100);
}

function putImage(x) {
    if (x > img.width) {
        shift.x -= img.width;
        x -= img.width;
    } else if (x < 0) {
        shift.x += img.width;
        x += img.width;
    }
    ctx.drawImage(img, x - img.width, 0, img.width, img.height);
    ctx.drawImage(img, x, 0, img.width, img.height);
    last = x;
}

function inertialImage() {
    speed *= 0.8;
    if (Math.abs(speed) > 2) {
        putImage(last + speed);
        tmt = setTimeout(inertialImage, 100);
    }
}
}

