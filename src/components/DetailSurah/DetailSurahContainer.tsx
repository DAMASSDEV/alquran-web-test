import { useParams } from "react-router-dom";
import DetailSurah from "./DetailSurah";
import { useEffect, useRef, useState } from "react";
import { Surah } from "../../types/surah";

function DetailSurahContainer() {
  const { surahId } = useParams<{ surahId: string }>();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentReciter, setCurrentReciter] = useState("01");
  const [audioPlaying, setAudioPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://equran.id/api/v2/surat/${surahId}`
        );
        if (!response.ok) {
          throw Error("Failed to fetch surah data");
        }
        const data = await response.json();
        setSurah(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "unkown error occured");
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [surahId]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const changeReciter = (reciterId: string) => {
    setCurrentReciter(reciterId);
    if (audioPlaying) {
      handlePauseAudio();
      setTimeout(() => {
        handlePlayFullSurah();
      }, 100);
    }
  };

  const handlePlayFullSurah = () => {
    if (!surah) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(surah.audioFull[currentReciter]);
    audioRef.current.onended = () => {
      setAudioPlaying(false);
    };

    audioRef.current.play();
    setAudioPlaying(true);
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setAudioPlaying(false);
  };

  if (loading) {
    return <div className="p-5 text-center">Memuat...</div>;
  }

  if (error || !surah) {
    return (
      <div className="p-5 text-center text-red-500">
        {" "}
        Error: {error || "Surah tidak ditemukan"}
      </div>
    );
  }

  return (
    <DetailSurah
      surah={surah}
      currentReciter={currentReciter}
      changeReciter={changeReciter}
      onPlay={handlePlayFullSurah}
      onPause={handlePauseAudio}
      audioPlaying={audioPlaying}
    />
  );
}

export default DetailSurahContainer;
