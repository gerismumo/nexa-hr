import { useEffect, useRef, useState } from "react";
import {
  Card,
  Text,
  ActionIcon,
  Slider,
  Stack,
  rem,
  Flex,
  Title,
  Alert,
} from "@mantine/core";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconRewindBackward10,
  IconRewindForward10,
  IconInfoCircle,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import { formatTime } from "../../../util/util";

const AudioPlayer = ({ url, duration }: { url: string; duration: number }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => setTime(audio.currentTime);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
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
    audio.currentTime = Math.max(
      0,
      Math.min(duration, audio.currentTime + amount)
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === "ArrowLeft") {
        seek(-10);
      }
      if (e.code === "ArrowRight") {
        seek(10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  // ⏳ Auto-hide alert after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card shadow="xs" radius="sm" p="lg" withBorder>
      <Title order={3} mb="xl">
        Audio Player
      </Title>
      <audio ref={audioRef} src={url} preload="metadata" />
      {showAlert && (
        <Alert
          icon={<IconInfoCircle size={16} />}
          title="Tip"
          color="blue"
          mb="md"
          p="xs"
        >
          You can also use keyboard: <b>Space</b> to Play/Pause,{" "}
          <IconArrowLeft
            size={14}
            style={{ display: "inline", marginBottom: -2 }}
          />{" "}
          to rewind 10s,{" "}
          <IconArrowRight
            size={14}
            style={{ display: "inline", marginBottom: -2 }}
          />{" "}
          to forward 10s.
        </Alert>
      )}
      <Stack gap="sm">
        <Slider
          value={(time / duration) * 100}
          onChange={(val) => {
            if (audioRef.current) {
              audioRef.current.currentTime = (val / 100) * duration;
            }
          }}
          size="sm"
          radius="xl"
          color="blue"
        />
        <Flex justify="space-between" align="center">
          <Text size="xs" c="dimmed">
            {formatTime(time)}
          </Text>
          <Text size="xs" c="dimmed">
            {formatTime(duration)}
          </Text>
        </Flex>
        <Flex justify="center" align="center" gap="xl">
          <ActionIcon
            variant="light"
            radius="xl"
            size={rem(44)}
            onClick={() => seek(-10)}
            aria-label="Rewind 10 seconds"
          >
            <IconRewindBackward10 size={22} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            color="blue"
            radius="xl"
            size={rem(64)}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <IconPlayerPause size={32} />
            ) : (
              <IconPlayerPlay size={32} />
            )}
          </ActionIcon>
          <ActionIcon
            variant="light"
            radius="xl"
            size={rem(44)}
            onClick={() => seek(10)}
            aria-label="Forward 10 seconds"
          >
            <IconRewindForward10 size={22} />
          </ActionIcon>
        </Flex>
      </Stack>
    </Card>
  );
};

export default AudioPlayer;
