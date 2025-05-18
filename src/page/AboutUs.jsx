

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-white px-4 py-6">
            <div className="max-w-sm mx-auto bg-white rounded-3xl  p-6 transition-all duration-300 ">
                {/* Profile */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src="https://i.pravatar.cc/300?img=67"
                        alt="Mani Pandey"
                        className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-200 mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Mani Pandey</h2>
                    <p className="text-base text-gray-600 leading-relaxed px-2">
                        <strong className="text-gray-800">Fearless & Honest Reporter</strong><br />
                        Based in <strong>Noida</strong>, Mani Pandey reports only the truth. His video journalism shines a light on real issues — from streets to schools, crime to cuisine — always raw and reliable.
                    </p>
                </div>

                {/* Topics */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">📌 Covered Topics</h3>
                    <ul className="text-base text-gray-700 space-y-2 pl-4 list-disc">
                        <li>Crime & Justice</li>
                        <li>Education & Youth</li>
                        <li>Street Food & Hygiene</li>
                        <li>Public Voices</li>
                        <li>Ground-Level Truth</li>
                    </ul>
                </div>

                {/* Connect Section */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">📲 Connect with Mani</h3>
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://wa.me/919919111781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-green-500 text-white text-base py-3 px-4 rounded-xl shadow-md hover:bg-green-600 transition-all"
                        >
                            <img
                                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                                alt="WhatsApp"
                                className="w-6 h-6"
                            />
                            +91 99191 11781
                        </a>
                        <a
                            href="https://www.instagram.com/reel/DJWyGQ1BxX1/?igsh=cWx5dzFrZWNvbGtk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-base py-3 px-4 rounded-xl shadow-md hover:opacity-90 transition-all"
                        >
                            <img
                                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                            @manipandey_reports
                        </a>
                    </div>
                </div>

                {/* Footer Tagline */}
                <p className="text-sm text-center text-gray-500 mt-6 italic">
                    “Truth isn’t always loud — but Mani records it anyway.” 🎥
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
