import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { externalUrls } from '../constants/data';

interface StoreButtonsProps {
  /** Layout direction of the buttons. Defaults to "col". */
  direction?: 'row' | 'col';
}

const StoreButtons: React.FC<StoreButtonsProps> = ({ direction = 'col' }) => {
  const containerDirection = direction === 'row' ? 'flex-col sm:flex-row' : 'flex-col';

  return (
    <div className={`flex ${containerDirection} gap-3`}>
      <a
        href={externalUrls.playStore}
        target="blank"
        aria-label="Google Play"
        className="flex w-fit items-center gap-3 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors duration-200"
      >
        <FaGooglePlay className="text-2xl" />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-white/60 uppercase tracking-wide">Disponible en</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      </a>
      <a
        href={externalUrls.appStore}
        target="blank"
        aria-label="App Store"
        className="flex w-fit items-center gap-3 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors duration-200"
      >
        <FaApple className="text-2xl" />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-white/60 uppercase tracking-wide">Descarga en</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;
