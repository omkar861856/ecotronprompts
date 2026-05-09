"use client";

import React, { useState, useMemo, useEffect } from "react";
import { PromptCard } from "./PromptCard";
import styles from "./PromptLibrary.module.css";
import { Search, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AdBanner } from "./AdBanner";

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

const CATEGORIES = ["All", "Media", "NoMedia", "Coding", "Creative", "Business"];

export const PromptLibrary = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchPrompts = async () => {
      try {
        const response = await fetch('/api/prompts', { cache: 'no-store' });
        const data = await response.json();
        
        const validPrompts = data.filter((p: any) => {
          if (p.isPublished === false) return false;
          const needsMedia = p.requiresMedia || p.category?.trim().toLowerCase() === "media";
          const hasMedia = p.mediaUrl && p.mediaUrl.trim() !== "";
          if (needsMedia && !hasMedia) return false;
          return true; 
        });
        
        setPrompts(validPrompts);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);
  
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    prompts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).slice(0, 8);
  }, [prompts]);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery, prompts]);

  if (!mounted) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbarContainer}>
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Search prompts..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className={styles.clearButton} onClick={() => setSearchQuery("")}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterButton} ${filter === cat ? styles.active : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {allTags.length > 0 && (
          <div className={styles.recommendations}>
            <span className={styles.recLabel}>Trending:</span>
            {allTags.map((tag) => (
              <button key={tag} className={styles.tag} onClick={() => setSearchQuery(tag)}>
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.mainContent}>
        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner} />
            <p>Curating your gallery...</p>
          </div>
        ) : (
          <motion.div layout className={styles.masonryGrid}>
            <AnimatePresence mode="popLayout">
              {filteredPrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className={styles.gridItem}
                >
                  <PromptCard prompt={prompt} />
                  
                  {/* Strategic Ad Placement */}
                  {index > 0 && index % 12 === 0 && (
                    <div className={styles.inlineAd}>
                      <AdBanner 
                        adKey="419b347d315cd1215c1db06b7db000a5" 
                        width={300} 
                        height={250} 
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredPrompts.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No prompts found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
            <button className={styles.resetBtn} onClick={() => { setSearchQuery(""); setFilter("All"); }}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

