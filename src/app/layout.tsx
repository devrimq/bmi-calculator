import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// ✅ Güncellenmiş metadata (SEO + OpenGraph + Twitter)
export const metadata: Metadata = {
	title: "BMI Hesaplayıcı",
	description:
		"Boy ve kilonuza göre vücut kitle indeksinizi hesaplayın. Grafikle ilerlemenizi takip edin ve size özel tavsiyeler alın.",
	keywords: ["bmi", "vücut kitle indeksi", "sağlık", "kilo", "diyet", "nextjs"],
	authors: [{ name: "Powered by Next.js" }],
	openGraph: {
		title: "BMI Hesaplayıcı",
		description: "Boy ve kilonuza göre vücut kitle indeksinizi hesaplayın.",
		url: "https://bmi-calculator.vercel.app",
		siteName: "BMI Calculator",
		images: [
			{
				url: "/meta-image.png", // **Meta Image** (Paylaşım için)
				width: 1200,
				height: 630,
				alt: "BMI Hesaplayıcı Önizleme Görseli",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@your_twitter_handle", // Twitter hesabın varsa ekleyebilirsin
		title: "BMI Hesaplayıcı",
		description:
			"Vücut kitle indeksinizi kolayca hesaplayın ve sağlık önerileri alın!",
		images: ["/meta-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='tr'>
			<head>
				{/* Favicon */}
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<meta name='theme-color' content='#ffffff' />

				{/* Meta Image */}
				<meta property='og:image' content='/meta-image.png' />
				<meta name='twitter:image' content='/meta-image.png' />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
