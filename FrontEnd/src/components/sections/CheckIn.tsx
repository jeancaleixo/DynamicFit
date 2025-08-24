import TotalPass from "../../assets/TotalPass.png"
import GymPass from "../../assets/GymPass.png"
import { Button } from "../ui/button"

export default function CheckIn() {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">Check-in</h2>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                        <p className="text-gray-300 max-w-xs lg:max-w-md text-center lg:text-left mx-auto lg:mx-0">
                            Para facilitar as contas de nossos alunos,<br />
                            aceitamos GymPass e TotalPass!
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <Button variant="outline">CONHEÇAS OS PLANOS</Button>
                        </div>
                    </div>
                    <div className="lg:col-span-6 flex flex-col space-y-4 lg:space-y-6">
                        <div className="flex justify-center lg:justify-start">
                            <img src={GymPass} alt="Gympass" className="h-14 lg:h-38 object-contain" />
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img src={TotalPass} alt="TotalPass" className="h-14 lg:h-38 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}