const links = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
];

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const baseStyles = mobile ? 'flex flex-col space-y-2' : 'flex space-x-8';

  return (
    <div className={baseStyles}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-600 uppercase hover:text-blue-500 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
