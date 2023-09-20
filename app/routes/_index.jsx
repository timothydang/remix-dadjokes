import { Link } from "@remix-run/react";
import { css } from "styled-system/css";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexRoute() {
  return (
    <div
      className={css({
        minH: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: "6",
          pb: "6",
        })}
      >
        <h1
          className={css({
            margin: 0,
            textShadow: "0 3px 0 rgba(0, 0, 0, 0.75)",
            textAlign: "center",
            fontSize: "6xl",
            lineHeight: "0.5",
            fontWeight: "bold",
          })}
        >
          Remix{" "}
          <span
            className={css({
              display: "block",
              fontSize: { base: "4.5rem", md: "6rem", lg: "8rem" },
              lineHeight: "1",
              textTransform: "uppercase",
              textShadow:
                "0 0.2em 0.5em rgba(0, 0, 0, 0.5), 0 5px 0 rgba(0, 0, 0, 0.75)",
            })}
          >
            Jokes!
          </span>
        </h1>
        <nav>
          <ul
            className={css({
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: { base: "1rem", md: "1.5rem" },
              fontFamily: "var(--font-display)",
              fontSize: { base: "1.125rem", md: "1.25rem" },
              lineHeight: 1,
            })}
          >
            <li>
              <Link to="jokes" className={css({ textStyle: "wavyLinks" })}>
                Read Jokes
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                to="/jokes.rss"
                className={css({ textStyle: "wavyLinks" })}
              >
                RSS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
