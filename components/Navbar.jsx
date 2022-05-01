import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = ({ className }) => (
	<div className={clsx(className, 'flex gap-x-5')}>
		<Link href="/">
			<button>HOME</button>
		</Link>

		<Link href="/login">
			<button>LOGIN</button>
		</Link>

		<Link href="/about">
			<button>ABOUT</button>
		</Link>

		<Link href="/new-contact">
			<button>+</button>
		</Link>
	</div>
);

export default Navbar;
