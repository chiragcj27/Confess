import { useState } from "react";
import gift from "../assets/giftbox.gif";
import hugs from "../assets/hugs.gif"; 

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isHappy, setIsHappy] = useState(false);

  const handleGiftBoxClick = () => {
    setIsOpen(true);
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleYesClick = () => {
    setIsHappy(true);
  };

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      {!isOpen && (
        <div
          className="absolute inset-0 bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer"
          onClick={handleGiftBoxClick}
        >
          <img src={gift} alt="giftbox"/>
          <p className="text-xl font-bold text-blue-800 text-center mt-4">Open at your own risk !!</p>
        </div>
      )}
      {isOpen && !isHappy && (
        <div className="bg-pink-50 rounded-lg shadow-lg p-4 md:p-6">
          <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4">
            <p className="text-xl md:text-2xl text-pink-700 font-bold font-cursive">To: Khushboo</p>
            <p className="text-sm md:text-lg text-pink-700 font-serif">
              I really enjoy the time I spend with you and have realized that all these days we spent talking for hours daily meant something special. I can't help but have feelings for you that go beyond friendship.<br/>
              Want to make it something special, so here it goes ....
            </p>
            <blockquote className="italic text-pink-600 pl-4 border-l-4 border-pink-300 font-serif">
              "Time stands still<br />
              Beauty in all she is<br />
              I will be brave<br />
              I will not let anything take away<br />
              What’s standing in front of me<br />
              Every breath, every hour has come to this..”
            </blockquote>
            <div className="space-y-2 text-pink-800 font-serif">
              {/* The list of questions */}
              <p>Can I be the one you share your problems with?</p>
              <p>Can I be the one you love spending time with, even when we don't speak a word?</p>
              <p>Can I be the one you think about before going to sleep?</p>
              <p>Can I be the one who holds your hand?</p>
              <p>Can I be the one you brag about to your friends?</p>
              <p>Can I be the one you trust with your secrets?</p>
              <p>Can I be the one who makes you smile on a bad day?</p>
              <p>Can I be the one you feel safe with?</p>
              <p>Can I be the one who listens to your heart?</p>
              <p>Can I be the one you wake up excited to talk to every day?</p>
              <p>Can I be the one who makes you laugh until your stomach hurts?</p>
              <p>Can I be the one who supports your dreams and ambitions?</p>
              <p>Can I be the one you want to binge watch F.R.I.E.N.D.S with?</p>
              <p>Can I be the one you want to eat gol-gappas with?</p>
              <p>Can I be the one you want to go on a long late night walk?</p>
              <p>Can I be the one you want to share & eat icecream with while stargazing?</p>
              <p>Can I be the one you want to share your happiest moments with?</p>
              <p>Can I be the one who loves you for who you are, flaws and all?</p>
              <p className="font-semibold text-lg">And most importantly, can I be the one who calls you my girlfriend?</p>
              <p className="font-bold text-3xl">Can I?</p>
            </div>
            <p className="text-xl text-pink-700 font-bold font-cursive text-right mt-8">- Chirag</p>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="px-4 py-2 md:px-6 md:py-3 bg-green-400 text-white font-bold text-sm md:text-lg rounded-full shadow-md hover:bg-green-500 hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                className={`px-4 py-2 md:px-6 md:py-3 bg-red-400 text-white font-bold text-sm md:text-lg rounded-full shadow-md transition-transform transform focus:outline-none focus:ring-2 focus:ring-red-300 ${hovered ? 'translate-x-4 translate-y-2 md:translate-x-10 md:translate-y-5' : ''}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {isHappy && (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <img src={hugs} alt="Happy Girlfriend's Day" />
          <p className="text-2xl md:text-4xl font-bold font-serif text-pink-700 mt-4 text-center">Happy Girlfriend's Day !!</p>
        </div>
      )}
    </div>
  );
};

export default Message;
