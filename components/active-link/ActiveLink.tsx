'use client';

import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  text: string;
  prefetch: undefined | boolean;
}

export const ActiveLink = ({ path, text, prefetch }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.link} ${pathName == path && style['active-link']}`}
      href={path}
      prefetch={prefetch}
    >
      {text}
    </Link>
  );
};
