import useFinalCountdown from "react-hook-final-countdown";

export function useCountdown(): {
  imageCount: number;
  countdown: number;
} {
  const countdown = Math.floor(
    useFinalCountdown(new Date(2022, 4, 21).valueOf(), 1000) /
      1000 /
      60 /
      60 /
      24
  );

  let imageCount = Math.max(0, 90 - countdown);

  return { imageCount, countdown };
}
