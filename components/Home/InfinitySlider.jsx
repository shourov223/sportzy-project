import Image from "next/image"
import Logo1 from "../../assets/Logo1.svg"
import Logo2 from "../../assets/Logo2.svg"
import Logo3 from "../../assets/Logo3.svg"
import Logo4 from "../../assets/Logo4.svg"
import Logo5 from "../../assets/Logo5.svg"
import Logo6 from "../../assets/Logo6.svg"

const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
];

const InfiniteSlider = () => {
    return (
        <section>
            <div className="container">
                <div className="overflow-hidden w-full">
                    <div className="flex animate-slide gap-[200px]">
                        {[...logos, ...logos].map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="w-auto h-[50px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfiniteSlider;
