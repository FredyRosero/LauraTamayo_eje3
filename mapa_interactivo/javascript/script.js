/**
 * Es es el código que arranca Phaser
 */

//Este es el constructor de Phaser
var diagrama = new Phaser.Game(
	700, //Ancho
	700, // Alto
	Phaser.CANVAS, // Renderizador (Phaser.AUTO, Phaser.WEBGL, Phaser.CANVAS, Phaser.HEADLESS)
	"contenedor_phaser" //El elemento HTML donde se pondrá el CANVAS de Phaser
); 

/**
 * En Phaser hay algo llamado Estados (State)
 * Nos sirve para separar la lógica del programa en pedazos de codigo
 * com si se tratatar de niveles en un juego
 * https://www.joshmorony.com/phaser-fundamentals-using-states-in-phaser/
 * 
 * Se agregan todos los estados a la Interactividad
 */

var estado_1 = crear_estado(
	"Estado 1",

	"En la sede Amazonia, el arquitecto Santiago Moreno \
	recoge elementos locales y autóctonos, méritos que fueron destacados \
	en la XVI Bienal de Arquitectura Colombiana.",
	
	"imagenes/estado_1.jpg"
	)

var estado_2 = crear_estado(
	"Estado 2",

	"En la sede Amazonia, el arquitecto Santiago Moreno \
	recoge elementos locales y autóctonos, méritos que fueron destacados \
	en la XVI Bienal de Arquitectura Colombiana.",
	
	"imagenes/estado_2.jpg"
	)	

var estado_3 = crear_estado(
	"Estado 3",

	"En la sede Amazonia, el arquitecto Santiago Moreno \
	recoge elementos locales y autóctonos, méritos que fueron destacados \
	en la XVI Bienal de Arquitectura Colombiana.",
	
	"imagenes/estado_3.jpg"
	)		

diagrama.state.add("inicio",menu);
diagrama.state.add("estado_1",estado_1);
diagrama.state.add("estado_2",estado_2);
diagrama.state.add("estado_3",estado_3);

// El primer Estado que arranca la interactividad es "Inicio"
diagrama.state.start("inicio");

/**
 * 
 */
function crear_estado(titulo,contenido,imagen){
	var estado = {
		preload: function() {
			diagrama.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			diagrama.load.image("imagen", imagen);  
		},
		create: function() {                
			this.stage.backgroundColor = "#FFFFFF"; // Fondo blanco      

			// agregar texto titulo
			var titulo_text = diagrama.add.text(
				diagrama.world.centerX, //x
				100, //y
				titulo, //texto
				{ font: "bold 40px Serif", fill: "#250", align: "center" } //estilo
			);     
			titulo_text.anchor.set(0.5); // centrar ancla
			
			// imagen
			var imagen = this.diagrama = this.add.sprite(diagrama.world.centerX, 280, 'imagen');
			imagen.scale.setTo(1.5);
			imagen.anchor.set(0.5);
			
			// Crear estilo de texto, contenido y poner texto
			var estiloTexto = { 
				font: "19px Serif", // Define la fuente y tamaño del texto
				fill: "#000", // Define el color del texto
				align: "left", // Define la alineación
				wordWrap: true, // Define si las palabras se cortan
				wordBreak: true, // Define si se rompe la palabra
				wordWrapWidth: 500 // Define el ancho en que las palabras se cortan
			};         
			
			var texto = diagrama.add.text(diagrama.world.centerX, 370, contenido, estiloTexto);
			texto.anchor.set(0.5);
			texto.setTextBounds(0, 150, 0, 0); // Define la region rectangular del texto
					  
			
			// texto regresar
			var menu = diagrama.add.text(diagrama.world.centerX, diagrama.world.height-80, "Volver", { font: "bold 30px Serif", fill: "#250", align: "center" });
			menu.anchor.set(0.5);
			menu.inputEnabled = true;
			menu.events.onInputDown.add(this.inicio, this); // llamar a funcion inicio        
		},
		inicio: function () {
			// Volver
			diagrama.state.start("inicio");
		}
	}
	return estado;
}

