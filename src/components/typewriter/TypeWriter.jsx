import React, { useState, useEffect } from "react";

const TypeWriter = () => {
    const words = ["digital products", "web design", "branding"];
    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const pause = 2000; // Pause time between typing and deleting

        const type = () => {
            const fullWord = words[wordIndex];
            const updatedWord = isDeleting
                ? fullWord.slice(0, charIndex - 1)
                : fullWord.slice(0, charIndex + 1);

            setCurrentWord(updatedWord);

            if (!isDeleting && charIndex === fullWord.length) {
                setTimeout(() => setIsDeleting(true), pause); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
            }

            setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
        };

        const timer = setTimeout(type, typingSpeed);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <div className="max-h-full">
            <div className="text-[4.375rem] leading-[7rem] my-[3.2rem]">
                <span className="border-b border-b-[15px] border-[#A6F3E7]">I design and code digital <br /> tools{" "}</span>
                <span className="inline-block border-r-[15px] border-[#A6F3E7] font-semibold mt-4">
                    {currentWord}
                </span>
            </div>
        </div>
    );
};

export default TypeWriter;
