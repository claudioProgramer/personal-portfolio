const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { expect, test } = require('@playwright/test');

const viewports = [
  { width: 1366, height: 1200, name: 'desktop' },
  { width: 1024, height: 1200, name: '1024px' },
  { width: 768, height: 1200, name: '768px' },
  { width: 480, height: 1200, name: '480px' },
  { width: 390, height: 1200, name: '390px' }
];

for (const viewport of viewports) {
  test(`SamaGPSpy image is fully visible at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    const portfolioUrl = pathToFileURL(path.resolve(__dirname, '..', 'index.html')).href;
    await page.goto(`${portfolioUrl}#proyectos`);

    const image = page.locator('img[src$="samagpspy.png"]');
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect.poll(async () => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);

    const metrics = await image.evaluate((img) => {
      const rect = img.getBoundingClientRect();
      const styles = window.getComputedStyle(img);
      const borderLeft = parseFloat(styles.borderLeftWidth);
      const borderRight = parseFloat(styles.borderRightWidth);
      const borderTop = parseFloat(styles.borderTopWidth);
      const borderBottom = parseFloat(styles.borderBottomWidth);

      return {
        renderedWidth: rect.width - borderLeft - borderRight,
        renderedHeight: rect.height - borderTop - borderBottom,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        display: styles.display,
        objectFit: styles.objectFit,
        cssWidth: styles.width,
        cssHeight: styles.height
      };
    });

    expect(metrics.renderedWidth).toBeGreaterThan(0);
    expect(metrics.renderedHeight).toBeGreaterThan(0);
    expect(metrics.naturalWidth).toBeGreaterThan(0);
    expect(metrics.naturalHeight).toBeGreaterThan(0);
    expect(metrics.display).toBe('block');
    expect(metrics.objectFit).not.toBe('cover');

    const naturalRatio = metrics.naturalWidth / metrics.naturalHeight;
    const renderedRatio = metrics.renderedWidth / metrics.renderedHeight;

    expect(renderedRatio).toBeCloseTo(naturalRatio, 3);
  });
}
