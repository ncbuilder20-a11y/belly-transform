import { createFileRoute } from "@tanstack/react-router";

const BOT_TOKEN = "8939841231:AAFXhHEbU27uUl5jq-eUbtuwvJ1RLeoTHeE";
const CHAT_ID = "-5394046761";

async function sendToTelegram(email: string, source: string) {
  const text = `🟢 New lead (${source})\nEmail: ${email}\nTime: ${new Date().toISOString()}`;
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });
  } catch (e) {
    console.error("Telegram error", e);
  }
}

export const Route = createFileRoute("/api/public/lead-telegram")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let email = "";
        let source = "in";
        try {
          const ct = request.headers.get("content-type") ?? "";
          if (ct.includes("application/json")) {
            const j = await request.json();
            email = String(j.email ?? "");
            source = String(j.source ?? "in");
          } else {
            const text = await request.text();
            const params = new URLSearchParams(text);
            email = params.get("email") ?? "";
            source = params.get("source") ?? "in";
          }
        } catch {
          return new Response("bad request", { status: 400 });
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return new Response("invalid email", { status: 400 });
        }
        await sendToTelegram(email, source);
        return new Response("ok", { status: 200 });
      },
    },
  },
});
