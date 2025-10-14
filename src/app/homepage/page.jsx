"use client"
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { HiOutlineArrowRight } from "react-icons/hi2";
// import { Button as ChakraButton, Card, Image, Text, ChakraProvider } from "@chakra-ui/react"

// import { AppSidebar } from "@/components/app-sidebar"
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//     SidebarInset,
//     SidebarProvider,
//     SidebarTrigger,
// } from "@/components/ui/sidebar"
import BestSellersCard from "@/components/BestSellersCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import TestimonialsCard from "@/components/TestimonialsCard";

const bestSellers = [
    { id: 1, imageName: "socket-image", title: "Armchair", description: "Light single chair", price: "$145" },
    { id: 2, imageName: "mcb", title: "Premium Sofa", description: "Comfortable seating", price: "$245" },
    { id: 3, imageName: "ameter", title: "Minimal Sofa", description: "Modern design", price: "$345" },
    { id: 4, imageName: "wire", title: "Dining Chair", description: "Elegant chair", price: "$125" },
    { id: 5, imageName: "socket-image", title: "Office Chair", description: "Ergonomic design", price: "$199" },
    { id: 6, imageName: "socket-image", title: "Armchair", description: "Light single chair", price: "$145" },
    { id: 7, imageName: "mcb", title: "Premium Sofa", description: "Comfortable seating", price: "$245" },
    { id: 8, imageName: "ameter", title: "Minimal Sofa", description: "Modern design", price: "$345" },
    { id: 9, imageName: "wire", title: "Dining Chair", description: "Elegant chair", price: "$125" },
    { id: 10, imageName: "socket-image", title: "Office Chair", description: "Ergonomic design", price: "$199" },
];

const reviews = [
    {
        id: 1, imageName: "person", name: "Leona Paul",
        review: `My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing 
        experience, the newsletter. Thank you.`
    },
    {
        id: 2, imageName: "person", name: "Fahim",
        review: `My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing 
        experience, the newsletter. Thank you.`
    },
    {
        id: 3, imageName: "person", name: "Faisal",
        review: `My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing 
        experience, the newsletter. Thank you.`
    },
    {
        id: 4, imageName: "person", name: "Faria",
        review: `My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing 
        experience, the newsletter. Thank you.`
    },
    {
        id: 5, imageName: "person", name: "Digonto",
        review: `My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing 
        experience, the newsletter. Thank you.`
    },
];

export default function HomePage() {
    return (
        <div className="bg-[#FDFBF8]">
            <div className="relative w-full h-[750px] bg-[url(/homepage-images/homepage-background-image.jpg)]
                    bg-cover bg-center rounded-b-[100px]">
                <div className="absolute w-full h-full z-10 bg-gray-900/50 rounded-b-[100px]" /> {/*Overlay*/}
                <div className="sticky top-4 right-6 left-6 z-50">
                    <NavBar />
                </div>
                <div className="absolute top-64 left-24 z-50">
                    <h1 className="font-bold font-playFairDisplay text-6xl text-[#FFFFFF]">Exclusive Deals of</h1>
                    <h1 className="font-bold font-playFairDisplay text-6xl text-[#FFFFFF]">Furniture Collection.</h1>
                    <p className="font-normal font-openSans text-2xl text-[#FFFFFF] mt-6">Explore different categories. Find the
                        best deals.</p>
                    <div className="mt-8">
                        <Button type="button" className="h-10 text-[#FDFBF8] text-xl bg-linear-to-r from-[#088347]
                            to-[#C6E824] cursor-pointer font-openSans rounded-lg" >
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
            <h1 className="font-playFairDisplay font-semibold text-center text-5xl text-[#07484A] mt-18">Explore by Category</h1>

            {/* <div className="">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                            </div>
                            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div> */}


            {/* Carousel */}
            <div className="mt-18">
                <h1 className="text-center text-[#07484A] text-5xl font-playFairDisplay font-semibold">Best Sellers</h1>
                <div className="w-full mt-12 px-8 md:px-16 lg:px-24">
                    {/* <Image src="/best-sellers-images/wire.png" alt="wire" width={250} height={100}/> */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                            1536: {
                                slidesPerView: 4,
                            },
                            1920: {
                                slidesPerView: 5,
                            },
                        }}
                        navigation={{
                            prevEl: '.custom-prev', // the name prevEl can not be changed. it is fixed.
                            nextEl: '.custom-next', // the name nextEl can not be changed. it is fixed.
                        }}
                        //pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="bg-[url(/best-sellers-images/wire.png)]">
                        {bestSellers.map((item) => (
                            <SwiperSlide key={item.id} className="pb-9 !flex !items-center !justify-center">
                                <BestSellersCard
                                    imageName={item.imageName}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-end items-center gap-6 mt-6">
                        <button className="custom-prev w-10 h-10 rounded-full flex items-center justify-center bg-[#E0EFF6] 
                        transition cursor-pointer">
                            <FaArrowLeft className="text-[#07484A]" />
                        </button>
                        <button className="custom-next w-10 h-10 rounded-full flex items-center justify-center bg-[#F9D9DA] 
                        transition cursor-pointer">
                            <FaArrowRight className="text-[#07484A]" />
                        </button>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                        <Button type="button" className="h-10 text-[#FDFBF8] bg-linear-to-r from-[#088347]
                            to-[#C6E824] cursor-pointer font-openSans rounded-md flex gap-2" >
                            Explore all items
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>
            </div>


            <div className="bg-[#C6E8244D] mt-16 pb-16">
                <h1 className="text-center text-[#07484A] text-4xl font-playFairDisplay font-bold pt-16">
                    Benefits for your expediency</h1>

                <div className="flex flex-col lg:flex-row gap-y-10 justify-around items-center pt-16">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <Image src="/benefits-for-your-expediency/hand.svg" alt="hand" width={80} height={80} />
                        <h1 className="text-[#07484A] text-xl font-playFairDisplay font-semibold">Payment Method</h1>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[#07484A] font-openSans">We offer flexible payment</p>
                            <p className="text-[#07484A] font-openSans">options, to make easier.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-center">
                        <Image src="/benefits-for-your-expediency/box.svg" alt="hand" width={80} height={80} />
                        <h1 className="text-[#07484A] text-xl font-playFairDisplay font-semibold">Return policy</h1>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[#07484A] font-openSans">You can return a product</p>
                            <p className="text-[#07484A] font-openSans">within 30 days.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-center">
                        <Image src="/benefits-for-your-expediency/earphone.svg" alt="hand" width={80} height={80} />
                        <h1 className="text-[#07484A] text-xl font-playFairDisplay font-semibold">Customer Support</h1>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[#07484A] font-openSans">Our customer support</p>
                            <p className="text-[#07484A] font-openSans">is 24/7.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Testimonials Section */}
            <div>
                <h1 className="text-[#07484A] text-4xl text-center font-playFairDisplay font-bold pt-14">Testimonials</h1>
                <p className="text-[#07484A] text-xl text-center font-roboto mt-4">Over 15,000 happy customers.</p>
                <div className="w-full mt-12 px-8 md:px-16 lg:px-24 2xl:px-32 flex items-center justify-center gap-4">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.custom-prev-testi', // the name prevEl can not be changed. it is fixed.
                            nextEl: '.custom-next-testi', // the name nextEl can not be changed. it is fixed.
                        }}
                        // pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="mt-8">
                        {reviews.map((item) => (
                            <SwiperSlide key={item.id} className="pb-9 !flex !items-center !justify-center">
                                <TestimonialsCard
                                    imageName={item.imageName}
                                    review={item.review}
                                    name={item.name}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Arrow button for navigation */}
                    <div className="w-1/4 h-[300px] sm:h-[400px] flex flex-col justify-end sm:justify-center items-center gap-6">
                        <button className="custom-prev-testi w-10 h-10 rounded-full flex items-center justify-center bg-[#C6E824] 
                        transition cursor-pointer">
                            <FaArrowLeft className="text-[#07484A]" />
                        </button>
                        <button className="custom-next-testi w-10 h-10 rounded-full flex items-center justify-center bg-[#088347] 
                        transition cursor-pointer">
                            <FaArrowRight className="text-[#FFFFFF]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}




