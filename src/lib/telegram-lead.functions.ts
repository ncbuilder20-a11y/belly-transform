import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(200),
  source: z.string().max(50).optional(),
});

export const sendLeadToTelegram = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const BOT_TOKEN = "8939841231:AAFXhHEbU27uUl5jq-eUbtuwvJ1RLeoTHeE";
    const CHAT_ID = "-5394046761";
    const text = `🟢 New lead (${data.source ?? "in"})\nEmail: ${data.email}\nTime: ${new Date().toISOString()}`;
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        },
      );
      if (!res.ok) {
        const body = await res.text();
        console.error("Telegram sendMessage failed", res.status, body);
      }
    } catch (e) {
      console.error("Telegram sendMessage error", e);
    }
    return { ok: true };
  });
