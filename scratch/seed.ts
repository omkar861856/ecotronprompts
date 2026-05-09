import { Prompt, connectDB } from '../packages/database/src';
import { prompts as initialPrompts } from '../packages/prompts/src';

async function seed() {
  await connectDB();
  
  console.log('Seeding initial prompts...');
  
  for (const p of initialPrompts) {
    await Prompt.updateOne(
      { id: p.id },
      { $set: p },
      { upsert: true }
    );
    console.log(`Seeded: ${p.title}`);
  }
  
  console.log('Seeding complete.');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
