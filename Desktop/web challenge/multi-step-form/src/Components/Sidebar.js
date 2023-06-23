import React from "react";
import useMobile from "../Hooks/useMobile";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const mobile = useMobile("(max-width: 940px)");

  return (
    <section
      className={mobile ? `${styles.section} ${styles.mobile}` : styles.section}
    >
      <SidebarItem index={1} stepInfo="Your info" />
      <SidebarItem index={2} stepInfo="Select plan" />
      <SidebarItem index={3} stepInfo="Add-ons" />
      <SidebarItem index={4} stepInfo="Summary" />
      <SidebarItem index={5} stepInfo="Finished!" />
    </section>
  );
};

export default Sidebar;
