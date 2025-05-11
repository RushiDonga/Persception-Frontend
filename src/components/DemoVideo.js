export default function DemoVideo(){
    return (
        <section className="bg-black border-t border-t-purple-500">
        <div className="flex justify-center md:py-20">
          <div className="lg:flex lg:items-center lg:w-9/12">
            <div>
              <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                Generate Anywhere
              </h1>
              <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                Create stunning images on your phone, tablet, or computer — no
                downloads, no hassle.
              </h1>
            </div>
            <div className="flex justify-center p-4">
              <div className="aspect-w-16 aspect-h-9 w-full max-w-xl">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BRwSBsMIs2I?si=QFsC1WA94HhUZsQt"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}