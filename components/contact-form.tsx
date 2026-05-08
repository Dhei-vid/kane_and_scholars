import { site } from "@/lib/site-data";

const fieldClass =
  "w-full bg-transparent border-0 border-b hairline border-b-rule/80 focus:border-b-accent focus:outline-none px-0 py-3 text-[1rem] text-ink placeholder:text-ink-muted/70 transition-colors";

export function ContactForm() {
  return (
    <form
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className="space-y-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="name" label="Full name" type="text" required />
        <Field id="email" label="Email address" type="email" required />
        <Field id="organisation" label="Organisation" type="text" />
        <Field id="phone" label="Phone number" type="tel" />
      </div>

      <Field id="subject" label="Subject" type="text" required />

      <div>
        <label
          htmlFor="message"
          className="block eyebrow mb-3"
        >
          Message <span aria-hidden className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us a little about what you're navigating."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-ink text-bg rounded-full px-7 py-3.5 text-[0.92rem] font-medium hover:bg-accent transition-colors duration-300"
      >
        Submit enquiry
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  required?: boolean;
};

function Field({ id, label, type, required }: FieldProps) {
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
        className={fieldClass}
      />
    </div>
  );
}
