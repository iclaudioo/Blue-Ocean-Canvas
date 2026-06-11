/**
 * Render an inline SVG element to a downloaded PNG at 2x scale,
 * with the app background and a small title header drawn behind/above it.
 * No external images may be referenced inside the SVG (canvas tainting).
 */
export function exportSvgToPng(
  svg: SVGSVGElement,
  title: string,
  legend: { label: string; color: string }[],
  filename: string
): void {
  const rect = svg.getBoundingClientRect();
  const w = Math.max(1, Math.round(rect.width));
  const h = Math.max(1, Math.round(rect.height));
  const head = 66;
  const scale = 2;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("width", String(w));
  clone.setAttribute("height", String(h));
  const xml = new XMLSerializer().serializeToString(clone);

  const img = new Image();
  img.onload = () => {
    const cv = document.createElement("canvas");
    cv.width = w * scale;
    cv.height = (h + head) * scale;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    ctx.scale(scale, scale);
    ctx.fillStyle = "#0A0E0C";
    ctx.fillRect(0, 0, w, h + head);
    ctx.fillStyle = "#ECF0ED";
    ctx.font = "400 22px Georgia, serif";
    ctx.fillText(title, 24, 32);
    ctx.font = "600 11px sans-serif";
    let x = 24;
    for (const item of legend) {
      ctx.fillStyle = item.color;
      ctx.fillText(`— ${item.label}`, x, 54);
      x += ctx.measureText(`— ${item.label}`).width + 26;
    }
    ctx.drawImage(img, 0, head, w, h);
    const a = document.createElement("a");
    a.download = filename;
    a.href = cv.toDataURL("image/png");
    a.click();
  };
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
}

export function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "canvas"
  );
}
