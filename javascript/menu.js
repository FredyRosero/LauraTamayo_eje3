
const MAPA_SPRITE_NOMBRE = "mapa";
const MAPA_SPRITE_URL = "imagenes/diagrama.png";
/**
 * Este es el estado de inicio
 */
var menu = {
	preload: function() {
		
		diagrama.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;// mostrar todo
		diagrama.load.image(MAPA_SPRITE_NOMBRE, MAPA_SPRITE_URL);   // precargar fondo
		diagrama.stage.backgroundColor = 0xDDDDDD; //https://phaser.io/examples/v2/display/game-background-color
		
	},
	create: function() {		
  		// colocar fondo
		var fondo = this.diagrama = this.add.sprite(diagrama.world.centerX, diagrama.world.centerY, MAPA_SPRITE_NOMBRE); //http://www.html5gamedevs.com/topic/4337-creating-a-sprite-in-the-middle-of-the-screen/
		fondo.anchor.set(0.5); // centrar punto de origen de escalamiento
		fondo.scale.set(1.2); // escalamiento	 		
		
		crearBoton(500,440,	"Cuevas del chaparro","estado_1",diagrama);
		crearBoton(380,320,	"Parque Principal","estado_2",diagrama);
		crearBoton(220,420,	"Cerro Negro","estado_3",diagrama);
		crearBoton(190,270,	"Loma de la Cruz","estado_4",diagrama);
		crearBoton(90,330,	"Tarpeya","estado_5",diagrama);
	}
}

/**
 * Esta funcion nos permite automatizar la creación de los botones dentro de los estados
 * @param {*} x posicion en x
 * @param {*} y posicion en y
 * @param {*} texto texto del boton
 * @param {*} state Estado al cual cambia
 * @param {*} phaser_game Objeto Phaser para poder cambiar el estado
 */
 function crearBoton (x, y, texto, state, phaser_game)
 {
	var graphics = phaser_game.add.graphics(0, 0);
    // graphics.lineStyle(2, 0xffd900, 1);
    graphics.beginFill(0xFFFFFF, 1);
    graphics.drawCircle(
		x, 
		y, 
		10);

	var boton = phaser_game.add.text(x, y-30, texto, {
		font: "bold 20px Serif",
		fill: "#FFF",
		align: "center"
	});
	boton.anchor.set(0.5); // centrar ancla
	boton.inputEnabled = true; // habilitar events
	boton.events.onInputDown.add(function() { // agregar funcion
		phaser_game.state.start(state);
	});
	
	boton.events.onInputOut.add(function() {  boton.fill = "#FFF"; }, this);	
	boton.events.onInputOver.add(function() {  boton.fill = "#8F8"; }, this);	
	
 }

