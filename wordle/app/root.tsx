import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import InterFontStyles from "@fontsource/inter/700.css";
import Roboto400 from "@fontsource/roboto/400.css";
import Roboto700 from "@fontsource/roboto/700.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cssBundleHref as string },
  { rel: "stylesheet", href: InterFontStyles },
  { rel: "stylesheet", href: Roboto400 },
  { rel: "stylesheet", href: Roboto700 },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
