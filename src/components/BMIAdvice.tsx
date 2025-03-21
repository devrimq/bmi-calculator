"use client";
import { motion } from "framer-motion";

interface Props {
	category: string;
	diet: string;
	exercise: string;
}

export default function BMIAdvice({ category, diet, exercise }: Props) {
	return (
		<motion.div
			className='mt-4 p-4 bg-yellow-100 rounded-lg text-center border border-yellow-500'
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<p className='text-md text-gray-700 font-semibold'>
				Kategori: {category}
			</p>
			<p className='text-sm text-gray-600 mt-2'>
				<strong>Beslenme Önerisi:</strong> {diet}
			</p>
			<p className='text-sm text-gray-600 mt-2'>
				<strong>Egzersiz Önerisi:</strong> {exercise}
			</p>
		</motion.div>
	);
}
