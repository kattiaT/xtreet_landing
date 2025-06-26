import React from 'react';

export default function SocialIcons({ embedded = false }) {
    const containerClass = embedded
        ? 'flex justify-center gap-4 mt-6'
        : 'animate-pulse fixed bottom-5 right-3 flex flex-col items-center space-y-4 z-40';

    const iconClass = 'w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition duration-300 text-xl text-white';

    return (
        <div className={containerClass}>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#9C00B2] ${iconClass}`}
            >
                <i className="fab fa-instagram"></i>
            </a>

            <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#00AFAA] ${iconClass}`}
            >
                <i className="fab fa-tiktok"></i>
            </a>

            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#3B3B3B] ${iconClass}`}
            >
                <i className="fab fa-facebook-f"></i>
            </a>
        </div>
    );
}
