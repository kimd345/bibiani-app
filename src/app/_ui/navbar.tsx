// import { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, XIcon } from 'lucide-react';

export default function NavBar() {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-white shadow-md'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<div className='flex-shrink-0 flex items-center'>
						<a href='https://bibiani.com'>
							<Image src='/logo.png' alt='Logo' width={40} height={40} />
						</a>
					</div>
					<div className='hidden md:flex md:items-center md:space-x-4'>
						<a href='#' className='text-gray-800 hover:text-gray-600'>
							Order
						</a>
						<a href='#' className='text-gray-800 hover:text-gray-600'>
							Survey
						</a>
						<a href='#' className='text-gray-800 hover:text-gray-600'>
							About Us
						</a>
					</div>
					<div className='flex items-center md:hidden'>
						<button
							// onClick={() => setIsOpen(!isOpen)}
							className='text-gray-800 hover:text-gray-600 focus:outline-none'
						>
							{/* {isOpen ? (
								<XIcon className='h-6 w-6' />
							) : ( */}
								<MenuIcon className='h-6 w-6' />
							{/* )} */}
						</button>
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
