import React from "react";

//animacion
import { useAos } from "../../hooks/useAos";

const NotFound = () => {

 useAos({ duration: 1500, once: false });

    return (
        <div className="relative w-full min-h-screen ">
            {/* Fondo decorativo con SVG */}
            <div className="absolute inset-0 z-0">
                {/* SVG patrón de fondo */}
                <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="cta" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#cta)" />
                </svg>
            </div>

            {/* Fondo decorativo */}
            <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                <div className="aspect-[1108/532] w-[69.25rem] flex-none bg-gradient-to-r from-[#C4D600] to-[#6CC24A] opacity-20" style={{
                    clipPath: "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)"
                }}></div>
            </div>

            {/* Contenedor del Login centrado y encima de todo */}
            <div className="absolute inset-0 z-40 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6" data-aos="fade-down">
                <div>
                    <img src='../public/Logo.png' className='w-42 mx-auto slow-spin' alt="Logo" />
                    <p className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-9xl/[1.07]  font-bold tracking-tight text-transparent mt-[-0.5rem]">ERROR 404</p>
                    <p className="text-center text-zinc-400 text-2xl lg:text-5xl md:text-4xl/[1.07] font-extralight mb-0">PAGINA NO EN CONTRADA</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
