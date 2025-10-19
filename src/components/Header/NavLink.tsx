import Link from 'next/link';

type NavLinkProps = {
  name: string;
  link: string;
};

function NavLink({ name, link }: NavLinkProps) {
  return (
    <Link
      href={`#${link}`}
      className="text-gray-700 hover:text-gray-900 transition-colors"
      prefetch={true}
    >
      {name}
    </Link>
  );
}

export default NavLink;
