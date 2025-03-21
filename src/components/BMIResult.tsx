"use client";
import { motion } from "framer-motion";

interface Props {
	bmi: number;
	category: string;
}

export default function BMIResult({ bmi, category }: Props) {
	return (
		<motion.div
			className='mt-4 p-4 bg-gray-200 rounded-lg text-center'
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<p className='text-lg font-semibold'>BMI: {bmi}</p>
			<p className='text-md text-gray-600'>{category}</p>
		</motion.div>
	);
}
