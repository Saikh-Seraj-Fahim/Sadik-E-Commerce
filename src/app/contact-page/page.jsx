"use client"
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { useId } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";
import Footer from "@/components/Footer";

// // Zod validation schema
// const contactFormSchema = z.object({
//     name: z.string()
//         .min(2, "Name must be at least 2 characters")
//         .max(50, "Name must be less than 50 characters"),
//     email: z.string()
//         .email("Invalid email address"),
//     phoneNumber: z.string().min(4, "Phone number must be at least 4 digits"),
//     company:z.string()
// });

export default function ContactPage() {
    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();
    const companyId = useId();
    const messageId = useId();

    const [markerLocation, setMarkerLocation] = useState({
        lat: 51.509865,
        lng: -0.118092,
    });

    return (
        <div>
            <div className="relative w-full h-[750px] bg-[url(/contact-page-background-image/contact-page-background-image.jpg)]
            bg-cover bg-center">
                <div className="absolute w-full h-full z-10 bg-gray-900/40" /> {/*Overlay*/}
                <div className="sticky top-4 right-6 left-6 z-50">
                    <NavBar />
                </div>

                {/* Card */}
                <div className="absolute top-50 left-4 sm:left-32 max-w-[300px] w-full h-[400px] z-10 flex flex-col items-center 
                justify-center gap-6 bg-linear-to-b from-[#F8F8F8] to-[#088347] rounded-lg">
                    <Image src="/sign-up-images/Logo.svg" alt="logo" height={100} width={100} />
                    <h1 className="text-[#FFFDFB] font-garamond text-2xl">CONTACT US</h1>
                    <div className="bg-[#CAC9CF] max-w-[200px] w-full h-[1px]" />
                    <p className="text-[#FFFFFF] font-inter">Follow us on social media</p>
                    <div className="flex gap-5">
                        <FaSquareFacebook className="h-6 w-6 cursor-pointer" />
                        <TbBrandTwitter className="h-6 w-6" />
                        <BsInstagram className="h-6 w-6" />
                        <SiLinkedin className="h-6 w-6" />
                        <FiYoutube className="h-6 w-6" />
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-3">
                <h1 className="text-[#3A3845] font-bold font-playFairDisplay text-3xl">Get in touch with us</h1>
                <p className="text-[#595667] font-openSans text-center">Lorem ipsum dolor sit amet consectetur adipiscing eli
                    mattis sit phasellus mollis sit aliquam sit nullam.</p>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[#595667] font-openSans">Office Hours :</p>
                    <p className="text-[#088347] font-openSans">Monday - Friday  8:00 am to 5:00 pm</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[#595667] font-openSans">Email:</p>
                    <p className="text-[#088347] font-openSans">dylan@plumsteadelec.co.za</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[#595667] font-openSans">Phone :</p>
                    <p className="text-[#088347] font-openSans">(021) 7153151</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[#595667] font-openSans">Location :</p>
                    <p className="text-[#088347] font-openSans">Plumstead Electrical</p>
                    <p className="text-[#088347] font-openSans">Tramways Village, 89 Main road</p>
                    <p className="text-[#088347] font-openSans">Diep River</p>
                    <p className="text-[#088347] font-openSans">Cape Town</p>
                    <p className="text-[#088347] font-openSans">Cape Town</p>
                    <p className="text-[#088347] font-openSans">7800</p>
                    <p className="text-[#088347] font-openSans">South Africa</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-12">
                {/* Form */}
                <div className="w-full lg:w-1/2 p-2 lg:p-6">
                    <div className="flex flex-col sm:flex-row gap-8 w-full mt-8">
                        <div className="group relative w-full">
                            <label
                                htmlFor={nameId}
                                className="bg-background absolute start-1 top-0 z-10 font-openSans text-[#1C1B1F] block 
                                -translate-y-1/2 px-2 text-xs font-normal group-has-disabled:opacity-50"
                            >
                                Name
                            </label>
                            <Input id={nameId} className="h-10 text-[#1C1B1F] font-openSans" placeholder="Prayas Mazumder"
                                type="text" />
                        </div>

                        <div className="group relative w-full">
                            <label
                                htmlFor={emailId}
                                className="bg-background absolute start-1 top-0 z-10 font-openSans text-[#1C1B1F] block 
                                -translate-y-1/2 px-2 text-xs font-normal group-has-disabled:opacity-50"
                            >
                                Email
                            </label>
                            <Input id={emailId} className="h-10 text-[#1C1B1F] font-openSans" placeholder="prayasmazumder150@gmail.com"
                                type="text" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 w-full mt-8">
                        <div className="group relative w-full">
                            <label
                                htmlFor={phoneId}
                                className="bg-background absolute start-1 top-0 z-10 font-openSans text-[#1C1B1F] block 
                                -translate-y-1/2 px-2 text-xs font-normal group-has-disabled:opacity-50"
                            >
                                Phone
                            </label>
                            <Input id={phoneId} className="h-10 text-[#1C1B1F] font-openSans" placeholder="+00 00 000 000"
                                type="text" />
                        </div>

                        <div className="group relative w-full">
                            <label
                                htmlFor={companyId}
                                className="bg-background absolute start-1 top-0 z-10 font-openSans text-[#1C1B1F] block 
                                -translate-y-1/2 px-2 text-xs font-normal group-has-disabled:opacity-50"
                            >
                                Company
                            </label>
                            <Input id={companyId} className="h-10 text-[#1C1B1F] font-openSans" placeholder="Company.exe"
                                type="text" />
                        </div>
                    </div>

                    <div className="group relative mt-8">
                        <Label
                            htmlFor={messageId}
                            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 
                            text-xs font-normal group-has-disabled:opacity-50"
                        >
                            Message
                        </Label>
                        <Textarea id={messageId} className="font-openSans h-[150px]" placeholder="Type message..." />
                    </div>

                    <div className="w-full mt-8">
                        <Button type="submit" className="w-full h-10 flex gap-1 text-[#F3F3F3] bg-linear-to-r from-[#088347]
                            to-[#C6E824] cursor-pointer font-poppins rounded-none" >
                            Send Message
                            <HiOutlineArrowRight />
                        </Button>
                    </div>
                </div>


                {/* Map */}
                <div className="w-full lg:w-1/2 p-2 h-[450px] lg:p-4">
                    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}>
                        <Map
                            style={{ borderRadius: "20px" }}
                            defaultZoom={13}
                            defaultCenter={markerLocation}
                            gestureHandling={"greedy"}
                            disableDefaultUI
                        >
                            <Marker position={markerLocation} />
                        </Map>
                    </APIProvider>
                </div>
            </div>

            <div className="mt-12">
                <Footer />
            </div>
        </div>
    );
}
