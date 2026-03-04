function setup() {
    createcanvas(1920, 1080, WEBGL);//plano 3d
    terra=loadImage('terrajpg')
}

function draw() {
    backgoud(205,102,94);//cor de fundo
    rotatey(millis()/1000);//rotação da terra,imagem.
    Sphere(80,100);//esfera 3D
}