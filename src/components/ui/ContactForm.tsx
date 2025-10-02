import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast.success('Zpráva byla úspěšně odeslána!');
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-60 text-lg text-[#66BC98] font-normal leading-none flex-1 shrink basis-[0%] max-md:max-w-full">
      <h3 className="text-white font-barlow-condensed text-[30px] font-normal leading-6 mb-6">
        Kontaktní formulář
      </h3>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Jméno a příjmení"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Název firmy"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 whitespace-nowrap mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Telefon"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 whitespace-nowrap mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex min-h-[100px] w-[861px] gap-2.5 whitespace-nowrap mt-6 pt-2 pb-[68px] px-4 rounded-lg max-md:max-w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Zpráva"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 bg-transparent border-none outline-none placeholder-zielony w-full resize-none"
          rows={4}
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="justify-center items-stretch flex min-h-[51px] w-[210px] max-w-full flex-col text-white whitespace-nowrap text-center bg-[#66BC98] mt-6 px-8 py-3.5 rounded-3xl max-md:px-5 hover:bg-[#5aa085] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="text-white">
          {isSubmitting ? 'Odesílání...' : 'Odeslat'}
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
