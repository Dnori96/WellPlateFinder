import bluesky from '@/images/icons/icon-bluesky.svg';
import instagram from '@/images/icons/icon-instagram.svg';
import tiktok from '@/images/icons/icon-tiktok.svg';

export default function Footer() {
  return (
    <>
      <div className="bg-primary-Neutral-200 h-px mt-10"></div>
      <footer className="p-[40px_20px] w-full">
        <div className="flex items-center justify-between max-md:flex-col-reverse max-md:gap-4">
          <div>
            <p>Made with ❤️ and 🥑</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/" target="blank">
              <img src={instagram} alt="Link to Instagram Logo" />
            </a>
            <a href="https://bsky.app/" target="blank">
              <img src={bluesky} alt="Link to Bluesky Logo" />
            </a>
            <a href="https://www.tiktok.com/en/" target="blank">
              <img src={tiktok} alt="Link to Tiktok Logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
