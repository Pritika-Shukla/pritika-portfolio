"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

type TDiscord = {
  userId: string;
  userName: string;
  activityDetailClass?: string;
  activityDescriptionClass?: string;
  activityImageClassName?: string;
  progressBarClassName?: string;
  localTimeClass?: string;
};

type TActivityImage = {
  largeActivityImage: string;
  smallActivityImage: string;
  isActivity: boolean;
  isSpotifyPlaying: boolean;
};

/**
 * visual studio code activity
 */
type TActivity = {
  application_id: string;
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  details: string;
  id: string;
  name: string;
  state: string;
};

type TDiscordUser = {
  details: string;
  discord_status: string;
  username: string;
  avatar: string;
  id: string;
};

type TSpotifyData = {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: {
    start: number;
    end: number;
  };
  track_id: string;
};

type TActivityDetail = {
  detail: string;
  description: string;
};

export const Discord: React.FC<TDiscord> = ({
  userId,
  userName,
  activityDescriptionClass,
  activityImageClassName,
  activityDetailClass,
  progressBarClassName,
  localTimeClass,
}: TDiscord) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activityImage, setActivityImage] = useState<TActivityImage>({
    largeActivityImage: "",
    smallActivityImage: "",
    isActivity: true,
    isSpotifyPlaying: false,
  });
  const [activityDetais, setActivityDetails] = useState<TActivityDetail>({
    detail: "",
    description: "",
  });

  const [progress, setProgress] = useState<number>(0);
  function musicProgress(spotify: Pick<TSpotifyData, "timestamps">) {
    const totalTime = spotify.timestamps.end - spotify.timestamps.start;
    const progress =
      100 - (100 * (spotify.timestamps.end - new Date().getTime())) / totalTime;
    setProgress(progress);
  }
   useDiscord({
    userId,
    setIsLoading,
    setActivityImage,
    musicProgress,
    setActivityDetails,
  });

  return (
    <div className="my-6">
      {isLoading ? (
        <DiscordSkeleton />
      ) : (
        <div className="flex items-center gap-2">
          <ImageCont
            activityImage={activityImage || "./default.png"}
            activityImageClassName={activityImageClassName || "./default.png"}
          />
          <div className="flex flex-col justify-center items-start gap-2">
            <AcitvityInfo
              activityDetais={activityDetais}
              activityDescriptionClass={activityDescriptionClass}
              activityDetailClass={activityDetailClass}
            />
            {activityImage.isSpotifyPlaying ? (
              <Progress
                value={progress}
                className=" w-[100px] md:w-[200px] h-[3px] text-red-500 "
                progressBarClassName={progressBarClassName}
              />
            ) : null}
            <div className="flex flex-row flex-nowrap gap-2">
              <span className="capitalize">{userName}</span>
              <span className="hidden sm:inline"> • </span>
              <LocalTime localTimeClass={localTimeClass} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AcitvityInfo = ({
  activityDetais,
  activityDetailClass,
  activityDescriptionClass,
}: {
  activityDetais: TActivityDetail;
  activityDetailClass?: string;
  activityDescriptionClass?: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className={cn("text-base font-semibold mb-1", activityDetailClass)}>
        {activityDetais.detail}
      </span>
      <span className={cn("text-sm", activityDescriptionClass)}>
        {activityDetais.description}
      </span>
    </div>
  );
};

type TUseDiscord = {
  userId: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setActivityImage: React.Dispatch<React.SetStateAction<TActivityImage>>;
  musicProgress: (spotify: Pick<TSpotifyData, "timestamps">) => void;
  setActivityDetails: React.Dispatch<React.SetStateAction<TActivityDetail>>;
};

const useDiscord = ({
  userId,
  setIsLoading,
  setActivityImage,
  musicProgress,
  setActivityDetails,
}: TUseDiscord) => {
  useEffect(() => {
    let lanyard: WebSocket | null = null;
    const connect = () => {
      lanyard = new WebSocket(`wss://api.lanyard.rest/socket`);
      if (!lanyard) {
        return;
      }
      lanyard.onmessage = (event) => {
        const json = JSON.parse(event.data);
        const opCode = json.op;
        const data: {
          discord_user: TDiscordUser;
          discord_status: string;
          heartbeat_interval: number;
          activities: TActivity[];
          listening_to_spotify: boolean;
          spotify: TSpotifyData;
        } = json.d;

        if (opCode === 1) {
          let heartbeatInterval: NodeJS.Timer | number =
            data.heartbeat_interval;
          lanyard?.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_id: userId },
            })
          );

          if (heartbeatInterval) {
            heartbeatInterval = setInterval(() => {
              lanyard?.send(
                JSON.stringify({
                  op: 3,
                })
              );
            }, heartbeatInterval);
          }
        } else if (opCode === 0) {
          if (data.listening_to_spotify) {
            const spotifyData = data.spotify;
            setActivityImage({
              largeActivityImage: spotifyData.album_art_url,
              smallActivityImage: spotifyData.album_art_url,
              isActivity: true,
              isSpotifyPlaying: true,
            });
            musicProgress(spotifyData);
            setActivityDetails({
              detail: spotifyData.artist,
              description: spotifyData.song,
            });
            setIsLoading(false);
          } else if (data.activities && data.activities[0]) {
            const activity = data.activities[0];
            const largeImage = activity.assets?.large_image.includes("http")
              ? "https://" +
                activity.assets.large_image.replace(
                  /^mp:external\/[^\/]+\/https\//,
                  ""
                )
              : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`;
            const smallImage = activity.assets?.small_image.includes("http")
              ? "https://" +
                activity.assets.small_image.replace(
                  /^mp:external\/[^\/]+\/https\//,
                  ""
                )
              : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.webp?size=512`;
            setActivityImage({
              largeActivityImage: largeImage,
              smallActivityImage: smallImage,
              isActivity: true,
              isSpotifyPlaying: false,
            });
            setActivityDetails({
              detail: activity.details,
              description: activity.state,
            });
            setIsLoading(false);
          } else {
            const user = data;
            const largeImage = user.discord_user?.avatar
              ? `https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user?.avatar}.png?size=512`
              : "/default.png";

            setActivityImage({
              largeActivityImage: largeImage,
              smallActivityImage: largeImage,
              isActivity: false,
              isSpotifyPlaying: false,
            });
            let status =
              user.discord_status.charAt(0).toUpperCase() +
              user.discord_status.slice(1);
            status = status === "Dnd" ? "Do Not Disturb" : status;

            setActivityDetails({
              detail: user.discord_user.username,
              description: status,
            });

            setIsLoading(false);
          }
        }
      };
    };
    connect();
  });
};

type TImageCont = {
  activityImageClassName?: string;
  activityImage: TActivityImage;
};

const ImageCont: React.FC<TImageCont> = ({
  activityImageClassName,
  activityImage,
}: TImageCont) => {
  return (
    <div
      className={cn(
        "relative max-w-[110px] ",
        activityImageClassName
      )}
    >
      {activityImage.largeActivityImage == "" ? (
        <div className="animate-pulse bg-gray-500 rounded-2xl  h-[110px]"></div>
      ) : (
        <Image
          src={activityImage.largeActivityImage || "/default.png"}
          className={cn(
            " select-none",
            `${
              activityImage.isSpotifyPlaying &&
              "animate-[spin_40s_linear_infinite] rounded-full"
            }`
          )}
          width={110}
          height={110}
          alt="Activity Image"
        />
      )}

      {!activityImage.isSpotifyPlaying && activityImage.isActivity && (
        <Image
          src={activityImage.smallActivityImage}
          height={40}
          width={40}
          className={cn(
            "absolute bottom-2 right-2 select-none bg-black/90 rounded-full border-2 border-black",
            {}
          )}
          alt="Activity Image"
        />
      )}
    </div>
  );
};

type TLocalTime = {
  localTimeClass?: string;
};

const LocalTime: React.FC<TLocalTime> = ({ localTimeClass }: TLocalTime) => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Format for mobile (no seconds)
  const timeNoSeconds = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  // Format for desktop (with seconds)
  const timeWithSeconds = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });

  return (
    <>
      <span className={cn('sm:hidden whitespace-nowrap', localTimeClass)}>{timeNoSeconds}</span>
      <span className={cn('hidden sm:inline whitespace-nowrap', localTimeClass)}>{timeWithSeconds}</span>
    </>
  );
};

type progressProps = {
  progressBarClassName?: string;
  value?: number;
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ className, progressBarClassName, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-purple-400 transition-all ",
        progressBarClassName
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";

export default Progress;

/**
 *
 * @description Clean skeleton component for discordPresence
 */
const DiscordSkeleton: React.FC = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="w-24  h-24 bg-gray-700 animate-pulse rounded-2xl"></div>
      <div className="flex flex-col  gap-3 items-start">
        <div className="w-32  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        <div className="w-36  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        <div className="flex justify-start items-center gap-3">
          <div className="w-16  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
          <div className="w-16  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
