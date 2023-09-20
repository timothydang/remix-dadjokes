import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import stylesUrl from "~/styles/jokes.css";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import { css } from "styled-system/css";
import { Button } from "~/components/ui/button";

export const links = () => [{ rel: "stylesheet", href: stylesUrl }];

export const loader = async ({ request }) => {
  const jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
    take: 5,
  });
  const user = await getUser(request);

  return json({ jokeListItems, user });
};

export default function JokesRoute() {
  const data = useLoaderData();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        minHeight: "inherit",
      })}
    >
      <header
        className={css({
          pt: "4",
          pb: "4",
          borderBottom: "1px solid",
          borderBottomColor: "var(--color-border)",
        })}
      >
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main
        className={css({
          pt: "2",
          pb: "2",
          flex: "1 1 100%",
        })}
      >
        <div
          className={css({
            display: "flex",
            gap: "1rem",
          })}
        >
          <div
            className={css({
              maxW: "48",
            })}
          >
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokeListItems.map(({ id, name }) => (
                <li key={id}>
                  <Link prefetch="intent" to={id}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="new">
              <Button>Add your own</Button>
            </Link>
          </div>
          <div className={css({ flex: 1 })}>
            <Outlet />
          </div>
        </div>
      </main>
      <footer
        className={css({
          pt: "8",
          pb: "4",
          borderTopColor: "var(--color-border)",
        })}
      >
        <div className="container">
          <Link reloadDocument to="/jokes.rss">
            RSS
          </Link>
        </div>
      </footer>
    </div>
  );
}
