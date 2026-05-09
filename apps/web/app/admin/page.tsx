"use client";

import { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { Plus, Trash2, Edit2, LogOut, Save, X, Users, MessageSquare, ShieldCheck } from "lucide-react";

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'contributor';
}

interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  mediaUrl?: string;
  mediaType?: "image" | "video";
  authorId?: string;
  isPublished: boolean;
  requiresMedia: boolean;
  modelUsed?: string;
  generationParams?: {
    prompt?: string;
    negativePrompt?: string;
    seed?: number;
    guidanceScale?: number;
    steps?: number;
    sampler?: string;
    aspectRatio?: string;
  };
  stats?: {
    likes: number;
    views: number;
    favourites: number;
  };
}


export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"prompts" | "users">("prompts");
  
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  
  const [editingPrompt, setEditingPrompt] = useState<Partial<Prompt> | null>(null);
  const [editingUser, setEditingUser] = useState<Partial<User> | null>(null);
  
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaFilter, setMediaFilter] = useState("All");
  const [isUploading, setIsUploading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const fetchPrompts = async () => {
    try {
      const res = await fetch("/api/prompts", { cache: 'no-store' });
      const data = await res.json();
      if (Array.isArray(data)) {
        setPrompts(data);
      } else {
        console.error("Prompts data is not an array:", data);
        setPrompts([]);
      }
    } catch (err) {
      console.error("Failed to fetch prompts:", err);
      setPrompts([]);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("Users data is not an array:", data);
        setUsers([]);
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setUsers([]);
    }
  };


  useEffect(() => {
    if (isLoggedIn) {
      fetchPrompts();
      fetchUsers();
    }
  }, [isLoggedIn]);

  const handleDeletePrompt = async (id: string) => {
    if (confirm("Are you sure you want to delete this prompt?")) {
      await fetch(`/api/prompts/${id}`, { method: "DELETE" });
      fetchPrompts();
    }
  };

  const [isSaving, setIsSaving] = useState(false);
  
  const handleSavePrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    setIsSaving(true);
    
    try {
      const method = editingPrompt?.id ? "PUT" : "POST";
      const url = editingPrompt?.id ? `/api/prompts/${editingPrompt.id}` : "/api/prompts";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPrompt),
      });
      
      if (res.ok) {
        setEditingPrompt(null);
        fetchPrompts();
      } else {
        const errorData = await res.json();
        alert(`Error saving prompt: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setIsSaving(false);
    }
  };


  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingUser),
    });
    
    if (res.ok) {
      setEditingUser(null);
      fetchUsers();
    } else {
      const errorData = await res.json();
      alert(`Error saving user: ${errorData.error || "Unknown error"}`);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setEditingPrompt(prev => ({ ...prev, mediaUrl: data.url, mediaType: file.type.startsWith("video") ? "video" : "image" }));
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const filteredPrompts = prompts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMedia = mediaFilter === "All" ? true :
                         mediaFilter === "Media" ? !!p.mediaUrl : p.category === "NoMedia";
    return matchesSearch && matchesMedia;
  });

  if (!isLoggedIn) {
    return (
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <ShieldCheck size={48} className={styles.loginIcon} />
          <h1>Admin Control</h1>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Unlock Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.adminBadge}>Admin</div>
          <h2>Panel</h2>
        </div>
        <nav className={styles.nav}>
          <button 
            className={`${styles.navItem} ${activeTab === "prompts" ? styles.active : ""}`}
            onClick={() => setActiveTab("prompts")}
          >
            <MessageSquare size={20} />
            Prompts
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === "users" ? styles.active : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <Users size={20} />
            User Management
          </button>
        </nav>
        <button className={styles.logoutBtn} onClick={() => setIsLoggedIn(false)}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <main className={styles.main}>
        {activeTab === "prompts" ? (
          <>
            <header className={styles.header}>
              <h1>Prompt Inventory</h1>
              <button className={styles.addBtn} onClick={() => setEditingPrompt({ title: "", description: "", content: "", category: "Coding", tags: [], mediaType: "image", mediaUrl: "", isPublished: false, requiresMedia: true })}>
                <Plus size={18} /> New Prompt
              </button>
            </header>

            <div className={styles.filtersBar}>
              <div className={styles.searchWrapper}>
                <input 
                  type="text" 
                  placeholder="Filter inventory..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select 
                className={styles.select}
                value={mediaFilter}
                onChange={(e) => setMediaFilter(e.target.value)}
              >
                <option value="All">All Assets</option>
                <option value="Media">Media Assets</option>
                <option value="NoMedia">Text Assets</option>
              </select>
            </div>

            <div className={styles.list}>
              {filteredPrompts.map((p) => (
                <div key={p.id} className={styles.listItem}>
                  <div className={styles.itemInfo}>
                    <h3>{p.title}</h3>
                    <div className={styles.itemMeta}>
                      <span className={styles.categoryTag}>{p.category}</span>
                      <span className={p.isPublished ? styles.publishedTag : styles.draftTag}>
                        {p.isPublished ? "Live" : "Draft"}
                      </span>
                    </div>
                  </div>
                  <div className={styles.itemActions}>
                    <button onClick={() => setEditingPrompt(p)}><Edit2 size={16} /></button>
                    <button onClick={() => handleDeletePrompt(p.id)} className={styles.deleteBtn}><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <header className={styles.header}>
              <h1>User Management</h1>
              <button className={styles.addBtn} onClick={() => setEditingUser({ username: "", email: "", role: "contributor" })}>
                <Plus size={18} /> Create Contributor
              </button>
            </header>

            <div className={styles.list}>
              {users.map((u) => (
                <div key={u.id} className={styles.listItem}>
                  <div className={styles.itemInfo}>
                    <h3>{u.username}</h3>
                    <div className={styles.itemMeta}>
                      <span className={styles.emailTag}>{u.email}</span>
                      <span className={u.role === 'admin' ? styles.adminRoleTag : styles.contributorRoleTag}>
                        {u.role}
                      </span>
                    </div>
                  </div>
                  <div className={styles.itemActions}>
                    <button onClick={() => {}} disabled><Edit2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Prompt Modal */}
      {editingPrompt && (
        <div className={styles.modalOverlay} onClick={() => setEditingPrompt(null)}>
          <form className={styles.modal} onSubmit={handleSavePrompt} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingPrompt.id ? "Edit Prompt" : "Create New Prompt"}</h2>
              <button type="button" onClick={() => setEditingPrompt(null)}><X size={24} /></button>
            </div>
            <div className={styles.modalBody}>
              {editingPrompt.mediaUrl && (
                <div className={styles.mediaPreview}>
                  {editingPrompt.mediaType === "video" ? (
                    <video src={editingPrompt.mediaUrl} controls className={styles.previewContent} />
                  ) : (
                    <img src={editingPrompt.mediaUrl} alt="Preview" className={styles.previewContent} />
                  )}
                  <button 
                    type="button" 
                    className={styles.removeMediaBtn}
                    onClick={() => setEditingPrompt({...editingPrompt, mediaUrl: "", mediaType: "image"})}
                  >
                    <Trash2 size={14} /> Remove Media
                  </button>
                </div>
              )}

              <div className={styles.inputGroup}>

                <label>Prompt Author</label>
                <select 
                  value={editingPrompt.authorId || ""} 
                  onChange={(e) => setEditingPrompt({...editingPrompt, authorId: e.target.value})}
                  required
                >
                  <option value="">Select an Author</option>
                  <option value="admin">System Admin</option>
                  {users.map(u => (
                    <option key={u.id} value={u.id}>{u.username} ({u.role})</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Title</label>
                <input 
                  value={editingPrompt.title || ""} 
                  onChange={(e) => setEditingPrompt({...editingPrompt, title: e.target.value})}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Short Description (SEO & Listing)</label>
                <input 
                  value={editingPrompt.description || ""} 
                  onChange={(e) => setEditingPrompt({...editingPrompt, description: e.target.value})}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Prompt Context (The Logic)</label>
                <textarea 
                  className={styles.textarea}
                  value={editingPrompt.content || ""} 
                  onChange={(e) => setEditingPrompt({...editingPrompt, content: e.target.value})}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Tags (Comma separated)</label>
                <input 
                  value={editingPrompt.tags?.join(", ") || ""} 
                  onChange={(e) => setEditingPrompt({...editingPrompt, tags: e.target.value.split(",").map(t => t.trim()).filter(t => t !== "")})}
                  placeholder="e.g. flux, realistic, hyperdetailed"
                />
              </div>


              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Category</label>
                  <select 
                    value={editingPrompt.category} 
                    onChange={(e) => setEditingPrompt({...editingPrompt, category: e.target.value})}
                  >
                    <option value="Media">Visual Prompt</option>
                    <option value="Coding">Coding</option>
                    <option value="Creative">Creative Writing</option>
                    <option value="Business">Business Strategy</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Status</label>
                  <div className={styles.toggleRow}>
                    <input 
                      type="checkbox" 
                      checked={editingPrompt.isPublished !== false} 
                      onChange={(e) => setEditingPrompt({...editingPrompt, isPublished: e.target.checked})}
                    />
                    <span>Publish publicly</span>
                  </div>
                </div>
              </div>

              <div className={styles.mediaUploadSection}>
                <label>Media Asset (Optional)</label>
                <div className={styles.uploadControl}>
                  <input 
                    placeholder="External URL..."
                    value={editingPrompt.mediaUrl || ""} 
                    onChange={(e) => setEditingPrompt({...editingPrompt, mediaUrl: e.target.value})}
                  />
                  <label className={styles.fileLabel}>
                    <input type="file" onChange={handleFileUpload} hidden />
                    {isUploading ? "..." : "Upload"}
                  </label>
                </div>
              </div>
              <div className={styles.row}>

                <div className={styles.inputGroup}>
                  <label>AI Model Used</label>
                  <select 
                    value={editingPrompt.modelUsed || ""} 
                    onChange={(e) => setEditingPrompt({...editingPrompt, modelUsed: e.target.value})}
                  >
                    <option value="">Select Model</option>
                    <option value="FLUX.1 [dev]">FLUX.1 [dev]</option>
                    <option value="FLUX.1 [schnell]">FLUX.1 [schnell]</option>
                    <option value="Midjourney v6.1">Midjourney v6.1</option>
                    <option value="Stable Diffusion 3">Stable Diffusion 3</option>
                    <option value="DALL-E 3">DALL-E 3</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Aspect Ratio</label>
                  <input 
                    placeholder="e.g. 16:9"
                    value={editingPrompt.generationParams?.aspectRatio || ""} 
                    onChange={(e) => setEditingPrompt({
                      ...editingPrompt, 
                      generationParams: { ...(editingPrompt.generationParams || {}), aspectRatio: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className={styles.techParams}>
                <h3>Generation Parameters</h3>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label>Seed</label>
                    <input 
                      type="number"
                      value={editingPrompt.generationParams?.seed || ""} 
                      onChange={(e) => setEditingPrompt({
                        ...editingPrompt, 
                        generationParams: { ...(editingPrompt.generationParams || {}), seed: parseInt(e.target.value) }
                      })}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Guidance Scale (CFG)</label>
                    <input 
                      type="number"
                      step="0.1"
                      value={editingPrompt.generationParams?.guidanceScale || ""} 
                      onChange={(e) => setEditingPrompt({
                        ...editingPrompt, 
                        generationParams: { ...(editingPrompt.generationParams || {}), guidanceScale: parseFloat(e.target.value) }
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button type="submit" className={styles.saveBtn} disabled={isSaving}>
                <Save size={18} /> {isSaving ? "Saving..." : "Confirm Changes"}
              </button>
            </div>

          </form>
        </div>
      )}

      {/* User Modal */}
      {editingUser && (
        <div className={styles.modalOverlay}>
          <form className={styles.modal} onSubmit={handleSaveUser}>
            <div className={styles.modalHeader}>
              <h2>Create New Contributor</h2>
              <button type="button" onClick={() => setEditingUser(null)}><X size={24} /></button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.inputGroup}>
                <label>Username</label>
                <input 
                  value={editingUser.username || ""} 
                  onChange={(e) => setEditingUser({...editingUser, username: e.target.value})}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  type="email"
                  value={editingUser.email || ""} 
                  onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Assigned Role</label>
                <select 
                  value={editingUser.role} 
                  onChange={(e) => setEditingUser({...editingUser, role: e.target.value as any})}
                >
                  <option value="contributor">Contributor (Publishing Rights)</option>
                  <option value="admin">Administrator (Full Rights)</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="submit" className={styles.saveBtn}>
                <Save size={18} /> Create Account
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

