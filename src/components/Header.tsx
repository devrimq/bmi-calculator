"use client";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='text-center mb-6'>
			<h1 className='text-3xl font-bold text-gray-800'>
				Vücut Kitle İndeksi Hesaplayıcı
			</h1>
			<p className='text-sm text-gray-500 mt-1'>
				<span className='italic'>İletişim</span>{" "}
				<a
					href='mailto:devrimq@gmail.com'
					className='underline text-blue-500 hover:text-blue-600 transition'>
					Devrim Sarıkaya
				</a>
			</p>
		</motion.div>
	);
}
