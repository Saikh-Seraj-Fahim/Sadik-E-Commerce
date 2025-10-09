"use client"
import NavBar from "@/components/NavBar";
// import { Button as ShadcnButton } from "@/components/ui/button"
import Link from "next/link";

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

const bestSellers = [
    { id: 1, imageName: "socket-image", title: "Armchair", description: "Light single chair", price: "$145" },
    { id: 2, imageName: "mcb", title: "Premium Sofa", description: "Comfortable seating", price: "$245" },
    { id: 3, imageName: "ameter", title: "Minimal Sofa", description: "Modern design", price: "$345" },
    { id: 4, imageName: "wire", title: "Dining Chair", description: "Elegant chair", price: "$125" },
    { id: 5, imageName: "socket-image", title: "Office Chair", description: "Ergonomic design", price: "$199" },
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
                        {/* <ShadcnButton type="button" className="h-10 text-[#FDFBF8] text-xl bg-linear-to-r from-[#088347]
                            to-[#C6E824] cursor-pointer font-openSans rounded-lg" >
                            Shop Now
                        </ShadcnButton> */}
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

            <div className="mt-18">
                <h1 className="text-center text-[#07484A] text-5xl font-playFairDisplay font-semibold">Best Sellers</h1>
                {/* <ChakraProvider>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <ChakraButton variant="solid">Buy now</ChakraButton>
                            <ChakraButton variant="ghost">Add to cart</ChakraButton>
                        </Card.Footer>
                    </Card.Root>
                </ChakraProvider> */}


                <div className="w-full mt-12 pl-36 pr-36 pb-16">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                        //pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}>
                        {bestSellers.map((item) => (
                            <SwiperSlide key={item.id} className="pb-9">
                                <BestSellersCard
                                    imageName={item.imageName}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}




{/* <div className="w-full pt-12 pl-44 pb-16">
    <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {data.map(d => (
            <SwiperSlide key={d.name}>
                <div className="w-[442px] h-[186px] bg-gradient-to-r 
                        from-[#181F23] to-[#21323A] rounded-lg">
                    <p className="text-white">{d.description}</p>
                    <div className="flex gap-4 pt-6">
                        <Image src={d.img} alt="logo" width={40} height={40}
                            className="rounded-full" />
                        <div className="flex flex-col pt-3">
                            <p className="text-[#8E7D3F]">{d.name}</p>
                            <p className="text-[#8E7D3F]">{d.title}</p>
                        </div>
                        <div className="w-[150px] h-[20px] bg-[#8E7D3F] mt-6 rounded-full"></div>
                    </div>
                </div>
            </SwiperSlide>
        ))
        }
    </Swiper>
</div> */}
