import { json } from "@remix-run/node";

/**
 * This helper function helps us to return the accurate HTTP status,
 * 400 Bad Request, to the client.
 */
export const badRequest = (data) => {
  return json(data, { status: 400 });
};
