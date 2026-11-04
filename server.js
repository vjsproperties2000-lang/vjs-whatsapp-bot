
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// ===== YOUR CREDENTIALS - CORRECTED TAGLINE =====
const PHONE_NUMBER_ID = "1385105994689983";
const VERIFY_TOKEN = "VJS2025VERIFY";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PORT = process.env.PORT || 3000;

const FOOTER = "Honesty • Transparency • Commitment Since 2000 | MahaRERA Certified";

app.get('/', (req, res) => {
  res.send(`VJS Properties Bot is Running! +91 8830634493 - ${FOOTER}`);
});

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified!');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', async (req, res) => {
  try {
    const body = req.body;
    if (body.object) {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const messages = value?.messages;
      
      if (messages && messages[0]) {
        const from = messages[0].from;
        const msgBody = messages[0].text?.body?.toLowerCase().trim() || "";
        
        console.log(`Message from ${from}: ${msgBody}`);
        
        let reply = "";
        
        if (msgBody.includes("hi") || msgBody.includes("hello") || msgBody.includes("namaste") || msgBody === "" || msgBody.length < 2) {
          reply = `🙏 Namaste! VJS Properties

${FOOTER}

Thank you for your enquiry for Kharadi / Mundhwa / Wagholi property.

Please select your preferred language / भाषा निवडा / भाषा चुनें:

1️⃣ - English
2️⃣ - मराठी
3️⃣ - हिंदी

Reply with 1, 2 or 3 and I will send you exact floor plans, not generic brochure.

- Vijay Sonni | VJS Properties 2000`;
        }
        else if (msgBody === "1" || msgBody.includes("english")) {
          reply = `Perfect! Thanks for choosing English.

To send you BEST verified options, 30 seconds:

1) Budget? (e.g. 65L / 85L / 1.1Cr)
2) Location? (Kharadi / Mundhwa / Wagholi / Keshav Nagar)
3) Timeline? (1 month / 3 months / 6 months)

Reply like: "85L, Kharadi, 2 months"

I will instantly send:
✓ Exact floor plan + pricing
✓ MahaRERA Certificate + QR
✓ Live location + drone video

${FOOTER}
- Vijay | VJS Properties | +91 8830634493`;
        }
        else if (msgBody === "2" || msgBody.includes("marathi") || msgBody === "मराठी") {
          reply = `धन्यवाद! मराठी निवडल्याबद्दल.

तुम्हाला योग्य पर्याय पाठवण्यासाठी ३० सेकंद:

१) बजेट? (उदा. ६५ लाख / ८५ लाख / १.१ कोटी)
२) लोकेशन? (खराडी / मुंढवा / वाघोली / केशव नगर)
३) कधीपर्यंत घ्यायचं आहे? (१ महिना / ३ महिने / ६ महिने)

असा रिप्लाय करा: "८५ लाख, खराडी, २ महिने"

मी लगेच पाठवतो:
✓ खरा फ्लोअर प्लॅन + किंमत
✓ MahaRERA प्रमाणपत्र + QR
✓ लोकेशन + ड्रोन व्हिडिओ

${FOOTER}
- विजय सोन्नी | VJS Properties`;
        }
        else if (msgBody === "3" || msgBody.includes("hindi") || msgBody === "हिंदी") {
          reply = `शुक्रिया! हिंदी चुनने के लिए।

आपको बेस्ट ऑप्शन भेजने के लिए 30 सेकंड:

1) बजट? (जैसे 65L / 85L / 1.1Cr)
2) लोकेशन? (खराड़ी / मुंढवा / वाघोली / केशव नगर)
3) कब तक लेना है? (1 महीना / 3 महीने / 6 महीने)

ऐसे रिप्लाई करें: "85L, खराड़ी, 2 महीने"

मैं तुरंत भेजूंगा:
✓ Exact फ्लोर प्लान + प्राइस
✓ MahaRERA सर्टिफिकेट + QR
✓ लोकेशन + ड्रोन वीडियो

${FOOTER}
- विजय सोन्नी | VJS Properties`;
        }
        else {
          reply = `Thanks! 🙏

Please reply:
1️⃣ - English
2️⃣ - मराठी
3️⃣ - हिंदी

Or tell me your budget & location like "85L, Kharadi"

${FOOTER}
- VJS Properties | +91 8830634493`;
        }

        await axios({
          method: "POST",
          url: `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`,
          headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json"
          },
          data: {
            messaging_product: "whatsapp",
            to: from,
            text: { body: reply }
          }
        });
        console.log(`Replied to ${from}`);
      }
    }
    res.sendStatus(200);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.sendStatus(200);
  }
});

app.listen(PORT, () => {
  console.log(`VJS Bot listening on port ${PORT} - ${FOOTER}`);
});
