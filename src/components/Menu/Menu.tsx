import { createClient } from "@/prismicio";
import styles from "./Menu.module.css";
import { PrismicNextLink } from "@prismicio/next";

const Menu = async () => {
  const client = createClient();
  const menu = await client.getSingle("menu");

  return (
    <nav className={styles.menu}>
      <ul>
        {menu.data.menuitems.map((item, index) => (
          <li key={index}>
            <PrismicNextLink field={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
