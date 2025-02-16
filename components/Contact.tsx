import Link from "next/link";
import { Mail, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 overflow-hidden"
    >
      {/* Decorative background layer */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-white mix-blend-overlay" />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto space-y-4 text-center">
          <h1 className="text-purple-700 text-3xl font-bold sm:text-4xl">
            Contact Us
          </h1>
          <p className="text-gray-700 text-xl font-semibold">
            Get in touch
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl mb-4 text-gray-800">
                Location
              </h3>
              <p className="text-gray-600">
                Glen Erasmia Boulevard, Glen Marais
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-gray-800">
                Hours
              </h3>
              <p className="text-gray-600">
                Monday - Saturday: 8am - 5pm
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-gray-800">
                Book an Appointment
              </h3>
              <p className="text-gray-600 mb-4">
                To book an appointment, please contact us via WhatsApp:
              </p>
              <a
                href="https://wa.me/2725694021"
                className="text-purple-600 hover:text-purple-800 transition-colors text-lg font-medium"
              >
                (+27) 82 569 4021
              </a>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-gray-800">
                Connect With Us
              </h3>
              <div className="flex space-x-6">
                <Link
                  href="mailto:mullert.teresa@gmail.com"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Mail size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100057667052342"
                  target="_blank"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
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
