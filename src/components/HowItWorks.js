import { Pencil, Sparkles, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Pencil className="w-6 h-6 text-indigo-400" />,
      title: "Describe Your Vision",
      description:
        "Simply enter a text prompt describing the image you want to create.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: "AI Generation",
      description:
        "Our advanced AI model transforms your text into stunning visuals.",
    },
    {
      icon: <Download className="w-6 h-6 text-indigo-400" />,
      title: "Download & Share",
      description:
        "Download your created images in high resolution or share them directly.",
    },
  ];

  return (
   <div className="w-full bg-gray-900">
  <div className="max-w-5xl mx-auto text-center px-4 py-16 animate-fade-in-up">
    <h2 className="text-2xl text-white font-bold mb-2 transition-opacity duration-700">
      How It Works
    </h2>
    <p className="text-gray-400 mb-10 transition-opacity duration-700 delay-100">
      Our platform makes image generation simple and intuitive
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fade-in-up"
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "both",
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-indigo-950 p-3 rounded-full animate-pop">
              {step.icon}
            </div>
          </div>
          <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
          <p className="text-sm text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
