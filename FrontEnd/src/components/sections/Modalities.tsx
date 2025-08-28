import Jiu from "../../assets/Jiu.jpg";
import Supino from "../../assets/Supino.jpg";

export default function Modalities() {
  return (
    <section id="modalidades" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">MODALIDADES</h3>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                Serviços Oferecidos
              </h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>Treinamento funcional dinamizado</li>
                <li>Preparação física de atletas</li>
                <li>Treinos personalizados (individual e em grupo)</li>
                <li>Programas de saúde e bem-estar</li>
                <li>Acompanhamento técnico-científico com avaliação física</li>
                <li>Consultoria em performance esportiva</li>
              </ul>
              <span className="block text-indigo-400 mt-2">
                Contamos com as seguintes modalidades:
              </span>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>Musculação</li>
              <li>Zumba/Jump</li>
              <li>Karatê</li>
              <li>Jiu Jitsu</li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={Supino}
              alt="Homem fazendo supino"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={Jiu}
              alt="Musculação"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-sm shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl text-indigo-400 sm:text-3xl font-semibold">
              AGENDAS
            </h3>
            <div className="mt-4 text-gray-300 space-y-2">
              <div>
                <strong>Zumba/Jump:</strong> SEGUNDA A SEXTA - 18:30 ÀS 20:00
              </div>
              <div>
                <strong>Karatê:</strong> TERÇA E QUINTA - 20:30 ÀS 21:30
              </div>
              <div>
                <strong>Jiu-Jitsu</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
