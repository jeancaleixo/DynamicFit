import { Button } from "../ui/button";
import HeroImage from "../../assets/HeroImage.jpg"

export default function Hero() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight">
                            <span className="block">SAÚDE E</span>
                            <span className="block">PERFORMANCE</span>
                        </h1>

                        <p className="mt-6 text-gray-300 max-w-xl">
                            Maior academia da região, com profissionais sempre de prontidão. <br />
                            Treinamento personalizado, ambiente agradável e familiar
                        </p>

                        <div className="mt-8">
                            <div className="flex justify-center lg:justify-start">
                                <Button variant="outline">ENTRE EM CONTATO</Button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                            <img
                                src={HeroImage}
                                alt="Atleta Malhando Costas"
                                className="w-full h-auto object-cover rounded-md shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}