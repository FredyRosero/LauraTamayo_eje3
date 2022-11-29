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
	"Cuevas del chaparro",
	"Estas cuevas son cavidades naturales en el suelo resultado de la acción del agua a lo largo de los sigos, además son impresionantes sus notables laberintos. Es un lugar exótico que alberga mucha flora y fauna en sus cavidades, las cuales son húmedas y oscuras.",	
	"imagenes/cuevas.jpg"
	)

var estado_2 = crear_estado(
	"Parque Principal",
	"Íquira cuenta con un parque principal el cual es cubierto por las ramas de un inmenso samán, este es una ceiba de muchos años y es uno de los símbolos representativos del pueblo. El parque con su samán, representa un lugar de unión y recreacional para los habitantes, además, se realizan actividades culturales y económicas, como el mercado campesino.",	
	"imagenes/iglesia_saman.jpg"
	)	

var estado_3 = crear_estado(
	"Cerro Negro",
	"Es rico en pequeñas cuencas de agua pura y cristalina, la cual se toma para abastecer la vereda El Chaparro. Según estudios realizados en el cerro, se ha demostrado que contiene un mineral llamado uriano, pero no puede ser explotado porque tendría que ser evacuado un gran perímeto debido a su radiactividad",	
	"imagenes/cerro.jpg"
	)		

var estado_4 = crear_estado(
	"Loma de la Cruz",
	"Este es un sitio de congregación religiosa, el cual es visitado por los habitantes del municipio durante la Semana Santa para realizar el viacrucis. Al final del camino se encuentra una imagen del patrono del pueblo, San Francisco de Asís, que según las leyendas, vigila el pueblo desde lo alto.",
	"imagenes/loma_de_la_Cruz.png"
	)		
	
var estado_5 = crear_estado(
	"Reserva Forestal Tarpeya",
	"Este parque está dotado de una cabaña adecuada para recibir a los turistas que lo visitan con capacidad para cincuenta personas, además cuenta con un guía para recorrer el bosque y las cascadas. En Tarpeya se promueve el turismo y se fortalece como centro de experimentación e investigación para la práctica de estudios forestales y ambientales.",	
	"imagenes/tarpeya.jpg"
	)				

diagrama.state.add("inicio",menu);
diagrama.state.add("estado_1",estado_1);
diagrama.state.add("estado_2",estado_2);
diagrama.state.add("estado_3",estado_3);
diagrama.state.add("estado_4",estado_4);
diagrama.state.add("estado_5",estado_5);

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
				{ font: "bold 35px Serif", fill: "#250", align: "center" } //estilo
			);     
			titulo_text.anchor.set(0.5); // centrar ancla
			
			// imagen
			var imagen = this.diagrama = this.add.image(diagrama.world.centerX, 100+20, 'imagen');
			//imagen.scale.setTo(1.5);
			imagen.anchor.x = (0.5);
			imagen.width = 290;
			imagen.height = 290;
			
			// Crear estilo de texto, contenido y poner texto
			var estiloTexto = { 
				font: "15px Serif", // Define la fuente y tamaño del texto
				fill: "#000", // Define el color del texto
				align: "center", // Define la alineación
				boundsAlignH: "center",
				wordWrap: true, // Define si las palabras se cortan
				wordBreak: true, // Define si se rompe la palabra
				wordWrapWidth: 500 // Define el ancho en que las palabras se cortan
			};         
			
			var texto = diagrama.add.text(diagrama.world.centerX, imagen.position.y+imagen.height+20, contenido, estiloTexto);
			texto.anchor.set.x=0.5;
			texto.setTextBounds(0, 0, 0, 0); // Define la region rectangular del texto								  
			
			// texto regresar
			var menu = diagrama.add.text(diagrama.world.centerX, texto.position.y+texto.height+30, "Volver", { font: "bold 30px Serif", fill: "#250", align: "center" });
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

