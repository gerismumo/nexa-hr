import { useEffect, useRef, useState } from 'react';
import {
  Card,
  Text,
  Button,
  Slider,
  Group,
  Stack,
} from '@mantine/core';
import { IconPlayerPlay, IconPlayerPause, IconRewindBackward10, IconRewindForward10 } from '@tabler/icons-react';
import { formatTime } from '../../../util/util';

const  AudioPlayer =({ url, duration }: { url: string; duration: number }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => setTime(audio.currentTime);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (amount: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + amount));
  };

  return (
    <Card shadow="sm" p="md">
      <audio ref={audioRef} src={url} preload="metadata" />
      <Stack>
        <Slider
          value={(time / duration) * 100}
          onChange={(val) => {
            if (audioRef.current) {
              audioRef.current.currentTime = (val / 100) * duration;
            }
          }}
        />
        <Group >
          <Text size="sm">{formatTime(time)}</Text>
          <Text size="sm">{formatTime(duration)}</Text>
        </Group>
        <Group gap="xl">
          <Button variant="subtle" onClick={() => seek(-10)}>
            <IconRewindBackward10 />
          </Button>
          <Button size="lg" onClick={togglePlay}>
            {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
          </Button>
          <Button variant="subtle" onClick={() => seek(10)}>
            <IconRewindForward10 />
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}

export default AudioPlayer;