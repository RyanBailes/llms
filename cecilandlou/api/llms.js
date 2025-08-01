export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  console.log(`LLMS accessed by IP: ${ip} | UA: ${ua}`);

  const file = await fetch("https://shopifyllms.com/llms.txt");
  const text = await file.text();

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}