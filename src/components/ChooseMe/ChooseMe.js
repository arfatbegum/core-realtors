import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/chooseMe.jpg'
const ChooseMe = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
          <img class="object-cover object-center rounded-tr-3xl rounded-bl-3xl" alt="hero" src={Image} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-900 uppercase">Why Choose Me</h1>
          <p class="mb-8 leading-relaxed">A full-service realtor does everything from listing your house on the MLS for the right price to marketing your house and completing negotiations. They're known as full-service because they don't just pick and choose which services to provide, they offer the whole package.</p>
          <div class="flex justify-center">
            <Link to='/about' class="text-blue-900 font-extrabold inline-flex items-center md:mb-2 lg:mb-0">Read more
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;