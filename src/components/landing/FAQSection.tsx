import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FAQSchema from './FAQSchema';

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqData = [
        {
            question: "What is Easy4Cut?",
            answer: "Easy4Cut is a popular self-photo booth experience that allows users to take high-quality photos, usually with themed layouts such as K-Pop, couple, or group styles. It is widely used in photo booth studios and events."
        },
        {
            question: "Is Easy4Cut related to K-Pop?",
            answer: "Yes. Easy4Cut K-Pop is especially popular among K-Pop fans. Many Easy4Cut photo booths offer K-Pop inspired frames, idol-style layouts, and group photo concepts designed for K-Pop enthusiasts."
        },
        {
            question: "What is Easy4Cut.com?",
            answer: "Easy4Cut.com is commonly searched by users looking for official Easy4Cut information, photo booth details, or Easy4Cut-style photo experiences. Depending on the region, Easy4Cut services may be provided through partner studios rather than a single global website."
        },
        {
            question: "Is Easy4Cut.com a photo booth service?",
            answer: "Easy4Cut is not just a website — it refers to a photo booth concept and brand style. Many studios use Easy4Cut-style booths that offer automatic photo sessions, themed frames, and instant digital or printed photos."
        },
        {
            question: "What does “Easy4Cut com photobooth” mean?",
            answer: "This search term is typically used by people looking for: Easy4Cut photo booth locations, How Easy4Cut photo booths work, or Online examples of Easy4Cut-style photo frames. It usually refers to the Easy4Cut photo booth experience rather than a single online tool."
        },
        {
            question: "What is Memorify Photobooth?",
            answer: "Memorify Photobooth is a modern photo booth experience focused on preserving memories with clean designs, high-quality photos, and digital sharing options. It is often compared with Easy4Cut due to similar user experiences."
        },
        {
            question: "Is Memorify Photobooth the same as Easy4Cut?",
            answer: "No. Memorify Photobooth and Easy4Cut are different photo booth concepts, but both focus on: Self-service photo booths, Stylish frames, and Digital and print photo options. Users often compare them to find the best photo booth experience."
        },
        {
            question: "Can I use Easy4Cut-style photo booths online?",
            answer: "Easy4Cut is primarily an offline photo booth experience, but many platforms now offer online Easy4Cut-style photo templates where users can upload photos and create similar layouts digitally."
        },
        {
            question: "Why is Easy4Cut so popular?",
            answer: "Easy4Cut is popular because it: Offers aesthetic and trendy photo layouts, Is loved by K-Pop fans, Provides quick, fun, and shareable photo experiences, and Works well for friends, couples, and group photos."
        },
        {
            question: "Where can I find Easy4Cut or Memorify photo booth alternatives?",
            answer: "You can find Easy4Cut or Memorify-style photo booths: In major cities with self-photo studios, On online photo booth platforms offering similar templates, and Through digital photo booth services that recreate the Easy4Cut look."
        }
    ];

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <FAQSchema faqs={faqData} />

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about Easy4Cut, Memorify, and our photo booth experience
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                                onClick={() => toggleItem(index)}
                                aria-expanded={openItem === index}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>
                                {openItem === index ? (
                                    <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                )}
                            </button>

                            {openItem === index && (
                                <div className="px-6 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <div className="border-t border-gray-100 pt-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
