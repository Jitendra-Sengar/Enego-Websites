import React from "react";

const ConstructionTheme = () => {
  return (
    <div className="min-h-screen bg-[#EDF2F4] flex flex-col items-center justify-center p-6">
      <header className="w-full py-6 bg-[#2B2D42] text-white text-center text-3xl font-bold rounded-2xl shadow-lg">
        Bold & Industrial Construction
      </header>
      
      <main className="mt-8 flex flex-col items-center w-full max-w-4xl">
        <div className="bg-[#8D99AE] p-6 rounded-xl shadow-md w-full text-center text-white text-lg">
          <p>We build strong and reliable structures with industry-leading expertise.</p>
        </div>
        
        <button className="mt-6 bg-[#F77F00] hover:bg-[#E56A00] text-white font-bold py-3 px-6 rounded-lg shadow-md">
          Get a Quote
        </button>
      </main>
    </div>
  );
};

export default ConstructionTheme;
