# Metodologias

## Para que sirve una *metodologia* para CSS

* Nos ayuda a escribir codigo mas flexible, reutilizable, comprensible y manejable.
* Maejo de la escabilidad de proyectos.
* Hacerlas mas facil de mantener.


## Cuales son dichos metodos

*_OOCSS_*
trata sobre 

 * Separar la estructura del diseño (skin, piel).
 * Separar contenedor del contenido.

 Crear clases menos robustas, por ejemplo un botón este va tener siempre una forma, un color y espacio dentro y fuera de este elemento, pero no es necesario hacer todo esta especificacion dentro de una clase, es mejor dividirla par poder ocupar las clases a nuestra conveniencia, sin tener que crear otra clase por querer englobar todo en una clase que ya no es factible modificar por el echo de que perderemos tiempo en verificar si los cambios no afectan a otros componentes.

 Esto suele suceder en proyectos demasiados avanzados y con colegas que emitieron una metodologia.
 No estipula ninguna nomenglatura en los nombre de las clases o id´s

 _Esta netodologia explica el echo de asegurarnos no reutilizar codigo y que los estilos no dependan de ningun elemento contenedor,crear estilos tan independientes que los puedes reutilizar en cualquier parte de tu sitio web._

 Más información: http://oocss.org/

*_BEM_* (Block, Element, Modifier)
trata sobre

* Diferenciar clases que cumplan difentes estilos.
* Nombra clases de una manera especial.

Bloque es un coomponente independiente, que esta compuesto de varios elementos, es esencialmente el bloque padre (div, secciones, header footer, menu de nvegación...).
Elemento son componentes que su principal funcion es algo en concreto(link, imagen, columanas, filas, parrafos, articulos...).
Modificador son las clases que modifica con estilo (CSS) el bloque o elemento.

Hablabamos de la nomenclatura que es la principal funcion de esta metodologia, trata de poner ciertos caracteres en los nombres de las clases para poder diferenciar cual es su funcion y en facilita de primara vista que se esta modificando sin tener que ver el archivo HTML.

Este es el sistema de sintaxis de BEM:

* .bloque
* .bloque--modificador
* .bloque__elemento--modificador

_Este metodo puede ser el complemento de OOCSS ya que la anterior no habla sobre la nomenclatura de las clases o las diviciones de codigo en bloque o elemento_

Más información: http://getbem.com/

*_SMACSS_* Scalable and Modular Architecture for CSS
trata sobre

* Divide las reglas de CSS en 5 categorias.

1. Base 
    Son estilos con valores predeterminados, estilos que NO cambian sin importar la pagina que este viendo. Ej de etiquetas htlm, body, input, a, este no incluye clases ni ID, si incluye pseudoclases a:hover.
    IMPORTANTE: este categoria incluye tamaños de encabezado, estilos de enlaces, estilos de fuentes predeterminados, y fondos de body.
    No deberia ser necesario utilizar !important en etilos Base.
    Recomendación poner color al fondo de la pagina(body), asi no parecera que falta por diseñar.
    Existe el Resest de CSS que sirve para que el diseño de la pagina no tenga diferencia entre otros navegadores, pero estto tambien lo resulve un framework bulma por ejemplo.

2. Layout - diseño
    Dividir la pagina en secciones. Para una mejor experiencia de usuario.
    Ocupar ID en estilos es bueno y aveces necesario, pero lo recomendable es ocupar clases, ya que lo hace menos dificil de entender. 

3. Módulos - module
    Son secciones o bloques(OOCSS), como ej. menu laterales, listas, articulos.
    Cuando se trabaja con modulos o bloques es conveniente no ocupar ID y selectores de elementos, puede que un modulo este dentro de otro elemento y puede que se quiera ocupar selectores decendientes o secndarios para apuntar a esos elementos. 

4. Estados - State
    Funciones que describen los modulos o diseño, si es activo o inactivo, si se oculata o expande.
    Como cambia en pantallas grandes o pequeñas.

5. Temas - Theme
    Varios de los proyectos web no necesitan un tema ya que es similar al conjunto de modulos y estatos.

Este hace la categorización para no tener que mezclar estilos entre estos terminos.

_Nomenclatura_
Habla tambien sobre la importancia de la nomenclatura en nombres de estilos para facilitar la busqueda de a que archivo pertence un estilos.
Una buena practica es diferenciar si es un estados(state) o un diseño(layout), empezaran con la letra l- o layout- cualquiera de las dos opciones, para estados comenta que usar is-, is-hidden o is-collapsed es una buena nomenclatura.
Para los modulos no es necesario tener el prefijo module-algo ya que un modulo ocupa el nombre de las etiquetas de html como referencia, tambien es importate tomar en cuenta los nombres con herencia hablando solo de los modulos, 

