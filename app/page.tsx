import Banner from "@/components/Banner";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Service from "@/components/Service";

const services = [
  {
    title: "Computer Networking",
    description:
      "We are a leading service provider engaged in offering complete networking solutins for our clients",
    imageUrl:
      "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Data Recovery",
    description:
      "We are the best in offering computer hard disk data recovery services, catered to ypur needs.",
    imageUrl:
      "https://images.pexels.com/photos/33278/disc-reader-reading-arm-hard-drive.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Broadband Internet Service",
    description:
      "We are one of the recognised and most popular broadband internet servie provider of BSNL in the field.",
    imageUrl:
      "https://images.pexels.com/photos/2420212/pexels-photo-2420212.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Computer Repair",
    description:
      "We provide the best computer repair and other services to kepp your system up and running.",
    imageUrl:
      "https://images.pexels.com/photos/6755091/pexels-photo-6755091.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Electrical Goods Repair",
    description:
      "We provide electrical goods repairing services for all brands and its machines.",
    imageUrl:
      "https://images.pexels.com/photos/5691589/pexels-photo-5691589.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Internet Service Provider",
    description:
      "We are one of the recognised and most popular broadband internet servie provider of Railwire in the field.",
    imageUrl:
      "https://images.pexels.com/photos/2420212/pexels-photo-2420212.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Laptop Repair",
    description:
      "Here, you can get laptop repair and services done at your desired location at extremely low costs.",
    imageUrl:
      "https://images.pexels.com/photos/7639370/pexels-photo-7639370.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Wireless Internet",
    description:
      "Or clients can avail from us a wide range of plans to choose from best quality wireless internet services.",
    imageUrl:
      "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <Service
            key={i}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full h-full">
      <Banner />
      <Container>
        <ServicesList />
        <ContactDetails />
        <ContactForm />
      </Container>
    </div>
  );
}
