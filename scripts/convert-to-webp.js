const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'public', 'sequence-3');
const DEST_DIR = path.join(__dirname, '..', 'public', 'sequence-webp');
const FRAME_COUNT = 146;
const WEBP_QUALITY = 92;

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function convertAll() {
  console.log(`Starting conversion of ${FRAME_COUNT} frames with WebP quality ${WEBP_QUALITY}...`);
  const startTime = Date.now();

  let totalOrigBytes = 0;
  let totalWebpBytes = 0;
  const frameStats = [];

  for (let i = 0; i < FRAME_COUNT; i++) {
    const filename = String(i).padStart(3, '0');
    const srcPath = path.join(SRC_DIR, `${filename}.png`);
    const destPath = path.join(DEST_DIR, `${filename}.webp`);

    if (!fs.existsSync(srcPath)) {
      throw new Error(`Missing source file: ${srcPath}`);
    }

    const origStat = fs.statSync(srcPath);
    totalOrigBytes += origStat.size;

    const info = await sharp(srcPath)
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(destPath);

    if (info.width !== 1280 || info.height !== 720) {
      throw new Error(`Unexpected dimensions for frame ${filename}: ${info.width}x${info.height}`);
    }

    totalWebpBytes += info.size;
    frameStats.push({
      frame: filename,
      origSize: origStat.size,
      webpSize: info.size,
      ratio: ((1 - info.size / origStat.size) * 100).toFixed(1)
    });

    if ((i + 1) % 25 === 0 || i === FRAME_COUNT - 1) {
      console.log(`Converted ${i + 1}/${FRAME_COUNT} frames...`);
    }
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  const origMB = (totalOrigBytes / (1024 * 1024)).toFixed(2);
  const webpMB = (totalWebpBytes / (1024 * 1024)).toFixed(2);
  const avgOrigKB = (totalOrigBytes / FRAME_COUNT / 1024).toFixed(1);
  const avgWebpKB = (totalWebpBytes / FRAME_COUNT / 1024).toFixed(1);
  const totalReduction = ((1 - totalWebpBytes / totalOrigBytes) * 100).toFixed(2);

  console.log('\n--- CONVERSION SUMMARY ---');
  console.log(`Total Frames: ${FRAME_COUNT}`);
  console.log(`Time Elapsed: ${durationSec}s`);
  console.log(`Original PNG Total Size: ${origMB} MB (avg ${avgOrigKB} KB/frame)`);
  console.log(`Optimized WebP Total Size: ${webpMB} MB (avg ${avgWebpKB} KB/frame)`);
  console.log(`Overall Size Reduction: ${totalReduction}%`);

  // Identify smallest and largest WebP frames
  const sortedByWebp = [...frameStats].sort((a, b) => b.webpSize - a.webpSize);
  console.log(`Largest WebP frame: ${sortedByWebp[0].frame}.webp (${(sortedByWebp[0].webpSize / 1024).toFixed(1)} KB)`);
  console.log(`Smallest WebP frame: ${sortedByWebp[sortedByWebp.length - 1].frame}.webp (${(sortedByWebp[sortedByWebp.length - 1].webpSize / 1024).toFixed(1)} KB)`);

  // Write detailed stats to json
  fs.writeFileSync(
    path.join(__dirname, 'conversion-stats.json'),
    JSON.stringify({
      frameCount: FRAME_COUNT,
      quality: WEBP_QUALITY,
      durationSec,
      origMB,
      webpMB,
      avgOrigKB,
      avgWebpKB,
      totalReduction,
      largestFrame: sortedByWebp[0],
      smallestFrame: sortedByWebp[sortedByWebp.length - 1],
      frames: frameStats
    }, null, 2)
  );

  console.log('Detailed stats saved to scripts/conversion-stats.json');
}

convertAll().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});

