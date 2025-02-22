import Link from "next/link";
import { Mail, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-b from-[#7a0bc0] via-[#8d23cf] to-[#c47ef0] overflow-hidden"
    >
      {/* Wave Divider */}
      <div className="custom-shape-divider-top-1739707578">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto space-y-4 text-center">
          <h1 className="text-white text-3xl font-bold sm:text-4xl">
            Contact Us
          </h1>
          <p className="text-white text-xl font-semibold">
            Get in touch
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-2xl mb-4">
                Location
              </h3>
              <p className="text-white">
                Glen Erasmia Boulevard, Glen Marais
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-4">
                Hours
              </h3>
              <p className="text-white">
                Monday - Saturday: 8am - 5pm
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-4">
                Book an Appointment
              </h3>
              <p className="text-white mb-4">
                To book an appointment, please contact us via WhatsApp:
              </p>
              <a
                href="https://wa.me/27825694021"
                className="text-white hover:text-purple-800 transition-colors text-lg font-medium"
              >
                (+27) 82 569 4021
              </a>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-6">
                <Link
                  href="mailto:mullert.teresa@gmail.com"
                  className="text-white hover:text-purple-800 transition-colors"
                >
                  <Mail size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100057667052342"
                  target="_blank"
                  className="text-white hover:text-purple-800 transition-colors"
                >
                  <Facebook size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
