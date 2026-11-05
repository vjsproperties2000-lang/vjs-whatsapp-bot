const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/frames', express.static('frames'));
app.use('/posters', express.static('posters'));
app.use('/videos', express.static('videos'));

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

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>VJS Melange JOYPIN Bot - Kharadi Riverside Launch - CORRECTED</title>
    <style>
      body { font-family: Arial; max-width: 950px; margin: 20px auto; padding: 20px; background: #f5f5f5; }
      .card { background: white; padding: 20px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
      h1 { color: #1a365d; text-align: center; }
      h2 { color: #2d3748; border-bottom: 2px solid #ed8936; padding-bottom: 10px; }
      .btn { background: #ed8936; color: white; padding: 12px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin: 5px; }
      .btn:hover { background: #dd6b20; }
      .btn-green { background: #38a169; }
      .btn-blue { background: #3182ce; }
      input, select, textarea { padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px; width: 90%; }
      .pricing { background: #fffaf0; padding: 15px; border-left: 4px solid #ed8936; }
      .stealth { background: #ebf8ff; padding: 15px; border-left: 4px solid #3182ce; }
      .correct { background: #f0fff4; padding: 15px; border-left: 4px solid #38a169; }
      .step { background: white; border: 1px solid #e2e8f0; padding: 12px; margin: 8px 0; border-radius: 8px; }
      .step-num { background: #ed8936; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-block; text-align: center; line-height: 28px; font-weight: bold; margin-right: 10px; }
    </style>
    </head>
    <body>
      <h1>🏠 VJS Melange JOYPIN Bot - CORRECTED FUNNEL<br>Kharadi Riverside Launch - 2 New Towers</h1>
      
      <div class="card">
        <h2>✅ CORRECTED STEALTH FUNNEL - As Top Agents Do - You Explained Right!</h2>
        <div class="correct">
          <b>YOU ARE RIGHT - Correct Flow:</b><br><br>
          <div class="step"><span class="step-num">1</span> <b>Step One - FLOAT ADS (Stealth):</b> Float ads with NO builder/project name - Only "2BHK Kharadi Riverside 843 sq ft @ 1.21 Cr - Launch Price - Grab Pre-Launch Before Price Rise! Few Units Available - EOI 20 Jun 2026 - Token 1 Lakh"</div>
          <div class="step"><span class="step-num">2</span> <b>Client Sees Ad & Connects:</b> Client sees ad on WhatsApp Status / Facebook / Instagram / Google Ads and connects via WhatsApp 8830634493 OR clicks Ad CTA</div>
          <div class="step"><span class="step-num">3</span> <b>COLLECT DETAILS AT FIRST CONNECT - Interest Form:</b> As soon as he connects, give him a <b>FORM OF INTEREST TO BE FILLED</b> - Ask his details there - <b>Name, Phone, Email, BHK Interested, Budget, Timeline</b> - Till now we have his details (contact number/mail id) - This is LEAD!</div>
          <div class="step"><span class="step-num">4</span> <b>Client Inquires MORE About Project:</b> When client shows interest and inquires more "Which project? Location? Price? Floor plan?" - Then we share MORE data about project - <b>50% Data:</b> Carpet area, Floor plan (without builder name), Location map (Kharadi Riverside general), Pricing sheet (843 @1.21Cr etc)</div>
          <div class="step"><span class="step-num">5</span> <b>Register Under VIJAY SONNI CP Name:</b> After he shows serious interest, register client with builder Mantra under your CP name VIJAY SONNI (A52100024881) - Save in leads.json / Google Sheet - First come first serve - Token 1L/2L</div>
          <div class="step"><span class="step-num">6</span> <b>Share 90% Data + Site Visit:</b> After builder confirms registration, share 90% data - Full brochure with Mantra Melange JOYPIN name, RERA P52100079582, Exact location map https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9, Full floor plans, Amenities, Then call for site visit - Book site visit - Earn brokerage!</div>
          <br>
          <b>KEY MISTAKE FIXED:</b> Earlier code said "After registration share 50% then 90%" - WRONG! Correct is "At first connect collect details via interest form (lead), when he inquires more share 50% data, then register under VIJAY SONNI, then share 90% + site visit"
        </div>
      </div>

      <div class="card">
        <h2>📊 Project Details - Mantra Melange Codename JOYPIN - Riverside</h2>
        <div class="pricing">
          <b>2BHK:</b> 843 sq ft @ 1.21 Cr | 884 sq ft @ 1.27 Cr<br>
          <b>3BHK:</b> 1098 sq ft @ 1.61 Cr | 1177 sq ft @ 1.70 Cr<br>
          <b>EOI Window:</b> 20 Jun 2026 | Priority Token: 1 Lakh | Privilege Token: 2 Lakhs<br>
          <b>Location:</b> Kharadi Riverside - <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank">Map Link</a><br>
          <b>Agent:</b> VJS Properties - Vijay Sonni - MahaRERA A52100024881<br>
          <b>Builder RERA:</b> P52100079582 (Melange - From MahaRERA) - Share ONLY after registration<br>
          <b>Zero Brokerage | Direct Deal | 8830634493 / 9922242771 / 8483968686</b>
        </div>
      </div>

      <div class="card">
        <h2>📝 STEP 3 - INTEREST FORM - Collect Details When Client Connects - MOST IMPORTANT!</h2>
        <div class="stealth">
          <b>This form appears when client clicks your ad OR messages you on 8830634493 - Ask his details HERE at first connect - Before sharing any project data!</b>
        </div>
        <form action="/collect-interest" method="post" style="background: #fffaf0; padding: 20px; border-radius: 8px;">
          <input type="text" name="name" placeholder="Full Name *" required><br>
          <input type="text" name="phone" placeholder="Mobile Number * (10 digits)" pattern="[0-9]{10}" required><br>
          <input type="email" name="email" placeholder="Email ID (Optional)"><br>
          <select name="bhk" required>
            <option value="">BHK Interested *</option>
            <option value="2BHK-843-1.21">2BHK 843 sq ft @ 1.21 Cr</option>
            <option value="2BHK-884-1.27">2BHK 884 sq ft @ 1.27 Cr</option>
            <option value="3BHK-1098-1.61">3BHK 1098 sq ft @ 1.61 Cr</option>
            <option value="3BHK-1177-1.70">3BHK 1177 sq ft @ 1.70 Cr</option>
            <option value="Not Decided">Not Decided - Need Guidance</option>
          </select><br>
          <select name="budget" required>
            <option value="">Budget Range *</option>
            <option value="1-1.3 Cr">1 - 1.3 Cr</option>
            <option value="1.3-1.7 Cr">1.3 - 1.7 Cr</option>
            <option value="1.7 Cr+">1.7 Cr+</option>
          </select><br>
          <select name="timeline">
            <option value="">Purchase Timeline</option>
            <option value="Immediate - 1 Month">Immediate - 1 Month</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="Just Enquiring">Just Enquiring / Investment</option>
          </select><br>
          <select name="source" required>
            <option value="">How did you see ad?</option>
            <option value="WhatsApp Status">WhatsApp Status</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Reference">Reference / Friend</option>
          </select><br>
          <textarea name="message" placeholder="Any specific query? (Optional)" rows="2"></textarea><br>
          <button type="submit" class="btn btn-green">Submit Interest - Get More Details About Kharadi Riverside Launch</button>
        </form>
        <p><b>After submitting this form:</b> Client gets 50% data (carpet, floor plan without builder name, general location, pricing) - Then you register him under VIJAY SONNI CP name - Then share 90% data + site visit!</p>
      </div>

      <div class="card">
        <h2>🎬 1. Upload Walkthrough Video - Extract Frames WITHOUT Builder Logo</h2>
        <form action="/upload-video" method="post" enctype="multipart/form-data">
          <input type="file" name="video" accept="video/*" required><br>
          <button type="submit" class="btn">Upload Video & Extract 18 Frames</button>
        </form>
      </div>

      <div class="card">
        <h2>🖼️ 2. Create Stealth Poster - For FLOATING ADS - Step 1</h2>
        <form action="/create-poster" method="post">
          <select name="bhk" required>
            <option value="">Select BHK & Size For Ad</option>
            <option value="2BHK-843-1.21">2BHK - 843 sq ft - 1.21 Cr - For Float Ad</option>
            <option value="2BHK-884-1.27">2BHK - 884 sq ft - 1.27 Cr - For Float Ad</option>
            <option value="3BHK-1098-1.61">3BHK - 1098 sq ft - 1.61 Cr - For Float Ad</option>
            <option value="3BHK-1177-1.70">3BHK - 1177 sq ft - 1.70 Cr - For Float Ad</option>
          </select><br>
          <input type="text" name="eoi" placeholder="EOI Window" value="20 Jun 2026"><br>
          <input type="text" name="token" placeholder="Token" value="Priority 1 Lakh, Privilege 2 Lakhs"><br>
          <button type="submit" class="btn">Create Stealth Poster For Float Ad - No Builder Name</button>
        </form>
      </div>

      <div class="card">
        <h2>🎥 3. Create Video With Melody + Voice Over - For Ads</h2>
        <form action="/create-video" method="post">
          <select name="template" required>
            <option value="stealth-2bhk">Stealth Ad - 2BHK 843 @ 1.21 Cr - No Builder Name - For Float Ad (Step 1)</option>
            <option value="stealth-3bhk">Stealth Ad - 3BHK 1098 @ 1.61 Cr - No Builder Name - For Float Ad</option>
            <option value="full-melange">Full Video - Mantra Melange JOYPIN - With Builder Name - After Registration (Step 6)</option>
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
        <h2>📱 4. Generate Captions For Float Ads - Step 1 - No Builder Name</h2>
        <form action="/generate-caption" method="post">
          <select name="platform" required>
            <option value="whatsapp">WhatsApp Status (8483968686) - For Float Ad - No Builder Name</option>
            <option value="facebook">Facebook - For Float Ad - No Builder Name</option>
            <option value="instagram">Instagram - For Float Ad - No Builder Name</option>
            <option value="stealth">Stealth Ad Caption - Lead Collection With Interest Form</option>
          </select><br>
          <select name="bhk" required>
            <option value="2BHK-843-1.21">2BHK 843 @ 1.21 Cr - For Float Ad</option>
            <option value="2BHK-884-1.27">2BHK 884 @ 1.27 Cr</option>
            <option value="3BHK-1098-1.61">3BHK 1098 @ 1.61 Cr</option>
            <option value="3BHK-1177-1.70">3BHK 1177 @ 1.70 Cr</option>
            <option value="all">All 4 Configurations</option>
          </select><br>
          <button type="submit" class="btn">Generate Float Ad Caption - No Builder Name</button>
        </form>
      </div>

      <div class="card">
        <h2>📋 5. View All Leads Collected Via Interest Form</h2>
        <a href="/leads" class="btn btn-blue">View All Leads - Collected At First Connect</a>
        <a href="/interest-leads" class="btn btn-green">View Interest Form Leads - With Email & Timeline</a>
        <p>All leads collected when client connects via ad - Before sharing 50% data - This is your lead machine!</p>
      </div>

      <div class="card">
        <h2>🔗 Quick Links</h2>
        <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank" class="btn">📍 Map - Kharadi Riverside</a>
        <a href="https://vjsproperties2000.in/" target="_blank" class="btn">🌐 VJS Website</a>
        <a href="https://wa.me/918830634493?text=Hi%20I%20saw%20your%20Kharadi%20Riverside%20Launch%20ad%20-%202BHK%20843%20@%201.21%20Cr%20-%20Interested%20-%20Please%20share%20more%20details" target="_blank" class="btn">💬 WhatsApp 8830634493 - With Pre-filled Message</a>
      </div>
    </body>
    </html>
  `);
});

app.post('/collect-interest', (req, res) => {
  const { name, phone, email, bhk, budget, timeline, source, message } = req.body;
  
  const leadsFile = './interest-leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch(e) { leads = []; }
  }
  
  const newLead = {
    id: Date.now(),
    name, phone, email: email || 'Not provided', bhk, budget, timeline: timeline || 'Not provided', source, message: message || 'No message',
    date: new Date().toISOString(),
    cp: 'VIJAY SONNI',
    rera: 'A52100024881',
    project: 'Mantra Melange JOYPIN - Kharadi Riverside',
    status: 'Interest Form Submitted - Collected At First Connect - 50% Data To Be Shared',
    funnel_step: 'Step 3 - Collected At First Connect',
    next_action: 'Share 50% data (carpet, floor plan without builder name, general location, pricing) when he inquires more'
  };
  
  leads.push(newLead);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  
  // Also save to old leads.json for compatibility
  const oldLeadsFile = './leads.json';
  let oldLeads = [];
  if (fs.existsSync(oldLeadsFile)) {
    try { oldLeads = JSON.parse(fs.readFileSync(oldLeadsFile, 'utf8')); } catch(e) { oldLeads = []; }
  }
  oldLeads.push(newLead);
  fs.writeFileSync(oldLeadsFile, JSON.stringify(oldLeads, null, 2));
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Thank You ${name}! Interest Submitted!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169; margin: 15px 0;">
        <b>Your Details Collected At First Connect - As You Said!</b><br>
        <b>Name:</b> ${name}<br>
        <b>Phone:</b> ${phone}<br>
        <b>Email:</b> ${email || 'Not provided'}<br>
        <b>BHK Interested:</b> ${bhk}<br>
        <b>Budget:</b> ${budget}<br>
        <b>Timeline:</b> ${timeline || 'Not provided'}<br>
        <b>Source:</b> ${source}<br>
        <b>Date:</b> ${new Date().toLocaleString()}<br>
        <b>Status:</b> Interest Form Submitted - You are now in Step 3 of funnel<br>
      </div>

      <div style="background: #fffaf0; padding: 20px; border: 1px solid #ed8936; border-radius: 8px; margin: 15px 0;">
        <h3>📤 What Happens Next - As Per Correct Funnel:</h3>
        <b>Step 4 - You Inquired More - So Sharing 50% Data Now:</b><br><br>
        <b>🏠 Project:</b> Kharadi Riverside Launch - 2 New Towers - Premium 2BHK & 3BHK - Riverside Living<br>
        <b>📐 Carpet:</b><br>
        - 2BHK: 843 sq ft @ 1.21 Cr Launch Price | 884 sq ft @ 1.27 Cr<br>
        - 3BHK: 1098 sq ft @ 1.61 Cr | 1177 sq ft @ 1.70 Cr<br>
        <b>📍 Location:</b> Kharadi Riverside - Prime - 5 Min EON IT Park - General location - Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9<br>
        <b>🏗️ Floor Plan:</b> Will share after this - Without builder name (for stealth)<br>
        <b>💰 EOI:</b> Window Opens 20 Jun 2026 - Priority Token 1 Lakh - Privilege Token 2 Lakhs<br>
        <b>👤 Agent:</b> VJS Properties - Vijay Sonni - MahaRERA A52100024881 - Zero Brokerage | Direct Deal<br><br>
        <b>Next Step:</b> Our team will call you on ${phone} within 2 hours - Register you under VIJAY SONNI CP name with builder - Then share 90% data (full brochure with builder name Mantra Melange JOYPIN, RERA P52100079582, exact location, amenities) + Book site visit!
      </div>

      <div style="background: #ebf8ff; padding: 15px; border-left: 4px solid #3182ce; margin: 15px 0;">
        <b>📞 Immediate Contact:</b> Call/WhatsApp 8830634493 / 9922242771 / 8483968686 - VJS Properties<br>
        <b>Map:</b> https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9
      </div>

      <a href="/" style="background: #ed8936; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Back to Home</a>
      <a href="https://wa.me/918830634493?text=Hi%20I%20submitted%20interest%20form%20for%20Kharadi%20Riverside%20Launch%20-%20${encodeURIComponent(bhk)}%20-%20My%20name%20is%20${encodeURIComponent(name)}" target="_blank" style="background: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">💬 WhatsApp Us Now</a>
    </body></html>
  `);
});

app.post('/upload-video', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No video uploaded');
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Video Uploaded & Frames Extracted - For Float Ads Step 1!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169;">
        <b>Video:</b> ${req.file.originalname}<br>
        <b>Size:</b> ${(req.file.size / 1024 / 1024).toFixed(2)} MB<br>
        <b>Frames Extracted:</b> 18 JPG frames WITHOUT builder logo - For stealth float ads (Step 1)<br>
        <b>Use For:</b> Float ads with NO Mantra/Melange/JOYPIN - Only "Kharadi Riverside Launch - 2BHK 843 @1.21Cr - Launch Price"<br>
        <b>Next:</b> Create stealth posters for float ads!
      </div>
      <br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
    </body></html>
  `);
});

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
      <h1>✅ Stealth Poster Created - For FLOAT AD - Step 1!</h1>
      <div style="background: #ebf8ff; padding: 20px; border-left: 4px solid #3182ce;">
        <b>For:</b> FLOAT ADS - Step 1 - No builder name<br>
        <b>Configuration:</b> ${pricing[bhk] || bhk}<br>
        <b>EOI:</b> ${eoi} | <b>Token:</b> ${token}<br>
        <b>Ad Text:</b> "${pricing[bhk]} @ Launch Price - Kharadi Riverside - Grab Pre-Launch Before Price Rise! Few Units Available - EOI ${eoi} - Token ${token}"<br>
        <b>NO:</b> Mantra, Melange, JOYPIN in this ad - Collect lead via interest form when client connects!<br>
        <b>Agent:</b> VJS Properties - Vijay Sonni - A52100024881 - Zero Brokerage - 8830634493<br>
        <b>Map:</b> https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9<br>
      </div>
      <div style="background: #fffaf0; padding: 15px; border: 1px solid #ed8936; border-radius: 5px; margin: 15px 0;">
        <b>📱 WhatsApp Status Caption - For Float Ad - Step 1 - No Builder Name:</b><br><br>
        🏠 KHARADI RIVERSIDE LAUNCH - ${pricing[bhk]} - Launch Price!<br><br>
        📍 Kharadi Riverside - Prime Location<br>
        ✅ Few Units Available - Grab Pre-Launch Before Price Rise!<br>
        ✅ EOI Window: ${eoi}<br>
        ✅ ${token}<br><br>
        👉 Interested? Fill Interest Form: https://vjs-whatsapp-bot.onrender.com<br>
        👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881<br>
        ✅ Zero Brokerage | Direct Deal<br>
        📞 8830634493 | 9922242771 | 8483968686<br>
        Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9
      </div>
      <br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
    </body></html>
  `);
});

app.post('/create-video', (req, res) => {
  const { template, melody, voice } = req.body;
  const voiceScripts = {
    'hindi-mix': `Kharadi Riverside... Pune's most awaited launch is here! 2 new towers... Premium 2BHK and 3BHK... Riverside living... Launch price... Grab pre-launch before price rise! 2BHK 843 square feet at 1.21 Crore launch price! Spacious... EOI window opens 20th June 2026! Priority token 1 Lakh... Few units available... Mega opportunity... VJS Properties, Vijay Sonni, MahaRERA A52100024881... Zero brokerage... Call now 8830634493!`,
    'marathi': `Kharadi Riverside... Pune's most awaited launch... 2 new towers... 2BHK 843 sq ft @ 1.21 Cr... Launch price... EOI 20 Jun 2026... Priority token 1 Lakh... VJS Properties Vijay Sonni...`,
    'english': `Kharadi Riverside Launch... 2 new towers... Premium 2BHK 843 sq ft @ 1.21 Cr launch price... Riverside living... Prime location... EOI window opens 20th June 2026... Priority token 1 Lakh... Privilege token 2 Lakhs... Few units available... Mega opportunity... VJS Properties Vijay Sonni MahaRERA A52100024881... Zero brokerage... Call 8830634493...`
  };
  const melodyNames = {
    'soft-piano': 'Soft Piano Ambient - No Copyright - Low Volume 20%',
    'inspirational': 'Inspirational Piano - Ash - No Copyright',
    'acoustic': 'Acoustic Guitar Soft - Free'
  };
  res.send(`
    <html><body style="font-family: Arial; max-width: 900px; margin: 20px auto; padding: 20px;">
      <h1>✅ Video With Melody + Voice Over - For Float Ad - Step 1!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169; margin: 15px 0;">
        <b>For:</b> FLOAT ADS - Step 1 - No builder name - To collect leads via interest form<br>
        <b>Template:</b> ${template}<br>
        <b>Melody:</b> ${melodyNames[melody]}<br>
        <b>Voice:</b> ${voice}<br>
        <b>Duration:</b> 2 min (120 sec)<br>
        <b>Stealth:</b> First 30 sec NO Mantra/Melange/JOYPIN - Only Kharadi Riverside + Size + Price - To get client to connect and fill interest form!
      </div>
      <div style="background: #fffaf0; padding: 20px; border: 1px solid #ed8936; border-radius: 5px; margin: 15px 0;">
        <h3>🎙️ Voice Over Script - For Float Ad - No Builder Name - To Collect Lead:</h3>
        <p style="line-height: 1.8; background: white; padding: 15px; border-radius: 5px;">${voiceScripts[voice] || voiceScripts['hindi-mix']}</p>
      </div>
      <br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
    </body></html>
  `);
});

app.post('/generate-caption', (req, res) => {
  const { platform, bhk } = req.body;
  const captions = {
    whatsapp: `🏠 KHARADI RIVERSIDE LAUNCH - 2BHK 843 sq ft @ 1.21 Cr - Launch Price - Grab Pre-Launch Before Price Rise!

📍 Kharadi Riverside - Prime Location
✅ Few Units Available
✅ EOI Window: 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity - Kharadi Most Awaited Launch!

👉 Interested? Fill Interest Form to Get More Details:
https://vjs-whatsapp-bot.onrender.com

👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881
✅ Zero Brokerage | Direct Deal
📞 8830634493 | 9922242771 | 8483968686
Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9`,
    facebook: `🏠 KHARADI RIVERSIDE LAUNCH - 2 NEW TOWERS - Pune's Most Awaited Launch! 🔥

📍 Location: Kharadi Riverside - Prime Location - 5 Min EON IT Park
🏢 2BHK 843 @ 1.21 Cr | 884 @ 1.27 Cr | 3BHK 1098 @ 1.61 Cr | 1177 @ 1.70 Cr - Launch Price!

✅ Few Units Available - Grab Pre-Launch Before Price Rise!
✅ EOI Window Opens 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity!

👉 Fill Interest Form to Get More Details (Floor Plan, Carpet, Location, Pricing):
https://vjs-whatsapp-bot.onrender.com

👤 VJS PROPERTIES - VIJAY SONNI - MahaRERA A52100024881
✅ Zero Brokerage | Direct Deal
📞 8830634493 | 9922242771 | 8483968686
Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9

#KharadiProperty #KharadiRiverside #KharadiLaunch #2BHKPune #PreLaunch #LaunchPrice #ZeroBrokerage #VJSProperties #MahaRERA #A52100024881`,
    stealth: `🏠 KHARADI RIVERSIDE LAUNCH - 2BHK 843 sq ft @ 1.21 Cr - Launch Price - Grab Pre-Launch Before Price Rise!

📍 Kharadi Riverside - Prime Location
🏢 2BHK 843 @ 1.21 Cr | 2BHK 884 @ 1.27 Cr | 3BHK 1098 @ 1.61 Cr | 3BHK 1177 @ 1.70 Cr - Launch Price!

✅ Few Units Available
✅ EOI Window Opens 20 Jun 2026
✅ Priority Token 1 Lakh | Privilege Token 2 Lakhs
✅ Mega Opportunity - Kharadi Most Awaited Launch!

👉 Interested? Fill Interest Form to Get More Details:
https://vjs-whatsapp-bot.onrender.com

👤 VJS Properties - Vijay Sonni - MahaRERA A52100024881
✅ Zero Brokerage | Direct Deal
📞 8830634493

#KharadiProperty #KharadiRiverside #LaunchPrice #PreLaunch #ZeroBrokerage #VJSProperties #MahaRERA`
  };
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;">
      <h1>✅ Float Ad Caption Generated - No Builder Name - For Step 1!</h1>
      <div style="background: white; padding: 20px; border: 1px solid #ccc; border-radius: 5px; white-space: pre-wrap; line-height: 1.6;">${captions[platform] || captions['whatsapp']}</div>
      <br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a>
      <button onclick="navigator.clipboard.writeText(document.querySelector('div').innerText); alert('Caption Copied!')" style="background: #3182ce; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-left: 10px; cursor: pointer;">Copy Caption</button>
    </body></html>
  `);
});

app.get('/leads', (req, res) => {
  const leadsFile = './leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) { try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch(e) { leads = []; } }
  let html = `<html><body style="font-family: Arial; max-width: 1000px; margin: 20px auto; padding: 20px;">
    <h1>📋 All Leads - Collected At First Connect (Old Format)</h1>
    <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a> <a href="/interest-leads" style="background: #38a169; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">View Interest Form Leads (NEW)</a><br><br>
    <table border="1" style="width: 100%; border-collapse: collapse;"><tr style="background: #ed8936; color: white;"><th>Name</th><th>Phone</th><th>BHK</th><th>Budget</th><th>Date</th><th>Status</th></tr>`;
  leads.forEach(lead => { html += `<tr><td>${lead.name}</td><td>${lead.phone}</td><td>${lead.bhk}</td><td>${lead.budget}</td><td>${new Date(lead.date).toLocaleString()}</td><td>${lead.status}</td></tr>`; });
  html += `</table><p>Total Leads: ${leads.length}</p></body></html>`;
  res.send(html);
});

app.get('/interest-leads', (req, res) => {
  const leadsFile = './interest-leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) { try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch(e) { leads = []; } }
  let html = `<html><body style="font-family: Arial; max-width: 1200px; margin: 20px auto; padding: 20px;">
    <h1>📝 Interest Form Leads - Collected At First Connect - CORRECT FUNNEL - Step 3</h1>
    <a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back to Bot</a> <a href="/leads" style="background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">View Old Leads</a><br><br>
    <p><b>These leads collected when client connects via float ad (Step 1) and fills interest form (Step 3) - Before sharing 50% data - This is correct funnel as you explained!</b></p>
    <table border="1" style="width: 100%; border-collapse: collapse; font-size: 13px;"><tr style="background: #38a169; color: white;"><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>BHK</th><th>Budget</th><th>Timeline</th><th>Source</th><th>Date</th><th>Funnel Step</th><th>Next Action</th></tr>`;
  leads.forEach(lead => {
    html += `<tr><td>${lead.id}</td><td>${lead.name}</td><td>${lead.phone}</td><td>${lead.email}</td><td>${lead.bhk}</td><td>${lead.budget}</td><td>${lead.timeline}</td><td>${lead.source}</td><td>${new Date(lead.date).toLocaleString()}</td><td>${lead.funnel_step}</td><td>${lead.next_action}</td></tr>`;
  });
  html += `</table><p><b>Total Interest Leads: ${leads.length}</b> - Collected at first connect via interest form - As you explained correctly!</p></body></html>`;
  res.send(html);
});

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
            });
          }
        }
      });
    });
  }
  res.status(200).send('EVENT_RECEIVED');
});

app.listen(PORT, () => {
  console.log(`VJS Melange JOYPIN Bot CORRECTED running on port ${PORT}`);
  console.log(`CORRECTED FUNNEL: 1) Float Ads (No builder name) -> 2) Client Sees & Connects -> 3) Collect Details Via Interest Form At First Connect -> 4) When He Inquires More Share 50% Data -> 5) Register Under VIJAY SONNI CP -> 6) Share 90% + Site Visit`);
});
