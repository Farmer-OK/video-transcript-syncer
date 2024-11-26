import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  currentTime: number;
  onTimeUpdate: (time: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, currentTime, onTimeUpdate }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.5) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden glass-panel">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        controls
        onTimeUpdate={(e) => onTimeUpdate(e.currentTarget.currentTime)}
      />
    </div>
  );
};

export default VideoPlayer;