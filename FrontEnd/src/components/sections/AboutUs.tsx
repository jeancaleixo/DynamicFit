import AboutUsImage from "../../assets/AboutUsImage.jpg";
import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <section id="sobre" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Sobre nós
        </h2>

        <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
          A Dynamic Fit nasceu com o propósito de transformar o conceito
          tradicional de treinamento físico, trazendo inovação, dinamismo e
          conhecimento científico para dentro das academias. Nosso objetivo é
          oferecer treinamentos inteligentes, personalizados e motivadores,
          quebrando os modelos engessados e comuns do mercado.
          {/* Na Dynamic Fit, estamos prontos para te ajudar a alcançar seus objetivos com treinamentos
                    personalizados, estrutura de qualidade e uma equipe dedicada a cada passo do seu progresso! */}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm lg:w-80 lg:max-w-none">
              <img
                src={AboutUsImage}
                alt="Mulher na academia levantando peso"
                className="w-full h-auto object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:ml-32 lg:mt-20 mt-6">
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Planos acessíveis</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Ambiente familiar</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Espaço amplo e climatizado</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Aulas coletivas</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Treinos exclusivos</span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Medidas e avaliações</span>
              </li>
            </ul>

            <div className="mt-8 flex justify-center lg:justify-start lg:ml-12">
              <Button variant="outline">SAIBA MAIS!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
