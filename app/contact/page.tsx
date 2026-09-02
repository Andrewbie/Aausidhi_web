"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["Aausidhi Healthcare, Plot no. 661, First Floor, Ind Area - 2", "Chandigarh, Chandigarh – 160002", "India"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+91 7710778868"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["aausidhi@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "3073043c-744d-42bd-83c0-2c39a6043c15");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="hero-gradient py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Info Cards */}
          <div className="space-y-5">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a5276] to-[#27ae60] flex items-center justify-center shrink-0">
                  <info.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a5276] mb-1.5">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" id="contactForm">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle size={40} className="text-[#27ae60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a5276] mb-3">Thank You!</h3>
                  <p className="text-gray-500 max-w-sm">
                    We have received your message. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "", interest: "general" }); }}
                    className="mt-6 text-[#27ae60] underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#1a5276] mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">I am interested in *</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm bg-white"
                      >
                        <option value="general">General Enquiry</option>
                        <option value="franchise">PCD Franchise</option>
                        <option value="products">Product Information</option>
                        <option value="manufacturing">Third-Party Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brief subject of your message"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a5276]/30 focus:border-[#1a5276] text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#27ae60] hover:bg-[#1e8449] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                      <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=AAUSIDHI%20HEALTHCARE,%20Chandigarh&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
