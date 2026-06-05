import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">

        <video  
          src="/planet-video.mp4" 
          autoPlay
          muted
          loop
          playsInline
          className="video"
        >
          your browser does not support the video tag
      </video>
      </div>

      <div className="content">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing
          <strong> mass</strong>, <strong>diameter</strong>,
          <strong> gravity</strong>, and <strong>density</strong>,
          we gain insight into how planets form, behave, and interact
          within the solar system.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;