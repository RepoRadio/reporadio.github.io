"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

interface Episode {
  title: string
  filename: string
  duration: string
  description: string
}

const episodes: Episode[] = [
  {
    title: "Understanding RepoRadio: Features Overview",
    filename: "ep1.mp3",
    duration: "3:59",
    description: "Introduction to RepoRadio's revolutionary ability to transform static code documentation into dynamic audio narratives, exploring key features like contributor onboarding episodes, getting-started guides, and changelog summaries.",
  },
  {
    title: "Installing RepoRadio: Step-by-Step Guide",
    filename: "ep2.mp3",
    duration: "4:11",
    description: "Complete walkthrough of installing RepoRadio, including setting up your OpenAI API key and installing via Go, with practical tips for getting started.",
  },
  {
    title: "Creating Your First Podcast with RepoRadio",
    filename: "ep3.mp3",
    duration: "4:22",
    description: "Learn how to create and manage your first podcast episodes using RepoRadio CLI, covering best practices for content generation and transforming codebases into engaging audio content.",
  },
  {
    title: "Using Your Generated Podcasts: Practical Applications",
    filename: "ep4.mp3",
    duration: "4:30",
    description: "Explore real-world applications of RepoRadio-generated podcasts, including enhancing contributor onboarding, streamlining learning processes, and integrating audio documentation into development workflows.",
  },
  {
    title: "Maximizing Your Experience with RepoRadio",
    filename: "ep5.mp3",
    duration: "4:11",
    description: "Final episode covering tips for ongoing usage, maintaining fresh content, leveraging diverse use cases, and fostering team collaboration to get the most out of RepoRadio.",
  },
]

export default function AudioPlayer() {
  const [currentEpisode, setCurrentEpisode] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement>(null)

  const getAudioUrl = (filename: string) => {
    return `https://raw.githubusercontent.com/RepoRadio/reporadio-cli/main/.reporadio/welcome/episodes/${filename}`
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }
    const handleLoadStart = () => {
      setIsLoading(true)
      setError(null)
    }
    const handleCanPlay = () => {
      setIsLoading(false)
    }
    const handleError = () => {
      setIsLoading(false)
      setError("Failed to load audio file")
      setIsPlaying(false)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("error", handleError)
    }
  }, [currentEpisode])

  const togglePlayPause = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (err) {
      setError("Failed to play audio")
      setIsPlaying(false)
    }
  }

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = (value[0] / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = value[0] / 100
    audio.volume = newVolume
    setVolume(newVolume)
  }

  const previousEpisode = () => {
    const newIndex = currentEpisode > 0 ? currentEpisode - 1 : episodes.length - 1
    setCurrentEpisode(newIndex)
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const nextEpisode = () => {
    const newIndex = currentEpisode < episodes.length - 1 ? currentEpisode + 1 : 0
    setCurrentEpisode(newIndex)
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const currentEpisodeData = episodes[currentEpisode]
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto border border-gray-200">
      <audio ref={audioRef} src={getAudioUrl(currentEpisodeData.filename)} preload="metadata" />

      {/* Episode Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center">
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
          ) : (
            <Play className="h-6 w-6 text-white" />
          )}
        </div>
        <div className="text-left flex-1">
          <h3 className="font-semibold text-gray-900">{currentEpisodeData.title}</h3>
          <p className="text-sm text-gray-500">{currentEpisodeData.description}</p>
        </div>
        <div className="text-sm text-gray-500">
          Episode {currentEpisode + 1} of {episodes.length}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <Slider
          value={[progress]}
          onValueChange={handleSeek}
          max={100}
          step={0.1}
          className="w-full"
          disabled={isLoading || error !== null}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <Button variant="ghost" size="sm" onClick={previousEpisode} disabled={isLoading}>
          <SkipBack className="h-4 w-4" />
        </Button>

        <Button
          onClick={togglePlayPause}
          disabled={isLoading || error !== null}
          className="bg-orange-600 hover:bg-orange-700 text-white"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>

        <Button variant="ghost" size="sm" onClick={nextEpisode} disabled={isLoading}>
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2">
        <Volume2 className="h-4 w-4 text-gray-500" />
        <Slider value={[volume * 100]} onValueChange={handleVolumeChange} max={100} step={1} className="flex-1" />
      </div>

      {/* Episode List */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Episodes</h4>
        <div className="space-y-2">
          {episodes.map((episode, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentEpisode(index)
                setIsPlaying(false)
                setCurrentTime(0)
              }}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                index === currentEpisode ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm text-gray-900">{episode.title}</p>
                  <p className="text-xs text-gray-500">{episode.description}</p>
                </div>
                <span className="text-xs text-gray-500">{episode.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
