/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"images.unsplash.com",
			"res.cloudinary.com",
			"files.stripe.com",
			"uploadthing.com",
			"utfs.com",
			"img.clerk.com",
			"subdomain",
		],
	},
};

export default nextConfig;
