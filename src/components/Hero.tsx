import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [profileImage, setProfileImage] = useState("/profile.jpg");

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, WebP, or GIF).');
        return;
      }

      if (file.size > maxSize) {
        alert('File size must be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        localStorage.setItem("profileImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="profile-image-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
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
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="photo-upload-input"
          onChange={handlePhotoUpload}
        />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Hi, I'm Sayan Banerjee 👋
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Software Engineer | Strong Foundations in Backend & Cloud | Eager to Learn & Grow
      </motion.p>
      <motion.div 
        className="btn-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="#projects" className="btn btn-primary">View Projects</a>
      </motion.div>
      <motion.a 
        href="#projects" 
        className="scroll-down" 
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        ↓
      </motion.a>
    </motion.section>
  );
}
