import type { Metadata } from 'next';
import { Averia_Serif_Libre } from 'next/font/google';
import './globals.css';
import Footer from '@/components/server/footer';

export const metadata: Metadata = {
	title: 'theHandMadeSmiles',
	description: 'Hand Crafting Emotions'
};

const appFont = Averia_Serif_Libre({
	weight: ['300', '400', '700'],
	subsets: ['latin']
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='apple-mobile-web-app-title' content='Smiles' />
			</head>
			<body className={`${appFont.className} bg-repeat-y antialiased w-screen h-screen`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
