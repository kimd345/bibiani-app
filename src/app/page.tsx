import Image from 'next/image';

export default function Home() {
	return (
		// <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
		<div className='flex flex-col'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<div className='flex w-full'>
					<div className=' justify-center flex flex-col flex-1 px-6 gap-5'>
						<h1 className="text-6xl">East Meets South, Southeast Reimagined!</h1>
						<h2 className="text-3xl">Korea and India mingle like {"it's"} Prom in Edison, NJ</h2>
					</div>
					<Image
						className='object-cover flex-1'
						src='/korean-indian.png'
						alt='Korean Indian Banner'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', height: '700px' }} // optional
						priority
					/>
				</div>
				<ul className='text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
					<li className='mb-2'>
						Bowl
						{/* <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
							src/app/page.tsx
						</code> */}
					</li>
					<li>Chalupa</li>
				</ul>

				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<a
						className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							className='dark:invert'
							src='/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Read our docs
					</a>
				</div>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/file.svg'
						alt='File icon'
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/window.svg'
						alt='Window icon'
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
