import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description,ratings,ratingsCount } = service;
    return (
    
            <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
                    <div class="p-6">
                        <h2 class="tracking-widest font-extrabold text-2xl text-gray-900 mb-1">${price}</h2>
                        <h1 class="title-font text-lg font-bold text-gray-900 mb-3">{name}</h1>
                        <p class="leading-relaxed mb-3">{description}</p>
                        <div class="flex items-center flex-wrap ">
                            <Link to='/checkout' class="text-blue-900 font-extrabold inline-flex items-center md:mb-2 lg:mb-0">Check Out
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            <span class="text-orange-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xl pr-3 py-1 border-r-2 border-gray-200">
                            {ratings}
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                {ratingsCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
 
    );
};

export default Service;