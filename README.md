# Alaafia AI - E-Health for Nigeria

Alaafia AI is a culturally localized medical assistant and dashboard for Nigerian patients with Chronic Kidney Disease (CKD) and Diabetes.

## Features
- **Alaafia Assistant**: AI chatbot that speaks Nigerian languages (English, Pidgin, Yoruba, Hausa, Igbo) and understands local diet/context.
- **Real-time Glucose Monitoring**: Simulated live data chart tracking glucose levels.
- **Health Dashboard**: Vitals tracking (BP, Heart Rate, Weight, eGFR).
- **Daily Action Plan**: Checklist for medication and lifestyle tasks.

## Setup & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure AI**
   Create a `.env` file in the root directory and add your Google Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *Note: Without the key, the chatbot will simulate responses or show an error.*

3. **Run Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies
- React 19 + Vite
- Tailwind CSS
- Chart.js (`react-chartjs-2`)
- Google Gemini API (`@google/generative-ai`)
- Lucide React Icons

## Disclaimer
This is a prototype for demonstration purposes. **Always consult a medical professional for real health advice.**
