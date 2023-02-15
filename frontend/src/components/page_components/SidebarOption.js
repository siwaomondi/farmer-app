import Link from "next/link";

const SidebarOption = ({ text, Icon, link }) => {
    const str = text;
    const title = str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <div className="sidebar-option">
            <Link href={link}>
                <span>{Icon}</span>
                <h2>{title}</h2>
            </Link>
        </div>
    );
};
SidebarOption.defaultProps = {
    Icon: null,
    text: "home",
    link: "/",
};
export default SidebarOption;
