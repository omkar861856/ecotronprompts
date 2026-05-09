"use client";

import styles from "./PromptCard.module.css";
import Link from "next/link";

interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  mediaUrl?: string;
  mediaType?: "image" | "video";
}

interface PromptCardProps {
  prompt: Prompt;
}

export const PromptCard = ({ prompt }: PromptCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/prompts/${prompt.id}`} className={styles.cardLink}>
        <div className={styles.mediaWrapper}>
          {prompt.mediaType === "video" ? (
            <video 
              src={prompt.mediaUrl} 
              className={styles.media}
              muted
              loop
              onMouseOver={e => e.currentTarget.play()}
              onMouseOut={e => e.currentTarget.pause()}
              playsInline
            />
          ) : (
            <img 
              src={prompt.mediaUrl || "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=500"} 
              alt={prompt.title} 
              className={styles.media} 
              loading="lazy"
            />
          )}
          
          <div className={styles.overlay}>
            <div className={styles.overlayTop}>
              <span className={styles.categoryBadge}>{prompt.category}</span>
            </div>
            
            <div className={styles.overlayBottom}>
              <h3 className={styles.title}>{prompt.title}</h3>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  <img src="/images/admin.jpg" alt="Admin" className={styles.avatarImg} />
                </div>
                <span className={styles.authorName}>Curated by Admin</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

