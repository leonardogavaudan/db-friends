import Link from 'next/link';
import clsx from 'clsx';

const Navbar = ({ className }) => (
	<div className={clsx(className, 'flex justify-start gap-x-5')}>
		<Link href="/">
			<button className="text-l">HOME</button>
		</Link>

		<Link href="/new-contact">
			<button className="align-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</button>
		</Link>

		<div className="ml-auto flex gap-x-5">
			<Link href="/login">
				<button className="text-l">REGISTER</button>
			</Link>
			<Link href="/login">
				<button className="text-l">LOGIN</button>
			</Link>
		</div>
	</div>
);

export default Navbar;
