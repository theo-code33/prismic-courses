import { createClient } from "@/prismicio";

const ContactPage = async () => {
  const client = createClient();
  const contact = await client.getSingle("contact");
  console.log(contact);

  return <></>;
};

export default ContactPage;
