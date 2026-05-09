import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    const response = await fetch('http://ollama:11434/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        model: 'llama3',
        prompt: `You are a helpful admin assistant for a prompt library. Answer in exactly one short line. Question: ${prompt}`,
        stream: false,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ answer: data.response });
  } catch (error) {
    console.error('Ollama error:', error);
    return NextResponse.json({ error: 'AI Helper is currently unavailable. Ensure Ollama is running with llama3 model.' }, { status: 500 });
  }
}

