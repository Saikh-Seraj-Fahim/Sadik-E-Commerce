"use client";

import React from "react";
const FacebookIcon = ({
    size = 24,
    className = ""
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
const InstagramIcon = ({
    size = 24,
    className = ""
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
const LinkedInIcon = ({
    size = 24,
    className = ""
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>;
const TwitterIcon = ({
    size = 24,
    className = ""
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.901-6.492 6.492 0 .512.057 1.01.173 1.496-5.405-.271-10.187-2.86-13.387-6.795-.56.96-.883 2.077-.883 3.256 0 2.254 1.147 4.243 2.887 5.419-.847-.025-1.649-.26-2.35-.647-.029.749.208 1.45.746 2.005.679.679 1.574 1.186 2.603 1.307-.207.056-.424.086-.647.086-.159 0-.315-.015-.467-.045.767 2.405 2.989 4.168 5.636 4.217-2.868 2.247-6.49 3.586-10.462 3.586-.681 0-1.35-.039-2.006-.118 3.692 2.378 8.016 3.766 12.692 3.766 15.232 0 23.52-12.69 23.52-23.52 0-.357-.012-.71-.031-1.063z" />
    </svg>;


export default function Footer() {
    return <footer className="bg-gradient-to-r from-[#088347] to-[#C6E824] dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="40" height="40" className="coolshapes flower-1">
                        <g clipPath="url(#cs_clip_1_flower-1)">
                            <mask id="cs_mask_1_flower-1" style={{
                                maskType: "alpha"
                            }} width="200" height="186" x="0" y="7" maskUnits="userSpaceOnUse">
                                <path fill="#fff" d="M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z"></path>
                            </mask>
                            <g mask="url(#cs_mask_1_flower-1)">
                                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                                <path fill="url(#paint0_linear_748_4711)" d="M200 0H0v200h200V0z"></path>
                                <g filter="url(#filter0_f_748_4711)">
                                    <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
                                    <path fill="#0CE548" fillOpacity="0.35" d="M196 91H82v102h114V91z"></path>
                                    <path fill="#FFE500" fillOpacity="0.74" d="M113 80H28v120h85V80z"></path>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_f_748_4711" width="278" height="310" x="-27" y="-55" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                <feGaussianBlur result="effect1_foregroundBlur_748_4711" stdDeviation="27.5"></feGaussianBlur>
                            </filter>
                            <linearGradient id="paint0_linear_748_4711" x1="186.5" x2="37" y1="37" y2="186.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
                            </linearGradient>
                            <clipPath id="cs_clip_1_flower-1">
                                <path fill="#fff" d="M0 0H200V200H0z"></path>
                            </clipPath>
                        </defs>
                        <g style={{
                            mixBlendMode: "overlay"
                        }} mask="url(#cs_mask_1_flower-1)">
                            <path fill="gray" stroke="transparent" d="M200 0H0v200h200V0z" filter="url(#cs_noise_1_flower-1)"></path>
                        </g>
                        <defs>
                            <filter id="cs_noise_1_flower-1" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                                <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4"></feTurbulence>
                                <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2"></feComposite>
                                <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                    <h3 className="text-3xl font-extrabold text-blue-600 dark:text-teal-400">
                        SeraUI
                    </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Innovating for a better tomorrow. We are committed to delivering
                    high-quality solutions that empower businesses and individuals.
                </p>
                <div className="flex space-x-5 pt-2">
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110">
                        <FacebookIcon size={28} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110">
                        <InstagramIcon size={28} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110">
                        <LinkedInIcon size={28} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110">
                        <TwitterIcon size={28} />
                    </a>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Quick Links
                </h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Resources
                </h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Support
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                            Careers
                        </a>
                    </li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Contact Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    123 Tech Avenue, Innovation City, 98765
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Email: info@yourbrand.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Phone: +1 (555) 123-4567
                </p>
            </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
            <p>
                &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
            </p>
            <p className="mt-1">
                Designed with <span className="text-red-500">&hearts;</span> by Your
                Company
            </p>
        </div>
    </footer>;
};
