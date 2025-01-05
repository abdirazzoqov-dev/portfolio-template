const Footer = () => {
    return (
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          {/* Header */}
          <h2 className="text-4xl font-semibold mb-2">Let's Talk.</h2>
          <p className="text-gray-600 mb-6">
            Have a project or question? Send me a message.
          </p>
  
          {/* Email */}
          <a
            href="mailto:hey@kaira.com"
            className="text-lg font-semibold text-gray-800 border-b border-b-[3px] border-[#A6F3E7] hover:text-cyan-600 transition"
          >
            dilshod.abdirazzokov@gmail.com
          </a>
  
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Dribbble"
            >
              {/* Replace with your actual icon */}
              <i className="fab fa-dribbble text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
  
          {/* Footer Text */}
          <p className="text-sm text-gray-500 mt-6">
            © 2025 All rights reserved. <br />
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  