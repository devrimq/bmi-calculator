"use client";
import { useState, useEffect } from "react";
import { calculateBMI } from "@/utils/calculateBMI";
import { getCategoryRecommendation } from "@/utils/recommendations";
import BMIForm from "@/components/BMIForm";
import BMIResult from "@/components/BMIResult";
import BMIHistory from "@/components/BMIHistory";
import BMIChart from "@/components/BMIChart";
import BMIAdvice from "@/components/BMIAdvice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
	const [bmiResult, setBmiResult] = useState<{
		bmi: number;
		category: string;
	} | null>(null);
	const [history, setHistory] = useState<
		{ bmi: number; category: string; date: string }[]
	>([]);

	// Sayfa yüklendiğinde geçmişi yükle
	useEffect(() => {
		const savedHistory = localStorage.getItem("bmiHistory");
		if (savedHistory) {
			setHistory(JSON.parse(savedHistory));
		}
	}, []);

	const handleCalculate = (weight: number, height: number) => {
		const result = calculateBMI(weight, height);
		setBmiResult(result);

		const newEntry = { ...result, date: new Date().toLocaleDateString() };
		const updatedHistory = [newEntry, ...history].slice(0, 5); // En fazla 5 kayıt tut

		setHistory(updatedHistory);
		localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
	};

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem("bmiHistory");
	};

	// DÜZELTME: recommendation değişkenini burada tanımlıyoruz.
	const recommendation = bmiResult
		? getCategoryRecommendation(bmiResult.category)
		: null;

	return (
		<div className='flex flex-col items-center min-h-screen bg-gray-100 p-6'>
			<Header />

			<BMIForm onCalculate={handleCalculate} />
			{bmiResult && (
				<BMIResult bmi={bmiResult.bmi} category={bmiResult.category} />
			)}
			<BMIChart history={history} />
			{bmiResult && recommendation && (
				<BMIAdvice
					category={bmiResult.category}
					diet={recommendation.diet}
					exercise={recommendation.exercise}
				/>
			)}
			<BMIHistory history={history} onClear={clearHistory} />
			<Footer />
		</div>
	);
}
