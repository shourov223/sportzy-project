import type { IconType } from "react-icons"
import { montserrat } from "../navbar"
import { jost } from "./Banner"
import { TfiWorld } from "react-icons/tfi"
import { FaShippingFast } from "react-icons/fa"
import { GrSecure } from "react-icons/gr"

const FACILITIES_DATA = [
    {
        icon: TfiWorld,
        title: "Worldwide Shipping",
        description: "Doesn't matter wherever you are, you will always get your order."
    },
    {
        icon: FaShippingFast,
        title: "Free Delivery",
        description: "No more fees other than what you pay for what you want."
    },
    {
        icon: GrSecure,
        title: "Secure Transaction",
        description: "We are a verified marketplace since 2018. Safety guarantee."
    }
]

const Facilities = () => {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-[87px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {FACILITIES_DATA.map((facility, index) => (
                        <FacilityItem
                            key={index}
                            Icon={facility.icon}
                            title={facility.title}
                            description={facility.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface facilityItemType {
    Icon: IconType,
    title: string,
    description: string
}
const FacilityItem = ({ Icon, title, description }: facilityItemType) => {
    return (
        <div className="flex gap-6 sm:gap-8 items-start max-w-full lg:max-w-[330px] mx-auto lg:mx-0">
            <div className="flex-shrink-0 pt-1">
                <Icon className="text-black w-8 h-8" aria-hidden="true" />
            </div>
            <div className="flex-1">
                <h2 className={`text-xl sm:text-2xl leading-tight font-bold text-black mb-1.5 ${jost.className}`}>
                    {title}
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed text-black ${montserrat.className}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Facilities