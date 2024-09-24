const BackgroundVideo = () => {
  return (
    <video
      loop
      autoPlay
      muted
      width="100%"
      className="object-cover max-h-[20rem]"
    >
      <source src="/clip.mp4" type="video/mp4" />
      Your browser does not support this video.
    </video>
  );
};

export default BackgroundVideo;
