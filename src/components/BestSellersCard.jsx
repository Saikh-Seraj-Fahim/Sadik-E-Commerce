import Image from "next/image";

export default function BestSellersCard({ imageName, title, description, price }) {
    return (
        <div className="w-full max-w-[300px] h-[350px] shadow-2xl z-50 rounded-lg hover:scale-105 bg-white">
            <div className="relative w-full h-[60%]">
                <Image src={`/best-sellers-images/${imageName}.png`} alt="" width={250} height={100} className="object-cover" />
            </div>
            <div className="w-full h-[40%] pl-8 flex flex-col gap-2 mt-4">
                <h6 className="text-[#70908B] font-openSans font-bold">{title}</h6>
                <p className="text-[#70908B] font-openSans font-normal">{description}</p>
                <h6 className="text-[#70908B] font-openSans font-bold">{price}</h6>
            </div>
        </div>
    );
}
