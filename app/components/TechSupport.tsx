import Image from "next/image";

export default function TechSupport() {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl lg:container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2  rounded-lg overflow-hidden  border border-gray-200">
                    {/* Left Column - Content Area */}
                    <div className="bg-[#f8f8f7] flex flex-col justify-center p-8 lg:p-12">
                        <h2 className="text-3xl lg:text-4xl font-display  text-gray-900 mb-6">
                            Tech support?
                         We're always here
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Our expert hosting.com engineers are available 24/7, bringing deep 
                            technical knowledge to help you choose the right plan, configure it 
                            for peak performance, and keep your site running flawlessly.
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-500 hover:to-lime-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                                Let's talk
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image Placeholder */}
                    <div className="bg-gradient-to-br from-[#0d3d3d] to-[#4d7c3f] min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
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


