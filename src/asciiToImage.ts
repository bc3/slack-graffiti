import { createCanvas, registerFont } from "canvas";
import figlet from "figlet";
import fs from "fs";
import path from "path";

// Optional: Register custom font
// registerFont("path/to/graffiti-font.ttf", { family: "GraffitiFont" });

export async function generateAsciiImage(text: string, font: any): Promise<string> {
  return new Promise((resolve, reject) => {
    figlet.text(text, { font: font }, (err, ascii) => {
      if (err || !ascii) return reject("Failed to generate ASCII");

      // Setup canvas dimensions based on text
      const lines = ascii.split("\n");
      const width = 15 * Math.max(...lines.map((l) => l.length));
      const height = 20 * lines.length;

      console.log(`Generating ASCII image for ${text} with font ${font}`);
      console.log(`Lines: ${lines.length}`);
      console.log(`Width: ${width}`);
      console.log(`Height: ${height}`);

      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      // Background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "22px monospace";
      ctx.fillStyle = "lime";

      // Text with random colors per line
      const colors = ["lime", "red", "yellow", "blue", "magenta", "cyan", "orange", "pink", "purple"];
      lines.forEach((line, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = randomColor;
        ctx.fillText(line, 10, 20 * (i + 1));
      });

      const filePath = path.join(__dirname, `../png/graffiti-${Date.now()}.png`);
      const out = fs.createWriteStream(filePath);
      const stream = canvas.createPNGStream();

      stream.pipe(out);
      out.on("finish", () => resolve(filePath));
      out.on("error", reject);
    });
  });
}