"use client";

export default function WhatsAppFloat() {
    const phone = "50662346599";
    const message =
        "Hola, estoy interesado en los servicios de desarrollo de software de A.P.D. Solutions. ¿Podrían brindarme más información?";

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg animate-bounce hover:scale-110 hover:bg-green-600 transition-all duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-6 w-6 fill-current"
                aria-hidden="true"
            >
                <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.46h-.52c-.18 0-.47.07-.72.34s-.95.93-.95 2.26.98 2.62 1.11 2.81c.14.18 1.92 2.93 4.64 4.11.65.28 1.16.45 1.56.57.65.21 1.23.18 1.69.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
                <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.58-1.68a12.75 12.75 0 0 0 6.23 1.61h.01c7.06 0 12.79-5.74 12.79-12.8S23.07 3.2 16.01 3.2Zm0 23.4h-.01a10.58 10.58 0 0 1-5.39-1.48l-.39-.23-3.9.99 1.04-3.8-.25-.39a10.56 10.56 0 1 1 8.9 4.91Z" />
            </svg>

            <span className="hidden sm:inline font-medium">WhatsApp</span>
        </a>
    );
}