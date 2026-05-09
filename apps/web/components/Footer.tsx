import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>Prompt<span>Library</span></h2>
            <p>Built with ❤️ by the community</p>
            <div className={styles.statusBadge}>🟢 Operational</div>
          </div>
          
          <div className={styles.linksCol}>
            <h3>Navigation</h3>
            <a href="#">Academy - Learn AI</a>
            <a href="#">Advertise</a>
            <a href="#">Tools</a>
            <a href="#">Blog</a>
            <a href="#">Plans</a>
          </div>

          <div className={styles.linksCol}>
            <h3>Community</h3>
            <a href="#">Best AI Prompts</a>
            <a href="#">Midjourney Prompts</a>
            <a href="#">ChatGPT Prompts</a>
            <a href="#">Stable Diffusion</a>
            <a href="#">Flux Prompts</a>
          </div>

          <div className={styles.linksCol}>
            <h3>Tools</h3>
            <a href="#">Wallpaper Generator</a>
            <a href="#">Logo Generator</a>
            <a href="#">Tattoo Generator</a>
            <a href="#">Face Rater</a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2026 Prompt Library. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
