import '../studiosBest/studiosBest.scss';
export function SectionBestAudio() {
  return (
    <>
      <div className="best-audio-container">
        <div className="best-audio-image-content-mobile">
          <img
            src={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-best-gear.jpg`}
            alt=""
          />
        </div>
        <div className="best-audio-image-content-tablet">
          <img
            src={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`}
            alt=""
          />
        </div>
        <div className="best-audio-content">
          <h2>
            bringing you the <span>best</span> audio gear
          </h2>

          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="best-audio-image-content">
          <img
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
