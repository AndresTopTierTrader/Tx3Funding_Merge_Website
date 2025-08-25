'use client'
import { useState, useEffect } from "react";
import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
 
function CarouselTestimonialSection({ mainLang }) {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Check if the window dimensions are available
    if (width) {
      // Set the isMobile state based on the width
      setIsMobile(width < 768); // Adjust the breakpoint as needed
    } else 
      setIsMobile(false); // Default to false if width is not available
  }, [width]);
  
  useEffect(() => {
    if (!isMounted) return;
    
    // Check if the Trustpilot script is loaded
    if (window.Trustpilot) {
      // If already loaded, try to reinitialize the widget
      window.Trustpilot.loadFromElement(document.querySelector('.trustpilot-widget'));
    } else {
      // If not loaded yet, wait for script to load and then initialize
      const handleTrustpilotLoaded = () => {
        if (window.Trustpilot) {
          window.Trustpilot.loadFromElement(document.querySelector('.trustpilot-widget'));
        }
      };

      // Check if script exists
      const existingScript = document.getElementById('trustpilot-widget-script');

      if (!existingScript) {
        // If script doesn't exist, create and add it
        const script = document.createElement('script');
        script.id = 'trustpilot-widget-script';
        script.type = 'text/javascript';
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        script.onload = handleTrustpilotLoaded;
        document.head.appendChild(script);
      }
    }
  }, [mainLang, isMounted]); // Re-run if language changes or component mounts

  // Don't render anything until the component is mounted on the client
  if (!isMounted) {
    return <div className="mt-10 h-[240px]"></div>; // Empty placeholder with same height
  }

  return (
    <div className='flex bg-transparent overflow-x-hidden flex-col items-center w-full'>
      <div className='flex flex-col items-center'>
        <div className="mt-10">
          {/* TrustBox widget - Carousel */}
          <div className="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="614a31dc22ac21001db11d2b" data-style-height={isMobile ? '350px' : '240px'} data-style-width={isMobile ? '350px' : '1200px'} data-theme="dark" data-stars="4,5" data-review-languages="en">
            <a href="https://www.trustpilot.com/review/toptiertrader.com" target="_blank" rel="noopener">Trustpilot</a>
          </div>
          {/* End TrustBox widget */}
        </div>
      </div>
    </div>
  )
}

export default CarouselTestimonialSection