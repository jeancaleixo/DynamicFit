import { Button } from "../ui/button"

export default function Team() {
    const members = new Array(8).fill(0).map((_, i) => ({
        id: i,
        name: 'NOME',
        img: `https://images.unsplash.com/photo-1531123414780-f0b67b22d0a1?auto=format&fit=crop&w=600&q=80&ixlib=rb-4.0.3&s=${i}`
    }))

    return (
    <section id="equipe" className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">EQUIPE</h2>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map(m => (
                        <div key={m.id} className="flex flex-col items-center">
                            <div className="w-full bg-gray-800 p-4">
                                <img src={m.img} alt={m.name} className="w-full h-56 sm:h-64 object-cover rounded-sm shadow-lg" />
                            </div>
                            <div className="mt-4 text-sm text-gray-300">{m.name}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="outline">ESTAMOS AQUI PARA TE AJUDAR</Button>
                </div>
            </div>
        </section>
    )
}