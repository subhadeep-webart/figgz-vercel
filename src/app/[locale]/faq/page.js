import FaqAccordionContainer from "@/components/faq/FaqContainer"

const FaqPage = () => {
    return (
        <section className="container section_padding flex flex-col gap-4">
            <h3 className="text-product-text-base font-semibold text-lg">Frequently Ask Question</h3>
            <FaqAccordionContainer />
        </section>
    )
}

export default FaqPage