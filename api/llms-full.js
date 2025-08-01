export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  await fetch("https://script.google.com/macros/s/AKfycbwzA6g_QhQaQyuCpImAQpFI2PRYe_kwBq6G41YGugCMctrfuxy-DJNQAqACyzte2DHsKg/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ip, ua, file: "llms-full" })
  });

  const file = await fetch("https://www.shopifyllms.com/cecilandlou/.well-known/llms-full.txt");
  const text = await file.text();

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
