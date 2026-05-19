import Image from "next/image";

export default function TechSupport() {
    return (
        <div className="w-full bg-white py-12 md:py-20">
            <div className="max-w-7xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border border-gray-200">
                    {/* Left Column - Content Area */}
                    <div className="bg-[#f8f8f7] flex flex-col justify-center p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 mb-4 md:mb-6">
                            Tech support?
                         We're always here
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                            Our expert Adlef engineers are available 24/7, bringing deep 
                            technical knowledge to help you choose the right plan, configure it 
                            for peak performance, and keep your site running flawlessly.
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-500 hover:to-lime-500 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base">
                                Let's talk
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image Placeholder */}
                    <div className="bg-gradient-to-br from-[#0d3d3d] to-[#4d7c3f] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                        <Image
                            src="/assets/images/chat.png"
                            alt="Tech Support"
                            width={600}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


