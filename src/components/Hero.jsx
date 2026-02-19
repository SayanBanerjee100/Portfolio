import { useState, useEffect } from "react";

export default function Hero() {
  const [profileImage, setProfileImage] = useState("/profile.jpg");

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <section className="hero">
      <div className="profile-image-container">
        {profileImage && profileImage !== "/profile.jpg" ? (
          <img src={profileImage} alt="Profile" className="profile-image" />
        ) : (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
            onError={() => setProfileImage("https://via.placeholder.com/150?text=Your+Photo")}
          />
        )}
        <br />
        <label htmlFor="photo-upload" className="upload-photo-btn">
          📸 Upload Photo
        </label>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="photo-upload-input"
          onChange={handlePhotoUpload}
        />
      </div>
      <h1>Hi, I'm Sayan 👋</h1>
      <p>Aspiring Software Engineer | Spring Boot | Cloud & DevOps</p>
      <div className="btn-group">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="/resume.pdf" className="btn btn-secondary" target="_blank">Download Resume</a>
      </div>
    </section>
  );
}
