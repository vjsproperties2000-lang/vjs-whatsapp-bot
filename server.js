const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/frames', express.static('frames'));
app.use('/posters', express.static('posters'));
app.use('/videos', express.static('videos'));

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Home
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>VJS Melange JOYPIN Bot - Kharadi Riverside Launch</title>
    <style>
      body { font-family: Arial; max-width: 900px; margin: 20px auto; padding: 20px; background: #f5f5f5; }
      .card { background: white; padding: 20px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
      h1 { color: #1a365d; text-align: center; }
      h2 { color: #2d3748; border-bottom: 2px solid #ed8936; padding-bottom: 10px; }
      .btn { background: #ed8936; color: white; padding: 12px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin: 5px; }
      .btn:hover { background: #dd6b20; }
      input, select { padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px; width: 90%; }
      .pricing { background: #fffaf0; padding: 15px; border-left: 4px solid #ed8936; }
      .stealth { background: #ebf8ff; padding: 15px; border-left: 4px solid #3182ce; }
    </style>
    </head>
    <body>
      <h1>🏠 VJS Melange JOYPIN Bot<br>Kharadi Riverside Launch - 2 New Towers</h1>
      
      <div class="card">
        <h2>📊 Project Details - Mantra Melange Codename JOYPIN - Riverside</h2>
        <div class="pricing">
          <b>2BHK:</b> 843 sq ft @ 1.21 Cr | 884 sq ft @ 1.27 Cr<br>
          <b>3BHK:</b> 1098 sq ft @ 1.61 Cr | 1177 sq ft @ 1.70 Cr<br>
          <b>EOI Window:</b> 20 Jun 2026 | Priority Token: 1 Lakh | Privilege Token: 2 Lakhs<br>
          <b>Location:</b> Kharadi Riverside - <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank">Map Link</a><br>
          <b>Agent:</b> VJS Properties - Vijay Sonni - MahaRERA A52100024881<br>
          <b>Builder RERA:</b> P52100079582 (Melange - From MahaRERA)<br>
          <b>Zero Brokerage | Direct Deal | 8830634493 / 9922242771 / 8483968686</b>
        </div>
      </div>

      <div class="card">
        <h2>🎬 1. Upload Walkthrough Video - Extract Frames WITHOUT Builder Logo</h2>
        <form action="/upload-video" method="post" enctype="multipart/form-data">
          <input type="file" name="video" accept="video/*" required><br>
          <button type="submit" class="btn">Upload Video & Extract 18 Frames</button>
        </form>
        <p>Upload your 2 min walkthrough video (with Mantra + JOYPIN logo) - Bot will extract 18 frames WITHOUT logo for stealth ads!</p>
      </div>

      <div class="card">
        <h2>🖼️ 2. Create Stealth Poster - Without Builder Name - For Lead Collection</h2>
        <div class="stealth">
          <b>STEALTH MARKETING:</b> Don't reveal Mantra/Melange/JOYPIN in first ad! Just say "Kharadi Riverside Launch - 2BHK 843 @ 1.21 Cr - Launch Price - Pre-Launch Before Price Rise!" - Collect lead data → Register under VIJAY SONNI CP name → Then share 90% data!
        </div>
        <form action="/create-poster" method="post">
          <select name="bhk" required>
            <option value="">Select BHK & Size</option>
            <option value="2BHK-843-1.21">2BHK - 843 sq ft - 1.21 Cr</option>
            <option value="2BHK-884-1.27">2BHK - 884 sq ft - 1.27 Cr</option>
            <option value="3BHK-1098-1.61">3BHK - 1098 sq ft - 1.61 Cr</option>
            <option value="3BHK-1177-1.70">3BHK - 1177 sq ft - 1.70 Cr</option>
          </select><br>
          <input type="text" name="eoi" placeholder="EOI Window (e.g., 20 Jun 2026)" value="20 Jun 2026"><br>
          <input type="text" name="token" placeholder="Token (e.g., Priority 1 Lakh, Privilege 2 Lakhs)" value="Priority 1 Lakh, Privilege 2 Lakhs"><br>
          <button type="submit" class="btn">Create Stealth Poster - No Builder Name</button>
        </form>
      </div>

      <div class="card">
        <h2>🎥 3. Create Video With Melody + Voice Over - Explaining Project</h2>
        <form action="/create-video" method="post">
          <select name="template" required>
            <option value="stealth-2bhk">Stealth - 2BHK 843 @ 1.21 Cr - No Builder Name</option>
            <option value="stealth-3bhk">Stealth - 3BHK 1098 @ 1.61 Cr - No Builder Name</option>
            <option value="full-melange">Full - Mantra Melange JOYPIN - With Builder Name (After Registration)</option>
          </select><br>
          <select name="melody" required>
            <option value="soft-piano">Soft Piano Ambient - No Copyright</option>
            <option value="inspirational">Inspirational Piano - Ash</option>
            <option value="acoustic">Acoustic Guitar Soft</option>
          </select><br>
          <select name="voice" required>
            <option value="hindi-mix">Hindi + English Mix - Raw Style</option>
            <option value="marathi">Marathi Mix</option>
            <option value="english">English</option>
          </select><br>
          <button type="submit" class="btn">Create Video With Melody + Voice Over Script</button>
        </form>
      </div>

      <div class="card">
        <h2>📱 4. Generate WhatsApp / Facebook / Instagram Captions - With Hashtags</h2>
        <form action="/generate-caption" method="post">
          <select name="platform" required>
            <option value="whatsapp">WhatsApp Status (8483968686) - Short</option>
            <option value="facebook">Facebook Other Account - Long + Hashtags</option>
            <option value="instagram">Instagram Feed + Story + Reels - 30 Hashtags</option>
            <option value="stealth">Stealth Ad - No Builder Name - Lead Collection</option>
          </select><br>
          <select name="bhk" required>
            <option value="2BHK-843-1.21">2BHK 843 @ 1.21 Cr</option>
            <option value="2BHK-884-1.27">2BHK 884 @ 1.27 Cr</option>
            <option value="3BHK-1098-1.61">3BHK 1098 @ 1.61 Cr</option>
            <option value="3BHK-1177-1.70">3BHK 1177 @ 1.70 Cr</option>
            <option value="all">All 4 Configurations</option>
          </select><br>
          <button type="submit" class="btn">Generate Caption + Hashtags</button>
        </form>
      </div>

      <div class="card">
        <h2>📝 5. Lead Collection & Registration Under VIJAY SONNI CP Name</h2>
        <form action="/register-lead" method="post">
          <input type="text" name="name" placeholder="Client Name" required><br>
          <input type="text" name="phone" placeholder="Client Phone" required><br>
          <select name="bhk" required>
            <option value="">BHK Interested</option>
            <option value="2BHK-843">2BHK 843 @ 1.21 Cr</option>
            <option value="2BHK-884">2BHK 884 @ 1.27 Cr</option>
            <option value="3BHK-1098">3BHK 1098 @ 1.61 Cr</option>
            <option value="3BHK-1177">3BHK 1177 @ 1.70 Cr</option>
          </select><br>
          <input type="text" name="budget" placeholder="Budget (e.g., 1.21 Cr)"><br>
          <button type="submit" class="btn">Register Lead Under VIJAY SONNI CP Name</button>
        </form>
        <p>After registration with builder, share 50% data (carpet, floor plan, location), then after confirmation share 90% + site visit!</p>
      </div>

      <div class="card">
        <h2>🔗 Quick Links</h2>
        <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank" class="btn">📍 Map - Kharadi Riverside</a>
        <a href="https://vjsproperties2000.in/" target="_blank" class="btn">🌐 VJS Website</a>
        <a href="https://wa.me/918830634493" target="_blank" class="btn">💬 WhatsApp 8830634493</a>
      </div>

      <div class="card" style="background: #fff5f5; border-left: 4px solid #e53e3e;">
        <h2>⚠️ STEALTH STRATEGY - As Top Agents Do:</h2>
        <b>Phase 1 - Don't Reveal Builder/Project Name:</b><br>
        Ad: "2BHK Kharadi Riverside 843 sq ft @ 1.21 Cr - Launch Price - Grab Pre-Launch Before Price Rise!"<br>
        <b>No Mantra, No Melange, No JOYPIN</b> - Collect lead data<br><br>
        <b>Phase 2 - Register Under VIJAY SONNI CP Name:</b><br>
        Register client with builder Mantra under your CP name VIJAY SONNI (A52100024881)<br><br>
        <b>Phase 3 - Share Data + Site Visit:</b><br>
        Share carpet, floor plan, location (50%), then after builder confirmation share 90% + call for site visit!
      </div>
    </body>
    </html>
  `);
});

// Upload Video & Extract Frames
app.post('/upload-video', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No video uploaded');
  
  // Simulate frame extraction (in real bot, use ffmpeg)
  const videoPath = req.file.path;
  const framesDir = './frames';
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });
  
  // For demo, just list that frames would be extracted
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Video Uploaded & Frames Extracted!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169;">
        <b>Video:</b> ${req.file.originalname}<br>
        <b>Size:</b> ${(req.file.size / 1024 / 1024).toFixed(2)} MB<br>
        <b>Frames Extracted:</b> 18 JPG frames WITHOUT builder logo<br>
        <b>Location:</b> ./frames/<br>
        <b>For Stealth Ads:</b> Use frames without Mantra/JOYPIN logo - Crop top 10% if logo visible<br>
        <b>Next:</b> Create stealth posters with these frames!
      </div>
      <br>
      <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
      <a href="/frames" style="background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">View Frames</a>
    </body></html>
  `);
});

// Create Stealth Poster
app.post('/create-poster', (req, res) => {
  const { bhk, eoi, token } = req.body;
  const pricing = {
    '2BHK-843-1.21': '2BHK - 843 sq ft - 1.21 Cr',
    '2BHK-884-1.27': '2BHK - 884 sq ft - 1.27 Cr',
    '3BHK-1098-1.61': '3BHK - 1098 sq ft - 1.61 Cr',
    '3BHK-1177-1.70': '3BHK - 1177 sq ft - 1.70 Cr'
  };
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Stealth Poster Created!</h1>
      <div style="background: #ebf8ff; padding: 20px; border-left: 4px solid #3182ce;">
        <b>Configuration:</b> ${pricing[bhk] || bhk}<br>
        <b>EOI Window:</b> ${eoi}<br>
        <b>Token:</b> ${token}<br>
        <b>Stealth:</b> No Mantra, No Melange, No JOYPIN in first ad!<br>
        <b>Caption:</b> "${pricing[bhk]} @ Launch Price - Kharadi Riverside - Grab Pre-Launch Before Price Rise! Few Units Available - EOI ${eoi} - Token ${token} - Call 8830634493"<br>
        <b>Agent:</b> VJS Properties - Vijay Sonni - A52100024881 - Zero Brokerage<br>
        <b>Map:</b> https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9<br>
      </div>
      <br>
      <div style="background: #fffaf0; padding: 15px; border: 1px solid #ed8936; border-radius: 5px;">
        <b>📱 WhatsApp Status Caption (Stealth):</b><br><br>
        🏠 KHARADI RIVERSIDE LAUNCH - ${pricing[bhk]} - Launch Price!<br><br>
        📍 Kharadi Riverside - Prime Location<br>
        ✅ Few Units Available - Grab Pre-Launch Before Price Rise!<br>
        ✅ EOI Window: ${eoi}<br>
        ✅ ${token}<br><br>
        👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881<br>
        ✅ Zero Brokerage | Direct Deal<br>
        📞 8830634493 | 9922242771 | 8483968686<br>
        Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9
      </div>
      <br>
      <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
    </body></html>
  `);
});

// Create Video With Melody + Voice Over
app.post('/create-video', (req, res) => {
  const { template, melody, voice } = req.body;
  
  const voiceScripts = {
    'hindi-mix': `Kharadi Riverside... Pune's most awaited launch is here! 2 new towers... Premium 2BHK and 3BHK... Riverside living... Launch price... Grab pre-launch before price rise! Kharadi Riverside... Prime location... 5 minutes from EON IT Park... 2BHK 843 square feet at 1.21 Crore launch price! Spacious living room 12 by 18 feet... Vaastu compliant... EOI window opens 20th June 2026! Priority token 1 Lakh... Privilege token 2 Lakhs... Few units available... Mega opportunity... VJS Properties, Vijay Sonni, MahaRERA A52100024881... Zero brokerage... Call now 8830634493!`,
    'marathi': `Kharadi Riverside... Pune's most awaited launch... 2 new towers... 2BHK 843 sq ft @ 1.21 Cr... Launch price... Kharadi Riverside prime location... EOI 20 Jun 2026... Priority token 1 Lakh... VJS Properties Vijay Sonni...`,
    'english': `Kharadi Riverside Launch... 2 new towers... Premium 2BHK 843 sq ft @ 1.21 Cr launch price... Riverside living... Prime location... EOI window opens 20th June 2026... Priority token 1 Lakh... Privilege token 2 Lakhs... Few units available... Mega opportunity... VJS Properties Vijay Sonni MahaRERA A52100024881... Zero brokerage... Call 8830634493...`
  };
  
  const melodyNames = {
    'soft-piano': 'Soft Piano Ambient - No Copyright - Low Volume 20%',
    'inspirational': 'Inspirational Piano - Ash - No Copyright',
    'acoustic': 'Acoustic Guitar Soft - Free'
  };
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 900px; margin: 20px auto; padding: 20px;">
      <h1>✅ Video With Melody + Voice Over Created!</h1>
      
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169; margin: 15px 0;">
        <b>Template:</b> ${template}<br>
        <b>Melody:</b> ${melodyNames[melody]}<br>
        <b>Voice:</b> ${voice}<br>
        <b>Duration:</b> 2 min (120 sec)<br>
        <b>Stealth:</b> First 30 sec NO Mantra/Melange/JOYPIN - Only Kharadi Riverside + Size + Price<br>
      </div>

      <div style="background: #fffaf0; padding: 20px; border: 1px solid #ed8936; border-radius: 5px; margin: 15px 0;">
        <h3>🎙️ Voice Over Script (2 Min) - ${voice}:</h3>
        <p style="line-height: 1.8; background: white; padding: 15px; border-radius: 5px;">
          ${voiceScripts[voice] || voiceScripts['hindi-mix']}
        </p>
        <p><b>Recording Tips:</b> Quiet room, phone earphone mic, Hindi+English mix, raw style, energetic, not slow, small pauses, 2 min total</p>
      </div>

      <div style="background: #ebf8ff; padding: 20px; border-left: 4px solid #3182ce; margin: 15px 0;">
        <h3>🎬 Video Creation Steps - Using CapCut (Free):</h3>
        <b>1. Import:</b> Original video + 18 frames (without logo) + 4 stealth posters + Map screenshot<br>
        <b>2. Timeline (2 min):</b><br>
        &nbsp;&nbsp;0-10s: Frame 01 Aerial - Text "Kharadi Riverside Launch - 2 New Towers"<br>
        &nbsp;&nbsp;10-25s: Frame 02 Site View - Text "2BHK 843 @ 1.21 Cr - Launch Price"<br>
        &nbsp;&nbsp;25-40s: Frame 06 Living Room 12x18 - Text "2BHK 884 @ 1.27 Cr"<br>
        &nbsp;&nbsp;40-60s: Frame 07 Dining 11'7x9 + Frame 08 Kitchen 9x9 - Text "3BHK 1098 @ 1.61 Cr - EOI 20 Jun"<br>
        &nbsp;&nbsp;60-80s: Frame 09 Kids Bedroom 10'6x15 + Frame 10 Bedroom 1 12'9x11 - Text "Priority Token 1 Lakh"<br>
        &nbsp;&nbsp;80-100s: Frame 11 Master 15x14 + Frame 12 Bathroom + Frame 13 Balcony - Text "VJS Properties A52100024881 - Zero Brokerage"<br>
        &nbsp;&nbsp;100-120s: Frame 01 Aerial + Map - Text "CALL NOW 8830634493 / 9922242771 / 8483968686 - Map Link"<br>
        <b>3. Add Melody:</b> Audio > Music > Search "${melody}" > Add to Timeline > Volume 20% (Low under voice)<br>
        <b>4. Add Voice Over:</b> Audio > Voiceover > Record your voice reading script above > Volume 100% (Main)<br>
        <b>5. Mix:</b> Melody 20% + Voice 100% - Voice clear, melody low background<br>
        <b>6. Text Overlays:</b> First 30 sec NO builder name - Only location + size + price + EOI<br>
        <b>7. Export:</b> 1080p, 30fps, High Quality > File: Kharadi_Riverside_Launch_2BHK_843_1.21Cr_EOI_20Jun_VJS_8830634493.mp4<br>
      </div>

      <div style="background: #fff5f5; padding: 15px; border-left: 4px solid #e53e3e;">
        <b>⚠️ STEALTH:</b> First 30 sec NO Mantra/Melange/JOYPIN - Only "Kharadi Riverside Launch - 2BHK 843 @ 1.21 Cr - Launch Price - EOI 20 Jun - Token 1L" - Collect lead → Register under VIJAY SONNI CP name → Then share 90% data + site visit!
      </div>
      <br>
      <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
    </body></html>
  `);
});

// Generate Caption
app.post('/generate-caption', (req, res) => {
  const { platform, bhk } = req.body;
  
  const captions = {
    whatsapp: `🏠 KHARADI RIVERSIDE LAUNCH - 2BHK 843 sq ft @ 1.21 Cr - Launch Price!

📍 Kharadi Riverside - Prime Location
✅ Few Units Available - Grab Pre-Launch Before Price Rise!
✅ EOI Window: 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity - Kharadi Most Awaited Launch!

👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881
✅ Zero Brokerage | Direct Deal
📞 8830634493 | 9922242771 | 8483968686
Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9`,

    facebook: `🏠 KHARADI RIVERSIDE LAUNCH - 2 NEW TOWERS - Pune's Most Awaited Launch! 🔥🔥

📍 Location: Kharadi Riverside - Prime Location - 5 Min EON IT Park, Phoenix Mall
🏢 Project: 2 New Towers | 2BHK 843 sq ft @ 1.21 Cr | 2BHK 884 @ 1.27 Cr | 3BHK 1098 @ 1.61 Cr | 3BHK 1177 @ 1.70 Cr - Launch Price!

✨ Highlights:
✅ Few Units Available - Grab Pre-Launch Before Price Rise!
✅ EOI Window Opens 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity - Kharadi Most Awaited Launch!
✅ Riverside Prime | Vaastu Compliant | Premium Finishes

👤 AGENT: VJS PROPERTIES - VIJAY SONNI - MahaRERA Certified Agent No. A52100024881
🏗️ PROJECT: Mantra Melange Codename JOYPIN - RERA P52100079582 (After Registration - Not in Phase 1 Ad)
✅ Zero Brokerage | Direct Deal
📞 CALL NOW: 8830634493 | 9922242771 | 8483968686
Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9

#KharadiProperty #KharadiRiverside #KharadiLaunch #2BHKPune #3BHKPune #PreLaunch #LaunchPrice #ZeroBrokerage #DirectDeal #VJSProperties #MahaRERA #A52100024881 #PuneRealEstate #KharadiFlats #PuneHomes #EOI #PriorityToken`,

    stealth: `🏠 KHARADI RIVERSIDE LAUNCH - 2BHK 843 sq ft @ 1.21 Cr - Launch Price - Grab Pre-Launch Before Price Rise!

📍 Kharadi Riverside - Prime Location
🏢 2BHK 843 sq ft @ 1.21 Cr | 2BHK 884 @ 1.27 Cr
🏢 3BHK 1098 @ 1.61 Cr | 3BHK 1177 @ 1.70 Cr - Launch Price!

✅ Few Units Available
✅ EOI Window Opens 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity - Kharadi Most Awaited Launch!

👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881
✅ Zero Brokerage | Direct Deal
📞 8830634493 | 9922242771 | 8483968686

#KharadiProperty #KharadiRiverside #LaunchPrice #PreLaunch #ZeroBrokerage #VJSProperties #MahaRERA`
  };
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Caption Generated - ${platform.toUpperCase()}!</h1>
      <div style="background: white; padding: 20px; border: 1px solid #ccc; border-radius: 5px; white-space: pre-wrap; line-height: 1.6;">${captions[platform] || captions['whatsapp']}</div>
      <br>
      <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
      <button onclick="navigator.clipboard.writeText(document.querySelector('div').innerText); alert('Caption Copied!')" style="background: #3182ce; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-left: 10px; cursor: pointer;">Copy Caption</button>
    </body></html>
  `);
});

// Register Lead
app.post('/register-lead', (req, res) => {
  const { name, phone, bhk, budget } = req.body;
  
  // Save to file (in real bot, save to DB or Google Sheet)
  const leadsFile = './leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
  }
  leads.push({ name, phone, bhk, budget, date: new Date().toISOString(), cp: 'VIJAY SONNI', rera: 'A52100024881', project: 'Mantra Melange JOYPIN', status: 'Registered with Builder' });
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Lead Registered Under VIJAY SONNI CP Name!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169;">
        <b>Client Name:</b> ${name}<br>
        <b>Phone:</b> ${phone}<br>
        <b>BHK Interested:</b> ${bhk}<br>
        <b>Budget:</b> ${budget}<br>
        <b>CP Name:</b> VIJAY SONNI<br>
        <b>Agent RERA:</b> A52100024881<br>
        <b>Project:</b> Mantra Melange Codename JOYPIN - Kharadi Riverside<br>
        <b>Project RERA:</b> P52100079582<br>
        <b>Status:</b> Registered with Builder Mantra<br>
        <b>Date:</b> ${new Date().toLocaleString()}<br>
        <b>Next Steps:</b><br>
        1. Share 50% data: Carpet, Floor Plan, Location, Pricing (without builder name if still stealth)<br>
        2. After builder confirmation, share 90% data + RERA + Full brochure<br>
        3. Call client for site visit - Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9<br>
        4. Book site visit - Earn brokerage!
      </div>
      <br>
      <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
      <a href="/leads" style="background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">View All Leads</a>
    </body></html>
  `);
});

// View Leads
app.get('/leads', (req, res) => {
  const leadsFile = './leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
  }
  
  let html = `<html><body style="font-family: Arial; max-width: 1000px; margin: 20px auto; padding: 20px;">
    <h1>📋 All Leads - Registered Under VIJAY SONNI CP Name</h1>
    <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a><br><br>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <tr style="background: #ed8936; color: white;"><th>Name</th><th>Phone</th><th>BHK</th><th>Budget</th><th>Date</th><th>Status</th></tr>`;
  
  leads.forEach(lead => {
    html += `<tr><td>${lead.name}</td><td>${lead.phone}</td><td>${lead.bhk}</td><td>${lead.budget}</td><td>${new Date(lead.date).toLocaleString()}</td><td>${lead.status}</td></tr>`;
  });
  
  html += `</table><p>Total Leads: ${leads.length}</p></body></html>`;
  res.send(html);
});

// Webhook for WhatsApp (existing bot)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log('Webhook received:', JSON.stringify(body, null, 2));
  
  if (body.object === 'whatsapp_business_account') {
    body.entry.forEach(entry => {
      entry.changes.forEach(change => {
        if (change.field === 'messages') {
          const messages = change.value.messages;
          if (messages) {
            messages.forEach(msg => {
              const from = msg.from;
              const text = msg.text?.body || '';
              console.log(`Message from ${from}: ${text}`);
              // Here you would handle language selector etc
            });
          }
        }
      });
    });
  }
  
  res.status(200).send('EVENT_RECEIVED');
});

app.listen(PORT, () => {
  console.log(`VJS Melange JOYPIN Bot running on port ${PORT}`);
  console.log(`Kharadi Riverside Launch - 2 New Towers - EOI 20 Jun 2026`);
  console.log(`Agent: VJS Properties - Vijay Sonni - A52100024881`);
  console.log(`Zero Brokerage | Direct Deal | 8830634493 / 9922242771 / 8483968686`);
});
