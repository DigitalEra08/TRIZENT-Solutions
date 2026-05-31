import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to TRIZENT Solutions ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website and purchase of products from our store located at Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar, Karachi.

By accessing our website or purchasing our products, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or make purchases from our store.

These terms apply to all visitors, customers, and others who access or use our services.`,
  },
  {
    title: '2. Products and Services',
    content: `TRIZENT Solutions specializes in the sale of:
• Computer accessories including keyboards, mice, monitors, cables, adapters, webcams, headsets, and other peripheral devices.
• Smart gadgets including smartwatches, wireless earbuds, smart home devices, Bluetooth speakers, fitness trackers, and related technology products.

We reserve the right to:
• Modify, suspend, or discontinue any product or service at any time without prior notice.
• Change prices for products or services at any time without prior notice.
• Limit the quantity of any product available for purchase.
• Refuse service to any customer at our sole discretion.`,
  },
  {
    title: '3. Pricing and Payment',
    content: `All prices are listed in Pakistani Rupees (PKR) and are inclusive of applicable taxes unless stated otherwise.

Payment Terms:
• Full payment is required at the time of purchase.
• We accept cash payments at our physical store.
• For orders placed via phone or online inquiry, payment arrangements will be confirmed by our team.
• Prices are subject to change without notice. The price at the time of your confirmed order will be honored.

TRIZENT Solutions is not responsible for pricing errors caused by typographical mistakes. We reserve the right to cancel orders placed at incorrect prices and will promptly notify affected customers.`,
  },
  {
    title: '4. Orders and Availability',
    content: `Order Acceptance:
• All orders are subject to product availability and acceptance by TRIZENT Solutions.
• We reserve the right to refuse or cancel any order at our discretion.
• An order confirmation does not constitute our acceptance of an order.

Stock Availability:
• Product availability is displayed on our website on a best-effort basis.
• If a product becomes unavailable after your order is placed, we will notify you promptly and offer alternatives, a backorder option, or a full refund.
• For high-demand items, orders are fulfilled on a first-come, first-served basis.`,
  },
  {
    title: '5. Delivery and Shipping',
    content: `Delivery Area:
• We deliver within Karachi and selected cities across Pakistan.
• Delivery timelines and charges vary based on location and order size.

Delivery Terms:
• Standard delivery within Karachi: 1–3 business days.
• Outstation delivery: 3–7 business days depending on location.
• Delivery charges are calculated at the time of order confirmation.
• TRIZENT Solutions is not liable for delays caused by third-party courier services, natural disasters, or other circumstances beyond our control.
• Risk of loss and title for purchased products pass to the buyer upon delivery.`,
  },
  {
    title: '6. Returns and Exchanges',
    content: `Return Policy:
• Returns are accepted within 7 days of purchase for items in original, unused condition with all original packaging and accessories.
• To initiate a return, contact us at 0320-8750927 or visit our store with proof of purchase.

Non-Returnable Items:
• Items that have been opened, used, or damaged by the customer.
• Software products and downloadable content.
• Items purchased during clearance or final sale.
• Products with removed or tampered serial numbers.

Exchange Policy:
• Exchanges are subject to product availability.
• The replacement product must be of equal or greater value (with the customer paying the difference).
• Exchanges due to manufacturer defects are handled on a case-by-case basis.`,
  },
  {
    title: '7. Warranty',
    content: `Product Warranties:
• All products sold by TRIZENT Solutions carry the manufacturer's warranty where applicable.
• Warranty periods vary by product and manufacturer — please check individual product listings for warranty details.
• Warranty claims must be submitted directly to the manufacturer or through our store with valid proof of purchase.

Warranty Exclusions:
• Physical damage, water damage, or damage caused by misuse.
• Unauthorized modifications or repairs.
• Normal wear and tear.
• Damage resulting from failure to follow product instructions.

TRIZENT Solutions will assist customers in warranty claim processing but cannot guarantee outcomes determined by manufacturers.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content on our website and marketing materials, including but not limited to text, graphics, logos, images, and software, is the property of TRIZENT Solutions or its content suppliers and is protected by Pakistani copyright and intellectual property laws.

You may not:
• Reproduce, duplicate, or copy any content without written permission.
• Use our branding or trademarks without authorization.
• Sell or exploit any portion of our website content for commercial purposes.

The TRIZENT Solutions name, logo, and all related product and service names are trademarks of TRIZENT Solutions. All other trademarks, product names, and logos are the property of their respective owners.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, TRIZENT Solutions shall not be liable for:
• Any indirect, incidental, special, or consequential damages arising from the use or inability to use our products or services.
• Loss of data, profits, or business opportunities.
• Damages resulting from delays, errors, interruptions, or failures in our services.
• Actions or omissions of third-party service providers, including couriers and payment processors.

Our total liability to you for any claim arising out of or relating to these terms shall not exceed the amount you paid for the product or service in question.

These limitations apply regardless of whether the damages arise from breach of contract, tort, negligence, or any other legal theory.`,
  },
  {
    title: '10. Privacy Policy',
    content: `TRIZENT Solutions is committed to protecting your personal information. By using our services, you consent to the collection and use of your information as described below.

Information We Collect:
• Contact information (name, phone number, address) provided during purchase or inquiry.
• Transaction records and purchase history.
• Usage data and website analytics.

How We Use Your Information:
• To process and fulfill your orders.
• To communicate about your orders and inquiries.
• To improve our products and services.
• To send promotional communications (with your consent).

We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to complete your transactions.`,
  },
  {
    title: '11. Prohibited Uses',
    content: `You agree not to use our website or services for:
• Any unlawful purpose or in violation of any regulations.
• To harass, abuse, or harm another person.
• To submit false or misleading information.
• To interfere with or disrupt the security or availability of our website.
• To attempt unauthorized access to any part of our systems.
• Reselling products without our prior written authorization.
• Any fraudulent activity including submitting false payment information.

Violation of these prohibited uses may result in termination of your access to our services and, where applicable, legal action.`,
  },
  {
    title: '12. Governing Law and Dispute Resolution',
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.

Dispute Resolution Process:
• We encourage customers to first contact us directly to resolve any concerns or disputes.
• Unresolved disputes will be referred to mediation before formal legal proceedings are initiated.
• TRIZENT Solutions reserves the right to seek injunctive or other equitable relief in any court of competent jurisdiction.

Contact for Disputes:
Owner: Moazzam
Address: Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar, Karachi
Phone: 0320-8750927`,
  },
  {
    title: '13. Changes to Terms',
    content: `TRIZENT Solutions reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.

Your continued use of our services after any changes constitutes your acceptance of the new terms. We encourage you to review these Terms and Conditions periodically to stay informed of any updates.

If we make material changes to these terms, we will make reasonable efforts to notify customers through our available communication channels.

Last Updated: May 2024`,
  },
  {
    title: '14. Contact Information',
    content: `For questions, concerns, or inquiries regarding these Terms and Conditions, please contact us:

TRIZENT Solutions
Owner: Moazzam
Address: Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar, Karachi, Pakistan
Phone: 0320-8750927
Store Hours: Monday–Saturday, 10:00 AM – 8:00 PM

We aim to respond to all inquiries within 24–48 business hours.`,
  },
];

export default function TermsAndConditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <div className="relative bg-slate-800/60 border-b border-slate-700/50 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
              <FileText size={22} className="text-cyan-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms & Conditions</h1>
              <p className="text-slate-400 text-sm mt-0.5">Effective Date: May 2024</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4">
            Please read these Terms and Conditions carefully before using TRIZENT Solutions' services. These terms govern your relationship with us and outline your rights and responsibilities as a customer.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Box */}
        <div className="p-5 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl mb-10">
          <p className="text-cyan-300 text-sm font-medium mb-1">Summary</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            These terms cover product pricing, orders, delivery, returns, warranty, privacy, and dispute resolution for purchases made at TRIZENT Solutions. By shopping with us, you agree to these terms.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <h2 className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  {section.title}
                </h2>
                {openIndex === index ? (
                  <ChevronUp size={18} className="text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 border-t border-slate-700/50 pt-4">
                  <p className="text-slate-400 text-sm leading-7 whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 p-6 bg-slate-800 border border-slate-700 rounded-2xl text-center">
          <p className="text-slate-400 text-sm">
            If you have any questions about these Terms and Conditions, please contact us at{' '}
            <a href="tel:03208750927" className="text-cyan-400 hover:text-cyan-300 font-medium">
              0320-8750927
            </a>{' '}
            or visit our store at Mezzanine-1, Sb-39, Sector X-4, Gulshan e Maymar, Karachi.
          </p>
        </div>
      </div>
    </div>
  );
}
