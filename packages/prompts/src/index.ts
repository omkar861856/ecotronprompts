export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "Coding" | "Creative" | "Business" | "Image" | "Video";
  tags: string[];
}

export const prompts: Prompt[] = [
  {
    "id": "1",
    "title": "Senior React Architect",
    "description": "Expert guidance on React architecture, state management, and performance optimization.",
    "content": "Act as a Senior React Architect with 10+ years of experience. I will provide you with a component or a problem statement, and you will analyze it for performance, scalability, and best practices. Suggest improvements using modern patterns like Composition, Compound Components, and Custom Hooks.",
    "category": "Coding",
    "tags": [
      "react",
      "architecture",
      "expert"
    ]
  },
  {
    "id": "2",
    "title": "Cinematic Storyteller",
    "description": "Transform simple ideas into rich, cinematic narratives with vivid imagery.",
    "content": "You are a world-class screenwriter and novelist. Your task is to expand the following premise into a cinematic scene description. Focus on sensory details, atmospheric lighting, and emotional subtext. Use professional screenplay formatting where appropriate.",
    "category": "Creative",
    "tags": [
      "writing",
      "story",
      "creative"
    ]
  },
  {
    "id": "3",
    "title": "SaaS Marketing Strategist",
    "description": "Develop high-converting marketing copy and growth strategies for B2B SaaS.",
    "content": "As an expert SaaS Marketing Strategist, help me draft a landing page copy for a new feature. Focus on the value proposition, pain points, and a strong call to action. Use the PAS (Problem-Agitation-Solution) framework.",
    "category": "Business",
    "tags": [
      "marketing",
      "saas",
      "copywriting"
    ]
  },
  {
    "id": "4",
    "title": "Midjourney Photorealistic Portrait",
    "description": "Generate highly detailed, photorealistic human portraits.",
    "content": "/imagine prompt: A hyper-realistic portrait of a [subject], 8k resolution, shot on 85mm lens, f/1.8, cinematic lighting, detailed skin texture, soft bokeh background, highly detailed eyes, masterwork --v 6.0",
    "category": "Image",
    "tags": [
      "midjourney",
      "photography",
      "portrait"
    ]
  },
  {
    "id": "seedance-1",
    "title": "Seedance 2.0: 15-Second Cinematic Japanese Romance Short Film",
    "description": "A highly detailed, 15-second multi-scene prompt for Seedance 2.0, designed to generate a cinematic, ultra-realistic Japanese high school pure love sho...",
    "content": "15-second cinematic Japanese drama pure love ambiguous short film, ultra-realistic quality, warm golden sunlight in an empty classroom in the afternoon, spilling through the blinds onto the side-by-side desks, fine dust motes slowly floating in the light beams, old wooden desks, extremely natural subtle movements, breathing, and eye tension, characters maintain consistent faces, clothing, and hairstyles throughout without deformation, drift, or artifacts, real slight chest rise and fall synchronized with breathing, shallow depth of field, creamy blurred background, warm film grain, 8K sharp, Japanese youth restrained heart-fluttering suffocating atmosphere.\n0-4 seconds: Extremely slow push-in shot from a medium shot of the desktop to a close-up of the two people's side profiles sitting side-by-side. A pure girl in a summer school uniform is focused on writing notes with her head down, long black hair and stray hairs by her ears are gently lifted by a slight breeze, long eyelashes cast subtle shadows, skin is naturally pink and tender, a slight, unintentional upturn of the corner of her mouth in concentration, light and even breathing.\n4-9 seconds: Switch to a close-up of the boy. His school uniform collar is slightly loose, he props his elbow on the desk and secretly turns his head to gaze at her, his eyes filled with gentle, restrained affection and tenderness, pupils slightly dilated, his Adam's apple gently rolls. Suddenly noticing her pen pause, he quickly and flusteredly turns his head to pretend to look at his own notes, his earlobes quickly turn slightly red, his fingertips tremble slightly as he grips the pen, occasionally glancing at her from under his bangs, his breathing is slightly disordered, and his lips are tightly pressed in an effort to remain calm.\n9-15 seconds: Extreme close-up of both faces in the same frame, slow-motion eyes suddenly meet: the girl slowly turns her head, first showing a dazed surprise, then quickly and shyly lowers her head for 0.3 seconds, gently biting her lower lip, her cheeks and earlobes instantly bloom with cherry blossom pink, her moist eyelashes timidly look up to meet his gaze again, while softly and shyly whispering, \"...What are you looking at?\"; the boy freezes completely, his pupils dilate, and he is stunned for 0.4 seconds, then flusteredly and quietly stutters in response, \"N-nothing...\". The girl whispers even quieter, biting her lip and peeking at him again, continuing to whisper, \"...Liar.\". The boy pauses, then gently sighs and whispers, \"...Just looking at you.\", the corner of his mouth slowly curls up into a shy, gentle, crooked smile, fine lines appear at the corners of his eyes, and his breathing noticeably deepens. An invisible current seems to pull the ambiguous tension between their faces, sharing each other's breathing temperature, the background completely melts into layers of creamy, dreamy light spots, warm halos, and fine air particles.\nLip synchronization is natural and precise, emotional micro-tremors and breathing are synchronized, dialogue is low-energy whispering with a shy tone, natural short pauses between 200-400 milliseconds, the mouth only moves slightly when speaking, without exaggeration or robotic feel, perfect natural lip-sync and emotional authenticity.\nOverall Sound Effects: Distant summer cicada chirping faintly, the soft scratching sound of the pen touching the paper, the almost inaudible low-frequency pulse of their heartbeats, finally fading into a very light, airy piano. The dialogue is completely naturally integrated into the scene as whispers, the girl's voice is soft and shy, the boy transitions from flustered stuttering to gentle.\nCharacter identity is maintained throughout, real subtle head tilts, eye movements, and breathing synchronization, no text, watermarks, or subtitles, pure Japanese style youth secret crush heart-fluttering suspense.",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-2",
    "title": "Hollywood Haute Couture Fantasy Video Prompt",
    "description": "A detailed, multi-scene video generation prompt for Seedance 2.0, designed to create a Hollywood Haute Couture Fantasy film. The prompt specifies styl...",
    "content": "[Style] Hollywood Haute Couture Fantasy blockbuster, 8K ultra-clear, Photorealistic, High-fashion Editorial Style, Unreal Engine 5 fluid rendering, visual illusion. [Duration] 15 seconds. [Scene] An endless, real-life Salar de Uyuni (Sky Mirror) salt flat. The sky is filled with oppressive dark clouds, and the ground perfectly reflects everything like a mirror, with the overall picture presenting a minimalist, cool tone. [00:00-00:05] Shot 1: Haute Couture Entrance and Porcelain Skin. Camera position: Extremely low-angle upward shot, ultra-telephoto lens zoom-in. Action: An Asian female model with a highly recognizable, high-fashion face walks coolly on the water surface. Effect: She is wearing not fabric, but a long dress made of flowing, real Liquid Blue-and-White Porcelain. As she walks, the skirt makes a crisp collision sound like real ceramic, with a flowing luster on the surface. The traditional blue-and-white patterns move across the white porcelain-textured skirt as if alive. [00:05-00:10] Shot 2: Physical Shattering and Ink-wash Descent. Camera position: Extreme close-up of the face, focus rapidly pulls back. Action: The model suddenly stops, stares coldly at the camera, and snaps her fingers crisply. Effect: The moment the fingers snap, her blue-and-white porcelain dress does not fall, but instantly explodes into thousands of extremely photorealistic Ink-wash Swallows. These swallows carry real water droplets and ink marks, dragging black fluid afterimages in the air, spinning frantically around her. [00:10-00:15] Shot 3: Dimensional Dissolution and Abyss Reflection. Camera position: High-altitude overhead shot, camera rapidly rotates and descends. Action: The swarm of ink-wash swallows plunges into the mirrored lake water beneath the model's feet. Effect: The surface tension of the originally solid salt lake instantly disappears. The entire extremely realistic world begins to violently bleed and dissolve like concentrated ink dropped into clear water. The real dark clouds and the model's figure transform entirely into an extremely grand 3D Fluid Ink Vortex, completely swallowing the camera into a black and white interwoven abyss.",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-3",
    "title": "Modern Rural Aesthetics Healing Short Film Video Prompt",
    "description": "A detailed, three-shot prompt for Seedance 2.0 to generate a healing, cinematic short film in the Modern Rural Aesthetics style. It specifies the styl...",
    "content": "[Style]\nModern Rural Aesthetics, Cinematic Commercial quality, shot with Sony A7S3/cinema camera, 4K/8K ultra-clear, Extreme Macro, natural transparent lighting, healing ASMR, no historical costume drama feel.\n\n[Scene]\nA well-maintained modern farmhouse open kitchen, background is a lush vegetable garden, bright sunshine.\n\n[Character]\nModern Rural Creator, black long hair casually tied up with a wooden hairpin, wearing a dark blue comfortable linen outfit, clear makeup, focused and peaceful eyes.\n\n[Shot Details]\n[00:00-00:05] Shot 1: Morning Harvest (The Freshness)\nVisuals: High-definition close-up. Morning sunlight hits the plants with side backlighting.\nAction: The Creator's bare hands (long, clean fingers) pick a bright red tomato with glistening dew drops from the vine.\nDetails: Extremely sharp focus, clearly showing the fuzz on the tomato surface and the trajectory of sliding water droplets. Background is blurred high-quality green.\n\n[00:05-00:10] Shot 2: Extreme Craftsmanship (The Craft)\nVisuals: Indoor stove area, full of life but spotless.\nAction: The Creator is cutting vegetables, movements are skilled and precise (non-performance nature).\nDetails: Macro lens captures the moment the knife blade slices through the ingredients, juice splattering. Then switches to the orange flame flickering in the earthen stove, light and shadow are warm and real.\n\n[00:10-00:15] Shot 3: Tranquil Time (The Moment)\nVisuals: Full shot/Medium shot.\nAction: A delicate home-cooked dish is placed on the wooden long table in the yard. The Creator sits down quietly, gently tidies a stray hair, and picks up a bite of food.\nAtmosphere: Steam slowly rises against the backlight, the scene is so quiet you can almost hear the wind, showcasing the ultimate sense of relaxation modern people yearn for.",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-4",
    "title": "Live-Action Anime Adaptation: Water vs. Thunder Breathing Duel",
    "description": "A highly detailed, 15-second prompt for generating a live-action adaptation of an anime-style duel, featuring 'Water Breathing' (blue water dragon) ve...",
    "content": "Live-Action Anime Adaptation · Breathing Technique Decisive Battle (15 seconds · Super Burning Special Effects Version)\n【Core Focus】: Water Breathing (Blue Water Dragon) VS Thunder Breathing (Golden Lightning), live-action extreme speed duel.\n\n【Style】: Hollywood live-action anime adaptation film quality, dark samurai style, 4K ultra-clear, extreme fast cuts, explosive particle light effects, no gore.\n【Duration】: 15 seconds\n【Scene】: Misty forest under the moonlight, muddy ground, falling leaves.\n\n[00:00-00:05] Shot 1: Water Melody Prelude · Starting Stance (Sense of charging)\nVisuals: A young samurai wearing a green and black checkered haori (jacket), lowering his center of gravity under the moonlight, gripping his sword with both hands.\nAction: He takes a breath, and the surrounding air instantly solidifies. As he draws his sword, a giant blue water dragon, condensed from high-pressure water flow, appears out of thin air, rotating rapidly around his body and blade, emitting the roar of flowing water.\nSpecial Effects Details: The water flow has a realistic sense of splashing, illuminating the dark forest.\n\n[00:05-00:10] Shot 2: Thunder Flash · Charge (Sense of extreme speed)\nVisuals: The opponent, a blonde swordsman wearing a yellow triangular patterned haori, is crouched extremely low, adopting the posture of Iaijutsu (sword drawing technique).\nAction: The ground suddenly explodes, and he instantly transforms into a dazzling golden lightning afterimage, refracting and charging through the forest in a \"Z\" shape at a speed undetectable by the naked eye.\nSpecial Effects Details: Golden electric arcs and scorched fallen leaves remain in the places he passes.\n\n[00:10-00:15] Shot 3: Water and Thunder Collision · Final Sound (Ultimate move clash)\nVisuals: Extreme speed collision. The young samurai swings the giant blue water dragon down to meet the attack, and the blonde swordsman, transformed into lightning, crashes into him head-on.\nAction: The two swords violently collide in the center of the frame.\nSpecial Effects Spectacle: The blue water dragon and the golden lightning instantly explode, forming a massive water-thunder energy storm that spreads outwards. The surrounding large trees are snapped in half by the energy wave, and mud and light obscure the camera. The scene ends in an extremely dazzling blue, yellow, and white light.",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-5",
    "title": "Seedance 2.0: 80-Year-Old Rapper MV",
    "description": "A detailed, 15-second prompt for Seedance 2.0 to generate a 16:9 horizontal street rap music video (MV) featuring an 80-year-old woman. The prompt spe...",
    "content": "16:9 horizontal screen, street rap MV style, neon purple and blue cool tones, explosive cool and fierce atmosphere. 0-3 seconds: Medium shot push-in, city street night scene with flashing neon lights, an 80-year-old silver-haired woman stands in front of a graffiti wall, short silver-white hair styled in a neat slick-back, distinct square face contour, sword-like eyebrows slanting towards the temples, eyes sharp like electricity, wrinkles at the corners of her eyes like badges of time, a confident smile on the corner of her mouth, wearing a black leather jacket over a white printed T-shirt (large black letters \"YOLO\" on the chest) + black cargo pants + white high-top sneakers, a thick gold chain necklace around her neck, silver bracelet on her wrist, holding up a microphone with both hands, strong drum beats of the BGM start, the old woman's eyes sharpen, and her lips open to start Rap. 3-7 seconds: Medium shot + close-up switch, the old woman starts rapping, with an extremely strong sense of rhythm, her silver hair flying with her head-nodding movements, one hand holding the microphone, the other hand making gestures to match the rhythm—index finger pointing at the camera, palm cutting the rhythm up and down, making hip-hop gestures, movements are smooth and flowing, eyes sharp and looking directly at the camera, wrinkles vividly jumping with her expression, lips opening and closing rapidly to spit out lyrics: [Rap Lyrics] \"Eighty-year-old legs, can jump better than you! Silver hair flowing, this is my pride! Don't call me old, my Flow is better than yours, when you were playing rap, I was listening to disco!\" (Fast speed, strong rhythm, fierce attitude) Quick cuts: facial close-ups, hand movements, full-body swaying, side silhouettes, synchronized with the BGM beat. 7-11 seconds: Dance segment, the camera pulls back to show the full body, the old woman starts dancing—first the classic hip-hop bounce, then a neat street dance freeze, followed by a body wave transmitting from the shoulders to the toes, and then a quick footwork workout, movements are clean and sharp, silver hair flies under the neon lights, the leather jacket flutters in the air, she continues to Rap while dancing: [Rap Lyrics] \"Legs and feet are nimble, speed is not slow, my lyrics are carved in time! You play with phones, I play with beats, eighty years of life, written into this verse!\" (Faster rhythm, stronger tone) Low-angle upward shot + 360-degree surrounding shot, capturing the old woman's cool and fierce dance moves. 11-15 seconds: Climax ending, the old woman makes a cool turn, her silver hair arcs in the air, she faces the camera and makes a \"shush\" gesture with her finger, then her lips move closer to the microphone, singing the last line in a low, magnetic voice: [Reality Lyrics] \"Time never defeats a beauty, I just changed the way I experience youth...\" (Slow rhythm, deep emotion, lingering finish) The camera slowly pushes in for a close-up of the old woman's eyes, the wrinkles at the corners of her eyes are all stories, her gaze is still sharp yet with a hint of kindness, the BGM abruptly stops at the climax, the frame freezes on the old woman's cool yet slightly gentle smile, vignetting + neon purple light halo.",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-6",
    "title": "Cinematic Street Racing Sequence for Seedance 2",
    "description": "A detailed, multi-shot prompt designed for Seedance 2 to generate a cinematic street racing sequence at night, focusing on intense driver focus, dynam...",
    "content": "cinematic street racing sequence at night, a focused driver inside a high-performance car grips the steering wheel, intense eye focus, city lights reflecting on windshield, tension building before sudden acceleration\n\ncamera: rapid multi-angle system with seamless transitions, interior close-up → over-the-shoulder → exterior tracking → low ground shots, ultra dynamic camera movement, whip pans + speed ramp transitions + motion blur masking cuts, continuous flow illusion\n\n(0-2s) interior close-up on driver, hand tightens on gear shift, subtle breathing, dashboard lights glowing\n(2-4s) over-the-shoulder shot, road ahead stretching into neon-lit city, engine vibration building\n(4-6s) extreme close-up on finger pressing NOS button, instant ignition reaction\n(6-8s) explosive acceleration, camera snaps to exterior side tracking shot, car launches forward with violent speed surge\n(8-10s) ultra low ground shot near asphalt, wheels spinning at extreme velocity, environment streaking past\n(10-12s) high-speed chase through tight streets, sharp turns, camera whip pans between angles, reflections and light trails enhancing speed\n\nDense urban night environment, wet asphalt reflecting neon lights, tunnel passages, street lights streaking, high-speed city atmosphere\nUltra realistic, fast and furious inspired energy, photorealistic lighting, intense motion blur, high contrast neon reflections, cinematic depth of field, extreme sense of speed, fluid transitions, no distortion, no stretching",
    "category": "Video",
    "tags": [
      "seedance",
      "video",
      "featured"
    ]
  },
  {
    "id": "seedance-all-0",
    "title": "Cinematic Espresso Preparation",
    "description": "📝 Sorted by publish date (newest first)",
    "content": "Cinematography: A stationary macro close-up shot, shallow depth of field, focused on a tall clear glass with condensation forming on the outside. Environment: Clean, minimalist dark slate countertop with warm amber undertones, a cinnamon stick resting casually in the background out of focus. Lighting: Warm, directional natural light casting long side shadows, highlighting the caramel tones of the drink and the frost forming on the glass. Style: Photorealistic, high-frame-rate textures (foamy espresso, crystalline ice, silky cold foam). Timed Sequence [00:00–00:15]: [00:00–00:03] Action: Dark brown sugar and a heavy pinch of cinnamon are spooned into a cocktail shaker. Two fresh espresso shots pour directly onto the sugar, dissolving it instantly into a dark, syrupy pool at the bottom.SFX: A granular scrape of sugar, then the sharp hiss of hot espresso hitting metal. [00:03–00:05] Action: A full scoop of ice is added to the shaker. The lid snaps on with a firm click.SFX: Loud, chaotic ice rattling settling into a dull metallic clunk as the lid locks. [00:05–00:08] Action: The shaker is vigorously shaken in frame — held low and close to camera — for several seconds. Frost begins forming on the outside of the metal instantly.SFX: Aggressive, rhythmic ice-against-metal shaking, loud and satisfying. [00:08–00:10] Action: The shaker lid is cracked open and the frothy, caramel-colored espresso streams out over fresh ice spheres in the waiting glass. The liquid is visibly aerated — light, foamy, and layered.SFX: A fast, bubbly liquid pour with faint crackling from the ice. [00:10–00:13] Action: Cold oat milk foam — thick and pourable — is spooned slowly over the back of a spoon so it floats in a clean white layer across the top of the drink without breaking.SFX: A dense, whispery glug as foam settles onto the surface. [00:13–00:15] Action: Ground cinnamon is tapped through a small sieve over the foam, landing in a warm rust-colored haze. A black paper straw is pressed through the foam layer with one clean push.SFX: A soft powder hiss, then a quiet foam puncture as the straw goes in.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-1",
    "title": "Garage CCTV Horror Creature",
    "description": "A cinematic horror prompt for a 15-second sequence showing a strange being with glowing eyes captured on a garage security camera.",
    "content": "Create a 15-second cinematic horror sequence involving a strange being with prominent glowing eyes captured in the garage CCTV camera.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-2",
    "title": "Animated Dancing Bear in Streetwear",
    "description": "This prompt generates a delightful video of an animated bear showcasing smooth dance moves in a sunny forest clearing, complete with trendy streetwear and detailed fur textures.",
    "content": "A cute animated bear dancing confidently in an open outdoor forest clearing during bright daytime, full body visible, smooth rhythmic dance movements, wearing trendy streetwear (hoodie + sneakers), cinematic lighting, realistic shadows, ultra-detailed fur texture, vibrant colors, 4K, stable camera, no blur, clean natural background",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-3",
    "title": "Shanghai Skyline Motorcycle Stunt",
    "description": "A high-action stunt prompt featuring a motorcycle jump from a collapsing construction crane across the Shanghai skyline to a rooftop.",
    "content": "A stunt rider in a matte-black helmet and armored racing suit accelerates a superbike along the narrow arm of a construction crane high above Shanghai’s skyline.\n\nAt the 2-second mark the crane begins to collapse, cables snapping and steel beams twisting.\n\nThe rider hits the end of the crane arm and launches the motorcycle across open air toward a nearby rooftop.\n\nCamera on an adjacent tower captures the full arc of the jump as the collapsing crane falls behind him.\n\nThe bike lands on the rooftop helipad and skids through scattered equipment.\n\nShanghai skyline, collapsing crane stunt jump, rooftop landing momentum, cinematic aerial scale, 4K.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-4",
    "title": "Ultra-realistic Celebrity Arrival Documentary Style",
    "description": "A prompt for generating a realistic, continuous handheld shot of a celebrity arrival, featuring natural crowd noise and realistic camera movement for a documentary feel.",
    "content": "Style: Ultra-realistic mass celebrity arrival scene. Single continuous shot. Handheld camera from crowd perspective. Natural micro-shake. No cuts. Documentary-level realism. Audio: Only natural environment sound loud crowd",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-5",
    "title": "Camera Focal Length Test",
    "description": "A technical test prompt designed to demonstrate visual differences between 24mm, 80mm, 135mm, and 200mm focal lengths in video.",
    "content": "[2.5s] 24mm focal length medium frontal eye level shot. She speaks pleasantly, \"Hi, there. Let's start with a 24mm focal length.\" \n\n[Cut: 2.5s] Transition 80mm focal length medium frontal eye level shot. The girl waves at the camera and speakls smiling, \"and this is 80mm.\" \n\n[Cut: 2.5s] Transition to 135mm Focal length medium frontal eye level shot. The girl spins 360, then looks at the camera and speaks smiling, \"and this is 135mm.\" \n\n[Cut: 2.5s] Transition to 200mm Focal length frontal eye level shot. The girl starts with her chin tucked slightly down then slowly raise her chin to face the camera in a gentle smile. She speaks with a gentle smile genuinely, \"and this is 200mm\"",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-6",
    "title": "Anamorphic Mech Transformation Sequence",
    "description": "An IMAX cinematic quality prompt detailing a 15-second sequence of a heroine and a cat transforming into mechanical forms after falling from altitude.",
    "content": "Visual Style: IMAX cinematic quality; Panavision C-Series 35mm anamorphic lens (f/4 aperture)\nColor Palette: Low-saturation gray-blue background (cool tone) + bright white and dark gold (primary mech colors)\nLighting: Deep shadows with preserved detail in dark areas; highlights carry a subtle golden glow\nFocus: Soft edge focus with sharp central subject\n0–15 Seconds Shot Breakdown\n0–3s: The Fall\nAction: The scene plunges rapidly from high altitude. The heroine tightly shields a ragdoll cat against her chest as they tumble through the air. Upon impact, a massive cloud of gray dust and debris erupts. She lands on one knee, struggling to stand, breathing heavily. She looks down at the unharmed cat in her arms (a brief tender moment), then her expression turns cold as she stares at the glowing golden-white crystal core in her hand.\nCamera: Intense handheld-style shaking follows the fall. A violent jolt on impact, followed by a rapid push-in to a close-up of the heroine and the cat.\n3–6s: The Pact\nAction: The heroine and the ragdoll cat lock eyes; the cat’s pupils shift into flowing gold. She whispers, “Let’s do this together,” then crushes the crystal core in her hand.\nVisuals: The shattered core bursts into a dark-gold energy vortex, swirling around them. The heroine’s eyes turn gold, while intricate white runes spread across the cat’s fur like vines.\nCamera: Slow orbiting shot with slight vibration; narrowing depth of field focusing on the fragments of the shattered crystal.\n6–9s: The Agony\nAction: The heroine tilts her head back, releasing a suppressed scream as energy surges through her body, causing violent convulsions. Metallic fragments begin to “grow” from beneath her skin, engulfing and reconstructing her form.\nTransformation Details: The ragdoll cat rapidly enlarges within the light. Metallic bones and white armor plates form over its body, and sharp alloy claws extend outward.\nCamera: Heavy shaking, with brief defocus and motion blur. Extreme close-ups of metal forming over skin and the cat’s skeletal expansion into a mechanical tiger.\n9–12s: The Manifestation\nAction: The dust clears. The heroine is now fully clad in an intricate gold-and-white mech armor with sleek contours and glowing dark-gold edges. With a grasp of her right hand, a frost-emitting mech katana materializes.\nCompanion: The ragdoll cat has fully evolved into a massive gold-and-white mechanical tiger, its body lined with glowing energy circuits, eyes gleaming.\nCamera: Slow-motion orbit (bullet-time feel), sweeping upward from a low angle to reveal the full grandeur of the duo.\n12–15s: The Departure\nAction: (Not specified in original — can be expanded if needed)",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-7",
    "title": "Silk Road Whirling Dance Animation",
    "description": "An advanced Seedance 2.0 prompt designed to animate a 16-step storyboard of the Silk Road Whirling Dance, focusing on realistic physics, garment inertia, and synchronized rhythmic motion.",
    "content": "Please generate a high-quality \"Silk Road Whirling Dance\" video based on the provided 16-grid reference image.\n\nCore Requirements:\nOverall Style: Ancient, elegant, soft, serene, cinematic texture.\n[Physics and Realism]\nMotion conforms to human mechanics (with center of gravity).\nTurns have inertia.\nRibbons, hair, and skirts sway naturally with the movement.\nAmbient light is natural and soft, casting on the body, ribbons, and floor.\n[Rhythmic Structure]\nBeginning -> Progression -> Explosion -> Ending.\nEvery key movement is synchronized with the rhythm.\nBody waves, turns, and ribbon motions align with the melody of Dunhuang dance.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-8",
    "title": "FPV Flyover of Ancient India",
    "description": "Perfect for creating high-energy cinematic sequences, this prompt describes a fast-paced FPV drone flight through a bustling ancient Indian city filled with rich architectural and cultural details.",
    "content": "Extremely fast-paced single-take shot FPV flying through the ancient Indian Trigarta kingdom, cinematic and hyper-realistic, one continuous smooth motion. Start high above rugged Himalayan foothills at sunrise, rapidly diving into a fortified Trigarta city with massive stone walls, wooden gates, and watchtowers. Speed through narrow streets filled with warriors in traditional armor, horse riders, merchants, and villagers in authentic ancient Indian attire. Pass over bustling marketplaces with textiles, pottery, and weapons, then sweep through a royal courtyard with banners, guards, and intricate carvings. Continue accelerating past chariots, training grounds, and temple complexes with detailed stone architecture and sacred fires. Maintain fluid, seamless motion with dynamic lighting, depth of field. Highly detailed textures, realistic environment, cinematic color grading, immersive scale, pure continuous experience",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-9",
    "title": "Epic Samurai Battle Sequence",
    "description": "An intense, multi-stage prompt for a rogue samurai engaging multiple enemies on a dust-swept battlefield, featuring complex camera work and speed ramping.",
    "content": "a rogue samurai, emotionless and deadly, wearing worn blood-stained armor, katana held low, eyes locked forward, wind tearing through his hair and cloak\nhe walks forward slowly as multiple enemies charge him, then unleashes an instantaneous high-speed multi-slash sequence, striking all targets in a single invisible burst before they even react\n\nUltra cinematic dynamic: slow push-in, sudden whip acceleration, orbit tracking, extreme close-ups, speed ramping, afterimage layering, dramatic slow motion reveal\n\nScene\nOpen battlefield under dark sky, dust storms, torn banners whipping violently, debris and ash floating in the air, heavy atmosphere\nHyper realistic with stylized samurai energy, razor sharp motion blur, ghosted afterimages, high contrast lighting, cinematic particles, intense wind dynamics\n\n0-4s\nWide shot → slow push-in\nsamurai walking alone, enemies rushing from all directions\ndust swirling, banners snapping hard\n\n4-6s\nClose-up on his eyes, everything muffles visually, wind peaks, micro debris floating\n\n6-8s\nBurst dash, instant acceleration forward, camera struggles to follow, motion blur tears through frame\n\n8-11s\nMulti-slash illusion, afterimages of the samurai appear across the battlefield, multiple strike positions layered in space, katana flashes in fragmented light, enemies frozen mid-attack\n\n11-13s\nImpact reveal, silence, time resumes, clean slicing lines appear across enemies, armor splits, weapons drop\n\n13-15s\nFinal shot, slow motion collapse of enemies behind him, samurai already past them, blade lowered\nwind settles, camera pushes in from behind\n\nCUT",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-10",
    "title": "Gritty Wrestling Arena Sequence",
    "description": "A high-stakes wrestling match prompt set in a dimly lit underground arena, focusing on muscle tension, sweat, and explosive action.",
    "content": "Create a 15-second ultra-realistic cinematic vertical (9:16) wrestling sequence.\n\nScene Style:\nIntense sports drama with gritty, high-energy atmosphere. Dimly lit underground wrestling arena with harsh overhead spotlights, dust particles in the air, and a roaring crowd blurred in the background. Wet mat reflecting light, sweat and motion emphasized with slow-motion detail.\n\nCharacters:\nTwo powerful male wrestlers with athletic, muscular builds. One in red gear, the other in black gear. Both highly focused, aggressive, and determined.\n\nAction Sequence (fast-paced cuts):\n\n0–4s: Fighters circle each other, tension rising, close-up shots of eyes and heavy breathing.\n\n4–8s: Explosive grapple—one wrestler attempts a takedown, both struggle for control in a dramatic slow-motion clinch.\n\n8–12s: Counter move—lift and slam onto the mat, dust and sweat flying dramatically.\n\n12–15s: Final hold lock, crowd reaction intensifies, camera zooms in on strained expressions.\n\nCinematic Details:\nHandheld camera motion, dynamic zooms, slow-motion impacts, sharp focus on muscle tension and sweat, cinematic depth of field, realistic sound design feel (impact hits, crowd roar).\n\nMood:\nRaw power, rivalry, determination, high-stakes sports intensity.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-11",
    "title": "Streetwear Dance Performance",
    "description": "A prompt designed to create a cinematic full-body video of a woman performing expressive contemporary dance on a city street, featuring realistic lighting and clear 4K resolution.",
    "content": "A confident young woman performs a smooth, expressive dance in an open outdoor street setting during bright daylight. Full-body framing throughout. She wears modern streetwear, moving naturally with controlled, stylish choreography. Lighting is cinematic with realistic shadows, high detail, and 4K clarity. Camera remains stable and steady with no motion blur. Background stays clean and non-distracting.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-12",
    "title": "Cinematic Times Square Confidence Walk",
    "description": "A cinematic video prompt for Seedance 2.0 depicting a subject walking confidently through the midday crowds and neon signs of Times Square.",
    "content": "Cinematic 15-second short film. The subject is [REFERENCE IMAGE — match face, build, and style exactly]. He walks confidently through a hyper-busy Times Square, New York City — neon billboards, yellow cabs, massive crowds, midday",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-13",
    "title": "Cinematic Cave Exploration Multi-Shot Sequence",
    "description": "A detailed multi-shot video prompt for a dramatic cave sequence featuring character interactions and specific lighting conditions, optimized for continuous motion across shots.",
    "content": "3-shot sequence, 12 seconds. Refer to Image 1 for both characters, cave environment, water level, and lighting. ARRI Alexa. Dramatic chiaroscuro, cool desaturated ambient light filtering from above, deep shadow falloff into cave walls. Waist-deep still murky water, dark stone cave interior.\n\nShot 1 [00:00–00:05]: A man in a light blue hoodie (Image 2 )wades forward through the dark murky water, water rippling and pushing against his torso with each step. Cave walls recede into darkness behind him. Handheld follow tracking alongside him at medium shot, slight handheld shake, camera moving with him through the water. No cuts, continuous motion.\n\nShot 2 [00:05–00:09]: He stops, now standing beside the armored warrior — matching the wide two-shot composition from Image 1 . Both face forward into darkness. The man in the blue hoodie slowly tilts his gaze upward; his expression shifts from neutral to wide-eyed, mouth slightly open — concern setting in. Static locked-off wide shot.\n\nShot 3 [00:09–00:12]: Extreme close-up on the man in the blue hoodie's face (Image 2)— damp skin, underlit, expression landing on flat resigned dread. He says, deadpan: \"That is a big space snake.\" Display subtitles bottom-center, synchronized with audio.\n\nConsistent characters throughout, no deformation or drift. No background music. Ambient water sounds, distant cave drip, low cave reverb throughout.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-14",
    "title": "Cinematic Vlog Storyboard Video Prompt",
    "description": "A prompt for Seedance 2.0 that uses a 9-panel storyboard grid to generate a 15-second emotional cinematic vlog video in sequential order.",
    "content": "Please refer to the provided 9-panel grid storyboard image to create a 15-second emotional VLOG-style cinematic video. Use the 9 panels in order from top-left to bottom-right. Treat each panel as a reference for its respective scene.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-15",
    "title": "Freestyle Football 16-Step Storyboard",
    "description": "A comprehensive storyboard prompt for a street freestyle football performance set in a cinematic urban night environment.",
    "content": "Please generate a high-completion, high-definition 'Street Freestyle Football 16-Step Action Breakdown' poster-style storyboard. The layout should be a square 4x4 sixteen-grid arrangement, with each grid showing a continuous action step of the same street freestyle football performer in the same scene. The entire image should look like a combination of a 'high-end sports poster + technical breakdown teaching board,' possessing both visual impact and a clear sense of instructional action explanation.\n\n[Overall Setting]\nThe theme is: Street freestyle football performance, not an official match, not shooting practice, nor a multiplayer competition, but a single performer completing a full set of continuous freestyle football moves.\nThe overall atmosphere should include: street feel, urban feel, cinematic feel, athletic feel, cool, and rhythmic.\nThe background is set in a small nighttime city street court or urban plaza football space, featuring graffiti walls, wire fences, distant building lights, streetlamps, slightly reflective ground; the environment should be unified with a street-style trendiness.\n\n[Character Requirements]\nThe protagonist is a young, handsome male freestyle football expert, with a light, coordinated, and athletic physique, short black hair, a confident demeanor, and fluid, controlled movements.\nThe 16 grids in the entire image must feature the same person; do not change people in each grid.\nHe wears a football kit with a \"cool\" vibe, but the word \"Champion\" should not appear, nor should any specific country name. The clothing should feel like a jersey from a professional team.\n\n[Layout Requirements]\nThe entire image is a 4x4 sixteen-grid, each grid must have:\n1. Large step numbers (1-16)\n2. Chinese action titles\n3. 2-4 brief Chinese action key points\n4. Clear full-body action of the character\n5. Football trajectory arrows / footwork trajectory lines\n6. The football must be clearly visible and positioned reasonably, not floating or disappearing.\n\nThe overall font style should lean towards a sports poster aesthetic, clear and powerful, suitable for social media sharing. The image should be sharp, clear, and clean; both the character and the football should be complete, no feet cut off.\n\n[Action Sequence]\nPlease design 16 continuous actions in the following order, each action distinctly different, forming a complete freestyle performance flow:\n\n1. Street Opening Pose\nAction: One foot on the ball, body open, confident stance, like the start of a performance.\nPoints: Dominant stance / Right foot on ball / Showing confidence\n2. Sole Roll-back\nAction: Roll the ball back with the sole of the foot, adding a slight lateral movement.\nPoints: Sole on ball / Pull ball back / Slight body turn\n3. Step-over\nAction: Both feet performing step-overs around the football.\nPoints: One foot circling ball / Step over and switch feet / Smooth rhythm\n4. Inside-Outside Dribble\nAction: Use the inside and outside of the foot to tap the ball continuously, switching left and right.\nPoints: Inside touch / Outside touch / Quick switching\n5. Laces Flick-up\nAction: Use the laces to flick the ball upward, lifting it off the ground.\nPoints: Laces power / Flick ball up / Ball rises in front\n6. Continuous Juggling\nAction: Continuous juggling with the laces, keeping the ball bouncing up and down in front of the body.\nPoints: Alternate juggling / Keep rhythm / Stable continuity\n7. Knee Control\nAction: Control the ball bounce using knees or thighs.\nPoints: Ball hits knee / Control landing point / Maintain balance\n8. Heel Flick\nAction: Use the heel to flick the ball up from behind or side-rear.\nPoints: Heel contact / Flick upward / Lean body forward\n9. Around the World (ATW)\nAction: One foot circles the airborne ball.\nPoints: Foot circles outward / One full circle / Stable landing control\n10. Crossover ATW\nAction: Cross legs to complete a circling trick.\nPoints: Front leg cross / One full circle / Mid-air switch\n11. Shoulder Stall\nAction: Stall the ball on the shoulder or near the neck.\nPoints: Ball lands on shoulder / Tighten shoulder / Stable stall\n12. Back Stall\nAction: Lean forward to let the ball stay briefly on the back.\nPoints: Lean body forward / Ball on back / Maintain balance\n13. Rainbow Flick\nAction: Flick the ball from behind over the head, forming a rainbow trajectory.\nPoints: Heel flick / Ball over head / Arched trajectory\n14. Spin and Catch\nAction: Spin in place and catch the falling ball.\nPoints: In-place spin / Catch falling ball / Soft landing control\n15. Toe Stall\nAction: Use the tip of the toe or the top of the shoe to precisely stop the ball.\nPoints: Toe lift / Precise stall / Perfect balance\n16. Street Curtain Call\nAction: One foot on the ball again, arms open, like the closing of a full performance.\nPoints: Right foot on ball / Open arms / Stylish curtain call\n\n[Visual Style]\n- Overall high-end sports poster style\n- Cinematic night scene lighting\n- Strong sense of motion, with a bit of trendy street aesthetic\n- Arrows and trajectory lines must be clear to help understand the ball's movement path\n- Color scheme mainly Red, Black, and Gold, highlighting high-end quality and Chinese Red vibe\n- Eye-catching fonts, suitable for Xiaohongshu / Twitter / social media sharing\n- The entire image should look like a complete \"16-step freestyle football action storyboard poster\"",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-16",
    "title": "Epic Battlefield King Cinematic",
    "description": "An epic cinematic sequence of a wounded king on a ruined battlefield rising during a storm, featuring detailed camera movements and orchestral atmosphere.",
    "content": "A ruined battlefield under a storm-black sky, thousands of broken swords embedded in the ground. In the center, a wounded king kneels, gripping a glowing ancient sword. Lightning flashes reveal ghostly warriors rising behind him. The camera slowly pushes in from a wide aerial shot to an intense close-up as rain mixes with blood on his face.\nStyle keywords: ultra realistic, cinematic lighting, volumetric fog, 4K HDR, dynamic camera push-in, slow motion rain, epic scale\nAudio: deep orchestral buildup, distant war cries, thunder cracks\nVoiceover: “A king does not kneel… he rises with the storm.”",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-17",
    "title": "Rainy Alley Fight Scene",
    "description": "A comprehensive prompt for a dark, moody 15-second action sequence in a rainy urban alley featuring two fighters in high contrast lighting.",
    "content": "Create a 15-second cinematic vertical (9:16) ultra-realistic action scene featuring an intense one-on-one fight.\n\nScene Style: Dark, moody urban alley at night with neon lights flickering. Wet ground reflecting colors, light rain falling, cinematic smoke in the background. High contrast lighting with dramatic shadows.\n\nCharacters:\nTwo strong fighters — one wearing a black hoodie with a mysterious, stealthy vibe, the other in a rugged jacket with a bold, aggressive presence. Both have realistic facial expressions showing focus and tension.\n\nSequence (15s flow):\n\n0–3s: Slow-motion face-off. Close-up eye contact, rain dripping, fists tightening.\n\n3–7s: First attack — fast punch dodged, counter kick lands. Smooth dynamic camera pan.\n\n7–11s: Rapid fight combo — punches, blocks, spins. Cinematic motion blur and impact effects.\n\n11–13s: Powerful slow-motion hit connects, water splashes dramatically.\n\n13–15s: Final pose — one fighter standing dominant, the other down, heavy breathing, camera slowly zooms out.\n\nCamera & Effects: Handheld cinematic camera, smooth tracking shots, slow-motion transitions, dramatic sound design (punch impacts, rain, breathing), ultra-detailed textures, realistic physics.\n\nMood: Intense, gritty, high-energy, like a blockbuster action movie trailer.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-18",
    "title": "Ancient Dragon Storm Entrance",
    "description": "A dramatic video prompt for a massive ancient dragon descending from storm clouds with fire, lightning, and destructive landing effects.",
    "content": "A colossal ancient dragon bursts into view with a violent, earth-shaking entrance, tearing through storm-filled skies above a dark fantasy landscape. The camera starts with a wide aerial shot, thick black clouds swirling rapidly as lightning cracks illuminate the massive silhouette. With a deafening roar, the dragon dives downward at extreme speed, wings spanning hundreds of feet, tearing the air apart.\n\nAs it descends, fire ignites within its throat, glowing intensely through its scaled chest before erupting into a massive stream of blazing flames. The impact of its landing sends shockwaves across the ground, dust, rocks, and debris exploding outward in slow motion. Trees bend violently, and nearby structures crumble under the force.\n\nUltra-detailed scales shimmer with metallic reflections, glowing cracks of lava visible between armored plates. Its eyes burn like molten gold, filled with rage and dominance. Smoke, embers, and ash fill the air, illuminated by cinematic volumetric lighting.\n\nCamera transitions into a dramatic low-angle close-up as the dragon spreads its wings fully, letting out a thunderous roar. The environment is hyper-realistic: dynamic fire simulation, particle effects, heat distortion, motion blur, and depth of field.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-19",
    "title": "Luxury Streetwear Fashion Runway Film",
    "description": "An editorial-style fashion film prompt featuring an African male protagonist on a high-end runway with dramatic lighting and fabric motion.",
    "content": "cinematic animated fashion film, African male protagonist, luxury streetwear, consistent character from reference, sharp facial features, confident energy\n\nscene follows storyboard reference: runway environment, crowd on both sides, dramatic lighting, high contrast shadows\n\ncamera movement: slow tracking shots, close-ups, low angles, depth of field, motion blur\n\nhigh-end fashion campaign style, editorial look, moody cinematic lighting, black and gold tones, ultra clean composition\n\nsmooth animation, realistic fabric movement, cinematic pacing.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-20",
    "title": "Raw iPhone Bystander Footage Template",
    "description": "A prompt template for HiggsField/Seedance aimed at recreating the aesthetic of raw, handheld iPhone 15 Pro footage with natural camera shake and diegetic sound.",
    "content": "global_rule: No music, diegetic SFX only. Raw ungraded bystander phone footage, shot on what appears to be an iPhone 15 Pro in auto mode, handheld with constant visible micro-shake and",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-21",
    "title": "Futuristic Maglev Train Animation",
    "description": "A detailed prompt for a 3D animation featuring a sleek maglev train interior at sunset, emphasizing cinematic lighting and precise character movements.",
    "content": "Stylized 3D animation, sleek futuristic tone, crisp cinematic lighting. High-speed maglev train interior at sunset—glass walls, glowing skyline streaks, polished metal, soft neon accents. Warm sunset vs cool interior contrast. No brands, no readable text, no copyrighted characters.\n\nTone: quiet high-stakes focus. Protagonist = calm precision. Opponents = confident but unraveling. Rhythm: observe → sync → accelerate → decisive moment → effortless finish.\n\nCamera: close-ups on hands and eyes, reflections in glass, aisle tracking, slow push-ins, sharp cuts. Smooth motion, subtle vibration.\n\nCharacters:\n- Lead Passenger: composed, minimal movements, razor focus.\n- Opponent 1: confident, slightly sloppy under pressure.\n- Opponent 2: technical, loses sync.\n- Observer: silent, increasingly stunned.\n\nSequence (0:00–0:15):\n0:00–0:02: lead sets small metallic object on table; opponents smirk.\n0:02–0:05: precise movements begin; train light flickers; confidence fades.\n0:05–0:08: rapid synchronized actions; opponents fumble; observer reacts.\n0:08–0:11: slow push-in; hands blur → stop perfectly; success implied; silence.\n0:11–0:13: lead relaxes, adjusts sleeve; opponents freeze.\n0:13–0:15: wide—train glides through glowing skyline; lead calm, others stunned.\n\nStyle tags: futuristic minimalism, cinematic reflections, sunset contrast, precise choreography, smooth motion, clean composition.\n\nNegative: no brands, no text, no violence, no weapons, no clutter, no shaky cam, no low-res, no messy blur.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-22",
    "title": "90s Disney Style Anubis Market Scene",
    "description": "A multi-scene prompt generating a 90s Disney animation style video featuring Anubis in an Egyptian market, focusing on specific character interactions and expressions.",
    "content": "Classic 1990s Disney animation style. Scene 1: A panoramic view of a bustling Egyptian bazaar accompanied by continuous soft laughter. The laughter persists as the camera slowly pans to a specific scene in the market, revealing the source: Anubis, a fierce jackal merchant, lying on a table with one arm raised high above his head and the other resting comfortably on his belly. An Egyptian human merchant beside him is gently stroking Anubis's raised armpit with a feather, the motion repeating incessantly. Meanwhile, Anubis has his eyes closed and is grinning broadly, indifferent to being tickled, with his armpit fully exposed. Scene 2: A close-up shot shows the human merchant's hand gently stroking the feather back and forth on Anubis's raised armpit, with Anubis's giggles heard in the background. Scene 3: A close-up shot shows Anubis's upper body as the human continues to stroke the feather across his armpit; Anubis is eyes closed and grinning, letting out 'chuckle' sounds as the human tickles him. Scene 4: The human continues to tickle Anubis's armpit with the feather. Anubis laughs, deliberately exposing his armpit for the human to tickle. Then Anubis lowers his arm, stopping the tickling, and playfully tells the human to stop or he'll die laughing. Scene 5: Anubis sits up straight with hands on his hips, turning slightly with a playful smile, saying he can be tickled again later if he wants, and winks at the human. The human gives him a slightly nervous look and then laughs. Additional info: Anubis is muscular and wears rings on his arms. His voice is deep and magnetic. Anubis's armpit is being tickled. Audio in English.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-23",
    "title": "Daughter of the Forest Transformation",
    "description": "A dreamlike fairytale cinematic sequence of a girl in an enchanted forest whose gown is magically formed by sapphire and golden butterflies.",
    "content": "On screen (elegant glowing text, slowly fading in):\n“Daughter of the Forest”\n“An enchanted forest bathed in golden sunlight, soft mist drifting through ancient towering trees. Vibrant wildflowers bloom endlessly, glowing butterflies dance in the air, and gentle woodland creatures move in harmony. Ambient sound: soft birdsong, whispering wind, delicate flutter of wings.\nA young girl with extraordinarily long, flowing wavy hair reaching her ankles runs barefoot through the forest in dreamlike slow motion. Her hair moves like silk in the breeze. She lets out a soft, innocent giggle as butterflies swirl playfully around her.\nThe camera glides beside her… she slows… then gently stops in a sunlit clearing.\nSuddenly, dozens of butterflies — sapphire blue, rose pink, golden amber, violet — gather and circle her. Their wings shimmer as they weave together, magically forming a beautiful sky-blue gown made of petals and light around her.\nShe smiles, laughing softly, twirling in wonder.\nThen, a few larger radiant butterflies descend, carrying a delicate crown of flowers and vines, placing it gently upon her head.\nShe stands glowing, her long wavy hair flowing all around her.\nNarration (soft, old fairytale tone):\n“In an age untouched by time… where the forest still whispered secrets to the wind…\nthere lived a child not born of crowns, nor bound by walls…\nbut raised in the quiet magic of the wild.\nUnder the watchful care of a shadowed enchantress… she grew among the roots and rivers…\nAnd to every living thing that breathed within these woods…\nshe was not a stranger…\n…she was their own.”\nSoft golden particles drift… birds echo… gentle magical fade to black ✨”",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  },
  {
    "id": "seedance-all-24",
    "title": "Motivational Staircase Success Journey",
    "description": "A cinematic, inspirational prompt of a person climbing a dark staircase where each step glows with words representing their struggle and growth.",
    "content": "A cinematic, inspirational scene of a determined person starting at the bottom of a massive staircase in a dark and empty environment, symbolizing zero beginnings. Each step glows with words like struggle, failure, learning, patience, discipline, courage, and determination as they climb higher. The character becomes stronger, wiser, and more confident with every step. Midway, storms, obstacles, and shadows try to stop them, but they keep moving forward. At the top of the staircase, a bright golden light shines as they reach success, standing tall as a true hero overlooking the world. Dramatic lighting, realistic details, motivational atmosphere, cinematic composition, ultra-detailed, masterpiece.",
    "category": "Video",
    "tags": [
      "seedance",
      "video"
    ]
  }
];
