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

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        { rel: "stylesheet", href: InterFontStyles },
      ]
    : []),
];

console.log(links);

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
