'use client';
import { useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  playbackRate?: number;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({ 
  videoId, 
  title = 'YouTube Video',
  playbackRate = 1.25 
}: YouTubePlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (playerRef.current && !playerInstanceRef.current) {
          playerInstanceRef.current = new window.YT.Player(playerRef.current, {
            videoId: videoId,
            playerVars: {
              autoplay: 0,
              controls: 1,
              rel: 0,
              modestbranding: 1,
            },
            events: {
              onReady: (event: any) => {
                // Set playback speed when video is ready
                event.target.setPlaybackRate(playbackRate);
              },
            },
          });
        }
      };
    } else if (window.YT && window.YT.Player && playerRef.current && !playerInstanceRef.current) {
      // API already loaded, create player immediately
      playerInstanceRef.current = new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            // Set playback speed when video is ready
            event.target.setPlaybackRate(playbackRate);
          },
        },
      });
    }

    return () => {
      // Cleanup
      if (playerInstanceRef.current) {
        try {
          playerInstanceRef.current.destroy();
        } catch (e) {
          // Ignore cleanup errors
        }
        playerInstanceRef.current = null;
      }
    };
  }, [videoId, playbackRate]);

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <div
        ref={playerRef}
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
}


