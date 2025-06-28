# 🐾 neko.ai

![neko.ai Banner](./public/banner.png)

**neko.ai** is an AI SaaS platform for **real-time meeting transcription and intelligent summarization**, inspired by the agility and attentiveness of a black & white cat. Capture every detail and convert conversations into actionable insights seamlessly.

---

## ✨ Features

- **🔊 Real-Time Transcription**  
  Join meetings with a single click. neko.ai's bot streams accurate transcriptions in real time.

- **📝 AI Summarization**  
  Generate detailed overviews, bullet-point summaries, action items, and custom notes to keep your workflow efficient.

- **🔗 Multi-Platform Support**  
  Currently integrates with Google Meet (via Vexa API). More platforms coming soon.

- **📈 Dashboard & History**  
  Manage, view, and search your meeting transcripts with an intuitive dashboard.

- **💡 Seamless Auth & Billing**  
  Secure authentication and subscription management powered by Supabase and Stripe/Razorpay.

---

## 🚀 Tech Stack

- **Frontend & Backend:** Next.js 15 (Fullstack)
- **Authentication & Database:** Supabase
- **AI & Transcription APIs:**  
  - Vexa.ai (meeting transcription)  
  - OpenRouter.ai (LLM summarization)
- **Payment Gateway:** Stripe or Razorpay (for UPI support in India)
- **Hosting:** Vercel

---

## 🛠️ Setup & Deployment

1. **Clone the repository**

    ```bash
    git clone https://github.com/tallman1O/neko.ai.git
    cd neko.ai
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Configure environment variables**

    Create a `.env.local` file with:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

    VEXA_API_KEY=your_vexa_api_key
    OPENROUTER_API_KEY=your_openrouter_api_key

    STRIPE_SECRET_KEY=your_stripe_key (or Razorpay credentials)
    ```

4. **Run the development server**

    ```bash
    pnpm dev
    ```

5. **Deploy**

    Deploy easily on Vercel with environment variables configured.

---

## 🐱 Philosophy

> **"Like a cat, neko.ai listens with intent, observes with clarity, and acts with precision."**

Our mission is to empower individuals and teams to **capture, organize, and actionize knowledge effortlessly**, ensuring conversations become productivity assets.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or feature suggestions.

---

## ✨ Credits

- **Founder & Developer:** Mehul Uttam  
- **APIs:** [Vexa.ai](https://vexa.ai), [OpenRouter.ai](https://openrouter.ai)  
---

## 📫 Contact

For business inquiries, collaborations, or feedback:

- **Email:** mehuluttam@example.com
- **LinkedIn:** [Mehul Uttam](https://linkedin.com/in/mehul-uttam)

---

**neko.ai – Listen. Summarize. Actionize.**
