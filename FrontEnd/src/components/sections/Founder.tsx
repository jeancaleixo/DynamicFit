import FounderImg from "../../assets/Gym3.jpg";

export default function Founder() {
  return (
    <section id="fundador" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
          O Fundador e Professor-Chefe
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold text-center text-indigo-400 mb-1">
          Francisco Irlandio da Silva (Chikinho)
        </h3>
        <p className="text-center text-gray-300 italic mb-8">
          Bacharel em Educação Física | Criador da Dynamic Fit
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                Formação Acadêmica
              </h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>Bacharel em Educação Física</li>
                <li>
                  Pós-Graduações em:
                  <ul className="list-disc list-inside ml-5 mt-1">
                    <li>Treinamento Físico</li>
                    <li>Fisiologia do Exercício</li>
                    <li>Biomecânica</li>
                    <li>Treinamento Desportivo</li>
                    <li>Atletismo</li>
                    <li>Educação Física Hospitalar</li>
                    <li>Cinesiologia</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                Carreira como Atleta
              </h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>
                  Ex-atleta da Seleção Brasileira de Atletismo, com mais de{" "}
                  <b>240 medalhas oficiais</b>.
                </li>
                <li>
                  Vice-Campeão Panamericano de Skeleton pela Seleção Brasileira
                  de Desporto no Gelo.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                Atuação no Paradesporto
              </h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>
                  Atleta-guia e auxiliar técnico da Seleção Brasileira
                  Paralímpica, com conquistas nacionais e internacionais.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={FounderImg}
              alt="Fundador"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
