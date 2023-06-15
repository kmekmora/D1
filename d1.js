// Start Scene -- Done
class scene0 extends Phaser.Scene {
    constructor() {
        super('s0');
    }
    preload(){

    }
    create(){
 
        this.input.once('pointerdown', function ()
        {
            this.scene.start('s1');
        }, this);    
    }
    update(){}
}

// Logo -- Done
class scene1 extends Phaser.Scene {
    constructor() {
        super('s1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'logo.jpg');
    }
    create(){
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xFFFFFF, 1);
        this.graphics.fillCircle(400,325,300);
        this.imageObject = this.add.image(
            400,
            325,
            'logo',
        )
        this.imageObject.setScale(.45)
        this.input.once('pointerdown', function ()
        {
            this.scene.start('s2');
        }, this);    
    }
    update(){}
}

// It watches -- Done
class scene2 extends Phaser.Scene {
    constructor() {
        super('s2');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('watches', 'watches fancy.jpg');
    }
    create(){
        this.imageObject = this.add.sprite(
            400,
            300,
            'watches',
        )
        this.input.once('pointerdown', function ()
        {
            this.scene.start('s3');
        }, this);    
    }
}

// Eye -- Done
class scene3 extends Phaser.Scene {
    constructor() {
        super('s3');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('stare', 'stare.jpg')
        this.load.audio('portal', 'portal.mp3');
    }
    create(){

        let eyeball = this.add.image(-400, 300, 'stare');
        let portalSound = this.sound.add('portal');
        portalSound.play();        
        this.tweens.add({
            targets: eyeball,
            x: 1200,
            duration: 500,
        });

        this.input.once('pointerdown', function ()
        {
            portalSound.stop();
            this.scene.start('s4');
        }, this);    
    }
    update(){}
}

// Text 2 -- Done
class scene4 extends Phaser.Scene {
    constructor() {
        super('s4');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('never', 'never fancy.jpg');
    }
    create(){
        this.imageObject = this.add.sprite(
            400,
            300,
            'never',
        )

        this.input.once('pointerdown', function ()
        {
            this.scene.start('s5');
        }, this);    
    }
}

// Door -- Done
class scene5 extends Phaser.Scene {
    constructor() {
        super('s5');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('door', 'door.jpg');
        this.load.audio('knock', 'knock.mp3');

    }
    create(){

        
        this.imageObject = this.add.image(
            400,
            300,
            'door',
        )
        this.imageObject.setScale(.7);
        let knockSound = this.sound.add('knock');
        knockSound.play();  
        

        this.input.once('pointerdown', function ()
        {
        
            this.cameras.main.fadeOut(2000, 0, 0, 0);
            
        }, this);   
        
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => { // https://blog.ourcade.co/posts/2020/phaser-3-fade-out-scene-transition/ Helped with getting the camera fade to start next scene
            knockSound.stop();
            this.scene.start('s6');
        });
    }
    update(){}
}

// Text 3 -- Done
class scene6 extends Phaser.Scene {
    constructor() {
        super('s6');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('fight', 'fight fancy.jpg');
    }
    create(){
        this.imageObject = this.add.sprite(
            400,
            300,
            'fight',
        )

        this.input.once('pointerdown', function ()
        {
            this.scene.start('s7');
        }, this);    
    }
    update(){}
}

// Main Menu -- Done
class scene7 extends Phaser.Scene {
    constructor() {
        super('s7');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('menu', 'menu.png');
        this.load.audio('ouch', 'ouch.mp3');

    }
    create(){
        


        this.imageObject = this.add.image(
            400,
            300,
            'menu',
        )

        // Add a dot next to Play to indicate what we are selected
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x000000, 1);
        this.graphics.fillCircle(600,430,5);


        let ouchSound = this.sound.add('ouch');
        ouchSound.play();  
        this.add.text(390, 300, "Eye Pokers", {
            stroke: "#000",
            strokeThickness: "4",
            font: '60px',
            align: 'right',
            color: "#000000",
        });
        this.add.text(500, 400, "PLAY\nOPTIONS\nCREDITS", {
            font: '60px',
            align: 'right',
            color: "#000000",
        });

    }
}


let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [scene0, scene1, scene2, scene3, scene4, scene5, scene6, scene7,],
}

let game = new Phaser.Game(config);
