import Image from 'next/image'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import logo from '@/assets/logo.png'
import bgImage from '@/assets/bgImage.png'
import { Button, TextField } from '@mui/material'
import chair from '@/assets/chair.png'
import lamp from '@/assets/lamp.png'
import sofa from '@/assets/sofa.png'
import gx from '@/assets/gx.png'
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import neger from '@/assets/neger.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import pexx from '@/assets/pexx.png'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ql from '@/assets/ql.png'

export default function Main() {
	return (
		<>
			<header className=''>
				<nav className=' bg-[#D3CBC5]'>
					<div className='flex flex-row items-center justify-between md:px-0  p-5 md:max-w-[1200px] md:m-auto md:py-5'>
						<Image src={logo} alt='' />
						<ul className=' flex flex-row items-center gap-10'>
							<li>Home</li>
							<li>Pages</li>
							<li className='hidden md:block'>Services</li>
							<li className='hidden md:block'>Projects</li>
							<li className='hidden md:block'>Blog</li>
							<li className='hidden md:block'>Contact Us</li>
						</ul>
						<div className='flex gap-5'>
							<SearchOutlinedIcon />
						</div>
					</div>
				</nav>

				<section className='sec_1 md:h-[100vh] h-[45vh]'>
					<div className='md:max-w-[1200px] md:m-auto md:py-[150px] md:px-0 p-5'>
						<aside className=' md:w-[400px] flex flex-col gap-5 items-start'>
							<p className='hidden md:block text-[14px]'>INTERIOR</p>
							<h1 className='md:text-[50px] text-2xl'>
								Home Deasigns <br /> Made Easy
							</h1>
							<div className='flex items-center gap-5'>
								<p>$416.00 </p>
								<span className='text-gray-400 text-[12px]'>Starting</span>
							</div>
							<Button sx={{ backgroundColor: 'black', color: 'white' }}>
								SHOP NOW
							</Button>
						</aside>
					</div>
				</section>
			</header>

			<main className=''>
				<section className='md:max-w-[1200px] md:m-auto justify-between flex md:flex-row flex-col gap-10 md:gap-0 md:mt-[80px] p-5 md:p-0 mt-[-40px]'>
					<article className=' md:w-[300px] p-5 bg-[#E5E6E6] flex flex-col gap-5 items-start rounded-[10px]'>
						<h2 className='text-2xl'>New Chair Collection 2022</h2>
						<Button variant='outlined' color='inherit' sx={{}}>
							SHOP NOW
						</Button>
						<Image src={chair} alt='chair' />
					</article>
					<article className=' rounded-[10px] md:w-[300px] p-5 bg-[#E5E6E6] flex flex-col gap-5 items-start'>
						<h2 className='text-2xl'>Lamp Desk</h2>
						<Button variant='outlined' color='inherit' sx={{}}>
							SHOP NOW
						</Button>
						<Image src={lamp} alt='lamp' />
					</article>
					<article className=' rounded-[10px] md:w-[300px] p-5 bg-[#E5E6E6] flex flex-col gap-5 items-start'>
						<h2 className='text-2xl'>Modern Chair Collection 2022</h2>
						<Button variant='outlined' color='inherit' sx={{}}>
							SHOP NOW
						</Button>
						<Image src={sofa} alt='sofa' />
					</article>
				</section>

				<section className='md:max-w-[1200px] md:m-auto md:mt-[80px] p-5 md:p-0'>
					<div className='flex md:flex-row justify-between items-center'>
						<h1 className='md:text-[40px] text-3xl'>The Best New Arrivals</h1>
						<div className='hidden md:flex gap-5'>
							<Button sx={{ color: 'white', backgroundColor: 'black' }}>
								Desk
							</Button>
							<Button color='inherit' variant='outlined'>
								Bedroom
							</Button>
							<Button color='inherit' variant='outlined'>
								Lighting
							</Button>
							<Button color='inherit' variant='outlined'>
								Accesories
							</Button>
						</div>
					</div>

					<div className='flex flex-wrap  md:gap-8 gap-5  mt-[50px] justify-between'>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
					</div>
				</section>

				<section className='sec_4 md:pt-13 pt-[50px]'>
					<h1 className='text-center md:text-5xl text-[25px]  md:text-white'>
						Words Of Our Clients
					</h1>
					<div className='md:max-w-[1200px] md:m-auto mt-[190px] md:py-[170px] p-5'>
						<div className='flex md:flex-row justify-between items-center flex-col gap-5 md:gap-0'>
							<article className=' shadow-2xl shadow-gray-300 bg-white rounded-[10px] md:w-[280px] p-5 flex flex-col items-center gap-8 '>
								<Image src={neger} alt='' className='' />
								<h2 className='text-[26px]'>Bessie Cooper</h2>
								<p className='border-t pt-4'>
									I Have Gotten At Least 50 Times The Value From Surely. After
									Using Surely My Business After Skyrocketed Heaven To Delhi
								</p>
							</article>
							<article className=' shadow-2xl shadow-gray-300 bg-white rounded-[10px] md:w-[280px] p-5 flex flex-col items-center gap-8 md:mt-[-120px]'>
								<Image src={neger} alt='' className='' />
								<h2 className='text-[26px]'>Bessie Cooper</h2>
								<p className='border-t pt-4'>
									I Have Gotten At Least 50 Times The Value From Surely. After
									Using Surely My Business After Skyrocketed Heaven To Delhi
								</p>
							</article>
							<article className=' shadow-2xl shadow-gray-300 bg-white rounded-[10px] md:w-[280px] p-5 flex flex-col items-center gap-8 '>
								<Image src={neger} alt='' className='' />
								<h2 className='text-[26px]'>Bessie Cooper</h2>
								<p className='border-t pt-4'>
									I Have Gotten At Least 50 Times The Value From Surely. After
									Using Surely My Business After Skyrocketed Heaven To Delhi
								</p>
							</article>
							<article className=' shadow-2xl shadow-gray-300 bg-white rounded-[10px] md:w-[280px] p-5 flex flex-col items-center gap-8 '>
								<Image src={neger} alt='' className='' />
								<h2 className='text-[26px]'>Bessie Cooper</h2>
								<p className='border-t pt-4'>
									I Have Gotten At Least 50 Times The Value From Surely. After
									Using Surely My Business After Skyrocketed Heaven To Delhi
								</p>
							</article>
						</div>
					</div>
				</section>

				<section className='md:max-w-[1200px] md:m-auto p-5 md:p-0:'>
					<div className='flex md:flex-row justify-between items-center'>
						<h1 className='md:text-[40px] text-3xl'>Top Special Product</h1>
						<div className='hidden md:flex gap-5'>
							<Button color='inherit' variant='outlined'>
								See More Product
							</Button>
						</div>
					</div>
					<div className='flex flex-wrap  md:gap-8 gap-5  mt-[50px] justify-between'>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
						<article className=' md:w-[280px] flex flex-col gap-3'>
							<div>
								<div className='flex flex-col items-center bg-[#F7F7F7] p-5  '>
									<Image src={gx} alt='gx' />
								</div>

								<div className='bg-black text-white w-[100%] flex justify-center gap-5 px-[20px]'>
									<LoopOutlinedIcon />
									<FavoriteBorderOutlinedIcon />
									<ShoppingCartOutlinedIcon />
								</div>
							</div>

							<p>Blue chair</p>

							<div className='flex justify-between'>
								<p>$15.00</p>
								<p>⭐⭐⭐⭐</p>
							</div>
						</article>
					</div>
				</section>

				<Image
					src={pexx}
					alt='pex'
					className='hidden md:block m-auto w-[1200px] my-[70px]'
				/>

				<section className='md:max-w-[1200px] md:m-auto p-5 md:p-0'>
					<h1 className='text-center md:text-[40px]'>
						Read Our Latest Articles
					</h1>

					<div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:mt-[70px]'>
						<article className='flex flex-col gap-5 md:w-[340px] border rounded-[10px]'>
							<Image src={ql} alt='' className='rounded-t-[10px]' />
							<div className='p-3 flex-col flex gap-4 items-start'>
								<div className='flex gap-7 text-[#808080]'>
									<p>
										<PersonOutlineOutlinedIcon />
										John Doe
									</p>
									<p>
										<ChatBubbleOutlineOutlinedIcon />9 Comments
									</p>
								</div>
								<h2>Things to Know When Choosing the Perfect Sofa</h2>
								<Button color='inherit' variant='outlined'>
									See More Product
								</Button>
							</div>
						</article>
						<article className='flex flex-col gap-5 md:w-[340px] border rounded-[10px]'>
							<Image src={ql} alt='' className='rounded-t-[10px]' />
							<div className='p-3 flex-col flex gap-4 items-start'>
								<div className='flex gap-7 text-[#808080]'>
									<p>
										<PersonOutlineOutlinedIcon />
										John Doe
									</p>
									<p>
										<ChatBubbleOutlineOutlinedIcon />9 Comments
									</p>
								</div>
								<h2>Things to Know When Choosing the Perfect Sofa</h2>
								<Button color='inherit' variant='outlined'>
									See More Product
								</Button>
							</div>
						</article>
						<article className='flex flex-col gap-5 md:w-[340px] border rounded-[10px]'>
							<Image src={ql} alt='' className='rounded-t-[10px]' />
							<div className='p-3 flex-col flex gap-4 items-start'>
								<div className='flex gap-7 text-[#808080]'>
									<p>
										<PersonOutlineOutlinedIcon />
										John Doe
									</p>
									<p>
										<ChatBubbleOutlineOutlinedIcon />9 Comments
									</p>
								</div>
								<h2>Things to Know When Choosing the Perfect Sofa</h2>
								<Button color='inherit' variant='outlined'>
									See More Product
								</Button>
							</div>
						</article>
					</div>
				</section>
			</main>

			<footer className='md:py-[50px] mt-[80px] py-[40px]'>
				<div className='md:max-w-[1200px] md:m-auto'>
					<div className=' md:w-[550px] flex flex-col items-center gap-5 m-auto'>
						<Image src={logo} alt='' className='md:w-[160px]' />
						<h1 className='text-2xl'>Join Now For Early Access</h1>
						<p className=' hidden md:block text-center text-[#5E5E5E]'>
							Suspendisse eu velit est. Cras nec vestibulum quam. Donec
							tincidunt purus nec enim tincidunt, sit
						</p>
						<div className='flex gap-7'>
							<TextField
								id='outlined-basic'
								label='Outlined'
								variant='outlined'
							/>
							<Button
								sx={{ color: '#5E5E5E', border: '1px solid' }}
								variant='outlined'
							>
								{' '}
								SUBSCRIBE
							</Button>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
