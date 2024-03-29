import headerImage from "/headerImage.png";

const Intro = () => {
  return (
    <div className="bg-slate-600 py-24 text-white mb-16">
      {/* Hero section */}
      <div className="text-center mb-4 md:mb-0 flex flex-col  items-center w-screen">
        <h1 className="text-4xl text-center md:text-6xl font-extrabold mb-6 leading-tight">
          ژێرنووسی ئینگلیزی لێرە بکە بە کوردی
        </h1>
        <img src={headerImage} alt="" width={900} />
        <p className="text-lg md:text-xl font-normal leading-relaxed mt-6">
          بێ ماندووبوون ژێرنووسەکانت لە ئینگلیزیەوە بۆ کوردی وەربگێڕە.
          <span className="block pt-2"> ئێستا دەست پێ بکە!</span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
