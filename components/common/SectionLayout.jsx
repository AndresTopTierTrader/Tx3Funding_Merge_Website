export function SectionLayout({ children, className, padding = false, bgColor, style }) {
    return (
        <div style={style} className={`${bgColor} bg-center bg-cover`}>
            <section className={`${className} px-7 md:px-24 mx-auto max-w-[1600px] ${padding ? 'py-16 md:py-24' : ''}`}>
                {children}
            </section>
        </div>
    )
}