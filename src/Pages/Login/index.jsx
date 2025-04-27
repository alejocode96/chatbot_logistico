import React from "react";
//contexto
import { LogisticoContext } from '../../context';

const Login = () => {

    //preguntas dinamicas
    const {
        showPassword, setShowPassword
    } = React.useContext(LogisticoContext);

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
            <div className="absolute inset-0 z-40 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6">
                <div id="selectform" className="w-[90%] lg:w-[50%] p-8 h-[500px] lg:h-[550px] bg-[rgba(47,51,51,0.3)] backdrop-blur-md rounded-md shadow-xl flex justify-center order-2 lg:order-1 mb-6 lg:mb-0" >
                    <div className="absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                        <div className="h-px w-full animate-starlight-right bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0">
                        </div>
                    </div>
                    <div className="w-full justify-center">
                        <p className="mt-10 text-zinc-400 text-3xl font-extralight text-center">INICIO DE SESIÓN</p>
                        <div className="mt-6">
                            <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-zinc-400">Email</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1" className="bg-[rgba(47,51,51,0.6)] text-gray-500 text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-none" placeholder="email@email.com" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password-input" className="block mb-2 text-sm font-medium text-zinc-400">Contraseña</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}  id="password-input" className="bg-[rgba(47,51,51,0.6)] text-gray-500 text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-none " placeholder="Contraseña" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)}  className={`absolute text-gray-400 inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer  rounded-e-md focus:outline-hidden `}>
                                        <svg className={`shrink-0 size-3.5  ${showPassword ? "text-[#C4D600]" : "text-gray-500"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                            <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="w-full bg-[#E4E4E7] h-10 rounded-md text-gray-800">INICIAR SESIÓN</button>
                        </div>
                        <div className="mt-2">
                            <p className="text-center text-gray-500">¿Olvido su contraseña? recupérala <span className="text-[#6CC24A]"><a className="cursor-pointer">aquí</a></span></p>
                        </div>
                    </div>
                    <div className="absolute -bottom-2 left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                        <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0">
                        </div>
                    </div>
                </div>
                <div id="selectimage" className="w-[90%] lg:w-[50%] h-[200px] lg:h-[600px] rounded-md flex items-center justify-center px-4 order-1 lg:order-2 mb-6 lg:mb-0 pt-18 lg:pt-0">
                    <img src='../public/Logo.png' className='w-22 md:w-32 lg:w-32 mr-2' alt="Logo" />
                    <div>
                        <p className='text-justify text-zinc-400 text-2xl lg:text-5xl md:text-4xl/[1.07] font-extralight mb-0'>CHATBOT</p>
                        <p className='bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] md:text-7xl/[1.07] font-bold tracking-tight text-transparent mt-[-0.5rem]'>LOGISTICO</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
