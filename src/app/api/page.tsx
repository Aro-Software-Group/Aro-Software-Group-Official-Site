"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ApiPage() {
  const { t } = useTranslation();

  const jsExample = `
import OpenAI from 'openai';

// Initialize with your API key
const openai = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.aro-software-group.com/v1',
});

async function main() {
  const response = await openai.chat.completions.create({
    model: 'aro-agent-1',
    messages: [
      { role: 'system', content: 'You are an AI assistant powered by Aro Agent.' },
      { role: 'user', content: 'Tell me how to use Aro API effectively.' }
    ],
    temperature: 0.7,
    max_tokens: 1024,
  });

  console.log(response.choices[0].message.content);
}

main();
`;

  const pythonExample = `
import os
from openai import OpenAI

# Initialize with your API key
client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.aro-software-group.com/v1"
)

# Create a chat completion
response = client.chat.completions.create(
    model="aro-agent-1",
    messages=[
        {"role": "system", "content": "You are an AI assistant powered by Aro Agent."},
        {"role": "user", "content": "Tell me how to use Aro API effectively."}
    ],
    temperature=0.7,
    max_tokens=1024
)

print(response.choices[0].message.content)
`;

  const models = [
    {
      id: "aro-agent-1",
      name: "Aro Agent",
      description: "Advanced AI assistant with extensive knowledge and reasoning capabilities.",
      contextWindow: "16K",
      inputPrice: "$0.80",
      outputPrice: "$2.40",
      bestFor: "General assistance, coding, writing, and complex reasoning tasks",
      status: "Coming Soon"
    },
    {
      id: "aro-brain-studio-1",
      name: "Aro Brain Studio",
      description: "Visual understanding model capable of analyzing images and documents.",
      contextWindow: "32K",
      inputPrice: "$1.20",
      outputPrice: "$3.60",
      bestFor: "Image analysis, document understanding, and multimodal tasks",
      status: "Coming Soon"
    },
    {
      id: "aro-agent-lite",
      name: "Aro Agent Lite",
      description: "Lightweight version optimized for speed and efficiency.",
      contextWindow: "8K",
      inputPrice: "$0.40",
      outputPrice: "$1.20",
      bestFor: "Fast responses for simpler tasks with lower resource requirements",
      status: "Coming Soon"
    }
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M9.5 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M5.5 5v14" />
          <path d="M5.5 5h-2" />
          <path d="M5.5 19h-2" />
        </svg>
      ),
      title: "OpenAI Compatible",
      description: "Drop-in replacement for OpenAI API, allowing you to use your existing code with minimal changes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V3" />
        </svg>
      ),
      title: "Function Calling",
      description: "Implement tools and external function calls for more powerful and versatile applications."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect x="14" y="14" width="4" height="6" rx="2" />
          <rect x="6" y="4" width="4" height="6" rx="2" />
          <path d="M6 10v4a2 2 0 0 0 2 2h.93a2 2 0 0 0 2-2v-4" />
          <path d="M14 14v4a2 2 0 0 0 2 2h.93a2 2 0 0 0 2-2v-4" />
          <path d="M8 10V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
          <path d="M16 14v-4a2 2 0 0 0-2-2h-.93a2 2 0 0 0-2 2v4" />
        </svg>
      ),
      title: "Advanced Workflows",
      description: "Build complex AI workflows with chained requests, branching logic, and conversation memory."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m14.5 9-5 5" />
          <path d="m9.5 9 5 5" />
        </svg>
      ),
      title: "Privacy First",
      description: "Your data is never stored or used for training, ensuring complete confidentiality of your inputs and outputs."
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="relative py-16">
          <div className="orange-glow opacity-20"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label">API</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Aro Software Group API</h1>
              <p className="text-zinc-300 text-lg mb-10">
                Integrate powerful AI capabilities into your applications with our simple, reliable, and privacy-focused API.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Get API Key
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white">
                  Documentation
                </Button>
              </div>

              <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-xl p-6 text-left">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-zinc-400 text-sm">Terminal</div>
                </div>

                <div className="font-mono text-sm">
                  <p className="text-zinc-300 mb-2">
                    <span className="text-green-400">$</span> curl https://api.aro-software-group.com/v1/chat/completions \
                  </p>
                  <p className="text-zinc-300 pl-4 mb-2">
                    -H "Content-Type: application/json" \
                  </p>
                  <p className="text-zinc-300 pl-4 mb-2">
                    -H "Authorization: Bearer YOUR_API_KEY" \
                  </p>
                  <p className="text-zinc-300 pl-4 mb-2">
                    -d '&#123;"model": "aro-agent-1",
                  </p>
                  <p className="text-zinc-300 pl-6 mb-2">
                    "messages": [&#123;"role": "user", "content": "What can I do with the Aro API?"&#125;],
                  </p>
                  <p className="text-zinc-300 pl-6 mb-4">
                    "temperature": 0.7&#125;'
                  </p>
                  <p className="text-primary">
                    {/* Response with detailed information about Aro API capabilities... */}
                    Response with detailed information about Aro API capabilities...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-black">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="section-label">Features</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful API Features</h2>
                <p className="text-zinc-300 text-lg">
                  Our API is designed to be developer-friendly while providing advanced AI capabilities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="xai-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-800/50 p-3 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-zinc-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="section-label">Code Examples</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Easy Integration</h2>
                <p className="text-zinc-300 text-lg mb-10">
                  Our API is compatible with OpenAI libraries, making integration simple
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="xai-card overflow-hidden">
                  <div className="flex justify-between items-center bg-zinc-800 px-4 py-2">
                    <h3 className="text-white font-medium">JavaScript</h3>
                    <button className="text-zinc-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-0">
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomDark}
                      customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}
                    >
                      {jsExample}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="xai-card overflow-hidden">
                  <div className="flex justify-between items-center bg-zinc-800 px-4 py-2">
                    <h3 className="text-white font-medium">Python</h3>
                    <button className="text-zinc-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-0">
                    <SyntaxHighlighter
                      language="python"
                      style={atomDark}
                      customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}
                    >
                      {pythonExample}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models */}
        <section className="py-16 bg-black">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="section-label">Models</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Available Models</h2>
                <p className="text-zinc-300 text-lg">
                  Choose the right model for your specific needs
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Model</th>
                      <th className="text-left py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Description</th>
                      <th className="text-left py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Context</th>
                      <th className="text-right py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Input Price</th>
                      <th className="text-right py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Output Price</th>
                      <th className="text-center py-3 px-4 border-b border-zinc-800 text-zinc-300 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((model, index) => (
                      <tr key={index} className="hover:bg-zinc-900/50 transition-colors">
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-white font-medium">{model.name}</td>
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-zinc-300">{model.description}</td>
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-zinc-300">{model.contextWindow}</td>
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-zinc-300 text-right">{model.inputPrice}</td>
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-zinc-300 text-right">{model.outputPrice}</td>
                        <td className="py-4 px-4 border-b border-zinc-800/50 text-center">
                          <span className="project-status project-in-development">{model.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-8 text-zinc-400 text-sm">
                <p>Prices listed are per million tokens. Actual costs may vary based on usage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build with Our API?</h2>
              <p className="text-zinc-300 text-lg mb-10">
                Sign up for early access to our API and start building powerful AI applications today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Request API Access
                </Button>
                <Link href="/#contact">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
