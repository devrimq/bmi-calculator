"use client";

interface Props {
	history: { bmi: number; category: string; date: string }[];
	onClear: () => void;
}

export default function BMIHistory({ history, onClear }: Props) {
	if (history.length === 0) return null;

	return (
		<div className='mt-6 w-80 bg-white p-4 rounded-lg shadow-lg'>
			<h2 className='text-lg font-bold text-gray-700 mb-2'>Geçmiş Kayıtlar</h2>
			<ul>
				{history.map((entry, index) => (
					<li key={index} className='text-sm text-gray-600 border-b py-1'>
						{entry.date}: <strong>{entry.bmi}</strong> ({entry.category})
					</li>
				))}
			</ul>
			<button
				onClick={onClear}
				className='mt-3 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition'>
				Geçmişi Temizle
			</button>
		</div>
	);
}
