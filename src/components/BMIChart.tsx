"use client";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

interface Props {
	history: { bmi: number; category: string; date: string }[];
}

export default function BMIChart({ history }: Props) {
	if (history.length === 0) return null; // Eğer geçmiş yoksa grafik gösterme

	return (
		<div className='mt-6 w-80 bg-white p-4 rounded-lg shadow-lg'>
			<h2 className='text-lg font-bold text-gray-700 mb-2'>
				BMI Değişim Grafiği
			</h2>
			<ResponsiveContainer width='100%' height={200}>
				<LineChart data={history}>
					<XAxis dataKey='date' />
					<YAxis domain={["auto", "auto"]} />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='bmi'
						stroke='#3b82f6'
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
