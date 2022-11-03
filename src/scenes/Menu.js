class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //background image
        var bg = this.add.image(game.config.width/2, game.config.height/2,'main_menu');
        this.playButton = this.add.sprite(game.config.width/3+28, game.config.height/2+110,'button_play');
        this.playButton.setInteractive({
            useHandCursor: true,
        });

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'START GAME', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press SPACE to start', menuConfig).setOrigin(0.5);

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        music.play();
        //this.sound.setDecodedCallback(music, play, this);
    }

    update() {
        //music loop?
        if(!music.isPlaying){
            music.play();
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          // Novice mode
          game.settings = {
            gameTimer: 120000,
            maxAlcohol: 3,
          }
          // this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }

        // play button functionality, BUGGY
        this.input.on('gameobjectdown', (pointer, gameObject, event) => {
            if (gameObject == this.playButton){
               // Novice mode
                game.settings = {
                    gameTimer: 120000,
                    maxAlcohol: 3,
                }
                // this.sound.play('sfx_select');
                this.scene.start("playScene");
            }   
        });
        
      }
}