
import { Card } from "@/components/ui/card";

const services = [
  {
    category: "Manicure Services",
    items: [
      {
        title: "Classic Manicure",
        price: "$30",
        description: "Nail shaping, cuticle care, hand massage, and polish",
        duration: "30 mins"
      },
      {
        title: "Signature Manicure",
        price: "$45",
        description: "Classic manicure plus extended massage, premium oils, and paraffin treatment",
        duration: "45 mins"
      },
      {
        title: "Gel Manicure",
        price: "$55",
        description: "Long-lasting gel polish with classic manicure care",
        duration: "45 mins"
      }
    ]
  },
  {
    category: "Pedicure Services",
    items: [
      {
        title: "Classic Pedicure",
        price: "$45",
        description: "Foot soak, nail care, callus removal, and polish",
        duration: "45 mins"
      },
      {
        title: "Deluxe Pedicure",
        price: "$65",
        description: "Classic pedicure plus luxury foot mask, extended massage, and hot stone therapy",
        duration: "60 mins"
      },
      {
        title: "Spa Pedicure",
        price: "$85",
        description: "Premium experience with aromatherapy, paraffin treatment, and deluxe massage",
        duration: "75 mins"
      }
    ]
  },
  {
    category: "Enhancement Services",
    items: [
      {
        title: "Gel Extensions",
        price: "from $75",
        description: "Custom-designed gel extensions for natural-looking length",
        duration: "90 mins"
      },
      {
        title: "Nail Art",
        price: "from $15",
        description: "Hand-painted designs, crystals, or chrome finish per nail",
        duration: "15+ mins"
      },
      {
        title: "Dipping Powder",
        price: "$65",
        description: "Long-lasting, odor-free alternative to traditional acrylics",
        duration: "60 mins"
      }
    ]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Our Services
          </span>
          <h2 className="font-display text-4xl font-semibold mt-2">
            Service Menu
          </h2>
        </div>
        <div className="space-y-16">
          {services.map((category, index) => (
            <div key={category.category} 
                 className="animate-fade-up"
                 style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service) => (
                  <Card 
                    key={service.title} 
                    className="service-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <h4 className="font-display text-xl font-semibold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-accent text-lg font-medium mb-4">
                      {service.price}
                    </p>
                    <p className="text-text-light mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-text-light">
                      Duration: {service.duration}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
