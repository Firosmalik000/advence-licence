'use client';
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TbBrandGmail } from "react-icons/tb";
// import emailjs from '@emailjs/browser';

const ContactPage = () => {
	// const form = useRef<HTMLFormElement>(null);
	// const [name, setName] = useState({
	//   firstName: '',
	//   lastName: '',
	//   email: '',
	// });
	// const sendEmail = (e: React.FormEvent) => {
	//   e.preventDefault();
	//   if (!form.current) return;

	//   emailjs
	//     .sendForm(
	//       'service_7li8mtf', // ganti
	//       'template_b0miw6q', // ganti
	//       form.current,
	//       'FWjZlyW--ybgR5SBH' // ganti
	//     )
	//     .then(
	//       (result) => {
	//         console.log('SUCCESS!', result.text);
	//         alert('Pesan berhasil dikirim!');
	//         form.current?.reset();
	//       },
	//       (error) => {
	//         console.log('FAILED...', error.text);
	//         alert('Terjadi kesalahan. Silakan coba lagi.');
	//       }
	//     );
	// };

	return (
		<div className="min-h-screen flex items-center justify-center px-4 py-16 mt-12 bg-gray-50">
			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* Left Text Content */}
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
					<p className="text-lg text-gray-600 leading-relaxed">
						Whether you're looking to expand your current business through licensing or have a million-dollar idea you’re ready to take nationwide, now is the time to act.
						<br />
						<br />
						Fill out the form to receive in-depth information and claim your free consultation. Let’s find out together if licensing is the game-changing move your business needs.
					</p>
				</div>

				{/* Right Form (Currently Commented) */}
				<div className=" flex items-center justify-center p-8 rounded-xl  w-full">
					{/* <form ref={form} onSubmit={sendEmail} className="space-y-4"> ... </form> */}

					<a href="mailto:team@advancedlicensing.com" className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-xl no-underline">
						<TbBrandGmail size={24} />
						<span>Contact Us via Gmail</span>
					</a>

					{/* Optional button if needed */}
					{/* <button></button> */}
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
