import Gym1 from "../../assets/Gym.jpg";
import Gym2 from "../../assets/Gym2.jpg";
import Gym3 from "../../assets/Gym3.jpg";
import HeroImage from "../../assets/HeroImage.jpg";
import Supino from "../../assets/Supino.jpg";

export default function GalleryMission() {
  const images = [
    { src: Gym1, alt: "Academia - Espaço 1" },
    { src: Gym2, alt: "Academia - Espaço 2" },
    { src: Gym3, alt: "Academia - Espaço 3" },
    { src: HeroImage, alt: "Academia - Recepção" },
    { src: Supino, alt: "Academia - Supino" },
  ];

  return (
    <section id="equipe" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          NOSSA ESTRUTURA
        </h2>

        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 h-auto">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-[300px] sm:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-[170px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-[170px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-[170px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className="w-full h-[170px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-2">
              ■ Nossa Missão
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Levar saúde, performance e qualidade de vida através de um
              treinamento dinamizado,
              <br />
              eficiente e acessível, que combina ciência do movimento humano com
              a prática esportiva
              <br />
              de alto rendimento.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-2">
              ■ Nossos Diferenciais
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>
                Treinamentos baseados em ciência, biomecânica e fisiologia.
              </li>
              <li>Metodologias modernas e inovadoras que fogem do comum.</li>
              <li>
                Experiência prática de alto rendimento esportivo aplicada ao dia
                a dia dos alunos.
              </li>
              <li>
                Equipe formada e liderada por um profissional de excelência
                reconhecido internacionalmente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
