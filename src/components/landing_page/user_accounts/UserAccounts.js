import React from "react";

const UserAccounts = () => {
    return ( 
        <div className="relative h-screen w-screen overflow-hidden px-10 bg-black-400">
        <div className="mx-auto w-full max-w-7xl px-8">
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-yellow-500 px-10 py-20 rounded-3xl shadow-2xl">
                            <div className="flex border border-black-400 border-b-2 border-t-0 border-r-0 border-l-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#231F20" className="w-6 h-6">
                                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                                    <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                                </svg>
                                <p className="text-black-400 font-bold">Government Collection</p>
                            </div>
                            <div>
                            </div>
                            <button className="bg-black-400 text-yellow-500 font-semibold rounded-full w-40 h-10 transition-colors duration-350 shadow-lg my-5">
                                Get Started
                            </button>
                        </div>
                        <div className="bg-blue-500 px-10 py-20 rounded-3xl shadow-2xl">
                            <div className="flex border border-white border-b-2 border-t-0 border-r-0 border-l-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                </svg>

                                <p className="text-white font-bold">Coorporate Collection</p>
                            </div>
                            <button className="bg-white text-blue-500 font-semibold rounded-full w-40 h-10 transition-colors duration-350 shadow-lg my-5">
                                Get Started
                            </button>
                        </div>
                        <div className="bg-black-400 px-10 py-20 rounded-3xl shadow-2xl">
                            <div className="flex border border-yellow-500 border-b-2 border-t-0 border-r-0 border-l-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EFC31E" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-yellow-500 font-bold">Customer Facing</p>
                            </div>
                            <button className="bg-yellow-500 text-black-400 font-semibold rounded-full w-40 h-10 transition-colors duration-350 shadow-lg my-5">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 46 46" fill="none">
                    <path d="M34.5 12.2855L31.7975 9.58301L23 18.3613L14.2025 9.58301L11.5 12.2855L23 23.7855L34.5 12.2855Z" fill="#FBFBFB"/>
                    <path d="M34.5 24.9164L31.7975 22.2139L23 30.9922L14.2025 22.2139L11.5 24.9164L23 36.4164L34.5 24.9164Z" fill="#FBFBFB"/>
                </svg>
            </div>
        </div>
    );
}

export default UserAccounts;