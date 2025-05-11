import homeBackGround from "../../images/homeBackground.png"
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Hero(){

  const [prompt, setPrompt] = useState("");
  const {userAuth} = useAuth();
  const navigate = useNavigate();

  const handleGenerateButton = () => {

    if(!prompt){
      return
    }
    
    if(!userAuth){
      sessionStorage.setItem('pendingPrompt', JSON.stringify({prompt}));
      navigate('/signin');
    }else{

      if(userAuth.data.user.role === 'user'){
        navigate('/visitorDashboard');
      }else if(userAuth.data.user.role === 'super-user'){
        navigate('/dashboard', {state: {prompt}})
      }
    }
  }

    return(
        <div
        style={{
          background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${homeBackGround})`,
        }}
        className="h-[55rem] w-full sm:h-[99vh] xl:h-[98vh] bg-slate-800 relative"
      >

        <div className="grid content-center justify-center h-full justify-items-center">
          <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
              <h1 className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                Type your vision, Watch it Appear
              </h1>
              <h1 className="mb-4 text-xl text-center text-stone-400 font-light sm:text-2xl">
                Create anything you imagine - instantly with just few words.
              </h1>
              <h1 className="mb-2 text-center text-stone-400 font-light sm:text-xl sm:mb-8">
                Ready to bring your ideas to life? Enter your prompt and start generating.
              </h1>
              <div>
                <input
                  placeholder="Magical forest with glowing mushrooms"
                  className="w-full p-2 py-3 rounded-sm sm:py-4 md:py-5 md:w-3/4 focus:border-[3px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                      handleGenerateButton();
                    }
                  }}
                />
                <button onClick={() => handleGenerateButton()} className={`${!prompt && "opacity-70"} px-4 py-2 mt-3 font-medium text-textColor bg-primary rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4`}>
                    Generate
                  </button>
              </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
        ></div>
      </div>
    )
}