import { Briefcase, Globe, Handshake, Rocket } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with talent and opportunities worldwide in the Web3 ecosystem",
  },
  {
    icon: Briefcase,
    title: "Secure Transactions",
    description: "Powered by Arbitrum for fast and secure payment processing",
  },
  {
    icon: Handshake,
    title: "Direct Collaboration",
    description: "Work directly with clients and professionals, no middlemen",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Expand your career in the rapidly growing Web3 space",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CreativeHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};