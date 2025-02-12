import { useEffect, useRef } from 'react';

export const useCanvas = (callback) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 确保在浏览器环境中运行
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 执行传入的回调函数
    callback(ctx, canvas);

    // 清理函数
    return () => {
      // 如果需要清理canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [callback]);

  return canvasRef;
}; 