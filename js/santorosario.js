alert("hola")


var imagen = document.querySelector(".imagen");
var descripccion = document.querySelector(".descripccion");
var misterios = document.querySelector(".misterios");
var misterio = document.querySelector(".misterio");
var text = document.querySelector(".text");
var titulo = document.querySelector("#titulo");
var parrafo = document.querySelector(".parrafo");
var boxAudio = document.querySelector(".boxaudio");
var tituloAudio = document.querySelector(".tituloaudio");
var audio = document.querySelector(".audio");
var controles = document.querySelector(".controles");
var imagenSiguiente = document.querySelector(".imagensiguiente");

var numSiguiente = 0;
var numMisterio = 0;
var fecha = new Date();
var dia = fecha.getDay();

setInterval(() => {
  var dia = fecha.getDay();
}, 1000);

var oraciones = [
    /*señal de la cruz (0)*/
    {"titulo": "SEÑAL DE LA CRUZ",
    "parrafo": "En el nombre del Padre, del Hijo y del Espíritu Santo. Amén."},
    /*acto de contrición(1)*/
    {"titulo": "ACTO DE CONTRICIÓN",
    "parrafo":"Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío. Por ser Tú quién eres, Bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. También me pesa que puedes castigarme con las penas del infierno. Ayudado de tu divina gracia propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén."},
    /*padre nuestro (2)*/
    {"titulo": "PADRE NUESTRO",
    "parrafo": "Padre Nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."},
    /*avemaría (3)*/
    {"titulo": "AVEMARÍA",
    "parrafo": "Dios te salve María, llena eres de gracia, el Señor es contigo. Bendita Tú eres entre todas las mujeres y bendito es el fruto de tu vientre Jesús. Santa María, Madre de Dios, ruega por nosotros los pecadores, ahora y en la hora de nuestra muerte. Amén. (bis3)"},
    /*glor'ia al padre (4)*/
    {"titulo": "GLORIA AL PADRE",
    "parrafo": "Gloria al Padre y al Hijo y al Espíritu Santo, como era en un principio, ahora y siempre y por los siglos de los siglos. Amén."}

]

var misterioDay = [
    /*gozosos*/
    { "primermisterio": "La Anunciación a la Virgen María y la Encarnación del Verbo",
    "primertexto": "Al sexto mes el Ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David, el nombre de la virgen era María.",
    "segundomisterio": "La Visita de Nuestra Señora a su prima Santa Isabel.",
    "segundotexto": "En aquellos días María se puso en camino y fue de prisa a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel. Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el niño en su vientre, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: Bendita tú entre las mujeres y bendito el fruto de tu vientre.",
    "tercermisterio": "El Nacimiento de Jesús",
    "tercertexto": "Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar siendo Cirenio gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad. Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no tenían sitio en el alojamiento. Jesús nació en la humildad de un establo, de una familia pobre; aquellos sencillos pastores son los primeros testigos del acontecimiento. En esta pobreza se manifiesta la gloria del cielo.",
    "cuartomisterio": "La Presentación",
    "cuartotexto": "Cuando se cumplieron los ocho días para circuncidarlo, se le dio el nombre de Jesús, como lo había llamado el ángel antes de ser concebido en el vientre. Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarlo al Señor, como está escrito en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice en la ley del Señor.",
    "quintomisterio": "La Pérdida y Hallazgo del Niño Jesús en el Templo",
    "quintotexto": "Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo sus padres. Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles y preguntándoles; todos los que le oían estaban estupefactos por su inteligencia y sus respuestas."},
    /*luminosos*/
    {"primermisterio": "El Bautismo de Jesús",
    "primertexto": "Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de Dios que bajaba en forma de paloma y venía sobre él. Y una voz que salía de los cielos decía: Este es mi Hijo amado, en quien me complazco.",
    "segundomisterio": "Las Bodas de Caná",
    "segundotexto": "Al tercer día hubo una boda en Caná, un pueblo de Galilea. La madre de Jesús estaba allí, y Jesús y sus discípulos también habían sido invitados a la boda. En esto se acabó el vino, y la madre de Jesús le dijo: Ya no tienen vino. Jesús le contestó: Mujer, ¿por qué me lo dices a mí? Mi hora aún no ha llegado. Dijo ella a los que estaban sirviendo: Haced lo que él os diga. Había allí seis tinajas de piedra, para el agua que usan los judíos en sus ceremonias de purificación. En cada tinaja cabían entre cincuenta y setenta litros. Jesús dijo a los sirvientes: Llenad de agua estas tinajas. Las llenaron hasta arriba, y les dijo: Ahora sacad un poco y llevádselo al encargado de la fiesta. Así lo hicieron, y el encargado de la fiesta probó el agua convertida en vino, sin saber de dónde había salido. Solo lo sabían los sirvientes que habían sacado el agua. Así que el encargado llamó al novio y le dijo: Todo el mundo sirve primero el mejor vino, y cuando los invitados ya han bebido bastante, sirve el vino corriente. Pero tú has guardado el mejor hasta ahora. Esta fue la primera señal milagrosa que hizo Jesús en Caná de Galilea. Con ella mostró su gloria, y sus discípulos creyeron en él.",
    "tercermisterio": "El Anuncio del Reino de Dios",
    "tercertexto": "El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio.",
    "cuartomisterio": "La Transfiguración",
    "cuartotexto": "«Seis días después, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y los llevó aparte, a un monte alto. Y se transfiguró delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz",
    "quintomisterio": "La Institución de la Eucaristía",
    "quintotexto": "Mientras cenaban, Jesús tomó en sus manos el pan, y habiendo dado gracias a Dios lo partió y se lo dio a los discípulos, diciendo: Tomad, comed, esto es mi cuerpo. Luego tomó en sus manos una copa, y habiendo dado gracias a Dios la pasó a ellos, diciendo: Bebed todos de esta copa, porque esto es mi sangre, con la que se confirma el pacto, la cual es derramada en favor de muchos para perdón de sus pecados."},
    /*dolorosos*/
    {"primermisterio": "La Oración de Jesús en el Huerto",
    "primertexto": "Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: Sentaos aquí mientras voy a orar. Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces les dijo: Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo. Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú.",
    "segundomisterio": "La Flagelación",
    "segundotexto": "Pilato entonces tomó a Jesús y mandó azotarle.",
    "tercermisterio": "La Coronación de Espinas",
    "tercertexto": "Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. Lo vistieron con un manto púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza, y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: Salve, Rey de los judíos.",
    "cuartomisterio": "Jesús con la Cruz a cuestas",
    "cuartotexto": "Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la Calavera",
    "quintomisterio": "La crucifixión",
    "quintotexto": "Llegados al lugar llamado: La Calavera, le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a la izquierda. Jesús decía: Padre, perdónales, porque no saben lo que hacen... Era ya eso de medio día cuando, al eclipsarse el sol, hubo oscuridad en toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y Jesús, dando un fuerte grito dijo: Padre, en tus manos pongo mi espíritu y dicho esto, expiró."},
    /*gloriosos*/
    {"primermisterio": "La Resurrección",
    "primertexto": "al tercer día después de su entierro. El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo del Señor Jesús. No sabían que pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: ¿Por qué buscáis entre los muertos al que está vivo? No está aquí, ha resucitado.",
    "segundomisterio": "La Ascensión",
    "segundotexto": "pasados cuarenta días tras la resurrección. El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios.",
    "tercermisterio": "La Venida del Espíritu Santo",
    "tercertexto": "Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse.",
    "cuartomisterio": "La Asunción",
    "cuartotexto": "La Asunción de la Virgen María, en cuerpo y alma, al Cielo.",
    "quintomisterio": "La Coronación de la Santísima Virgen",
    "quintotexto": "Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo los pies, y una corona de doce estrellas sobre su cabeza."}
]

var secuenciaMisterioDay = [
    misterioDay[3],
    misterioDay[0],
    misterioDay[2],
    misterioDay[3],
    misterioDay[1],
    misterioDay[2],
    misterioDay[0]
]

var allSongs = [
  "../audios/canciones/comonocreerendios.mp3",
  "../audios/canciones/enciendeunaluz.mp3",
  "../audios/canciones/padrenuestro.mp3",
  "../audios/canciones/mariatu.mp3"
]

var audioAleatorio = Math.floor(Math.random()*allSongs.length);

alert(audioAleatorio)

misterio.addEventListener("click", () => {
    numMisterio += 1;
    if(numMisterio == 10){
      misterios.style.display = "none";
      text.style.display = "flex";
        titulo.innerHTML = oraciones[4].titulo;
        parrafo.innerHTML = oraciones[4].parrafo;
   }    
    alert(numMisterio)
})


imagenSiguiente.addEventListener("click", function actualizarRosario(){
    numSiguiente++
        
    switch(numSiguiente){
      case 0:
        titulo.innerHTML = oraciones[0].titulo
        parrafo.innerHTML = oraciones[0].parrafo
      break;
      case 1:
        titulo.innerHTML = oraciones[1].titulo
        parrafo.innerHTML = oraciones[1].parrafo
      break;
      case 2:
        titulo.innerHTML = oraciones[2].titulo
        parrafo.innerHTML = oraciones[2].parrafo
      break;
      case 3:
        titulo.innerHTML = oraciones[3].titulo
        parrafo.innerHTML = oraciones[3].parrafo
      break;
      case 4:
        titulo.innerHTML = oraciones[4].titulo
        parrafo.innerHTML = oraciones[4].parrafo
      break;
      case 5:
        titulo.innerHTML = secuenciaMisterioDay[dia].primermisterio;
        parrafo.innerHTML = secuenciaMisterioDay[dia].primertexto;
      break;
      case 6:
        titulo.innerHTML = oraciones[2].titulo;
        parrafo.innerHTML = oraciones[2].parrafo;
      break;
      case 7:
        text.style.display = "none";
        misterios.style.display = "flex";
      break;
      case 8:    ;            
        numMisterio = 0;
        misterios.style.display = "none";
        text.style.display = "none";
        boxAudio.style.display = "flex";
        audio.src = allSongs[audioAleatorio];
      break;
      case 9:
        boxAudio.style.display = "none";
        text.style.display =  "flex";
        titulo.innerHTML = secuenciaMisterioDay[dia].segundomisterio;
        parrafo.innerHTML = secuenciaMisterioDay[dia].segundotexto;
      break;
      case 10:
        titulo.innerHTML = oraciones[2].titulo;
        parrafo.innerHTML = oraciones[2].parrafo;
      break;
      case 11:
        text.style.display = "none";
        misterios.style.display = "flex";
      break;
      case 12:    ;            
        numMisterio = 0;
        misterios.style.display = "none";
        text.style.display = "none";
        boxAudio.style.display = "flex";
        audio.src = allSongs[audioAleatorio];
      break;
    }
})



