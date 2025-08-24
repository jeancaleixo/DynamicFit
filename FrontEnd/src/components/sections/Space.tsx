import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Gym from "../../assets/Gym.jpg"
import Gym2 from "../../assets/Gym2.jpg"
import Gym3 from "../../assets/Gym3.jpg"

export default function Space() {
    const dynamicOrquideas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8450545120013!2d-46.60486862483637!3d-23.752904178668643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4700355d5431%3A0x1faa1c07de6c3cb5!2sAcademia%20Dynamic%20Orqu%C3%ADdeas!5e0!3m2!1spt-BR!2sbr!4v1756061001087!5m2!1spt-BR!2sbr";
    const dynamicCasas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1350717083856!2d-46.58176142483658!3d-23.74256227867574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce41c420126cbd%3A0xe8bb21cf556c6b33!2sAcademia%20Dynamic%20Fit!5e0!3m2!1spt-BR!2sbr!4v1756060853216!5m2!1spt-BR!2sbr";
    
    return (
        <section id="unidades" className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">NOSSAS UNIDADES</h2>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="w-full h-64 sm:h-80 bg-gray-800">
                        <iframe
                            title="Mapa - Unidade"
                            src={dynamicOrquideas}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="border-0 h-full w-full"
                        />
                    </div>
                    <div className="w-full h-64 sm:h-80 bg-gray-800 flex items-center justify-center">
                        <div className="w-full h-full bg-gray-800">
                            <iframe
                                title="Mapa - Unidade"
                                src={dynamicCasas}
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="border-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <h2 className="mt-12 text-2xl sm:text-3xl font-semibold text-center">NOSSO ESPAÇO</h2>
                <div className="mt-6 relative group">
                    <Carousel className="w-full">
                        <CarouselContent className="items-stretch">
                            <CarouselItem>
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src={Gym} alt="Gym" className="w-full h-56 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src={Gym2} alt="Gym 2" className="w-full h-56 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src={Gym3} alt="Gym 3" className="w-full h-56 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        
                        {/* Setas customizadas */}
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none text-white w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none text-white w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100" />
                        
                        {/* Indicadores de pontos */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm"></div>
                            <div className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm"></div>
                            <div className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm"></div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}