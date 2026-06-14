const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const toTop = document.querySelector('.to-top');
const languageToggle = document.querySelector('.language-toggle');
const aiFloat = document.querySelector('.ai-float');
const aiChat = document.querySelector('.ai-chat');

const tamilTranslations = {
  'Computer sales, service & security solutions': 'கணினி விற்பனை, சேவை மற்றும் பாதுகாப்புத் தீர்வுகள்',
  'Call +91 90437 28522': 'அழைக்கவும் +91 90437 28522',
  'WhatsApp us': 'வாட்ஸ்அப்பில் தொடர்புகொள்ள',
  'Home': 'முகப்பு',
  'Services': 'சேவைகள்',
  'About': 'எங்களைப் பற்றி',
  'Gallery': 'படத்தொகுப்பு',
  'Location': 'இருப்பிடம்',
  'Contact': 'தொடர்பு',
  'Get support': 'உதவி பெறுங்கள்',
  'Trusted computer care in Tiruppur': 'திருப்பூரில் நம்பகமான கணினி சேவை',
  'Your technology.': 'உங்கள் தொழில்நுட்பம்.',
  'Our expertise.': 'எங்கள் நிபுணத்துவம்.',
  'Fast, dependable computer repair, upgrades and CCTV solutions for homes and businesses across Tiruppur.': 'திருப்பூர் முழுவதும் வீடுகள் மற்றும் வணிகங்களுக்கு விரைவான, நம்பகமான கணினி பழுது, மேம்பாடு மற்றும் CCTV தீர்வுகள்.',
  'Request a quote': 'விலை விவரம் பெறுங்கள்',
  'Explore services': 'சேவைகளைப் பாருங்கள்',
  'Quick diagnosis': 'விரைவான பரிசோதனை',
  'Honest pricing': 'வெளிப்படையான விலை',
  'Reliable service': 'நம்பகமான சேவை',
  'Featured setup': 'சிறப்பு அமைப்பு',
  'Performance desktop': 'உயர் செயல்திறன் டெஸ்க்டாப்',
  'Service desk open': 'சேவை மையம் திறந்துள்ளது',
  'Call for same-day availability': 'இன்றைய சேவைக்கு அழைக்கவும்',
  'Years of': 'ஆண்டுகள்',
  'technical care': 'தொழில்நுட்ப அனுபவம்',
  'Sales · Service · Security': 'விற்பனை · சேவை · பாதுகாப்பு',
  'Laptop repair': 'லேப்டாப் பழுது',
  'Desktop service': 'டெஸ்க்டாப் சேவை',
  'CCTV installation': 'CCTV நிறுவல்',
  'Data recovery': 'தரவு மீட்பு',
  'Accessories': 'உபகரணங்கள்',
  'What we do': 'எங்கள் சேவைகள்',
  'Solutions that keep': 'உங்கள் பணியைத் தொடரச் செய்யும்',
  'you moving.': 'தொழில்நுட்பத் தீர்வுகள்.',
  'Practical, expert support for home users, professionals and businesses across Tiruppur.': 'திருப்பூர் முழுவதும் வீட்டு பயனர்கள், தொழில்முனைவோர் மற்றும் வணிகங்களுக்கு நிபுணத்துவமான ஆதரவு.',
  'All services': 'அனைத்து சேவைகள்',
  'Repairs': 'பழுதுபார்ப்பு',
  'Security': 'பாதுகாப்பு',
  'Sales': 'விற்பனை',
  'Laptop Repair': 'லேப்டாப் பழுதுபார்ப்பு',
  'Screen, keyboard, battery, hinge, overheating and advanced motherboard repair.': 'திரை, விசைப்பலகை, பேட்டரி, கீல், அதிக வெப்பம் மற்றும் மதர்போர்டு பழுதுபார்ப்பு.',
  'Ask about repair': 'பழுது குறித்து கேளுங்கள்',
  'Desktop Service': 'டெஸ்க்டாப் சேவை',
  'Hardware upgrades, OS setup, performance tuning and custom PC assembly.': 'ஹார்ட்வேர் மேம்பாடு, OS நிறுவல், செயல்திறன் மேம்பாடு மற்றும் தனிப்பயன் PC அமைப்பு.',
  'Ask about service': 'சேவை குறித்து கேளுங்கள்',
  'CCTV Installation': 'CCTV நிறுவல்',
  'Smart surveillance for homes, shops and factories with remote mobile viewing.': 'மொபைல் தொலைநோக்கு வசதியுடன் வீடுகள், கடைகள் மற்றும் தொழிற்சாலைகளுக்கான பாதுகாப்பு அமைப்பு.',
  'Get CCTV quote': 'CCTV விலை விவரம்',
  'Data Recovery': 'தரவு மீட்பு',
  'Recovery support for formatted, damaged or inaccessible hard drives and SSDs.': 'Format செய்யப்பட்ட, சேதமடைந்த அல்லது திறக்க முடியாத hard drive மற்றும் SSD-களிலிருந்து தரவு மீட்பு.',
  'Discuss recovery': 'மீட்பு குறித்து பேசுங்கள்',
  'Upgrades & Parts': 'மேம்பாடுகள் மற்றும் பாகங்கள்',
  'SSD, RAM and essential accessories selected to suit your device and budget.': 'உங்கள் சாதனம் மற்றும் பட்ஜெட்டுக்கு ஏற்ற SSD, RAM மற்றும் அத்தியாவசிய உபகரணங்கள்.',
  'Find an upgrade': 'மேம்பாட்டைத் தேர்வு செய்யுங்கள்',
  'Computer Sales': 'கணினி விற்பனை',
  'New and pre-owned computers for everyday work, business and study.': 'தினசரி வேலை, வணிகம் மற்றும் கல்விக்கான புதிய மற்றும் பயன்படுத்தப்பட்ட கணினிகள்.',
  'Check availability': 'கிடைப்பைச் சரிபார்க்கவும்',
  'Why Limra': 'ஏன் லிம்ரா',
  'Real expertise.': 'உண்மையான நிபுணத்துவம்.',
  'Clear answers.': 'தெளிவான பதில்கள்.',
  'We solve technology problems with careful diagnosis, straightforward advice and workmanship built to last.': 'கவனமான பரிசோதனை, நேர்மையான ஆலோசனை மற்றும் தரமான பணியால் தொழில்நுட்ப சிக்கல்களைத் தீர்க்கிறோம்.',
  'Component-level expertise': 'பாக அளவிலான நிபுணத்துவம்',
  'Repair-first thinking can save the cost of unnecessary replacements.': 'முதலில் பழுதுபார்க்கும் அணுகுமுறை தேவையற்ற மாற்றுச் செலவைத் தவிர்க்க உதவும்.',
  'Support for every setup': 'அனைத்து அமைப்புகளுக்கும் ஆதரவு',
  'Personal devices, office systems, retail shops and industrial CCTV.': 'தனிப்பட்ட சாதனங்கள், அலுவலக கணினிகள், கடைகள் மற்றும் தொழிற்சாலை CCTV.',
  'Friendly local service': 'நட்பான உள்ளூர் சேவை',
  'Direct help in Tamil and English when you need it.': 'தேவைப்படும் போது தமிழ் மற்றும் ஆங்கிலத்தில் நேரடி உதவி.',
  'Talk to our team': 'எங்கள் குழுவுடன் பேசுங்கள்',
  '+ years experience': '+ ஆண்டுகள் அனுபவம்',
  'core service areas': 'முக்கிய சேவைப் பிரிவுகள்',
  '% local support': '% உள்ளூர் ஆதரவு',
  'trusted tech partner': 'நம்பகமான தொழில்நுட்ப துணை',
  'How it works': 'சேவை நடைமுறை',
  'Simple from start': 'தொடக்கம் முதல் முடிவு வரை',
  'to finish.': 'எளிமையான நடைமுறை.',
  'No confusing process. Tell us the issue, approve the quote, and let our technicians take care of the rest.': 'சிக்கலான நடைமுறை இல்லை. பிரச்சினையைச் சொல்லுங்கள், விலையை உறுதிசெய்யுங்கள்; மீதியை எங்கள் நிபுணர்கள் கவனிப்பார்கள்.',
  'Contact': 'தொடர்பு கொள்ளுங்கள்',
  'Call, visit or send your requirement on WhatsApp.': 'அழைக்கவும், நேரில் வரவும் அல்லது வாட்ஸ்அப்பில் உங்கள் தேவையை அனுப்பவும்.',
  'Diagnose': 'பரிசோதனை',
  'We inspect the device or site and explain the options.': 'சாதனம் அல்லது இடத்தை ஆய்வு செய்து தீர்வுகளை விளக்குகிறோம்.',
  'Approve': 'ஒப்புதல்',
  'You receive a clear quote before work begins.': 'வேலை தொடங்குவதற்கு முன் தெளிவான விலை விவரம் கிடைக்கும்.',
  'Complete': 'நிறைவு',
  'We repair, test and hand over a ready-to-use solution.': 'பழுதுபார்த்து, சோதித்து, பயன்படுத்தத் தயாரான தீர்வை வழங்குகிறோம்.',
  'Our store': 'எங்கள் கடை',
  'A closer look': 'லிம்ராவை அருகில்',
  'at Limra.': 'பாருங்கள்.',
  'Visit us for computer care, hardware, accessories and dependable technical support.': 'கணினி சேவை, ஹார்ட்வேர், உபகரணங்கள் மற்றும் நம்பகமான தொழில்நுட்ப உதவிக்கு எங்களை அணுகுங்கள்.',
  'Our storefront': 'எங்கள் கடை முகப்பு',
  'Easy to find in Tiruppur': 'திருப்பூரில் எளிதாகக் கண்டறியலாம்',
  'Inside Limra': 'லிம்ரா கடையின் உள்ளே',
  'Built around': 'உண்மையான தேவைகளுக்கான',
  'real solutions.': 'சரியான தீர்வுகள்.',
  'Explore devices, accessories and expert service under one roof.': 'சாதனங்கள், உபகரணங்கள் மற்றும் நிபுணர் சேவை அனைத்தும் ஒரே இடத்தில்.',
  'Plan your visit': 'வருகையைத் திட்டமிடுங்கள்',
  'Laptop showroom': 'லேப்டாப் காட்சியகம்',
  'Options for work and study': 'வேலை மற்றும் கல்விக்கான தேர்வுகள்',
  'Accessories wall': 'உபகரணங்கள் பிரிவு',
  'Everyday tech essentials': 'அன்றாட தொழில்நுட்பப் பொருட்கள்',
  'New arrivals': 'புதிய வரவுகள்',
  'Hardware ready to go': 'உடனே வாங்கத் தயாரான ஹார்ட்வேர்',
  'Custom systems': 'தனிப்பயன் கணினிகள்',
  'Built for your workflow': 'உங்கள் பணிக்கேற்ற அமைப்பு',
  'Service & care': 'சேவை மற்றும் பராமரிப்பு',
  'Friendly local support': 'நட்பான உள்ளூர் ஆதரவு',
  'Ready stock': 'தயார் இருப்பு',
  'Practical choices in store': 'கடையில் பயனுள்ள தேர்வுகள்',
  'Google Reviews': 'கூகுள் மதிப்புரைகள்',
  'Read real customer': 'உண்மையான வாடிக்கையாளர்',
  'feedback.': 'கருத்துகளைப் படியுங்கள்.',
  'Browse verified customer reviews and share your experience directly through our official Google business profile.': 'எங்கள் அதிகாரப்பூர்வ கூகுள் வணிகப் பக்கத்தில் சரிபார்க்கப்பட்ட கருத்துகளைப் படித்து, உங்கள் அனுபவத்தைப் பகிருங்கள்.',
  "Limra Computer's Store and Service Centre": 'லிம்ரா கணினி விற்பனை மற்றும் சேவை மையம்',
  'Customer reviews are displayed and maintained by Google. Open our official listing to read the latest feedback, ratings and business updates.': 'வாடிக்கையாளர் கருத்துகள் கூகுளால் பராமரிக்கப்படுகின்றன. சமீபத்திய கருத்துகள், மதிப்பீடுகள் மற்றும் வணிகத் தகவல்களைப் பார்க்க எங்கள் அதிகாரப்பூர்வ பக்கத்தைத் திறக்கவும்.',
  'Read Google Reviews': 'கூகுள் மதிப்புரைகளைப் படியுங்கள்',
  'Write a Review': 'மதிப்புரை எழுதுங்கள்',
  'Reviews open securely on Google Maps.': 'மதிப்புரைகள் கூகுள் மேப்ஸில் பாதுகாப்பாகத் திறக்கும்.',
  'Our service promise': 'எங்கள் சேவை உறுதி',
  'Local support built on clear, dependable service.': 'தெளிவான, நம்பகமான சேவையை அடிப்படையாகக் கொண்ட உள்ளூர் ஆதரவு.',
  'Every review helps customers choose with confidence and helps our team keep improving.': 'ஒவ்வொரு மதிப்புரையும் வாடிக்கையாளர்கள் நம்பிக்கையுடன் தேர்வு செய்யவும், எங்கள் சேவையை மேம்படுத்தவும் உதவுகிறது.',
  'Clear diagnosis': 'தெளிவான பரிசோதனை',
  'Understand the issue and available options before work begins.': 'வேலை தொடங்கும் முன் பிரச்சினையையும் கிடைக்கும் தீர்வுகளையும் அறிந்துகொள்ளுங்கள்.',
  'Direct support': 'நேரடி ஆதரவு',
  'Speak with our local service team by phone or WhatsApp.': 'எங்கள் உள்ளூர் சேவைக் குழுவுடன் தொலைபேசி அல்லது வாட்ஸ்அப்பில் பேசுங்கள்.',
  'Careful service': 'கவனமான சேவை',
  'Repairs, upgrades and installations completed with attention.': 'பழுதுபார்ப்பு, மேம்பாடு மற்றும் நிறுவல்கள் கவனத்துடன் நிறைவேற்றப்படும்.',
  'Served locally': 'உள்ளூர் சேவை',
  'Tiruppur, Tamil Nadu': 'திருப்பூர், தமிழ்நாடு',
  'Computer sales': 'கணினி விற்பனை',
  'Questions': 'கேள்விகள்',
  'Good to': 'தெரிந்துகொள்ள',
  'know.': 'வேண்டியவை.',
  'Need a quicker answer? Call us directly and we will help.': 'விரைவான பதில் வேண்டுமா? நேரடியாக அழையுங்கள்; நாங்கள் உதவுகிறோம்.',
  'How long does a laptop repair take?': 'லேப்டாப் பழுதுபார்க்க எவ்வளவு நேரம் ஆகும்?',
  'Common replacements and upgrades can often be completed the same day. Complex motherboard repairs depend on diagnosis and part availability.': 'பொதுவான பாக மாற்றங்கள் மற்றும் மேம்பாடுகள் பெரும்பாலும் அதே நாளில் முடியும். மதர்போர்டு பழுதுகளுக்கான நேரம் பரிசோதனை மற்றும் பாகங்கள் கிடைப்பைப் பொறுத்தது.',
  'Do you install CCTV for businesses?': 'வணிக இடங்களுக்கு CCTV நிறுவுகிறீர்களா?',
  'Yes. We support homes, shops, offices and factory environments, including remote mobile viewing setup.': 'ஆம். வீடுகள், கடைகள், அலுவலகங்கள் மற்றும் தொழிற்சாலைகளுக்கு மொபைல் தொலைநோக்கு வசதியுடன் CCTV நிறுவுகிறோம்.',
  'Can you upgrade a slow computer?': 'மெதுவான கணினியை மேம்படுத்த முடியுமா?',
  'Yes. An SSD, RAM upgrade and system tune-up can make many older computers significantly faster.': 'ஆம். SSD, RAM மேம்பாடு மற்றும் சிஸ்டம் பராமரிப்பு பல பழைய கணினிகளை குறிப்பிடத்தக்க அளவில் வேகப்படுத்தும்.',
  'Can I get a quote on WhatsApp?': 'வாட்ஸ்அப்பில் விலை விவரம் பெற முடியுமா?',
  'Yes. Send the device model, issue and photos if relevant. We can provide initial guidance before inspection.': 'ஆம். சாதன மாடல், பிரச்சினை மற்றும் தேவையான புகைப்படங்களை அனுப்புங்கள். பரிசோதனைக்கு முன் ஆரம்ப வழிகாட்டுதலை வழங்குவோம்.',
  'Find our store': 'எங்கள் கடையைக் கண்டறியுங்கள்',
  'Visit Limra': 'லிம்ராவிற்கு',
  'Computers.': 'வருகை தாருங்கள்.',
  'Get expert computer sales and service support directly from our store in Tiruppur.': 'திருப்பூரில் உள்ள எங்கள் கடையில் கணினி விற்பனை மற்றும் நிபுணர் சேவையை நேரடியாகப் பெறுங்கள்.',
  'Store location': 'கடை இருப்பிடம்',
  'Coordinates: 11.1023125, 77.2715625': 'அமைவிடம்: 11.1023125, 77.2715625',
  'Get directions': 'வழிகாட்டலைப் பெறுங்கள்',
  'Call store': 'கடையை அழைக்கவும்',
  'Let’s solve your': 'உங்கள் தொழில்நுட்பப்',
  'tech problem.': 'பிரச்சினையைத் தீர்ப்போம்.',
  'Send your requirement and we will open a prepared WhatsApp message so you can speak directly with Limra Computers.': 'உங்கள் தேவையை அனுப்புங்கள். லிம்ரா கம்ப்யூட்டர்ஸுடன் நேரடியாகப் பேச தயாரான வாட்ஸ்அப் செய்தியைத் திறப்போம்.',
  'Phone': 'தொலைபேசி',
  'Your name': 'உங்கள் பெயர்',
  'Phone number': 'தொலைபேசி எண்',
  'Service needed': 'தேவையான சேவை',
  'Tell us briefly': 'சுருக்கமாகச் சொல்லுங்கள்',
  'Other support': 'பிற உதவி',
  'Send via WhatsApp': 'வாட்ஸ்அப்பில் அனுப்புங்கள்',
  'Your trusted technology service partner in Tiruppur. Expert computer repair, hardware upgrades, sales and professional CCTV solutions.': 'திருப்பூரில் உங்கள் நம்பகமான தொழில்நுட்ப சேவை துணை. கணினி பழுது, ஹார்ட்வேர் மேம்பாடு, விற்பனை மற்றும் தொழில்முறை CCTV தீர்வுகள்.',
  'Quick Links': 'விரைவு இணைப்புகள்',
  'About Us': 'எங்களைப் பற்றி',
  'All Services': 'அனைத்து சேவைகள்',
  'Our Store': 'எங்கள் கடை',
  'Contact Center': 'தொடர்பு மையம்',
  'Contact Info': 'தொடர்பு தகவல்',
  'WhatsApp Support': 'வாட்ஸ்அப் ஆதரவு',
  'Tiruppur, Tamil Nadu, India': 'திருப்பூர், தமிழ்நாடு, இந்தியா',
  'Limra Computers. All rights reserved.': 'லிம்ரா கம்ப்யூட்டர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  'Privacy Policy': 'தனியுரிமைக் கொள்கை',
  'Terms & Conditions': 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
  'Limra AI Support': 'லிம்ரா AI உதவி',
  '● Online': '● ஆன்லைன்',
  'Vanakkam! Tell me what is wrong with your computer, or choose a quick question below.': 'வணக்கம்! உங்கள் கணினியில் உள்ள பிரச்சினையைச் சொல்லுங்கள் அல்லது கீழே உள்ள கேள்வியைத் தேர்ந்தெடுக்கவும்.',
  'Laptop is slow': 'லேப்டாப் மெதுவாக உள்ளது',
  'Not turning on': 'ஆன் ஆகவில்லை',
  'Need CCTV': 'CCTV தேவை'
};
const attributeTranslations = {
  'Enter your name': 'உங்கள் பெயரை உள்ளிடுங்கள்',
  'Enter your phone number': 'உங்கள் தொலைபேசி எண்ணை உள்ளிடுங்கள்',
  'Describe the issue': 'பிரச்சினையை விவரிக்கவும்',
  'Ask a quick question...': 'உங்கள் கேள்வியைக் கேளுங்கள்...',
  'Switch language': 'மொழியை மாற்றவும்',
  'Open menu': 'மெனுவைத் திறக்கவும்',
  'Main navigation': 'முதன்மை வழிசெலுத்தல்',
  'Chat on WhatsApp': 'வாட்ஸ்அப்பில் உரையாடுங்கள்',
  'Open AI support': 'AI உதவியைத் திறக்கவும்',
  'Close AI support': 'AI உதவியை மூடவும்',
  'Back to top': 'மேலே செல்லவும்',
  'Image preview': 'பட முன்னோட்டம்',
  'Close image': 'படத்தை மூடவும்'
};
let currentLanguage = localStorage.getItem('limraLanguage') || 'en';
const originalTextNodes = new WeakMap();

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement || ['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) continue;
    const text = node.textContent.trim();
    if (!text) continue;
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, text);
    const english = originalTextNodes.get(node);
    const translated = tamilTranslations[english];
    if (language === 'ta' && translated) node.textContent = node.textContent.replace(text, translated);
    if (language === 'en' && translated) node.textContent = node.textContent.replace(text, english);
  }
}

function translateAttributes(language) {
  document.querySelectorAll('[placeholder], [aria-label]').forEach(element => {
    ['placeholder', 'aria-label'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      const key = `en${attribute.replace('-', '')}`;
      if (!element.dataset[key]) element.dataset[key] = element.getAttribute(attribute);
      const english = element.dataset[key];
      element.setAttribute(attribute, language === 'ta' ? attributeTranslations[english] || english : english);
    });
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  translateTextNodes(language);
  translateAttributes(language);
  languageToggle.textContent = language === 'en' ? 'தமிழ்' : 'English';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'தமிழில் பார்க்க' : 'View in English');
  localStorage.setItem('limraLanguage', language);
}

function setMenu(open) {
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open
    ? (currentLanguage === 'ta' ? 'மெனுவை மூடவும்' : 'Close menu')
    : (currentLanguage === 'ta' ? 'மெனுவைத் திறக்கவும்' : 'Open menu'));
}

menuButton.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  setMenu(false);
}));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenu(false);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  toTop.classList.toggle('show', window.scrollY > 500);
});

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

languageToggle.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'ta' : 'en');
});

aiFloat.addEventListener('click', () => aiChat.classList.toggle('open'));
aiChat.querySelector('.ai-chat-head button').addEventListener('click', () => aiChat.classList.remove('open'));

const aiMessages = document.getElementById('aiMessages');
const aiInput = document.getElementById('aiInput');
const aiReplies = {
  en: {
    slow: 'An SSD upgrade, extra RAM and a system tune-up can make a slow laptop much faster. Send the model number on WhatsApp for guidance.',
    power: 'A laptop that will not turn on may have adapter, battery or motherboard issues. We recommend a professional diagnosis before replacing parts.',
    cctv: 'We install CCTV systems for homes, shops and businesses with mobile viewing support. Contact us for a site-based quote.',
    fallback: 'Thanks for your question. For an exact diagnosis and price, please contact our technician on WhatsApp at +91 90437 28522.'
  },
  ta: {
    slow: 'SSD மேம்பாடு, கூடுதல் RAM மற்றும் சிஸ்டம் பராமரிப்பு மூலம் மெதுவான லேப்டாப்பை வேகப்படுத்தலாம். வழிகாட்டுதலுக்கு மாடல் எண்ணை வாட்ஸ்அப்பில் அனுப்புங்கள்.',
    power: 'லேப்டாப் ஆன் ஆகாததற்கு அடாப்டர், பேட்டரி அல்லது மதர்போர்டு பிரச்சினை காரணமாக இருக்கலாம். பாகங்களை மாற்றும் முன் நிபுணர் பரிசோதனையை பரிந்துரைக்கிறோம்.',
    cctv: 'வீடுகள், கடைகள் மற்றும் வணிக இடங்களுக்கு மொபைல் பார்வை வசதியுடன் CCTV அமைப்புகளை நிறுவுகிறோம். விலை விவரத்திற்கு எங்களைத் தொடர்புகொள்ளுங்கள்.',
    fallback: 'உங்கள் கேள்விக்கு நன்றி. துல்லியமான பரிசோதனை மற்றும் விலை விவரத்திற்கு +91 90437 28522 என்ற எண்ணில் வாட்ஸ்அப்பில் தொடர்புகொள்ளுங்கள்.'
  }
};

function addAiMessage(text, type) {
  const message = document.createElement('div');
  message.className = `ai-message ${type}`;
  message.textContent = text;
  aiMessages.appendChild(message);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function answerAiQuestion(text, key) {
  addAiMessage(text, 'user');
  setTimeout(() => addAiMessage(aiReplies[currentLanguage][key] || aiReplies[currentLanguage].fallback, 'bot'), 300);
}

document.querySelectorAll('.ai-options button').forEach(button => button.addEventListener('click', () => {
  answerAiQuestion(button.textContent, button.dataset.question);
}));

document.getElementById('aiChatForm').addEventListener('submit', event => {
  event.preventDefault();
  const text = aiInput.value.trim();
  if (!text) return;
  answerAiQuestion(text);
  aiInput.value = '';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.service-filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.service-filters .active').classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('[data-count]').forEach(number => {
      const target = Number(number.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        current = Math.min(target, current + step);
        number.textContent = current;
        if (current === target) clearInterval(timer);
      }, 25);
    });
    countObserver.disconnect();
  });
}, { threshold: 0.4 });
countObserver.observe(document.querySelector('.stats'));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  const image = item.querySelector('img');
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('open');
}));
const closeLightbox = () => lightbox.classList.remove('open');
lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeLightbox();
    setMenu(false);
  }
});

document.getElementById('inquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim() || (currentLanguage === 'ta' ? 'மேலும் விவரங்களுக்கு என்னைத் தொடர்புகொள்ளவும்.' : 'Please contact me with more details.');
  const text = currentLanguage === 'ta'
    ? `வணக்கம் Limra Computers,\n\nபெயர்: ${name}\nதொலைபேசி: ${phone}\nசேவை: ${service}\nசெய்தி: ${message}`
    : `Hello Limra Computers,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
  window.open(`https://wa.me/919043728522?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
