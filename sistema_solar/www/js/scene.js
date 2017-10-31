(function (){
    let scene = new THREE.Scene();
    //ancho y el alto de la pantalla
    const aspectRatio = window.innerWidth / window.innerHeight;
    //
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    //busca el nodo padre y agrega lo que creamos al elemento.
    //domElement es un canvas.
    document.body.appendChild(renderer.domElement);

    camera.position.z = 50;
    camera.position.y = 5;

    let Sol;
    let Mercurio;
    let Venus;
    let Tierra;
    let Marte;
    let Jupiter;
    let Saturno;
    let Urano;
    let Neptuno;

    let loader = new THREE.TextureLoader();
    
        loader.load('public/Fox.jpg', function (texture) {
            let geometry = new THREE.SphereGeometry(10, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Sol = new THREE.Mesh(geometry, material);
    
            Sol.position.y = 0;
            Sol.position.x = 0;
            scene.add(Sol);
        })

       loader.load('public/mercurio.png', function (texture) {
            let geometry = new THREE.SphereGeometry(1, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Mercurio = new THREE.Mesh(geometry, material);
    
            Mercurio.position.x = 5;
            scene.add(Mercurio);
        })

        loader.load('public/venus.jpg', function (texture) {
            let geometry = new THREE.SphereGeometry(2, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Venus = new THREE.Mesh(geometry, material);
    
            Venus.position.x = 20;
            scene.add(Venus);
        })

        loader.load('public/tierra.png', function (texture) {
            let geometry = new THREE.SphereGeometry(3, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Tierra = new THREE.Mesh(geometry, material);
    
            Tierra.position.x = 30;
            scene.add(Tierra);
        })

        loader.load('public/Bomb.png', function (texture) {
            let geometry = new THREE.SphereGeometry(3.9, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Marte = new THREE.Mesh(geometry, material);
    
            Marte.position.x = 43;
            scene.add(Marte);
        })

        loader.load('public/Pokeball.png', function (texture) {
            let geometry = new THREE.SphereGeometry(4.2, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Jupiter = new THREE.Mesh(geometry, material);
    
            Jupiter.position.x = -20;
            scene.add(Jupiter);
        })

        loader.load('public/Logo.jpg', function (texture) {
            let geometry = new THREE.SphereGeometry(4, 70, 70)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            Saturno = new THREE.Mesh(geometry, material);
    
            Saturno.position.x = -32;
            scene.add(Saturno);
        })

        
        let pointLight = new THREE.PointLight(0x404040);
        
        pointLight.position.y = 60;

        scene.add(new THREE.AmbientLight(0x404040));
        scene.add(pointLight);
    
        renderer.render(scene, camera);

        function loop() {
            //ya es una animacion, por lo que ya se esta dibujando varias veces.
            //ciclo que permite ver el grafico dentro de la escena.
            requestAnimationFrame(loop);
            
            renderer.render(scene, camera);

        }   
        loop();
        
})();
