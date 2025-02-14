
import { Mail, Facebook, Instagram } from "lucide-react";

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
                Monday - Saturday: 9am - 7pm<br />
                Sunday: 10am - 5pm
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Book an Appointment</h3>
              <p className="text-text-light mb-4">
                To book an appointment, please contact us via WhatsApp:
              </p>
              <a 
                href="https://wa.me/14155555555" 
                className="text-accent hover:text-accent-light transition-colors text-lg font-medium"
              >
                (+27) 82 569 4021
              </a>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="mailto:hello@polished.com" className="text-text-light hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://facebook.com/polished" className="text-text-light hover:text-accent transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com/polished" className="text-text-light hover:text-accent transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="h-[400px] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1454756524756"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
