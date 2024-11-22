// import { useState } from 'react';
import Image from 'next/image';
import { Menu, XIcon } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-white shadow-md'>
			<div className='w-full  px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<div className='flex-shrink-0 flex items-center gap-10'>
						<div>
							<Link href='http://localhost:3000' className='flex items-center'>
							{/* <Link href='https://bibiani.com' className='flex items-center'> */}
								<Image
									className='dark:invert'
									src='/bibiani-logo.svg'
									alt='Logo'
									width={64}
									height={64}
									priority
								/>
								<span className='text-2xl'>Bibiani</span>
							</Link>
						</div>
						<div className='hidden md:flex md:items-center md:gap-8'>
							<Link href='order' className='text-gray-800 hover:text-gray-600'>
								Order
							</Link>
							<Link href='survey' className='text-gray-800 hover:text-gray-600'>
								Survey
							</Link>
							<Link href='menu' className='text-gray-800 hover:text-gray-600'>
								Menu
							</Link>
							<Link href='about' className='text-gray-800 hover:text-gray-600'>
								About Us
							</Link>
						</div>
						<div className='flex items-center md:hidden'>
							<button
								// onClick={() => setIsOpen(!isOpen)}
								className='text-gray-800 hover:text-gray-600 focus:outline-none'
							>
								{/* {isOpen ? (
								<XIcon className='h-6 w-6' />
							) : ( */}
								<Menu className='h-6 w-6' />
								{/* )} */}
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* {isOpen && (
				<div className='md:hidden'>
					<a
						href='#'
						className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
					>
						Order
					</a>
					<a
						href='#'
						className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
					>
						Survey
					</a>
					<a
						href='#'
						className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
					>
						About Us
					</a>
				</div>
			)} */}
		</nav>
	);
}
