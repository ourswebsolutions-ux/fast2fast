// app/components/Hero.tsx
export default function Hero() {
  return (
    <div className="relative h-[50vh] ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full flex items-center py-6 border justify-center text-center px-6">
        <div className="mt-10">
          <h1 className="text-5xl md:text-4xl font-bold text-brand mb-4">
            About <span className="">Us</span>
          </h1>
        
          
        </div>
      </div>
    </div>
  );
}