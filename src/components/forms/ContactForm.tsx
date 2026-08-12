"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { contact } from "@/content/contact";

type FieldName = "name" | "email" | "subject" | "message";

type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ["name", "email", "subject", "message"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const copy = contact.form;

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) errors.name = copy.errors.name;

  if (values.email.trim().length === 0) {
    errors.email = copy.errors.emailRequired;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = copy.errors.emailInvalid;
  }

  if (values.subject.length === 0) errors.subject = copy.errors.subject;
  if (values.message.trim().length < 20) errors.message = copy.errors.message;

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLElement | null>>>({});
  const successRef = useRef<HTMLDivElement>(null);

  const fieldId = (name: FieldName) => `${formId}-${name}`;
  const errorId = (name: FieldName) => `${formId}-${name}-error`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((name) => nextErrors[name]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    // Nothing is sent anywhere: this template has no backend by design.
    setSubmitted(true);
    window.requestAnimationFrame(() => successRef.current?.focus());
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="border border-line-strong p-8 lg:p-10"
        role="status"
      >
        <h3 className="text-heading">{copy.success.title}</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{copy.success.body}</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setErrors({});
          }}
          className="mt-8 border border-line-strong px-6 py-3.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          {copy.success.reset}
        </button>
      </div>
    );
  }

  const errorEntries = FIELD_ORDER.filter((name) => errors[name]);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div aria-live="polite">
        {errorEntries.length > 0 ? (
          <div className="border border-accent p-5 text-sm">
            <p className="text-accent">{copy.errors.summary}</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {errorEntries.map((name) => (
                <li key={name}>
                  <a href={`#${fieldId(name)}`} className="link-rule">
                    {errors[name]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Field
        label={copy.fields.name.label}
        id={fieldId("name")}
        error={errors.name}
        errorId={errorId("name")}
      >
        <input
          ref={(node) => {
            fieldRefs.current.name = node;
          }}
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={copy.fields.name.placeholder}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? errorId("name") : undefined}
          className={inputClass(Boolean(errors.name))}
        />
      </Field>

      <Field
        label={copy.fields.email.label}
        id={fieldId("email")}
        error={errors.email}
        errorId={errorId("email")}
      >
        <input
          ref={(node) => {
            fieldRefs.current.email = node;
          }}
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={copy.fields.email.placeholder}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? errorId("email") : undefined}
          className={inputClass(Boolean(errors.email))}
        />
      </Field>

      <Field
        label={copy.fields.subject.label}
        id={fieldId("subject")}
        error={errors.subject}
        errorId={errorId("subject")}
      >
        <select
          ref={(node) => {
            fieldRefs.current.subject = node;
          }}
          id={fieldId("subject")}
          name="subject"
          defaultValue=""
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? errorId("subject") : undefined}
          className={inputClass(Boolean(errors.subject))}
        >
          <option value="" disabled>
            {copy.fields.subject.placeholder}
          </option>
          {copy.subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={copy.fields.message.label}
        id={fieldId("message")}
        error={errors.message}
        errorId={errorId("message")}
      >
        <textarea
          ref={(node) => {
            fieldRefs.current.message = node;
          }}
          id={fieldId("message")}
          name="message"
          rows={5}
          placeholder={copy.fields.message.placeholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={`${inputClass(Boolean(errors.message))} resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="bg-fg px-8 py-4 text-sm tracking-tight text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-contrast"
      >
        {copy.submit}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  // The focus ring itself comes from the global :focus-visible rule.
  return `w-full border-b bg-transparent py-3 text-base text-fg placeholder:text-muted ${
    hasError ? "border-accent" : "border-line-strong"
  }`;
}

function Field({
  label,
  id,
  error,
  errorId,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {error ? (
        <p id={errorId} className="mt-2.5 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
