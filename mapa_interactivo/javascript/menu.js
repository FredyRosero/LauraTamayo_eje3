/**
 * Este es el estado de inicio
 */
const MAPA_SPRITE_NOMBRE = "mapa";
const MAPA_SPRITE_URL = "imagenes/diagrama.png";
var menu = {
	preload: function() {
		
		diagrama.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;// mostrar todo

		diagrama.load.image(MAPA_SPRITE_NOMBRE, MAPA_SPRITE_URL);   // precargar fondo
		diagrama.stage.backgroundColor = 0xDDDDDD; //https://phaser.io/examples/v2/display/game-background-color
		
	},
	create: function() {		
  		// colocar fondo
		var fondo = this.diagrama = this.add.sprite(diagrama.world.centerX, diagrama.world.centerY, MAPA_SPRITE_NOMBRE); //http://www.html5gamedevs.com/topic/4337-creating-a-sprite-in-the-middle-of-the-screen/
		fondo.anchor.set(0.5); // centrar ancla
		fondo.scale.set(1.7);
		
		crearBoton(455,615,	"estado_1","estado_1",diagrama);
		crearBoton(360,330,	"estado_2","estado_2",diagrama);
		crearBoton(111,90,	"estado_3","estado_3",diagrama);			 		
	}
}

/**
 * Esta funcion nos permite automatizar la creación de los botones dentro de los estados
 * @param {*} x posicion en x
 * @param {*} y posicion en y
 * @param {*} texto texto del boton
 * @param {*} state Estado al cual cambia
 * @param {*} phaser_game Objeto Phaser para poder cambiar el estado
 * @returns 
 */
 function crearBoton (x, y, texto, state, phaser_game)
 {
		 var boton = phaser_game.add.text(x, y, texto, {
			 font: "bold 25px Serif",
			 fill: "#250",
			 align: "center"
		 });
		 boton.anchor.set(0.5); // centrar ancla
		 boton.inputEnabled = true; // habilitar events
		 boton.events.onInputDown.add(function() { // agregar funcion
			 phaser_game.state.start(state);
		 });
 }

