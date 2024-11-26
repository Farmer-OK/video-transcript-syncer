import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptSegment {
  id: number;
  startTime: number;
  text: string;
}

interface TranscriptPanelProps {
  segments: TranscriptSegment[];
  currentTime: number;
  onSegmentClick: (time: number) => void;
}

const TranscriptPanel: React.FC<TranscriptPanelProps> = ({ segments, currentTime, onSegmentClick }) => {
  const getActiveSegment = (time: number) => {
    return segments.findIndex((segment, index) => {
      const nextSegment = segments[index + 1];
      const segmentEnd = nextSegment ? nextSegment.startTime : Infinity;
      return time >= segment.startTime && time < segmentEnd;
    });
  };

  const activeIndex = getActiveSegment(currentTime);

  return (
    <div className="glass-panel h-[400px] p-4">
      <h2 className="text-lg font-semibold mb-4">Transcript</h2>
      <ScrollArea className="h-[calc(100%-2rem)]">
        <div className="space-y-2">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              className={`transcript-text ${index === activeIndex ? 'active' : ''}`}
              onClick={() => onSegmentClick(segment.startTime)}
            >
              {segment.text}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TranscriptPanel;