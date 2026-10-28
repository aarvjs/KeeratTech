'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.63 0-3.149-.508-4.408-1.378l-.316-.218-2.955.775.789-2.88-.237-.344C3.947 14.805 3.4 13.456 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
  </svg>
);

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct professional WhatsApp RFQ message with all details
    const text = 
`*TECHNICAL RFQ & PRODUCT INQUIRY*
*Keerat Electech Industrial Solutions*
━━━━━━━━━━━━━━━━━━━━━
📦 *Product:* ${productName || 'Industrial Fastening Product'}
👤 *Full Name:* ${formData.name.trim()}
🏢 *Company / EPC:* ${formData.company.trim()}
📞 *Phone / WhatsApp:* ${formData.phone.trim()}
✉️ *Email:* ${formData.email.trim()}
🔢 *Estimated Quantity / Scope:* ${formData.quantity.trim() || 'Project Requirements'}
📝 *Specifications / Project Details:*
${formData.message.trim() || 'Please share official price quotation, technical datasheet and test certificates.'}
━━━━━━━━━━━━━━━━━━━━━
_Sent via keeratelectech.com Technical Showcase_`;

    const encoded = encodeURIComponent(text);
    const targetUrl = `https://wa.me/917235055577?text=${encoded}`;
    
    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#0B8F4D] uppercase tracking-wider">Industrial RFQ</span>
            <h3 className="text-lg font-bold">Technical Quote Request</h3>
            {productName && (
              <p className="text-xs text-slate-300 mt-0.5 truncate">
                Item: <span className="font-semibold text-white">{productName}</span>
              </p>
            )}
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">RFQ Prepared for WhatsApp!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your technical specifications have been formatted. A WhatsApp chat with Keerat Electech has been initiated.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <WhatsAppIcon /> Click to Open WhatsApp Chat
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold py-2 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / EPC Contractor *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. L&T Infrastructure"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Quantity / Project Scope</label>
                <input
                  type="text"
                  placeholder="e.g. 500 Cartridges / 5,000 Anchors"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Project Specifications / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Specify concrete grade (C25/30), anchor size, edge distance, delivery timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-[#0B8F4D] shrink-0" />
                <span>Redirects straight to official Keerat Electech WhatsApp (+91 72350 55577).</span>
              </div>

              <Button type="submit" variant="primary" fullWidth icon={<Send className="w-4 h-4" />}>
                Submit Inquiry to WhatsApp
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
