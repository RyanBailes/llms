export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  await fetch("https://script.google.com/macros/s/AKfycbxx5isepOUcsm7xaTG3fm3JbnP3w0UMYXNd34U2sym8H1hD-gKK5QlCjienWJduwcvlJg/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ip, ua })
  });

  const file = await fetch("https://www.shopifyllms.com/cecilandlou/.well-known/llms.txt");
  const text = await file.text();

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
