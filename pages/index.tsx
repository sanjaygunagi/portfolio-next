import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact, ContactProps } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import axios from "axios";

export default function Home({ data }: ContactProps) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contact data={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios(
    "https://main--fascinating-bonbon-6a9cdc.netlify.app/api/contact"
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
}