import { useIsSubmitting } from "remix-validated-form";

const SubmitButton = ({
  submitText = "Submit",
  progressingText = "Submitting...",
}) => {
  const isSubmitting = useIsSubmitting();

  return (
    <button type="submit" disabled={isSubmitting} className="button">
      {isSubmitting ? progressingText : submitText}
    </button>
  );
};

export default SubmitButton;
