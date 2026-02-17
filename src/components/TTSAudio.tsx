"use client";

import { useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";

interface TTSAudioProps {
  text: string;
  label?: string;
}

export default function TTSAudio({ text, label = "Mainkan Audio" }: TTSAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window === "undefined" || !window.speechSynthesis) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Feature detection during mount
      setIsSupported(false);
      return;
    }

    // Try to get voices
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      // Voices might not be loaded yet, wait for them
      window.speechSynthesis.onvoiceschanged = () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        if (updatedVoices.length === 0) {
          setIsSupported(false);
        }
      };
    }
  }, []);

  const getGermanVoice = useCallback(() => {
    if (typeof window === "undefined") return null;
    
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find a German voice (prioritize native speakers)
    const germanVoice = voices.find(
      (v) =>
        v.lang.startsWith("de") ||
        v.name.includes("German") ||
        v.name.includes("Deutsch")
    );

    return germanVoice || null;
  }, []);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setHasError(true);
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    setIsLoading(true);
    setHasError(false);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.85; // Slightly slower for learners
    utterance.pitch = 1;

    const voice = getGermanVoice();
    if (voice) {
      utterance.voice = voice;
    } else {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = (event) => {
      console.error("TTS Error:", event);
      setIsPlaying(false);
      setIsLoading(false);
      setHasError(true);
    };

    window.speechSynthesis.speak(utterance);
  }, [text, getGermanVoice]);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, []);

  if (!isSupported) {
    return (
      <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
        <VolumeX className="w-5 h-5 text-yellow-600" />
        <span className="text-sm text-yellow-700">
          Audio tidak tersedia di browser ini
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={isPlaying ? stop : speak}
        disabled={isLoading}
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          isPlaying
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-blue-500 text-white hover:bg-blue-600"
        } disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Memuat...</span>
          </>
        ) : isPlaying ? (
          <>
            <VolumeX className="w-5 h-5" />
            <span>Stop Audio</span>
          </>
        ) : (
          <>
            <Volume2 className="w-5 h-5" />
            <span>{label}</span>
          </>
        )}
      </button>

      {hasError && (
        <p className="text-xs text-red-500 text-center">
          Gagal memuat audio Jerman. Pastikan browser mendukung TTS.
        </p>
      )}
    </div>
  );
}
