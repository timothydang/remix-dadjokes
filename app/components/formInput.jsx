import { useField } from "remix-validated-form";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { css } from "styled-system/css";

const FormInput = ({ name, label, ...rest }) => {
  const { error, getInputProps } = useField(name);
  const errorProps = error
    ? {
        "data-invalid": true,
        "aria-invalid": true,
        "aria-errormessage": `${name}-error`,
      }
    : {};

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...getInputProps()}
        {...errorProps}
        {...rest}
        className={css({
          _invalid: {
            borderColor: "rose.500",
          },
        })}
      />

      {error && (
        <p
          className={css({
            mt: "1",
            color: "rose.500",
          })}
          id={`${name}-error`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
