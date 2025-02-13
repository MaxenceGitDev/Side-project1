import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//import des pages
import App from "./App.tsx";
import Home from "./assets/pages/Home.tsx";
import Collections from "./assets/pages/Collections.tsx";
// creation des routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/collections",
				element: <Collections />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Erreur");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
