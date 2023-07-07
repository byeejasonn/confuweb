export function Header() {
	return (
		<header className="header py-3 flex justify-between items-center">
			<div className="flex items-center">
				<img className="mr-2" src="/favicon.png" alt="logo" />
				<h2 className="text-xl">Confugiradores</h2>
			</div>

			<nav>
				<ul>
					<li>
						<a href="/home">Inicio</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
