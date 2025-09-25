<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="pt-BR" class="h-100">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>PetShop Admin</title>

		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
		/>

		<link
			rel="stylesheet"
			href="${pageContext.request.contextPath}/assets/css/style.css"
		/>
	</head>
	<body class="d-flex flex-column h-100">
		<!-- LiveReload client: will auto-refresh browser when files change during dev -->
		<script>
			(function () {
				// Only attempt to load livereload client in development on localhost
				try {
					var host = window.location.hostname || 'localhost';
					if (host === 'localhost' || host === '127.0.0.1') {
						var script = document.createElement('script');
						script.src = 'http://' + host + ':35729/livereload.js?snipver=1';
						script.async = true;
						document.head.appendChild(script);
					}
				} catch (e) {
					/* silent */
				}
			})();
		</script>

		<header>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<a
						class="navbar-brand"
						href="${pageContext.request.contextPath}/index.jsp"
						>🐾 PetShop Admin</a
					>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#"
									>Dashboard</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Vendas</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Cadastros
								</a>
								<ul
									class="dropdown-menu dropdown-menu-dark"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li><a class="dropdown-item" href="#">Clientes</a></li>
									<li><a class="dropdown-item" href="#">Pets</a></li>
									<li><a class="dropdown-item" href="#">Produtos</a></li>
									<li><a class="dropdown-item" href="#">Serviços</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Agenda</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Relatórios</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>

		<main class="flex-shrink-0">
			<div class="container mt-4"></div>
		</main>
	</body>
</html>
