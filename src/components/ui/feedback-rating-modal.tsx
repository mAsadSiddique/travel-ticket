"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  AppModal,
  AppModalAction,
  AppModalCancel,
} from "@/components/ui/app-modal";

const RATINGS = [
  { value: "1", label: "Angry", icon: "😡" },
  { value: "2", label: "Sad", icon: "🙁" },
  { value: "3", label: "Neutral", icon: "🙂" },
  { value: "4", label: "Happy", icon: "😁" },
  { value: "5", label: "Laughing", icon: "🤩" },
] as const;

const MAX_MESSAGE_LENGTH = 500;

type FeedbackRatingModalProps = {
  trigger?: React.ReactElement;
  onSubmit?: (payload: {
    rating: string;
    message: string;
    consent: boolean;
  }) => void;
};

export function FeedbackRatingModal({
  trigger = <Button variant="outline">Give feedback</Button>,
  onSubmit,
}: FeedbackRatingModalProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState("5");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const remaining = MAX_MESSAGE_LENGTH - message.length;

  const resetForm = () => {
    setRating("5");
    setMessage("");
    setConsent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.({ rating, message, consent });
    setOpen(false);
    resetForm();
  };

  return (
    <AppModal
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      title="Help us improve Skyward for you"
      size="md"
      footer={
        <>
          <AppModalCancel />
          <AppModalAction form="feedback-rating-form">Submit</AppModalAction>
        </>
      }
    >
      <form
        id="feedback-rating-form"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <fieldset className="space-y-4">
          <legend className="text-sm leading-none font-medium text-ink">
            How would you describe your experience booking with Skyward today?
          </legend>
          <RadioGroup
            className="flex gap-1.5"
            value={rating}
            onValueChange={setRating}
          >
            {RATINGS.map((item) => (
              <label
                key={`${id}-${item.value}`}
                title={item.label}
                className="relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border border-line text-center text-xl transition-[color,box-shadow,border-color] outline-none has-focus-visible:border-kingfisher has-focus-visible:ring-2 has-focus-visible:ring-kingfisher/30 has-data-checked:border-kingfisher has-data-checked:bg-kingfisher/10 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
              >
                <RadioGroupItem
                  id={`${id}-${item.value}`}
                  value={item.value}
                  className="sr-only absolute after:absolute after:inset-0"
                />
                <span aria-hidden>{item.icon}</span>
              </label>
            ))}
          </RadioGroup>
        </fieldset>

        <div className="grid gap-3">
          <Textarea
            id={`${id}-message`}
            name="message"
            placeholder="Type your message here."
            value={message}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <p className="text-sm text-ink/50">
            {remaining}/{MAX_MESSAGE_LENGTH} characters left
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id={`${id}-terms`}
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
          />
          <Label htmlFor={`${id}-terms`} className="font-normal text-ink/70">
            I consent to Skyward contacting me based on my feedback
          </Label>
        </div>
      </form>
    </AppModal>
  );
}

export default FeedbackRatingModal;
