# Alaafia 

**Alaafia** is a compassionate, AI-powered Nigerian health assistant designed to help users manage their kidney health & Diabetes. It combines advanced AI with a localized touch to provide personalized support, health monitoring, and educational resources.

##  Features

- **Interactive AI Chatbot**: Powered by **Google Gemini**, Alaafia understands and converses in a natural, Nigerian-friendly persona.
- **Voice Interaction**: 
  - **Speech-to-Text**: optimized for Nigerian English interaction.
  - **Text-to-Speech**: uses **YarnGPT** to read responses aloud for better accessibility.
- **Health Reports**: Access trending news and educational resources specifically focused on **Diabetes** and **Chronic Kidney Disease (CKD)** to stay informed.
- **Medication Management**: (Planned) Simple tools to track and manage prescriptions.

## Tech Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Logic**: [Google Gemini API](https://ai.google.dev/)
- **Voice Services**: [YarnGPT API](https://yarngpt.ai/) (TTS)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Local Setup

Follow these steps to get Alaafia running on your local machine.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Alaafia
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory of the project. You will need API keys for Google Gemini and YarnGPT.

**`.env` File Content:**
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
VITE_YARN_API_KEY=your_yarngpt_api_key_here
```

> **Note:** Never commit your `.env` file to version control.

### 4. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.
