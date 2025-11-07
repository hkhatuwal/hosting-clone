import Image from "next/image";

export default function PartnerBrands() {
    return (
        <div className="w-full bg-[#f1fbf0] py-20">
            <div className="container mx-auto px-12  mt-62">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Trusted by the world&apos;s<br />
                    top enterprises
                </h2>

                {/* Logo Grid */}
                <div className="flex items-center justify-center gap-12 mb-8 flex-wrap">
                    {/* Partner Brand Logos */}
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/ihg.png" 
                            alt="IHG Hotels & Resorts" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/telstra.png" 
                            alt="Telstra" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/amnesty.png" 
                            alt="Amnesty International" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/7eleven.png" 
                            alt="7 Eleven" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/global.png" 
                            alt="Global" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <div className="h-20 flex items-center justify-center">
                        <Image 
                            src="/assets/images/bbc.png" 
                            alt="BBC" 
                            width={160} 
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Caption */}
                <p className="text-center text-gray-700 text-sm">
                    We power experiences for some of the biggest brands in the world.
                </p>
            </div>
        </div>
    );
}

