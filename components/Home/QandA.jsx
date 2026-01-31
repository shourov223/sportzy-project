"use client"
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

const questionItems = [
    {
        id: 1,
        title: "How do I determine the right size for my sportswear?",
        text: "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance."
    },
    {
        id: 2,
        title: "How long does shipping my order take?",
        text: "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance."
    },
    {
        id: 3,
        title: "Do you offer international shipping?",
        text: "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance."
    },
]

const QuestionItem = ({ title, text, isOpen, onToggle }) => {
    return (
        <div
            className={`
                bg-white rounded-lg shadow-sm overflow-hidden
                transition-all duration-300 ease-in-out w-full
                ${isOpen ? "ring-2 ring-red-500/20" : ""}
            `}
        >
            <button
                className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left hover:bg-gray-50 transition-colors"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="flex-shrink-0 mt-1 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    {isOpen ? (
                        <FaMinus className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                        <FaPlus className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                </span>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 pr-4">
                        {title}
                    </h3>

                    <div
                        className={`
                            grid transition-all duration-300 ease-in-out
                            ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}
                        `}
                    >
                        <div className="overflow-hidden">
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

const Questions = () => {
    const [openId, setOpenId] = useState(null)

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 rounded-2xl">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-4 md:gap-5">
                    {questionItems.map((item) => (
                        <QuestionItem
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            isOpen={openId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const QandA = () => {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <Questions />
            </div>
        </section>
    )
}

export default QandA