function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex flex-col justify-center items-center p-6">
      <div className="bg-green-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-green-600">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
          Get in Touch
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 shadow-sm placeholder-white/70"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 shadow-sm placeholder-white/70"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-green-600 bg-green-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 h-40 shadow-sm placeholder-white/70"
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer bg-green-600 text-white py-4 px-10 rounded-full border-4 border-transparent hover:bg-green-700 hover:border-green-500 hover:text-green-100 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-xl w-full text-lg font-semibold"
          >
            Contact Us!
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
