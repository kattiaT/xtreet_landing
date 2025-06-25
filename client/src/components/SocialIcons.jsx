import React from 'react';

export default function SocialIcons() {
    const iconStyle = 'text-white text-2xl';

    return (
        <div className="animate-pulse fixed bottom-5 right-3 flex flex-col items-center space-y-4 z-50">
            {/* Instagram */}
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9C00B2] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition duration-300"
            >
                <i className="fab fa-instagram text-xl text-white"></i>
            </a>

            {/* TikTok */}
            <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00AFAA] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition duration-300"
            >
                <i className="fab fa-tiktok text-xl text-white"></i>
            </a>

            {/* Facebook */}
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3B3B3B] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition duration-300"
            >
                <i className="fab fa-facebook-f text-xl text-white"></i>
            </a>
        </div>

    );
}
