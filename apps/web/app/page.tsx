import { PromptLibrary } from "../components/PromptLibrary";
import styles from "./page.module.css";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Premium Prompt Library</span>
          </div>
          <h1 className={styles.heroTitle}>
            Unleash Your <span className={styles.gradientText}>Creative Potential</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover a curated collection of high-performance AI prompts for FLUX, Midjourney, and Stable Diffusion. Crafted for professionals, designers, and artists.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>1,200+</span>
              <span className={styles.statLabel}>Prompts</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>50k+</span>
              <span className={styles.statLabel}>Monthly Users</span>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.content}>
        <PromptLibrary />
      </div>
    </main>
  );
}

