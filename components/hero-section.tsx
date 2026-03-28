"use client";
import React, { useState } from 'react';// Adjust the import path as needed
import { ConsultationModal } from './popupform';

const AyushOrtho = () => {        
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
          <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .floating-element {
        animation: float 6s ease-in-out infinite;
      }
      `}</style>
        <div className="relative bg-gradient-to-b from-gray-900 pt-[75px] to-black overflow-hidden" style={{fontFamily: "'Outfit', sans-serif" }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            {/* Hero Section */}
            <section className="relative z-10 pt-6 pb-16 max-[470px]:pb-6 md:pt-8 md:pb-20 px-6 md:px-8 lg:px-12">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
                        {/* Content Section */}
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-[42px] max-[470px]:text-[22px] max-[470px]:text-center max-[470px]:mb-3 mb-6 font-bold text-white leading-tight">
                                Knee Pain Relief at <span className="text-orange-500">Ayush Ortho </span>– Ambattur, Chennai
                            </h2>
                            
                            <div className="bg-gray-800 p-4 rounded-lg mb-6 max-[470px]:mb-10">
                                <p className="text-gray-300 italic  max-[470px]:text-center">
                                    Struggling with knee pain while walking, climbing stairs, or even while resting?
                                </p>
                            </div>
                            
                            {/* Mobile Video Section */}
                            <div className="relative mb-6 lg:hidden">
                                <div className="floating-element relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                        <video
                                            src="/knee%20pain.mov"
                                            aria-label="Knee pain treatment"
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                    </div>

                                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#e13e20] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl floating-element" style={{ animationDelay: '1s' }}>
                                        <div className="text-white text-center">
                                            <span className="block text-xs sm:text-sm font-bold">5000+</span>
                                            <span className="block text-[10px] sm:text-xs">Treated</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 bg-white rounded-full w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shadow-xl floating-element" style={{ animationDelay: '2s' }}>
                                        <div className="text-[#e13e20] text-center">
                                            <span className="block text-xs sm:text-sm font-bold">21</span>
                                            <span className="block text-[10px] sm:text-xs">Day Plan</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-12 -right-6 sm:bottom-16 sm:-right-8 bg-gray-800 rounded-full w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center shadow-xl border-2 border-[#e13e20] floating-element" style={{ animationDelay: '3s' }}>
                                        <div className="text-white text-center">
                                            <span className="block text-xs sm:text-sm font-bold">0%</span>
                                            <span className="block text-[10px] sm:text-xs">Surgery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 mb-6">
                                At Ayush Ortho, we specialize in non-surgical treatments that target the root cause of knee pain through a blend of Ayurveda, Varma Therapy, Orthopaedic Manual Therapy, and Chiropractic Care.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">5000+ Patients Treated</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Surgery-Free, Natural Approach</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">7, 14 & 21-Day Recovery Plans</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Long-Term Relief Without Surgery</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Free Consultation for Seniors (65+) – Every Thursday</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-orange-500 mr-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">15% Discount for Defense Families</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                <a
                                    href="tel:+919514417318"
                                    className="bg-[#e13e20] text-white text-center font-semibold py-3 px-8 rounded-full transition-colors"
                                    style={{ backgroundColor: '#e13e20' }}
                                >
                                    Call Now
                                </a>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-transparent cursor-pointer hover:bg-[#e13e20] text-white border border-orange-500 hover:border-transparent text-center font-semibold py-3 px-8 rounded-full transition-colors"
                                >
                                    Book an Appointment
                                </button>
                            </div>

                            <p className="text-orange-200  max-[325px]:text-[12px] max-[470px]:text-center mt-6 text-sm">
                                Online Consultations Launching Soon (TN-Wide)
                            </p>
                        </div>

                        {/* Desktop Video Section */}
                        <div className="hidden lg:block lg:w-1/2 w-full flex justify-center lg:pr-0">
                            <div className="floating-element relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] mx-auto">
                                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <video
                                        src="/knee%20pain.mov"
                                        aria-label="Knee pain treatment"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                    />
                                </div>

                                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-2 md:-right-2 lg:top-4 lg:right-2 bg-[#e13e20] rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center shadow-xl floating-element" style={{ animationDelay: '1s' }}>
                                    <div className="text-white text-center">
                                        <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold">5000+</span>
                                        <span className="block text-[10px] sm:text-xs">Treated</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 md:-bottom-4 md:-left-2 lg:-bottom-2 lg:left-2 bg-white rounded-full w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex items-center justify-center shadow-xl floating-element" style={{ animationDelay: '2s' }}>
                                    <div className="text-[#e13e20] text-center">
                                        <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold">21</span>
                                        <span className="block text-[10px] sm:text-xs">Day Plan</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-12 -right-6 sm:bottom-14 sm:-right-7 md:bottom-16 md:-right-8 lg:bottom-24 lg:-right-4 xl:bottom-32 xl:-right-4 bg-gray-800 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center shadow-xl border-2 border-[#e13e20] floating-element" style={{ animationDelay: '3s' }}>
                                    <div className="text-white text-center">
                                        <span className="block text-xs sm:text-sm font-bold">0%</span>
                                        <span className="block text-[10px] sm:text-xs">Surgery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Improved Professional Wave Design */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none" 
                        className="relative block w-full h-10 md:h-20 max-[470px]:hidden lg:h-14"
                    >
                        <path 
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
                            className="fill-current text-gray-800"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
        </>
    );
};

export default AyushOrtho;
