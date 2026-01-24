
import { useState, useEffect, useRef } from 'react';

interface UseCameraSetupReturn {
  videoRef: React.RefObject<HTMLVideoElement>;
  isCameraReady: boolean;
  cameraError: string | null;
  flipped: boolean;
  toggleCameraFlip: () => void;
}

export const useCameraSetup = (): UseCameraSetupReturn => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(true);
  const [currentStream, setCurrentStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        // Detect mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        // Camera constraints based on device type
        const constraints = {
          video: isMobile ? 
            // Mobile settings optimized for full view
            { 
              facingMode: 'user', // Front camera
              width: { ideal: 1920, min: 1280 },
              height: { ideal: 1080, min: 720 },
              // Use a wider aspect ratio for mobile
              aspectRatio: { ideal: 1.77778 } // 16:9 aspect ratio
            } : 
            // Desktop settings (wider view angle)
            { 
              facingMode: 'user',
              width: { ideal: 1920, min: 1280 },
              height: { ideal: 1080, min: 720 },
              // Use a wider aspect ratio to get a less zoomed-in view
              aspectRatio: { ideal: 1.77778 } // 16:9 aspect ratio for wider view
            },
          audio: false,
        };
        
        // Request camera access with optimized settings
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Wait for video metadata to be loaded before setting ready state
          videoRef.current.onloadedmetadata = () => {
            setIsCameraReady(true);
            setCameraError(null);
            setCurrentStream(stream);
            console.log("Camera initialized at:", 
              videoRef.current?.videoWidth + "x" + videoRef.current?.videoHeight,
              "Device type:", isMobile ? "Mobile" : "Desktop");
          };
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
        
        // Try fallback with even more basic settings for problematic devices
        try {
          const fallbackConstraints = {
            video: { 
              facingMode: 'user',
              width: { ideal: 1280, min: 640 },
              height: { ideal: 720, min: 480 },
              // Still try to maintain wider aspect ratio in fallback
              aspectRatio: { ideal: 1.77778 }
            },
            audio: false,
          };
          
          stream = await navigator.mediaDevices.getUserMedia(fallbackConstraints);
          
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              setIsCameraReady(true);
              setCameraError(null);
              setCurrentStream(stream);
              console.log("Camera initialized with fallback settings:", 
                videoRef.current?.videoWidth + "x" + videoRef.current?.videoHeight);
            };
          }
        } catch (fallbackError) {
          console.error('Error accessing webcam with fallback settings:', fallbackError);
          setCameraError('Kamera erişimi sağlanamadı. Lütfen kamera izinlerini kontrol edin.');
          setIsCameraReady(false);
        }
      }
    };

    setupCamera();

    // Cleanup function
    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Mobile devices may have issues with camera orientation
  const toggleCameraFlip = () => {
    setFlipped(prev => !prev);
  };

  return {
    videoRef,
    isCameraReady,
    cameraError,
    flipped,
    toggleCameraFlip
  };
};
