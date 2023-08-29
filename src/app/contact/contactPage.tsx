"use client";
import Image from "next/image";
import ContactForm from "./contactForm";
import { motion } from "framer-motion";
import useMediaQuery from "@/hook/matches";
import { bounce, textVariant } from "@/utils/motion";
type contactProps = {
  title: string;
  paragraph: string;
  image: string;
  alt: string;
};

const ListContact = ({
  image,
  alt,
  text,
  paragraph,
}: {
  image: string;
  alt: string;
  text: string;
  paragraph: string;
}) => (
  <div>
    <div className="flex gap-x-2 items-center">
      <div>
        <Image src={image} alt={alt} width={25} height={25} />
      </div>
      <span className="text-2xl font-semibold">{text}</span>
    </div>
    <span className="text-base font-semibold">{paragraph}</span>
  </div>
);

const ContactPage = () => {
  const contacts: contactProps[] = [
    {
      title: "Call",
      paragraph: "+62-8953-9338-4598",
      image: "/img/telp.svg",
      alt: "callIcon",
    },
    {
      title: "Email",
      paragraph: "abiayyasi12@gmail.com",
      image: "/img/email.svg",
      alt: "emailIcon",
    },
    {
      title: "Location",
      paragraph: "Citeureup, Bogor, Jawa Barat, Indonesia",
      image: "/img/location.svg",
      alt: "locationIcon",
    },
  ];

  return (
    <motion.section
      className="pb-[60px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
      >
        <h1 className="font-bold mb-[28px] sm:text-5xl text-[32px]">
          C
          {useMediaQuery() ? (
            <motion.span
              initial="hidden"
              whileInView="show"
              variants={bounce()}
              className="relative"
            >
              o
            </motion.span>
          ) : (
            <span className="relative">o</span>
          )}
          ntact
        </h1>
      </motion.div>
      <div>
        <motion.div
          className="flex flex-col gap-y-6 mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant(0.25)}
        >
          {contacts.map((item, index) => (
            <ListContact
              key={index}
              image={item.image}
              alt={item.alt}
              text={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant(0.5)}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
