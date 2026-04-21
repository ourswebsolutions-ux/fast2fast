export const OHLCBarsIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" // Thoda bold stroke for better visibility
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Left Bar (Vertical) */}
    <line x1="8" y1="5" x2="8" y2="19" />
    {/* Open Dash (Left side - Lengthened) */}
    <line x1="4" y1="14" x2="8" y2="14" /> 
    
    {/* Right Bar (Vertical) */}
    <line x1="16" y1="5" x2="16" y2="19" />
    {/* Close Dash (Right side - Lengthened) */}
    <line x1="16" y1="9" x2="20" y2="9" /> 
  </svg>
);