"use client";
import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";
import axiosInstance from "@/utils/api/axiosInstance";

interface UserInput {
  name: string;
  email: string;
  number: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
  form?: string;
}

const INITIAL_STATE: UserInput = { name: "", email: "", number: "", message: "" };

const validateField = (name: keyof UserInput, value: string): string => {
  if (!value.trim()) return `${name} is required`;
  const rules: Record<keyof UserInput, { min?: number; max?: number; valid?: boolean; message: string }> = {
    name: { min: 2, max: 100, message: "Name must be between 2 and 100 characters" },
    email: { valid: isValidEmail(value), message: "Please enter a valid email" },
    number: {
      min: 7,
      max: 15,
      valid: /^[0-9+\-\s()]*$/.test(value),
      message: "Please enter a valid phone number (7-15 digits)",
    },
    message: { min: 10, max: 500, message: "Message must be between 10 and 500 characters" },
  };
  const rule = rules[name];
  if (rule.min && value.length < rule.min) return rule.message;
  if (rule.max && value.length > rule.max) return rule.message;
  if (rule.valid === false) return rule.message;
  return "";
};

const ContactForm: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setIsMounted(true), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof UserInput, value) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {
      name: validateField("name", userInput.name),
      email: validateField("email", userInput.email),
      number: validateField("number", userInput.number),
      message: validateField("message", userInput.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) return;

    try {
      setIsLoading(true);
      await axiosInstance.post(`/api/contacts/contact`, userInput);
      toast.success("Message sent successfully!");
      setUserInput(INITIAL_STATE);
      setErrors({});
      formRef.current?.focus();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An unexpected error occurred";
      setErrors((prev) => ({ ...prev, form: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact Me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">If you have any questions or opportunities, feel free to reach out.</p>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" aria-label="Contact Form">
          {(["name", "email", "number", "message"] as (keyof UserInput)[]).map((field) => (
            <div key={field} className="flex flex-col gap-2">
              <label htmlFor={field} className="text-base capitalize">Your {field}:</label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows={4}
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  maxLength={500}
                  value={userInput[field]}
                  onChange={handleChange}
                  disabled={isLoading}
                  aria-invalid={!!errors[field]}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                  aria-required="true"
                />
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : field === "number" ? "tel" : "text"}
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  maxLength={field === "number" ? 15 : 100}
                  value={userInput[field]}
                  onChange={handleChange}
                  disabled={isLoading}
                  aria-invalid={!!errors[field]}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                  aria-required="true"
                />
              )}
              {errors[field] && (
                <p id={`${field}-error`} className="text-sm capitalize text-red-400">{errors[field]}</p>
              )}
            </div>
          ))}
          {errors.form && <p className="text-sm capitalize text-red-400">{errors.form}</p>}
          <button
            type="submit"
            className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white disabled:opacity-50"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
            <TbMailForward size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;