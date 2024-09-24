const BackgroundVideo = () => {
  return (
    <video loop autoPlay muted>
      <source src="/clip.mp4" type="video/mp4" />
      Your browser does not support this video.
    </video>
  );
};

export default BackgroundVideo;
