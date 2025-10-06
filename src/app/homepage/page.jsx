import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div>
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
        </div>
    );
}
