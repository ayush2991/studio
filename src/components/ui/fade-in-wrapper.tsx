"use client";
import { useEffect, useState, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Fallback for environments where IntersectionObserver is not available or for initial load
    const timer = setTimeout(() => {
        if (!currentRef || isVisible) return; // Check visibility again in case observer fired first
        // Only set visible if IntersectionObserver hasn't already done so
        // This logic is tricky if IntersectionObserver is super fast.
        // A simpler approach for initial load might be just a timeout.
        // setIsVisible(true);
      }, delay + 100); // Ensure this runs after observer potentially

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const visibilityTimer = setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(currentRef);
          // Clear the fallback timer if observer fires
          clearTimeout(timer); 
          return () => clearTimeout(visibilityTimer);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(currentRef);
    
    // Initial visibility for server-rendered content, then transition
    // This helps avoid flash of invisible content if JS is slow
    // but might negate the "fade-in on scroll" for above-the-fold items.
    // For items initially in view, a simple delay is better.
    if (typeof window !== 'undefined' && currentRef.getBoundingClientRect().top < window.innerHeight) {
       const initialVisibilityTimer = setTimeout(() => setIsVisible(true), delay);
       observer.unobserve(currentRef); // No need to observe if already in view
       clearTimeout(timer);
       return () => clearTimeout(initialVisibilityTimer);
    }


    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(timer);
    };
  }, [delay, isVisible]); // Add isVisible to dependencies to prevent re-running if already visible

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
