"use client"
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import { MdEmail, MdArrowRightAlt } from "react-icons/md"
import { useState } from 'react'
import { toast } from 'sonner'
import { Toaster } from './ui/sonner'
import bkash from "../assets/bkash.svg"
import nagad from "../assets/nagad.svg"
import rocket from "../assets/rocket.svg"
import upay from "../assets/upay.svg"

const CONTACT_INFO = [
    {
        icon: FaLocationDot,
        details: "123 Main Street Chicago, IL 60601 United States"
    },
    {
        icon: IoMdCall,
        details: "+1 (312) 555-1234"
    },
    {
        icon: MdEmail,
        details: "hello@sportzystore.com"
    }
]

const COMPANY_LINKS = [
    "About Us",
    "Testimonials",
    "Products",
    "Terms & Condition",
    "Latest Update"
]

const ACCOUNT_LINKS = [
    "Orders",
    "Wishlist",
    "Payment Info",
    "Addresses",
    "Personal Info"
]

const SUPPORT_LINKS = [
    "Payment Guide",
    "Help Centre",
    "Privacy Policy",
    "Return Policy",
    "FAQs"
]

const PAYMENT_METHODS = [bkash, nagad, rocket, upay]

const ContactListItem = ({ icon: Icon, details }) => (
    <li className='flex items-start gap-4'>
        <span className='mt-1'>
            <Icon className='text-black text-lg' />
        </span>
        <span className='text-sm md:text-base leading-relaxed text-black'>
            {details}
        </span>
    </li>
)

const SectionHeading = ({ children }) => (
    <h3 className='font-bold text-lg md:text-2xl leading-tight text-black mb-4 md:mb-5'>
        {children}
    </h3>
)

const LinkListItem = ({ children }) => (
    <li className='text-sm md:text-base leading-relaxed text-black hover:text-[#C1032F] transition-colors cursor-pointer'>
        {children}
    </li>
)

const LinkSection = ({ title, links }) => (
    <div>
        <SectionHeading>{title}</SectionHeading>
        <ul className='flex flex-col gap-2 md:gap-3'>
            {links.map((link, index) => (
                <LinkListItem key={index}>{link}</LinkListItem>
            ))}
        </ul>
    </div>
)

const Footer = () => {
    const [email, setEmail] = useState("")

    const validateAndSubmitEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!email.trim()) {
            toast.warning("Empty Field", {
                description: "Please enter an email address first",
                action: {
                    label: "Close",
                    onClick: () => console.log("Close")
                }
            })
            return
        }

        if (!emailRegex.test(email)) {
            toast.warning("Invalid Email", {
                description: "Please enter a valid email address",
                action: {
                    label: "Close",
                    onClick: () => console.log("Close")
                }
            })
            return
        }

        toast.success("Thanks for subscribing!", {
            description: `Your email: ${email}`,
            action: {
                label: "Close",
                onClick: () => console.log("Close")
            }
        })
        setEmail("")
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            validateAndSubmitEmail()
        }
    }

    return (
        <footer className='py-12 md:py-20 lg:py-30 mt-12 md:mt-20 lg:mt-30 border-t border-black bg-white'>
            <div className="container">
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12'>

                    <div className='lg:col-span-3'>
                        <div className='mb-8 md:mb-12'>
                            <Image
                                width={225}
                                height={50}
                                src="/mainLogo.svg"
                                alt='Sportzy Store Logo'
                                className='w-auto h-auto max-w-[180px] md:max-w-[225px]'
                            />
                        </div>
                        <ul className='flex flex-col gap-3 md:gap-4'>
                            {CONTACT_INFO.map((contact, index) => (
                                <ContactListItem
                                    key={index}
                                    icon={contact.icon}
                                    details={contact.details}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className='lg:col-span-2'>
                        <LinkSection title="Company" links={COMPANY_LINKS} />
                    </div>

                    <div className='lg:col-span-2'>
                        <LinkSection title="Account" links={ACCOUNT_LINKS} />
                    </div>

                    <div className='lg:col-span-2'>
                        <LinkSection title="Support" links={SUPPORT_LINKS} />
                    </div>

                    <div className='lg:col-span-3'>

                        <div className='mb-8'>
                            <SectionHeading>Newsletter</SectionHeading>
                            <div className='flex items-stretch border border-black'>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder='Enter your email address...'
                                    type="email"
                                    className='text-black text-sm md:text-base w-full px-4 md:px-8 py-3 placeholder:text-black/60 outline-none focus:outline-none'
                                    aria-label="Email subscription"
                                />
                                <button
                                    onClick={validateAndSubmitEmail}
                                    className='bg-[#C1032F] px-4 md:px-6 py-3 flex items-center justify-center hover:bg-[#a00228] transition-colors cursor-pointer'
                                    aria-label="Subscribe"
                                >
                                    <MdArrowRightAlt className='text-white text-xl md:text-2xl' />
                                </button>
                            </div>
                        </div>

                        <div>
                            <SectionHeading>Payment</SectionHeading>
                            <div className='flex flex-wrap items-center gap-3'>
                                {PAYMENT_METHODS.map((logo, index) => (
                                    <Image
                                        key={index}
                                        width={40}
                                        height={40}
                                        src={logo}
                                        alt={`Payment method ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toaster position='top-right' />
        </footer>
    )
}

export default Footer