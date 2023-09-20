import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import {
  ValidatedForm,
  validationError,
  useIsValid,
  useFormContext,
} from "remix-validated-form";

import stylesUrl from "~/styles/login.css";
import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { createUserSession, login, register } from "~/utils/session.server";

import FormInput from "~/components/formInput";
import SubmitButton from "~/components/submitButton";

export const links = () => [{ rel: "stylesheet", href: stylesUrl }];

const formSchema = z.object({
  username: z
    .string({ message: "Form not submitted correctly." })
    .nonempty({ message: "Can't be empty" })
    .min(3, { message: "Usernames must be at least 3 characters long" }),
  password: z
    .string({ message: "Form not submitted correctly." })
    .nonempty({ message: "Can't be empty" })
    .min(6, { message: "Passwords must be at least 6 characters long" }),
  loginType: z
    .string({ message: "Form not submitted correctly." })
    .nonempty({ message: "Can't be empty" }),
});

function validateUrl(url) {
  const urls = ["/jokes", "/"];
  if (urls.includes(url)) {
    return url;
  }
  return "/jokes";
}

const validator = withZod(formSchema);

export const meta = () => {
  const description = "Login to submit your own jokes to Remix Jokes!";

  return [
    { name: "description", content: description },
    { name: "twitter:description", content: description },
    { title: "Remix Jokes | Login" },
  ];
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const redirectTo = validateUrl(form.get("redirectTo") || "/jokes");

  const formData = await validator.validate(form);
  const { loginType, username, password } = formData.data;

  if (formData.error !== undefined) {
    return validationError(formData.error);
  }

  switch (loginType) {
    case "login": {
      const user = await login({ username, password });

      if (!user) {
        return validationError({
          fieldErrors: {
            password: "Username/Password combination is incorrect",
          },
        });
      }
      return createUserSession(user.id, redirectTo);
    }

    case "register": {
      const userExists = await db.user.findFirst({
        where: { username },
      });
      if (userExists) {
        return validationError({
          fieldErrors: {
            username: `User with username ${username} already exists`,
          },
        });
      }

      const user = await register({ username, password });

      if (!user) {
        return validationError({
          fieldErrors: {
            formError: "Something went wrong trying to create a new user.",
          },
        });
      }
      return createUserSession(user.id, redirectTo);
    }

    default: {
      return validationError({
        fieldErrors: {
          formError: "Login type invalid",
        },
      });
    }
  }
};

export default function Login() {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  const { fieldErrors } = useFormContext("loginForm");

  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <ValidatedForm validator={validator} method="post" id="loginForm">
          <FormInput
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />
          <fieldset>
            <legend className="sr-only">Login or Register?</legend>
            <FormInput
              type="radio"
              name="loginType"
              value="login"
              label="Login"
              defaultChecked={
                !actionData?.fields?.loginType ||
                actionData?.fields?.loginType === "login"
              }
            />
            <FormInput
              type="radio"
              name="loginType"
              value="register"
              label="Register"
              defaultChecked={actionData?.fields?.loginType === "register"}
            />
          </fieldset>
          <FormInput
            type="text"
            id="username-input"
            name="username"
            label="Username"
            defaultValue={actionData?.fields?.username}
          />
          <FormInput
            type="password"
            id="password-input"
            name="password"
            label="Password"
            defaultValue={actionData?.fields?.username}
          />
          <SubmitButton />

          {fieldErrors.formError && (
            <p className="form-validation-error" role="alert">
              {fieldErrors.formError}
            </p>
          )}
        </ValidatedForm>
      </div>

      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
