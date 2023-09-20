import { useIsSubmitting } from "remix-validated-form";
import { Button } from "~/components/ui/button";

const SubmitButton = ({
  submitText = "Submit",
  progressingText = "Submitting...",
}) => {
  const isSubmitting = useIsSubmitting();

  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? progressingText : submitText}
    </Button>
  );
};

export default SubmitButton;
