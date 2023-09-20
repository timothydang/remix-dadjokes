import { useField } from "remix-validated-form";

const FormInput = ({ name, label, ...rest }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <label htmlFor={name}>
        {label}{" "}
        <input
          {...getInputProps()}
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

export default FormInput;
