"use client";
import { useState } from "react";

interface Props {
	onCalculate: (weight: number, height: number) => void;
}

export default function BMIForm({ onCalculate }: Props) {
	const [weight, setWeight] = useState<number | "">("");
	const [height, setHeight] = useState<number | "">("");

	const handleSubmit = () => {
		if (weight && height) {
			onCalculate(Number(weight), Number(height));
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-80'>
			<label className='block text-sm font-medium text-gray-700'>
				Boyunuzu Giriniz (cm)
			</label>
			<input
				type='number'
				value={height}
				onChange={(e) =>
					setHeight(e.target.value ? parseInt(e.target.value) : "")
				}
				className='mt-1 w-full p-2 border rounded-lg'
				placeholder='Örn: 160'
			/>

			<label className='block text-sm font-medium text-gray-700 mt-4'>
				Kilonuzu Giriniz (kg)
			</label>
			<input
				type='number'
				value={weight}
				onChange={(e) =>
					setWeight(e.target.value ? parseInt(e.target.value) : "")
				}
				className='mt-1 w-full p-2 border rounded-lg'
				placeholder='Örn: 65'
			/>

			<button
				onClick={handleSubmit}
				className='mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition'>
				Hesapla
			</button>
		</div>
	);
}
