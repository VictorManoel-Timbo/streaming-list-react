import { FaHeartBroken } from "react-icons/fa";

export default function Details() {
    return (
        <main>
            <section className="relative">
                <img className="w-full h-screen bg-cover"
                src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12603293_b_v8_af.jpg" />
                <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black from-30% to-transparent opacity-95"></div>
                <section className="absolute flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center w-full h-screen top-0 left-0 p-8 lg:p-16">
                    <div className="text-white max-w-md text-center mt-4 mb-4 lg:mt-0 lg:w-1/2 lg:pr-8 lg:flex lg:flex-col lg:justify-center lg:ml-16">
                    </div>

                    <div className="">
                        <section className="bg-black bg-opacity-80 px-3 py-5 rounded-xl border">
                            <span className="text-3xl lg:text-5xl font-bold">
                                TITULO
                            </span>
                            <section className="font-mono text-justify font-bold mt-2 text-red-700">
                                <div className="flex-col flex sm:flex-row justify-evenly">
                                    rating
                                    <span className="mt-2">tempo</span>
                                </div>
                                <div className="text-start sm:text-center mt-2">
                                    <span className="mr-3">generos</span>
                                </div>
                            </section>
                            <p className="mt-2 lg:mt-4 w-full text-justify text-xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate sapien, in cursus mi. Duis ultrices pharetra lectus quis aliquet. Aliquam erat volutpat. </p>
                        </section>
                    </div>


                    <div className="mt-4 lg:mt-8">
                        <button className="rounded bg-red-700 text-black font-semibold hover:bg-black hover:text-red-700 hover:outline-none hover:ring-2 hover:ring-white p-1">
                            Favoritar
                            <FaHeartBroken />
                        </button>
                    </div>
                    <div className="w-4/5 h-60 sm:h-72 sm:w-2/3 md:h-96 md:w-2/3 lg:w-[700px] lg:h-[430px] overflow-hidden lg:mb-0 lg:ml-8 lg:flex lg:items-center border-2 border-red-700 bg-black bg-opacity-85 flex items-center justify-center">
                    <iframe className="w-full h-full"
                        src="https://www.youtube.com/embed/ZxyqKMufcBE?list=RDZxyqKMufcBE"></iframe>
                    </div>
                </section>
            </section>
        </main>
    );
}