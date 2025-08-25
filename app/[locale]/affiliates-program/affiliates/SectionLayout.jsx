export function SectionLayout({children, className}) {
    return (
        <section className={`${className} px-7 md:px-24`}>
            {children}
        </section>
    )
}