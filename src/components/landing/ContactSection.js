import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Build something">
                    Put the potentially record low maximum sea ice extent tihs
                    year down to low ice. According to the National Oceanic and
                    Atmospheric Administration, Ted, Scambos.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Excelent Services">
                    Broad chemical based on customers, provide excellent service for the purpose, we provide customers with high quality products
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                    Position our product or service at the "logical extreme" of some aspect of your product category
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    Maximize the technology accessible to your business and create relevant online posts, ads, and promotions that can engage your customers and prospects on various social media platforms.                    
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
