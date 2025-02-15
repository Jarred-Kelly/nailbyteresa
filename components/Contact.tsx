import Link from "next/link";
import { Mail, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Visit Us
          </span>
          <h2 className="font-display text-4xl font-semibold mt-2">
            Get in Touch
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl mb-4">Location</h3>
              <p className="text-text-light">
                1 Claret Place<br />
                Glen Erasmia Boulevard, Glen Marais
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Hours</h3>
              <p className="text-text-light">
                Monday - Saturday: 8am - 5pm<br />
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Book an Appointment</h3>
              <p className="text-text-light mb-4">
                To book an appointment, please contact us via WhatsApp:
              </p>
              <a 
                href="https://wa.me/2725694021" 
                className="text-accent hover:text-accent-light transition-colors text-lg font-medium"
              >
                (+27) 82 569 4021
              </a>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <Link href="mailto:mullert.teresa@gmail.com" className="text-text-light hover:text-accent transition-colors">
                  <Mail size={24} />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100057667052342" target="_blank" className="text-text-light hover:text-accent transition-colors">
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
