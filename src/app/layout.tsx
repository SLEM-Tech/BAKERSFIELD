import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@styles/globals.css";
import "react-modern-drawer/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-slideshow-image/dist/styles.css";
import { Poppins } from "next/font/google";
import AppProvider from "@src/components/config/AppProvider";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	style: ["normal"], // Include "italic" if you need it
});

const { description, title } = SEODATA.default;
export const metadata: Metadata = {
	title: {
		absolute: "Bakersfield Elementary Services Limited",
		default: "Bakersfield Elementary Services Limited",
		template: "",
	},
	description: description,
	icons: {
		icon: "/favicon.png", // or "/favicon.ico"
	},
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} bg-white w-full min-h-screen`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
