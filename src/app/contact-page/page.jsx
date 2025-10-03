import NavBar from "@/components/NavBar";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

export default function ContactPage() {
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
        </div>
    );
}
