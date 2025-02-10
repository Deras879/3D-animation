function App() {
  return (
    <main class="overflow-x-hidden bg-black">
      <section className="relative grid place-items-center h-[100vh]">
        <p className="text-white text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
          Jinx
        </p>
        <p className="text-white text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">
          La Bala Perdida de Zaun
        </p>
        <div className="h-[100vh] text-white"></div>
      </section>

      <section className="relative flex items-center justify-evenly h-[100vh]">
        <p className="w-[50%] border-0 border-red-700"></p>
        <p class="text-white w-[50%] text-center px-4 text-4xl font-semibold">
          Jinx es una de las campeonas más populares de League of Legends,
          destacando como una tiradora de alto daño y gran capacidad para
          arrasar en peleas largas. Desde su lanzamiento en 2013, ha sido una
          elección favorita tanto en partidas casuales como en el ámbito
          competitivo, gracias a su estilo de juego agresivo y su potencial de
          "snowball".
        </p>
      </section>
      <section class="relative flex items-center justify-evenly h-[100vh]">
        <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
          Su kit de habilidades está diseñado para el caos y la destrucción. Su
          pasiva, ¡Dispara y corre!, le otorga una gran velocidad de movimiento
          y ataque tras participar en una eliminación, lo que le permite
          aprovechar las peleas a su favor. Su Q, Cambiazo, le permite alternar
          entre su ametralladora Pow-Pow, que aumenta su velocidad de ataque, y
          su lanzacohetes Fishbones, que ofrece mayor alcance y daño en área.
          Esta versatilidad le da una ventaja estratégica dependiendo de la
          situación.
        </p>
        <p className="w-[50%] order-2"></p>
      </section>
      <section className="relative flex items-center justify-evenly h-[100vh]">
        <p className="w-[50%] border-0 border-red-700"></p>
        <p className="text-white w-[50%] text-center px-4 text-3xl font-semibold">
          Además de su potencia en duelos, Jinx cuenta con herramientas de
          control de masas. Su W, Zap!, dispara un rayo eléctrico que ralentiza
          a los enemigos y los revela, ideal para hostigar o asegurar objetivos.
          Sus E, Mascafuegos, colocan trampas explosivas que inmovilizan a los
          enemigos que las pisan, una habilidad crucial para el posicionamiento
          en batallas y para evitar que los rivales se le acerquen.
        </p>
      </section>
    </main>
  );
}

export default App;
