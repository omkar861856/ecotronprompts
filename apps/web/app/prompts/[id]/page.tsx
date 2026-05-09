import { connectDB, Prompt } from "@repo/database";
import { notFound } from "next/navigation";
import styles from "./PromptDetail.module.css";
import Link from "next/link";
import { Metadata } from 'next';
import { Download, Share2, Maximize, Copy, Heart, Eye } from "lucide-react";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  await connectDB();
  const prompt = await (Prompt as any).findOne({ id });
  if (!prompt) return { title: 'Prompt Not Found' };
  return {
    title: `${prompt.title} | Prompt Feed`,
    description: prompt.description,
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PromptDetailPage({ params }: PageProps) {
  const { id } = await params;
  await connectDB();
  const prompt = await (Prompt as any).findOne({ id });
  if (!prompt) notFound();

  // Fetch more by admin (limit 4)
  const morePrompts = await (Prompt as any).find({ id: { $ne: id }, isPublished: true }).limit(4);

  return (
    <div className={styles.container}>
      <div className={styles.mainLayout}>
        {/* Left: Media */}
        <section className={styles.mediaSection}>
          {prompt.mediaUrl ? (
            prompt.mediaType === "video" ? (
              <video 
                src={prompt.mediaUrl} 
                controls 
                autoPlay 
                muted 
                loop 
                className={styles.detailMedia} 
              />
            ) : (
              <img src={prompt.mediaUrl} alt={prompt.title} className={styles.detailMedia} />
            )
          ) : (
            <div className={styles.placeholder}>No Media Available</div>
          )}
        </section>

        {/* Right: Info */}
        <section className={styles.infoSection}>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>{prompt.title}</h1>
            
            <div className={styles.actionButtons}>
              <button className={styles.primaryBtn}>Generate with this Prompt</button>
              <div className={styles.secondaryRow}>
                <button className={styles.secondaryBtn}><Download size={18} /> Save</button>
                <button className={styles.secondaryBtn}><Share2 size={18} /> Share</button>
                <button className={styles.secondaryBtn}><Maximize size={18} /> View Full</button>
              </div>
            </div>
          </div>

          <div className={styles.authorCard}>
            <img src="/images/admin.jpg" className={styles.avatar} alt="Admin" />
            <div className={styles.authorInfo}>
              <h3>Prompt Curator</h3>
              <p>Verified Artist • @admin</p>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>12.4k</span>
              <span className={styles.statLabel}><Eye size={14} /> views</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>1.2k</span>
              <span className={styles.statLabel}><Heart size={14} /> favorites</span>
            </div>
          </div>

          <div className={styles.paramsCard}>
            <div className={styles.paramGroup}>
              <h4>Model & Engine</h4>
              <div className={styles.badgeWrapper}>
                <span className={styles.badge}>FLUX.1 [Dev]</span>
              </div>
            </div>

            <div className={styles.paramGroup}>
              <h4>Category</h4>
              <div className={styles.badgeWrapper}>
                <span className={styles.badge}>{prompt.category}</span>
              </div>
            </div>

            <div className={styles.paramGroup}>
              <h4>Master Prompt</h4>
              <div className={styles.promptText}>
                {prompt.content}
                <button className={styles.copyBtn}><Copy size={14} /> Copy</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* More by @admin */}
      <section className={styles.moreSection}>
        <h2>Recommended Explorations</h2>
        <div className={styles.moreGrid}>
          {morePrompts.map((p: any) => (
            <Link href={`/prompts/${p.id}`} key={p.id} className={styles.moreLink}>
              <div className={styles.moreThumbnail}>
                <img src={p.mediaUrl} alt={p.title} />
              </div>
              <p className={styles.moreItemText}>{p.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

