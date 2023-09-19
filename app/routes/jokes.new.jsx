import { json, redirect } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Form,
  Link,
  useActionData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import {
  ValidatedForm,
  validationError,
  useIsSubmitting,
  useField,
  useIsValid,
} from "remix-validated-form";

import { JokeDisplay } from "~/components/joke";
import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { getUserId, requireUserId } from "~/utils/session.server";

const formSchema = z.object({
  content: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .min(10, { message: "That joke is too short" }),
  name: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .min(3, { message: "That joke's name is too short" }),
});

export const validator = withZod(formSchema);

export const loader = async ({ request }) => {
  const userId = await getUserId(request);
  if (!userId) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return json({});
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error) && error.status === 401) {
    return (
      <div className="error-container">
        <p>You must be logged in to create a joke.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}

export const FormInput = ({ name, label, ...rest }) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>
        {label}{" "}
        <input
          {...getInputProps({ id: name })}
          aria-invalid={!!error}
          aria-errormessage={error ? `${name}-error` : undefined}
          {...rest}
        />
      </label>

      {error && (
        <p className="form-validation-error" id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <button type="submit" disabled={isSubmitting} className="button">
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};

export const action = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await validator.validate(await request.formData());

  const { content, name } = formData.data;

  if (formData.error !== undefined) {
    return validationError(formData.error);
  }

  const joke = await db.joke.create({
    data: { content, name, creatorId: userId },
  });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokeRoute() {
  const navigation = useNavigation();
  const isFormValid = useIsValid("newJokeForm");

  if (navigation.formData) {
    const content = navigation.formData.get("content");
    const name = navigation.formData.get("name");

    if (isFormValid) {
      return (
        <JokeDisplay
          canDelete={false}
          isOwner={true}
          joke={{ name, content }}
        />
      );
    }
  }

  return (
    <div>
      <p>Add your own hilarious joke</p>
      <ValidatedForm validator={validator} method="post" id="newJokeForm">
        <FormInput name="name" label="Name" type="text" />
        <FormInput name="content" label="Content" type="text" />
        <SubmitButton />
      </ValidatedForm>
    </div>
  );
}
