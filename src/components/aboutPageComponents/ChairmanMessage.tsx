export default function ChairmanMessage() {
  return (
    <div className="flex gap-12 items-start max-w-5xl mx-auto p-8">
      {/* Left: Image with shadow */}
      <div className="relative w-[380px] flex-shrink-0">
        <div className="absolute -left-6 -top-6 w-full h-full bg-gray-400/60 rounded-xl shadow-2xl" />
        <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/photo.jpg" 
            alt="Mr. Shlash Al-Kurdi" 
            className="w-full h-[460px] object-cover"
          />
          <div className="bg-red-600 py-3 text-center">
            <div className="text-white font-bold text-xl">Mr. Shlash Al-Kurdi</div>
            <div className="text-white/90 text-sm">CEO</div>
          </div>
        </div>
      </div>

      {/* Right: Text */}
      <div className="pt-8">
        <h2 className="text-[#64b4dc] text-3xl font-bold mb-6 tracking-wide">CHAIRMAN MESSAGE</h2>
        <p className="text-gray-800 leading-relaxed text-[15.5px]">
          We, at Al-Rasheediah Safety &amp; Security, have always believed in the concept of total quality and complete customer satisfaction as the key to achieve our corporate goals and enjoy the pleasure of attaining genuine success. Our managerial and executive work force have a clear understanding of the cooperate culture and leave no stone unturned in their effort to achieve our goals and high standards.
        </p>
      </div>
    </div>
  );
}