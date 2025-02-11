import { WavyBackground } from "../components/ui/wavy-background.jsx";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input.jsx"

function MainPage() {

  // Input UI Functionality

  const placeholders = [
    "Review a product ?",
    "Customer feedbacks drives innovation?",
    "Shaping Better Products with Every Word?"
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };


  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto ">
        <p className="text-5xl md:text-6xl lg:text-8xl black font-bold inter-var text-center ">
          Critque AI
        </p>
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center pb-28">
          Analyze. Improve. Succeed.
        </p>
        <div className="">
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </WavyBackground>
    </>
  )
}

export default MainPage;
