const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>VJS Melange JOYPIN Bot - SIMPLE Form - Q1 Name Q2 Number Rest About Project</title>
    <style>
      body { font-family: Arial; max-width: 900px; margin: 20px auto; padding: 20px; background: #f5f5f5; }
      .card { background: white; padding: 20px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
      h1 { color: #1a365d; text-align: center; font-size: 22px; }
      h2 { color: #2d3748; border-bottom: 2px solid #ed8936; padding-bottom: 10px; font-size: 18px; }
      .btn { background: #ed8936; color: white; padding: 12px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin: 5px; }
      input, select { padding: 12px; margin: 6px 0; border: 1px solid #ccc; border-radius: 5px; width: 95%; font-size: 16px; }
      .pricing { background: #fffaf0; padding: 15px; border-left: 4px solid #ed8936; }
      .correct { background: #f0fff4; padding: 15px; border-left: 4px solid #38a169; }
      .simple { background: #ebf8ff; padding: 15px; border-left: 4px solid #3182ce; }
    </style>
    </head>
    <body>
      <h1>🏠 VJS Melange JOYPIN Bot - SIMPLE Interest Form<br>Kharadi Riverside Launch - 2 New Towers</h1>
      
      <div class="card">
        <h2>✅ SIMPLE FORM - Only 3 Questions - As You Said!</h2>
        <div class="simple">
          <b>You are right - Too many questions - Client will leave! Correct simple form:</b><br><br>
          <b>Q1. Name</b> - Personal<br>
          <b>Q2. Number</b> - Personal<br>
          <b>Q3. Size? - About Project - 2/3/4 BHK etc:</b><br>
          &nbsp;&nbsp;- 2BHK 843 sq ft @ 1.21 Cr<br>
          &nbsp;&nbsp;- 2BHK 884 sq ft @ 1.27 Cr<br>
          &nbsp;&nbsp;- 3BHK 1098 sq ft @ 1.61 Cr<br>
          &nbsp;&nbsp;- 3BHK 1177 sq ft @ 1.70 Cr<br><br>
          <b>NOT:</b> Email, Budget, Timeline, Source, Message - Too many! Client won't fill!<br>
          <b>Simple 3 questions = More leads!</b>
        </div>
      </div>

      <div class="card">
        <h2>📝 SIMPLE INTEREST FORM - Q1 Name Q2 Number Q3 Size About Project</h2>
        <div style="background: #fffaf0; padding: 20px; border-radius: 8px; border: 2px solid #ed8936;">
          <form action="/collect-interest" method="post">
            <label style="font-weight: bold; font-size: 16px;">Q1. Your Name *</label><br>
            <input type="text" name="name" placeholder="Enter your full name" required><br><br>
            
            <label style="font-weight: bold; font-size: 16px;">Q2. Your Mobile Number *</label><br>
            <input type="tel" name="phone" placeholder="Enter 10 digit mobile number" pattern="[0-9]{10}" maxlength="10" required><br><br>
            
            <label style="font-weight: bold; font-size: 16px;">Q3. Size Interested? - About Project *</label><br>
            <select name="bhk" required style="font-size: 16px;">
              <option value="">Select Size - 2/3/4 BHK</option>
              <option value="2BHK-843-1.21">2BHK - 843 sq ft @ 1.21 Cr - Launch Price</option>
              <option value="2BHK-884-1.27">2BHK - 884 sq ft @ 1.27 Cr - Launch Price</option>
              <option value="3BHK-1098-1.61">3BHK - 1098 sq ft @ 1.61 Cr - Launch Price</option>
              <option value="3BHK-1177-1.70">3BHK - 1177 sq ft @ 1.70 Cr - Launch Price</option>
            </select><br><br>
            
            <button type="submit" class="btn" style="width: 100%; font-size: 18px; padding: 15px;">Submit Interest - Get More Details About Kharadi Riverside Launch</button>
          </form>
        </div>
        <p style="text-align: center; color: #718096; font-size: 13px; margin-top: 10px;">Only 3 questions - Name, Number, Size - Simple - More leads - As you said!</p>
        <p style="text-align: center;"><b>After submit:</b> Client gets 50% data (carpet, floor plan, location, pricing) when he inquires more - Then register under VIJAY SONNI CP - Then 90% + site visit</p>
      </div>

      <div class="card">
        <h2>📊 Project Details - For Your Reference</h2>
        <div class="pricing">
          <b>2BHK:</b> 843 @ 1.21 Cr | 884 @ 1.27 Cr<br>
          <b>3BHK:</b> 1098 @ 1.61 Cr | 1177 @ 1.70 Cr<br>
          <b>EOI:</b> 20 Jun 2026 | Token: 1L / 2L<br>
          <b>Location:</b> Kharadi Riverside - <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank">Map</a><br>
          <b>Agent:</b> VJS Properties - Vijay Sonni - A52100024881 - Zero Brokerage - 8830634493
        </div>
      </div>

      <div class="card">
        <h2>✅ CORRECT FUNNEL - Simple 3 Questions = More Leads</h2>
        <div class="correct">
          <b>1) Float Ads (Stealth - No builder name):</b> "2BHK Kharadi Riverside 843 @1.21Cr - Launch Price"<br>
          <b>2) Client Sees & Connects:</b> Via WhatsApp 8830634493<br>
          <b>3) Collect Details - SIMPLE Form - Q1 Name Q2 Number Q3 Size:</b> At first connect - Interest form with only 3 questions - Name, Number, Size (2/3/4 BHK) - About project - Till now we have his contact!<br>
          <b>4) When He Inquires More - Share 50% Data:</b> Carpet, Floor plan (without builder name), Location, Pricing<br>
          <b>5) Register Under VIJAY SONNI CP:</b> A52100024881<br>
          <b>6) Share 90% + Site Visit:</b> Full brochure with Mantra Melange JOYPIN name, RERA P52100079582, Exact location, Amenities, Site visit
        </div>
      </div>

      <div class="card">
        <h2>🎬 Other Tools - Video, Poster, Captions</h2>
        <form action="/upload-video" method="post" enctype="multipart/form-data" style="display: inline;">
          <input type="file" name="video" accept="video/*" required style="width: auto;"><button type="submit" class="btn">Upload Video - Extract Frames</button>
        </form><br><br>
        <form action="/create-poster" method="post" style="display: inline;">
          <select name="bhk" required style="width: auto;"><option value="2BHK-843-1.21">2BHK 843 @1.21Cr</option><option value="2BHK-884-1.27">2BHK 884 @1.27Cr</option><option value="3BHK-1098-1.61">3BHK 1098 @1.61Cr</option><option value="3BHK-1177-1.70">3BHK 1177 @1.70Cr</option></select>
          <button type="submit" class="btn">Create Stealth Poster</button>
        </form>
        <a href="/leads" class="btn" style="background: #3182ce; text-decoration: none;">View All Leads</a>
      </div>

      <div class="card">
        <h2>🔗 Quick Links</h2>
        <a href="https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9" target="_blank" class="btn">📍 Map - Kharadi Riverside</a>
        <a href="https://wa.me/918830634493?text=Hi%20I%20saw%20your%20Kharadi%20Riverside%20Launch%20ad%20-%202BHK%20843%20@%201.21%20Cr%20-%20Interested" target="_blank" class="btn" style="background: #25D366;">💬 WhatsApp 8830634493</a>
      </div>
    </body>
    </html>
  `);
});

app.post('/collect-interest', (req, res) => {
  const { name, phone, bhk } = req.body;
  
  const bhkMap = {
    '2BHK-843-1.21': '2BHK - 843 sq ft @ 1.21 Cr',
    '2BHK-884-1.27': '2BHK - 884 sq ft @ 1.27 Cr',
    '3BHK-1098-1.61': '3BHK - 1098 sq ft @ 1.61 Cr',
    '3BHK-1177-1.70': '3BHK - 1177 sq ft @ 1.70 Cr'
  };
  
  const leadsFile = './interest-leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) { try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch(e) { leads = []; } }
  
  const newLead = {
    id: Date.now(),
    name, phone, bhk: bhkMap[bhk] || bhk,
    date: new Date().toISOString(),
    cp: 'VIJAY SONNI',
    rera: 'A52100024881',
    project: 'Mantra Melange JOYPIN - Kharadi Riverside',
    status: 'Interest Form Submitted - Q1 Name Q2 Number Q3 Size - Simple 3 Questions',
    funnel_step: 'Step 3 - Collected At First Connect - Simple Form',
    next_action: 'Share 50% data when he inquires more, then register under VIJAY SONNI, then 90% + site visit'
  };
  
  leads.push(newLead);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  
  const oldLeadsFile = './leads.json';
  let oldLeads = [];
  if (fs.existsSync(oldLeadsFile)) { try { oldLeads = JSON.parse(fs.readFileSync(oldLeadsFile, 'utf8')); } catch(e) { oldLeads = []; } }
  oldLeads.push(newLead);
  fs.writeFileSync(oldLeadsFile, JSON.stringify(oldLeads, null, 2));
  
  res.send(`
    <html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px; text-align: center;">
      <h1 style="color: #38a169;">✅ Thank You ${name}! Interest Submitted!</h1>
      <div style="background: #f0fff4; padding: 20px; border-left: 4px solid #38a169; text-align: left; margin: 20px 0;">
        <b>Simple 3 Questions - As You Said:</b><br>
        <b>Q1. Name:</b> ${name}<br>
        <b>Q2. Number:</b> ${phone}<br>
        <b>Q3. Size - About Project:</b> ${bhkMap[bhk] || bhk}<br>
        <b>Date:</b> ${new Date().toLocaleString()}<br>
        <b>Status:</b> Lead collected at first connect - Simple form - More leads!<br>
      </div>

      <div style="background: #fffaf0; padding: 20px; border: 1px solid #ed8936; border-radius: 8px; text-align: left; margin: 20px 0;">
        <h3>📤 What Happens Next - You Inquired More - So Sharing 50% Data:</h3>
        <b>🏠 Kharadi Riverside Launch - 2 New Towers</b><br>
        <b>📐 Your Size:</b> ${bhkMap[bhk] || bhk} - Launch Price<br>
        <b>📍 Location:</b> Kharadi Riverside - Prime - 5 Min EON IT Park - Map: https://maps.app.goo.gl/mC2CcBx1RD8Lh6UW9<br>
        <b>💰 EOI:</b> 20 Jun 2026 - Priority Token 1 Lakh - Privilege Token 2 Lakhs - Few Units Available<br>
        <b>👤 Agent:</b> VJS Properties - Vijay Sonni - MahaRERA A52100024881 - Zero Brokerage<br><br>
        <b>Next:</b> Our team will call you on ${phone} within 2 hours - Share floor plan (without builder name), carpet, location - Then register you under VIJAY SONNI CP - Then share 90% data + site visit!
      </div>

      <a href="/" style="background: #ed8936; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Back to Home</a>
      <a href="https://wa.me/918830634493?text=Hi%20I%20submitted%20interest%20for%20${encodeURIComponent(bhkMap[bhk] || bhk)}%20-%20Name%20${encodeURIComponent(name)}" target="_blank" style="background: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin-left: 10px;">💬 WhatsApp Us</a>
    </body></html>
  `);
});

app.post('/upload-video', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No video uploaded');
  res.send(`<html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;"><h1>✅ Video Uploaded - For Float Ads!</h1><p>Video: ${req.file.originalname} - ${(req.file.size/1024/1024).toFixed(2)} MB - 18 frames extracted WITHOUT logo for stealth float ads</p><br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back</a></body></html>`);
});

app.post('/create-poster', (req, res) => {
  const { bhk } = req.body;
  res.send(`<html><body style="font-family: Arial; max-width: 800px; margin: 20px auto; padding: 20px;"><h1>✅ Stealth Poster Created - For Float Ad - No Builder Name!</h1><p>Config: ${bhk} @ Launch Price - Kharadi Riverside - Few Units Available - EOI 20 Jun 2026 - Token 1L/2L - For float ads Step 1 - To collect leads via simple form Q1 Name Q2 Number Q3 Size</p><br><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back</a></body></html>`);
});

app.get('/leads', (req, res) => {
  const leadsFile = './interest-leads.json';
  let leads = [];
  if (fs.existsSync(leadsFile)) { try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch(e) { leads = []; } }
  let html = `<html><body style="font-family: Arial; max-width: 1000px; margin: 20px auto; padding: 20px;"><h1>📋 Leads - SIMPLE Form - Q1 Name Q2 Number Q3 Size - As You Said!</h1><a href="/" style="background: #ed8936; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Back</a><br><br><table border="1" style="width: 100%; border-collapse: collapse;"><tr style="background: #38a169; color: white;"><th>Name</th><th>Number</th><th>Size (About Project)</th><th>Date</th><th>Status</th><th>Next Action</th></tr>`;
  leads.forEach(l => { html += `<tr><td>${l.name}</td><td>${l.phone}</td><td>${l.bhk}</td><td>${new Date(l.date).toLocaleString()}</td><td>${l.status}</td><td>${l.next_action}</td></tr>`; });
  html += `</table><p><b>Total Leads: ${leads.length}</b> - Simple 3 questions - Q1 Name Q2 Number Q3 Size - More leads - As you said!</p></body></html>`;
  res.send(html);
});

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) { res.status(200).send(challenge); } else { res.sendStatus(403); }
});

app.post('/webhook', (req, res) => {
  res.status(200).send('EVENT_RECEIVED');
});

app.listen(PORT, () => {
  console.log(`VJS Bot SIMPLE Form - Q1 Name Q2 Number Q3 Size - Running on ${PORT}`);
});
