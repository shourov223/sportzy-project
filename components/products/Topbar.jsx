import Link from 'next/link'
import { MdOutlineHome } from 'react-icons/md'

const Topbar = ({ pageName, href }) => {
    return (
        <section className='border-b border-b-black'>
            <div className="container">
                <div className='py-6 flex items-center'>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <MdOutlineHome className='text-black size-[20px]' />
                        <span className='text-base font-semibold leading-6 text-black'>Home</span>
                    </Link>
                    <span className='text-black px-4'>|</span>
                    <Link href={href} className='text-base text-black font-semibold leading-6'>{pageName}</Link>
                </div>
            </div>
        </section>
    )
}

export default Topbar