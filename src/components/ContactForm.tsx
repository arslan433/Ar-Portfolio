"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-8 grid md:grid-cols-2 gap-8 mt-3 rounded-lg shado">
      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold mb-2">CONTACT ME</h2>
        <p className="text-4xl font-extrabold mb-4">Let's talk!</p>
        <p className="mb-6">
          Feel free to reach out! I'm here to help and will respond within 24 hours.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>+923474875097</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>arslanpc65@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span>Saddar Rawalpindi</span>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 border rounded font-semibold hover:bg-white/50 transition"
        >
          Send Message
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </section>
  );
}
