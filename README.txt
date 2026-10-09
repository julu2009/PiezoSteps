        
Hola, somos el equipo The Live Walkers, y venimos a presentar nuestro proyecto: PiezoSteps        
        
    ¿Cómo funciona PiezoSteps?

        PiezoSteps funciona calculando cuánta energía eléctrica se puede producir por medio de una acera con paneles piezoeléctricos.
        Estos paneles aprovechan la presión que se produce cuando las personas pisan estos paneles al caminar.

    ¿Qué hace el programa?

        1. El usuario inserta cuántas personas están caminando por la acera al mismo tiempo, la longitud de la acera, la longitud de la placa 
        piezoelectrica y el tiempo que dura el recorrido
        2. El programa determina cuántos paneles piezoeléctricos caben en esa longitud dividiendo la longitud de la acera entre la longitud del panel
        4. Se calcula la cantidad de pasos que realiza el numero de personas elegido multiplicando la cantidad de pasos por persona por
        la cantidad de personas por el tiempo elegido.
        5. Por último, se calcula y muestra la energía en joules (J) y en kilovatios-hora (km/w) multiplicando la cantidad de pasos por 
        la energía por paso. 
    
    LÓGICA DE LAS FUNCIONES DE app.js

        La lógica del archivo app.js se basa en calcular la cantidad de energía que pueden producir unos paneles instalados en una acera 
        a partir de la caminata de personas.

        Primero se establecen unos datos base, como la longitud de cada panel, la energía generada por cada paso y la cantidad promedio de pasos 
        que una persona realiza por minuto. Estos valores sirven como base para realizar los cálculos.

        La función principal es CalcularEnergia(). Esta recibe la cantidad de personas que están caminando al mismo tiempo, la longitud 
        de la acera, la duración de la caminata de las personas y la unidad de tiempo seleccionada.
        Primero calcula aproximadamente cuántos paneles pueden instalarse, que es dividiendo la longitud de la acera entre la longitud de los 
        paneles.

        Seguido de esto, se calcula la cantidad total de pasos por minuto multiplicando el número de personas por la cantidad promedio de pasos
        que realiza una persona. La duración introducida por el usuario se convierte a minutos para utilizar una misma unidad de tiempo en
        todos los cálculos.

        Con estos datos se obtiene el número total de pasos realizados durante el periodo seleccionado. Luego, los pasos totales 
        se multiplican por la energía producida por cada paso, obteniendo la energía total generada en joules.
        También se realizan conversiones a Wh y kWh para facilitar el entendimiento del resultado.

        La función humanizarEnergia() se encarga de mostrar la energía obtenida de manera sencilla. Dependiendo de la cantidad
        de energía, el resultado se presenta en joules, watt-hora o kilowatt-hora.

        Por otro lado, el arreglo COMPARACIONES contiene diferentes ejemplos de consumo de energía, como la carga de un celular, 
        un bombillo LED, una laptop, un router WiFi o una nevera. La función mejorComparacion() utiliza estos valores para generar una
        comparación que permita entender mejor cuánta energía se ha producido.

        Por último, cuando el usuario presiona el botón Calcular, el programa toma los valores introducidos en
        el formulario y los envía a la función CalcularEnergia().

        Después, los resultados son mostrados en el elemento HTML identificado como RESULTADOS. con esto, el programa conecta los datos
        ingresados por el usuario con los cálculos y presenta de forma sencilla la energía que se podría generar.


    ¿Que se planea lograr con el programa a futuro?

        Originalmente, el proyecto buscaba calcular la energia generada en un Área determinada de una acera, no unicamente en línea recta.
        Los calculos van en progreso, pero se prefirio crear una base primero, y luego ir implementando nuevas funciones.
        Además, se podrian agregar más detalles visuales, tales como representaciones graficas de la energía generada (utilizando las referencias
        de consumo energetico incluidas en el proyecto).
        A futuro, se busca integrar una interfaz visual interactiva en la que se puedan mover los valores mediante sliders, y esto se refleje a tiempo real en la energía producida, así como tambien salga una representacion visual de los cambios.