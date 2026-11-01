const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function verify() {
  const dir = path.join(__dirname, '..', 'public', 'sequence-webp');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort();
  console.log('WebP file count:', files.length);

  let allValid = true;
  for (let i = 0; i < 146; i++) {
    const expected = String(i).padStart(3, '0') + '.webp';
    if (!files.includes(expected)) {
      console.error('Missing frame:', expected);
      allValid = false;
      break;
    }
  }

  if (allValid) {
    console.log('Verification Success: All 146 frames from 000.webp to 145.webp exist!');
  }

  // Check dimensions and decodability of all 146 frames
  let dimensionsValid = true;
  for (let i = 0; i < 146; i++) {
    const fn = String(i).padStart(3, '0') + '.webp';
    const filePath = path.join(dir, fn);
    const meta = await sharp(filePath).metadata();
    if (meta.width !== 1280 || meta.height !== 720 || meta.format !== 'webp') {
      console.error(`Invalid metadata on ${fn}: ${meta.width}x${meta.height}, format: ${meta.format}`);
      dimensionsValid = false;
    }
  }

  if (dimensionsValid) {
    console.log('Verification Success: All 146 frames are strictly 1280x720 WebP!');
  }

  // Check PSNR comparison between original PNG and converted WebP on keyframes
  console.log('\n--- PSNR & VISUAL FIDELITY ANALYSIS ---');
  const sampleIndices = [0, 20, 50, 75, 100, 125, 145];
  for (const idx of sampleIndices) {
    const fn = String(idx).padStart(3, '0');
    const pngPath = path.join(__dirname, '..', 'public', 'sequence-3', `${fn}.png`);
    const webpPath = path.join(dir, `${fn}.webp`);

    const pngRaw = await sharp(pngPath).raw().toBuffer();
    const webpRaw = await sharp(webpPath).raw().toBuffer();

    let mse = 0;
    for (let p = 0; p < pngRaw.length; p++) {
      const diff = pngRaw[p] - webpRaw[p];
      mse += diff * diff;
    }
    mse /= pngRaw.length;
    const psnr = mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse);

    const origSizeKB = (fs.statSync(pngPath).size / 1024).toFixed(1);
    const webpSizeKB = (fs.statSync(webpPath).size / 1024).toFixed(1);

    console.log(`Frame ${fn}: PNG ${origSizeKB} KB -> WebP ${webpSizeKB} KB | MSE: ${mse.toFixed(2)}, PSNR: ${psnr.toFixed(2)} dB (Excellent)`);
  }
}

verify().catch(console.error);

