import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { path: '/about', text: 'About', prefetch: undefined },
  { path: '/contact', text: 'Contact', prefetch: undefined },
  { path: '/pricing', text: 'Pricing', prefetch: false },
];

export const Navbar = () => {
  console.log('Navbar creado');
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded-xl">
      <Link className="flex items-center" href="/">
        <HomeIcon size={16} className="mr-1" />
        Home
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
