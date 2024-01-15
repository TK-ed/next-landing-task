import Link from "next/link";

export default function Links(props) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Careers",
      path: "/careers",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center w-full space-x-12 text-xl p-e2 xl:flex-row">
        {links.map((link) => (
          <Link href={link.path} key={link.title} className="hover:text-[var(--bgSoft)]">
            {link.title}
          </Link>
        ))}
        {/* <h3>Welcome {props.name ? props.name : "Stranger"}</h3> */}
      </div>
    </>
  );
}
