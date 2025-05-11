const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t-2 border-t-slate-500 text-white py-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-purple-500 font-orbitron">
          AI ImageGen
        </h1>

        {/* Right Note */}
        <div className="font-bold flex items-center space-x-2 text-lg text-gray-300 tracking-wide font-poppins">
          <span>
            Made with <span className="animate-pulse text-red-500">❣️</span> by
          </span>
          <a
            href="https://www.linkedin.com/in/rushidonga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition"
          >
            Rushi Donga
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
