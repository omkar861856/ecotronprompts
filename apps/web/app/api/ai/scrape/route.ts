import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    
    // 1. Crawl the URL using Crawl4AI
    const crawlResponse = await fetch('http://localhost:11235/crawl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        urls: [url],
        priority: 10,
      }),
    });

    const crawlData = await crawlResponse.json();
    const markdown = crawlData.results?.[0]?.markdown?.raw_markdown || 
                     crawlData.results?.[0]?.markdown || 
                     "";

    if (!markdown) {
      return NextResponse.json({ error: 'Failed to extract content from URL' }, { status: 400 });
    }

    // 2. Use Ollama to extract structured prompt data
    const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'tinyllama',
        prompt: `Extract the primary AI prompt from this text. Return ONLY valid JSON with fields: title, description, content, category (one of: Media, NoMedia, Coding, Creative, Business), tags (array), and mediaUrl (if an image or video URL is prominent). 
        
        Text: ${markdown.substring(0, 4000)}`,
        stream: false,
        format: 'json'
      }),
    });

    const ollamaData = await ollamaResponse.json();
    let extractedData;
    try {
      extractedData = JSON.parse(ollamaData.response);
    } catch (e) {
      // Fallback if JSON is messy
      extractedData = {
        title: "Scraped Prompt",
        description: "Extracted from " + url,
        content: ollamaData.response,
        category: "NoMedia",
        tags: ["ai-scraped"]
      };
    }

    return NextResponse.json(extractedData);
  } catch (error) {
    console.error('Scrape error:', error);
    return NextResponse.json({ error: 'Scraping failed. Ensure Crawl4AI and Ollama are running.' }, { status: 500 });
  }
}
