# BentAI - Your AI-Powered Assistant

BentAI is a comprehensive SaaS platform that leverages AI to provide users with a suite of tools for generating content across various mediums. From asking questions to creating images, videos, code, and audio with simple prompts, BentAI is designed to cater to a wide range of creative and professional needs. With a generous offer of 5 free uses for new users and an easy subscription model, accessing the future of content creation has never been easier.

**Try it out now: [BentAI Live Demo](https://bentai-saas-nextjs.vercel.app/)**


![BentAI - gif](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/9abb3999-c958-4b6f-a692-80ebdd031b85)


## Features

- **Ask Questions:** Leverage AI to get detailed answers to your queries.
- **Generate Code:** Automatically generate code snippets by simply describing the functionality.
- **Generate Images:** Create images of all resolutions based on your prompts.
- **Generate Video:** Bring your ideas to life with AI-generated videos.
- **Generate Audio:** Produce audio content, including music or spoken text, through AI.

## Getting Started

Follow these steps to set up your local development environment:

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- MySQL
- A Clerk account for authentication
- A Stripe account for handling subscriptions
- An OpenAI API key for accessing AI services

### Installation

- **Clone the repository:**

  ```bash
  git clone https://github.com/yourgithubusername/bentai.git
  cd bentai
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Set up environment variables:
  
  Copy the `.env.example` file to a new file named `.env` and fill in your specific values for database credentials, Clerk, Stripe, and OpenAI API keys.

- Initialize the database:

  ```bash
  npx prisma migrate dev
  ```

- Start the developement server:

  ```bash
  npm run dev
  ```

Open `http://localhost:3000` with your browser to see the result.


## Folder Structure

```bash
/bentai
|-- /node_modules
|-- /pages                # Next.js pages and API routes
|-- /public               # Static files like images and fonts
|-- /styles               # TailwindCSS and custom CSS files
|-- /components           # Reusable components
|-- /lib                  # Utility and helper functions
|-- /prisma               # Prisma ORM configuration and migrations
|-- .env                  # Environment variables
|-- .env.example          # Example environment setup
|-- prisma.schema         # Prisma database schema
|-- next.config.js        # Next.js configuration file
|-- tailwind.config.js    # TailwindCSS configuration
|-- postcss.config.js     # PostCSS configuration
|-- package.json
|-- README.md
```

## Built With

- [Next.js](https://nextjs.org/) & TypeScript - The foundation of our platform, offering robust app routing and type safety.
- [Tailwind CSS](https://tailwindcss.com/) & [ShadcnUI](https://shadcnui.com/) - For crafting a responsive and intuitive user interface.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [Supabase](https://supabase.io/) - An open-source Firebase alternative providing databases and authentication.
- [MySQL](https://www.mysql.com/) - The relational database for storing user and streaming data.
- [Clerk](https://clerk.dev/) - For secure user authentication and management.
- [Crisp](https://crisp.chat/en/) - Chatbot Integration for customer support.
- [OpenAI API](https://openai.com/) - API for AI Services.
- [Stripe](https://stripe.com/in) - Payment Integration for subscription.

---

## Application Screenshots

**Landing Page**

![screencapture-bentai-saas-nextjs-vercel-app-2024-03-21-03_54_11](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/171c7c30-37fb-43b3-bddb-48fa15b44ab8)


**User Dashboard Page**

![user dashboard page](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/ec73c4eb-b52c-4bfb-aff0-167819f961f9)


**AI Service Page**

![ss](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/ecf46049-1651-4285-8f59-f5248fa37c03)


**Mobie and Tablet Responsive**

![tab](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/4752e9bd-4941-4bf3-9a10-061c57324001)

![mobile responsive](https://github.com/Md-Kaish-Alam/nextjs-bent-ai/assets/82415398/0687325f-5ab2-4371-94aa-f38882be59e1)


In conclusion, BentAI represents a significant stride forward in the realm of AI-driven SaaS platforms. By leveraging cutting-edge technologies such as Next.js 14, TypeScript, TailwindCSS, Prisma, Supabase, MySQL, Clerk, and Stripe, we have meticulously crafted a robust, user-friendly platform that democratizes access to advanced AI capabilities. BentAI empowers users to generate code, images, videos, and audio with unprecedented ease, efficiency, and flexibility.

My commitment to excellence is further demonstrated through the seamless integration of the OpenAI API, ensuring that our users have access to the very forefront of AI technology. The addition of a Crisp chatbot enhances the user experience by providing real-time support, showcasing our dedication to user satisfaction.

As I move forward, BentAI is poised not only to meet the growing demands of the digital era but to redefine the boundaries of what is possible within the AI SaaS landscape. We invite our users to embark on this exciting journey with us, exploring the vast potential of AI and unlocking new horizons of creativity and innovation.

