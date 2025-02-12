import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  // 创建音频实例的ref
  const audioRef = useRef(null);

  // 在组件挂载时初始化audio实例
  useEffect(() => {
    // 确保在浏览器环境中运行
    if (typeof window !== "undefined") {
      audioRef.current = new window.Audio();
    }
  }, []);

  // 播放器状态
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(20);

  // 监听音频事件
  useEffect(() => {
    // 确保audio实例存在
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // 时间更新事件
    const handleTimeUpdate = () => {
      console.log(audio.currentTime, "audio.currentTime");
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    // 加载元数据事件
    const handleLoadedMetadata = () => {
      setTotalTime(audio.duration);
    };

    // 播放结束事件
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef.current]); // 只在audio实例创建后运行

  // 播放音乐
  const play = useCallback(async (songUrl) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    
    try {
      // 设置新的音频源
      if (songUrl !== audio.src) {
        audio.src = songUrl;
        setCurrentSong(songUrl);
        // 新歌曲从头开始播放
        audio.currentTime = 0;
        setCurrentTime(0);
        setProgress(0);
      }

      // 播放音频
      await audio.play();
      console.log("音乐播放");
      setIsPlaying(true);
    } catch (error) {
      console.error("播放失败:", error);
    }
  }, []);

  // 暂停播放
  const pause = useCallback(() => {
    console.log("音乐暂停");
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  // 切换播放/暂停
  const togglePlay = useCallback(() => {
    console.log( "togglePlay");
    console.log(audioRef.current, "audioRef.current");
    console.log(currentSong, "currentSong");
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      console.log("pause");
      pause();
    } else {
      console.log("else");
      // 如果当前有音频源但未播放，直接使用 play 方法
      if (audioRef.current.src) {
        // 保存当前时间
        const currentPosition = audioRef.current.currentTime;

        audioRef.current
          .play()
          .then(() => {
            console.log("play");
            // 确保播放位置不变
            audioRef.current.currentTime = currentPosition;
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("播放失败:", error);
            setIsPlaying(false);
          });
      } else {
        // 如果没有音频源，重新设置
        console.log("play-else");
        play(currentSong.url);
      }
    }
  }, [isPlaying, currentSong, pause, play]);

  // 进度条拖动
  const seekTo = useCallback(
    (value) => {
      if (!audioRef.current) return;
      const audio = audioRef.current;
      const newTime = (value / 100) * totalTime;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value);
      return newTime;
    },
    [totalTime]
  );

  // 添加新方法：播放新歌曲
  const playNewSong = useCallback((songInfo) => {
    setCurrentSong(songInfo);
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    audio.src = songInfo.url;
    audio.currentTime = 0;
    setCurrentTime(0);
    setProgress(0);
    
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("播放失败:", error);
        setIsPlaying(false);
      });
  }, []);

  const value = {
    currentTime,
    totalTime,
    progress,
    isPlaying,
    currentSong,
    volume,
    setVolume,
    setCurrentSong,
    play,
    pause,
    togglePlay,
    seekTo,
    playNewSong,
  };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};

// 自定义hook用于获取context
export const useMusicPlayer = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicProvider");
  }
  return context;
};
