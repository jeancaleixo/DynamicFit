import FounderImg from "../../assets/Gym3.jpg";

export default function Founder() {
    return (
    <section id="fundador" className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">Fundador</h2>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <a href="#" className="text-indigo-600 text-lg font-medium">Francisco Irlandio Da Silva (Chikinho)</a>

                        <p className="mt-4 text-gray-300 leading-relaxed break-words break-all whitespace-normal">
                            textotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                            textotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                            textotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img src={FounderImg} alt="Fundador" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-sm shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}