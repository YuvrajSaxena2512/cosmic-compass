import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BirthFormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  tob: string;
}

const BirthForm = ({ onSubmit }: BirthFormProps) => {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    tob: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.phone.trim() || !/^\d{10,}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.dob) e.dob = "Date of birth required";
    if (!form.tob) e.tob = "Time of birth required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const fields: { key: keyof FormData; label: string; type: string; placeholder: string }[] = [
    { key: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
    { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter phone number" },
    { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
    { key: "dob", label: "Date of Birth", type: "date", placeholder: "" },
    { key: "tob", label: "Time of Birth", type: "time", placeholder: "" },
  ];

  return (
    <section id="form" className="relative z-10 py-20 px-4">
      <div className="container max-w-lg mx-auto">
        <div className="glass-card-glow p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-2">
            Enter Your Birth Details
          </h2>
          <p className="text-muted-foreground text-center text-sm mb-8">
            We'll read the stars just for you
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((f) => (
              <div key={f.key} className="floating-label-input">
                <label>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e) => update(f.key, e.target.value)}
                  className={`min-h-[52px] text-base ${errors[f.key] ? "!border-destructive" : ""}`}
                />
                {errors[f.key] && (
                  <p className="text-destructive text-xs mt-1 ml-1">{errors[f.key]}</p>
                )}
              </div>
            ))}
            <button type="submit" className="btn-cosmic w-full text-base mt-4">
              Generate My LifeMap Report
            </button>
            <p className="text-center text-muted-foreground text-xs">
              Takes less than 10 seconds.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BirthForm;
