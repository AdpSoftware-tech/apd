"use client"

export default function CalendlyButton() {
    const openCalendly = () => {
        // @ts-ignore
        window.Calendly?.initPopupWidget({
            url: 'https://calendly.com/tu-usuario/consulta-gratuita',
        })
    }

    return (
        <>
            <script src="https://assets.calendly.com/assets/external/widget.js" async />
            <button
                onClick={openCalendly}
                className="fixed bottom-6 right-6 bg-apd-primary text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-apd-dark transition z-50 flex items-center gap-2"
            >
                Agendar Consultoría Gratuita ksdkjbcjskd
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 15V5l6 5-6 5z" />
                </svg>
            </button>
        </>
    )
}