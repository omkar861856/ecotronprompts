import { connectDB, Prompt, User } from "@repo/database";

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

  // Increment views
  await (Prompt as any).updateOne({ id }, { $inc: { 'stats.views': 1 } });


  // Fetch author
  const author = prompt.authorId ? await (User as any).findOne({ id: prompt.authorId }) : null;

  // Increment views in background (optional, but good for UX)
  // For now we just display the stats from DB

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
            <div className={styles.avatar}>
              {author?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className={styles.authorInfo}>
              <h3>{author?.username || "System Admin"}</h3>
              <p>{author?.role || "Verified Creator"} • @{author?.username || "admin"}</p>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{prompt.stats?.views || 0}</span>
              <span className={styles.statLabel}><Eye size={14} /> views</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{prompt.stats?.likes || 0}</span>
              <span className={styles.statLabel}><Heart size={14} /> likes</span>
            </div>
          </div>

          <div className={styles.paramsCard}>
            <div className={styles.paramGroup}>
              <h4>Model & Engine</h4>
              <div className={styles.badgeWrapper}>
                <span className={styles.badge}>{prompt.modelUsed || "Standard Model"}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.paramGroup}>
                <h4>Category</h4>
                <div className={styles.badgeWrapper}>
                  <span className={styles.badge}>{prompt.category}</span>
                </div>
              </div>
              {prompt.generationParams?.aspectRatio && (
                <div className={styles.paramGroup}>
                  <h4>Aspect Ratio</h4>
                  <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>{prompt.generationParams.aspectRatio}</span>
                  </div>
                </div>
              )}
            </div>

            {prompt.generationParams && (
              <div className={styles.techDetails}>
                <h4>Technical Parameters</h4>
                <div className={styles.techGrid}>
                  {prompt.generationParams.seed && <div><span>Seed</span> <code>{prompt.generationParams.seed}</code></div>}
                  {prompt.generationParams.guidanceScale && <div><span>Guidance</span> <code>{prompt.generationParams.guidanceScale}</code></div>}
                  {prompt.generationParams.steps && <div><span>Steps</span> <code>{prompt.generationParams.steps}</code></div>}
                </div>
              </div>
            )}

            <div className={styles.paramGroup}>
              <h4>Master Prompt</h4>
              <div className={styles.promptText}>
                {prompt.content}
                <button className={styles.copyBtn}><Copy size={14} /> Copy</button>
              </div>
            </div>
          </div>

          <div className={styles.commentsSection}>
            <h3>Community Interaction ({prompt.comments?.length || 0})</h3>
            <div className={styles.commentInputWrapper}>
              <input placeholder="Add a thought..." className={styles.commentInput} />
              <button className={styles.postBtn}>Post</button>
            </div>
            <div className={styles.commentsList}>
              {prompt.comments?.map((c: any) => (
                <div key={c.id} className={styles.commentItem}>
                  <strong>@{c.username}</strong>
                  <p>{c.content}</p>
                </div>
              ))}
              {(prompt.comments?.length || 0) === 0 && <p className={styles.noComments}>Be the first to comment!</p>}
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

