"use client";

import { type FormEvent, useState } from "react";
import { LoadingButton } from "@/components/loading-button";

const fieldClass =
  "w-full bg-transparent border-0 border-b hairline border-b-rule/80 focus:border-b-accent focus:outline-none px-0 py-3 text-[1rem] text-ink placeholder:text-ink-muted/70 transition-colors";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="name" label="Full name" type="text" required disabled={isSubmitting} />
        <Field id="email" label="Email address" type="email" required disabled={isSubmitting} />
        <Field id="organisation" label="Organisation" type="text" disabled={isSubmitting} />
        <Field id="phone" label="Phone number" type="tel" disabled={isSubmitting} />
      </div>

      <Field id="subject" label="Subject" type="text" required disabled={isSubmitting} />

      <div>
        <label htmlFor="message" className="block eyebrow mb-3">
          Message <span aria-hidden className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={isSubmitting}
          placeholder="Tell us a little about what you're navigating."
          className={`${fieldClass} resize-none disabled:opacity-60`}
        />
      </div>

      {status === "success" && (
        <p
          role="status"
          className="text-[0.95rem] leading-relaxed text-accent"
        >
          Thank you — your message has been sent. We will respond within one
          working day.
        </p>
      )}

      {status === "error" && errorMessage && (
        <p role="alert" className="text-[0.95rem] leading-relaxed text-red-700">
          {errorMessage}
        </p>
      )}

      <LoadingButton
        type="submit"
        loading={isSubmitting}
        loadingLabel="Sending…"
        className="bg-ink text-bg rounded-full px-7 py-3.5 text-[0.92rem] font-medium hover:bg-accent transition-colors duration-300"
      >
        Submit enquiry
        <span aria-hidden>→</span>
      </LoadingButton>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  disabled?: boolean;
};

function Field({ id, label, type, required, disabled }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block eyebrow mb-3">
        {label} {required && <span aria-hidden className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        disabled={disabled}
        className={`${fieldClass} disabled:opacity-60`}
      />
    </div>
  );
}
