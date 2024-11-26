import React, { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import TranscriptPanel from '@/components/TranscriptPanel';

// Mock data for demonstration
const mockTranscript = [
  { id: 1, startTime: 0, text: "Welcome to this video about Chrome extensions." },
  { id: 2, startTime: 3, text: "Today we'll learn how to build a video transcription tool." },
  { id: 3, startTime: 6, text: "This extension will help users understand video content better." },
  // Add more segments as needed
];

const Index = () => {
  const [currentTime, setCurrentTime] = useState(0);
  
  // Mock video URL - replace with actual video detection logic
  const videoUrl = "https://example.com/video.mp4";

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  const handleSegmentClick = (time: number) => {
    setCurrentTime(time);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <VideoPlayer
          videoUrl={videoUrl}
          currentTime={currentTime}
          onTimeUpdate={handleTimeUpdate}
        />
        <TranscriptPanel
          segments={mockTranscript}
          currentTime={currentTime}
          onSegmentClick={handleSegmentClick}
        />
      </div>
    </div>
  );
};

export default Index;