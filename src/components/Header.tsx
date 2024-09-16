import { useRouter } from "next/router";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  const onPressBack = () => router.back();

  return (
    <div className="flex justify-between items-center px-5 py-3">
      <button onClick={onPressBack}>
        <span className="material-icons text-[24px]">arrow_back_ios</span>
      </button>

      <span className="text-lg font-bold">{title}</span>

      <button>
        <span className="material-icons text-[24px]">photo_camera</span>
      </button>
    </div>
  );
};

export default Header;
