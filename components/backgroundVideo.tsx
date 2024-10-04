interface Props {
  fullscreen?: boolean;
}

const BackgroundVideo = ({ fullscreen = false }: Props) => {
  if (fullscreen)
    return (
      <div className="min-h-screen">
        <video
          loop
          autoPlay
          muted
          width="100%"
          height="100%"
          className="md:min-h-screen"
        >
          <source src="/videos/clip.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>
    );
  else
    return (
      <video
        loop
        autoPlay
        muted
        width="100%"
        className="hero object-cover max-h-[20rem] mt-[-16px]"
      >
        <source src="/videos/clip.mp4" type="video/mp4" />
        Your browser does not support this video.
      </video>
    );
};

export default BackgroundVideo;
