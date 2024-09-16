import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import ToastMsg from "@/components/ToastMsg";

type MicStatus = "idle" | "recording" | "paused";

export default function Recorder() {
  const [micStatus, setMicStatus] = useState<MicStatus>("idle");
  const [timeInSec, setTimeInSec] = useState(0);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const onClickMic = () => {};

  const renderMicIcon = () => {
    switch (micStatus) {
      case "paused": {
        return (
          <span className="material-icons text-white text-[70px]">pause</span>
        );
      }
      case "recording":
      case "idle": {
        return (
          <span
            className={`material-icons text-${
              micStatus === "idle" ? "white" : "green-400"
            } text-[70px]`}
          >
            mic
          </span>
        );
      }
      default: {
        return (
          <span className="material-icons text-white text-[70px]">report</span>
        );
      }
    }
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const onPressPause = () => {
    setMicStatus("paused");
  };

  const onPressSave = () => {};

  return (
    <div className="h-screen bg-white flex flex-col">
      <Header title="녹음하기" />

      <div className="flex flex-1 flex-col justify-center items-center">
        <button
          className="bg-black rounded-full w-[120px] h-[120px]"
          onClick={onClickMic}
        >
          {renderMicIcon()}
        </button>

        <span className="text-xl my-8">{formatTime(timeInSec)}</span>

        <div>
          {micStatus === "recording" && (
            <Button
              iconName="pause"
              text="일시정지"
              onClick={onPressPause}
              buttonStyle="mb-4"
            />
          )}

          {micStatus !== "idle" && (
            <Button
              iconName="check"
              text="저장하기"
              onClick={onPressSave}
              buttonStyle="bg-green-400"
            />
          )}
        </div>
      </div>

      <ToastMsg
        message="저장이 완료되었습니다."
        type="success"
        isVisible={isToastVisible}
      />
    </div>
  );
}
