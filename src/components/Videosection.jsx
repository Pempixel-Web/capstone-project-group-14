import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video  
          src="https://github.com/manoabale/planet-video-code/raw/refs/heads/main/Untitled%20design.mp4" 
          autoPlay
          muted
          loop
          playsInline
          controls
          className="video"
        >
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