import SidebarOption from "./SidebarOption";
import { Accordion } from "@mui/material/Icon";
const Sidebar = ({ links }) => {
    const Links = links.map((e) => (
        <SidebarOption text={e.title} link={e.link} icon={e.icon} />
    ));
    return <div className="sidebar">{Links}</div>;
};

Sidebar.defaultProps = {
    links: [
        { link: "/about", title: "Home", icon: null },
        { link: "/about", title: "about", icon: null },
        { link: "/about", title: "Home", icon: null },
        { link: "/about", title: "Home", icon: null },
        { link: "/about", title: "kil", icon: null },
        { link: "/about", title: "profile", icon: null },
    ],
};
export default Sidebar;
