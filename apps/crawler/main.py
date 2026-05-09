import os
import asyncio
from crawl4ai import AsyncWebCrawler
from pymongo import MongoClient
from datetime import datetime
import uuid
from apscheduler.schedulers.asyncio import AsyncIOScheduler

# Configuration
MONGO_URI = os.getenv("MONGODB_URI", "mongodb://admin:password@localhost:27017/promptlib?authSource=admin")
client = MongoClient(MONGO_URI)
db = client.get_database("promptlib")
prompts_collection = db.get_collection("prompts")

async def scrape_prompts(url="https://prompthero.com/"):
    print(f"Starting scrape job for {url} at {datetime.now()}")
    
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url=url)
        
        if result.success:
            print(f"Successfully crawled {url}")
            # In a real scenario, we would parse the markdown/HTML to extract actual prompts
            # For this demo, we'll simulate finding some prompts and saving them
            
            # Simple extraction logic (mocking the extraction for now)
            # result.markdown contains the text
            
            mock_prompts = [
                {
                    "id": str(uuid.uuid4()),
                    "title": "AI Generated Landscape",
                    "description": "Scraped from " + url,
                    "content": "A beautiful sunset over the mountains, digital art, high resolution, 8k",
                    "category": "Image",
                    "tags": ["scraped", "landscape"],
                    "createdAt": datetime.now(),
                    "updatedAt": datetime.now()
                }
            ]
            
            for p in mock_prompts:
                # Check if exists or just insert
                prompts_collection.update_one({"title": p["title"]}, {"$set": p}, upsert=True)
                print(f"Saved prompt: {p['title']}")
        else:
            print(f"Failed to crawl {url}: {result.error_message}")

async def main():
    scheduler = AsyncIOScheduler()
    # Schedule every hour
    scheduler.add_job(scrape_prompts, 'interval', hours=1)
    scheduler.start()
    
    print("Crawler scheduler started. Press Ctrl+C to exit.")
    
    # Run once immediately
    await scrape_prompts()
    
    try:
        while True:
            await asyncio.sleep(1000)
    except (KeyboardInterrupt, SystemExit):
        pass

if __name__ == "__main__":
    asyncio.run(main())
