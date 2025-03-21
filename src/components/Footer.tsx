"use client";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<motion.footer
			className='mt-10 text-center text-gray-500 text-sm py-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}>
			<div className='flex flex-col items-center gap-1'>
				<p>
					<span className='font-medium text-gray-600'>Powered by</span>{" "}
					<span className='font-semibold text-gray-700'>Next.js</span>
				</p>
				<p>
					Designed by{" "}
					<a
						href='mailto:devrimq@gmail.com'
						className='underline text-blue-500 hover:text-blue-600 transition'>
						Devrim Sarıkaya
					</a>
				</p>
			</div>
		</motion.footer>
	);
}
