import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import getImageDimensions from "../util/getImageDimensions";
import getOrCreateDeviceId from "../util/getOrCreateDeviceId";
import { freeAccessAPI } from "../api/freeAccessAPI";
import ModalDashboard from "../components/ModalDashboard";
import { downloadImage } from "../util/downloadImage";

export default function FreeDashboard() {
  const location = useLocation();
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [generatedImage, setGeneratedImage] = useState({
    image: "",
    credits: 10,
    isLoading: false,
  });
  const selectStyle = useRef("Realistic");
  const aspectRatio = useRef("16:9");

  const samplePrompts = [
    "A futuristic cityscape at sunset",
    "A panda riding a skateboard",
    "A magical forest with glowing trees",
    "Portrait of a robot in Van Gogh style",
    "Surreal landscape with floating islands",
  ];

  // Get the Prompt from the Home Page
  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      setPrompt(() => location.state.prompt);
    }
  }, [location.state]);

  // Get the Prompt from the Home Page
  useEffect(() => {
    if (location.state) {
      setPrompt(() => location.state.prompt);
    }
  }, [location.state]);

  // Handle Dashboard Errors here
  useEffect(() => {
    if (error) {
      setGeneratedImage((prev) => ({
        ...prev,
        credits: 0,
      }));
      setError(() => error);
    }
  }, [error]);

  // Generate Image API Call
  const handleGenerateButton = async () => {
    setGeneratedImage((prev) => ({
      ...prev,
      isLoading: true,
    }));

    const deviceId = getOrCreateDeviceId();

    let data = getImageDimensions(aspectRatio.current.value.split(" ")[1]);

    let payload = {
      deviceId: deviceId,
      height: data.height,
      width: data.width,
      text: `I want an image of ${selectStyle.current.value} style, with the description as follows ${prompt}`,
    };

    const response = await freeAccessAPI(payload, setError);

    if (response) {
      setGeneratedImage((prev) => ({
        ...prev,
        image: response.data.data[0].base64,
        credits: response.data.credits,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {error && (
        <ModalDashboard
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          buttonName="Signin"
          routeTo="signin"
        >
          <p>{error.message}</p>
        </ModalDashboard>
      )}

      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl md:text-2xl font-bold text-primary font-orbitron">
          Persception
        </h1>{" "}
        <div className="flex gap-6 items-center">
          {/* {generatedImage.credits && (
            <div className="text-sm font-bold bg-gray-700 px-3 py-1 rounded-full">
              ⚡ Credits: ${generatedImage.credits}
            </div>
          )} */}
          <Link to="/signin">
            <button className="bg-primary hover:bg-primary text-white text-sm px-4 py-1 rounded border-2 border-transparent hover:border-white">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      {/* Main Layout */}
      <div className="lg:p-20 sm:p-4 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column (Prompt + Settings) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Prompt Input Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Enter your prompt</h2>
            <textarea
              className="w-full h-32 p-4 rounded-lg bg-gray-900 text-white border border-gray-700 resize-none"
              placeholder="A futuristic cityscape with flying cars and neon lights..."
              value={prompt}
              onChange={(e) => setPrompt(() => e.target.value)}
            />
            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-3">
                <button
                  className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded"
                  onClick={() => {
                    const randomPrompt =
                      samplePrompts[
                        Math.floor(Math.random() * samplePrompts.length)
                      ];
                    setPrompt(randomPrompt);
                  }}
                >
                  🔄 Random
                </button>
              </div>
              {prompt && (
                <button
                  onClick={() => handleGenerateButton()}
                  disabled={generatedImage.isLoading}
                  className={`text-sm px-6 py-1 rounded text-white transition-all duration-300 ease-in-out transform ${
                    generatedImage.isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-primary hover:bg-primary hover:font-bold hover:scale-105"
                  }`}
                >
                  Generate
                </button>
              )}
            </div>
          </div>

          {/* Settings Panel */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              ⚙️ Generation Settings
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">Image Style</label>
                <select
                  ref={selectStyle}
                  className="w-full p-2 rounded bg-gray-900 border border-gray-700"
                >
                  <option>Realistic</option>
                  <option>Cyberpunk</option>
                  <option>Fantasy</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Aspect Ratio</label>
                <select
                  ref={aspectRatio}
                  className="w-full p-2 rounded bg-gray-900 border border-gray-700"
                >
                  <option>16:9 Landscape</option>
                  <option>1:1 Square</option>
                  <option>9:16 Portrait</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image Preview) */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Generated Result</h2>
          {!generatedImage.isLoading && (
            <div>
              <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-gray-700 flex justify-center items-center p-2">
                <img
                  src={
                    generatedImage.image
                      ? `data:image/png;base64,${generatedImage.image}`
                      : "/images/generations/signIn.png"
                  }
                  alt="Generated Result"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
              {prompt &&
                !generatedImage.isLoading &&
                generatedImage.image !== "" && (
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => downloadImage(generatedImage.image)}
                      className="w-full bg-gray-700 hover:bg-primary text-sm px-3 py-1 rounded"
                    >
                      Download
                    </button>
                  </div>
                )}
            </div>
          )}
          {generatedImage.isLoading && (
            <div className="w-full max-w-5xl mx-auto border border-gray-700 rounded-lg">
              <div className="flex justify-center items-center min-h-[300px]">
                <HashLoader color="#4F46E5" size={50} speedMultiplier={2} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
