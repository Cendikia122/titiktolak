export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  social: { x?: string; linkedin?: string };
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  content: string;
}

export const authors: Record<string, Author> = {
  "Ahmad Fauzi": {
    name: "Ahmad Fauzi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    role: "Senior Writer",
    bio: "Praktisi dan penulis konten teknologi dengan pengalaman lebih dari 5 tahun di industri digital. Aktif berbagi insight seputar web development, AI, dan digital marketing.",
    social: { x: "#", linkedin: "#" },
  },
  "Rina Saputri": {
    name: "Rina Saputri",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    role: "Tech Editor",
    bio: "Editor teknologi yang fokus pada programming dan developer tools. Berpengalaman menulis review mendalam tentang IDE, framework, dan bahasa pemrograman modern.",
    social: { x: "#", linkedin: "#" },
  },
  "Budi Santoso": {
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    role: "AI Researcher",
    bio: "Peneliti AI dan Machine Learning dengan background di cybersecurity. Aktif menulis tentang perkembangan terbaru dalam dunia kecerdasan buatan dan keamanan digital.",
    social: { x: "#", linkedin: "#" },
  },
  "Siti Nurhaliza": {
    name: "Siti Nurhaliza",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    role: "Marketing Strategist",
    bio: "Digital marketing strategist dengan spesialisasi SEO dan content marketing. Membantu brand-brand Indonesia membangun presence online yang kuat.",
    social: { x: "#", linkedin: "#" },
  },
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "cloudflare-emdash-cms-open-source-penantang-wordpress",
    title: "Cloudflare EmDash: CMS Open-Source Penantang WordPress",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    author: "Ahmad Fauzi",
    date: "2 April 2026",
    readTime: "8 menit baca",
    description: "Cloudflare meluncurkan EmDash, sebuah CMS open-source yang siap menjadi pesaing WordPress. Pelajari fitur-fitur unggulannya.",
    tags: ["CMS", "Cloudflare", "Open Source", "WordPress"],
    content: `<h2 id="pengenalan">Pengenalan</h2>
<p>Cloudflare baru saja meluncurkan EmDash, sebuah Content Management System (CMS) open-source yang dibangun di atas ekosistem Cloudflare Workers. CMS ini dirancang untuk memberikan performa tinggi dan keamanan maksimal bagi para developer dan content creator.</p>
<p>Dengan arsitektur edge-first, EmDash menjanjikan waktu loading yang sangat cepat di seluruh dunia. Ini adalah langkah besar dari Cloudflare dalam memasuki pasar CMS yang selama ini didominasi oleh WordPress.</p>

<h2 id="fitur-utama">Fitur Utama EmDash</h2>
<p>EmDash hadir dengan berbagai fitur menarik yang membuatnya layak dipertimbangkan sebagai alternatif WordPress:</p>
<ul>
<li><strong>Edge-first architecture</strong> — Konten disajikan dari edge location terdekat, menghasilkan latency yang sangat rendah</li>
<li><strong>Built-in security</strong> — Terintegrasi dengan Cloudflare WAF, DDoS protection, dan SSL otomatis</li>
<li><strong>Zero-config deployment</strong> — Deploy langsung ke Cloudflare Workers tanpa konfigurasi server</li>
<li><strong>Plugin system modern</strong> — Sistem plugin berbasis JavaScript modules yang lebih aman dan performant</li>
<li><strong>Real-time collaboration</strong> — Fitur kolaborasi real-time untuk tim editorial</li>
</ul>
<p>Selain fitur-fitur di atas, EmDash juga menyediakan API GraphQL yang powerful untuk integrasi dengan berbagai frontend framework seperti React, Vue, dan Svelte.</p>

<h2 id="arsitektur">Arsitektur EmDash</h2>
<p>EmDash menggunakan arsitektur yang sangat berbeda dari CMS tradisional. Alih-alih mengandalkan server terpusat, EmDash mendistribusikan konten ke ratusan edge location Cloudflare di seluruh dunia.</p>
<p>Database menggunakan Cloudflare D1, sebuah SQLite-based database yang berjalan di edge. Ini berarti query database juga dilakukan di lokasi terdekat dengan pengguna, menghilangkan bottleneck yang biasa terjadi pada arsitektur tradisional.</p>
<p>Untuk penyimpanan file dan media, EmDash memanfaatkan Cloudflare R2 — object storage yang kompatibel dengan S3 API tanpa biaya egress. Ini adalah keunggulan signifikan dibandingkan solusi hosting tradisional.</p>

<h2 id="perbandingan-wordpress">Perbandingan dengan WordPress</h2>
<p>Dibandingkan WordPress, EmDash menawarkan arsitektur yang lebih modern. WordPress mengandalkan PHP dan MySQL, sementara EmDash menggunakan JavaScript dan Cloudflare D1 database.</p>
<p>Berikut perbandingan detail keduanya:</p>
<ul>
<li><strong>Performa:</strong> EmDash menang telak dengan arsitektur edge-first vs server terpusat WordPress</li>
<li><strong>Keamanan:</strong> EmDash memiliki security built-in, WordPress memerlukan plugin tambahan</li>
<li><strong>Ekosistem:</strong> WordPress masih jauh lebih unggul dengan ribuan plugin dan theme</li>
<li><strong>Learning curve:</strong> WordPress lebih mudah untuk pemula, EmDash memerlukan pengetahuan teknis</li>
<li><strong>Biaya:</strong> EmDash bisa lebih hemat karena menggunakan serverless architecture</li>
</ul>

<h2 id="cara-memulai">Cara Memulai dengan EmDash</h2>
<p>Untuk memulai menggunakan EmDash, Anda memerlukan akun Cloudflare (gratis). Berikut langkah-langkahnya:</p>
<ul>
<li>Install Wrangler CLI: <code>npm install -g wrangler</code></li>
<li>Create project baru: <code>npx create-emdash@latest my-blog</code></li>
<li>Konfigurasi D1 database dan R2 storage</li>
<li>Deploy: <code>wrangler deploy</code></li>
</ul>
<p>Dalam hitungan menit, Anda sudah memiliki CMS yang berjalan di edge dengan performa global yang konsisten.</p>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>EmDash adalah langkah menarik dari Cloudflare dalam dunia CMS. Meskipun masih baru dan ekosistemnya belum sebesar WordPress, potensinya sangat besar untuk masa depan web development. Bagi developer yang menginginkan performa maksimal dan arsitektur modern, EmDash layak untuk dicoba.</p>
<p>Dengan dukungan Cloudflare yang kuat dan komunitas open-source yang terus berkembang, EmDash berpotensi menjadi game-changer di industri CMS dalam beberapa tahun ke depan.</p>`
  },
  {
    id: 2,
    slug: "jetbrains-vs-vscode-mana-ide-terbaik",
    title: "JetBrains vs VSCode: Mana IDE Terbaik untuk Developer?",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    author: "Rina Saputri",
    date: "1 April 2026",
    readTime: "10 menit baca",
    description: "Perbandingan lengkap antara JetBrains IDE dan Visual Studio Code. Temukan mana yang paling cocok untuk workflow Anda.",
    tags: ["IDE", "JetBrains", "VSCode", "Developer Tools"],
    content: `<h2 id="pendahuluan">Pendahuluan</h2>
<p>Memilih IDE yang tepat adalah keputusan penting bagi setiap developer. Dua pilihan paling populer saat ini adalah JetBrains (IntelliJ, WebStorm, PyCharm) dan Visual Studio Code dari Microsoft. Keduanya memiliki filosofi yang berbeda namun sama-sama powerful.</p>
<p>Dalam artikel ini, kita akan membandingkan kedua IDE secara mendalam dari berbagai aspek: performa, fitur, ekosistem, dan harga. Tujuannya adalah membantu Anda membuat keputusan yang tepat berdasarkan kebutuhan spesifik Anda.</p>

<h2 id="jetbrains">Kelebihan JetBrains</h2>
<p>JetBrains IDE dikenal dengan fitur code intelligence yang sangat powerful. Berikut keunggulan utamanya:</p>
<ul>
<li><strong>Smart Code Completion</strong> — Tidak hanya autocomplete biasa, tapi memahami konteks kode secara mendalam</li>
<li><strong>Advanced Refactoring</strong> — Rename, extract method, change signature dengan aman dan akurat</li>
<li><strong>Built-in Database Tools</strong> — Query database langsung dari IDE tanpa tool tambahan</li>
<li><strong>Integrated Debugger</strong> — Debugger visual yang powerful untuk semua bahasa yang didukung</li>
<li><strong>Version Control</strong> — Integrasi Git yang sangat komprehensif dengan visual diff dan merge</li>
</ul>
<p>JetBrains juga menawarkan IDE khusus untuk setiap bahasa: IntelliJ IDEA untuk Java/Kotlin, PyCharm untuk Python, WebStorm untuk JavaScript/TypeScript, dan Rider untuk .NET. Setiap IDE dioptimasi khusus untuk ekosistem bahasanya.</p>

<h2 id="vscode">Kelebihan VSCode</h2>
<p>Visual Studio Code unggul dalam beberapa aspek yang menjadikannya pilihan favorit jutaan developer:</p>
<ul>
<li><strong>Ringan dan Cepat</strong> — Startup time yang cepat dan penggunaan memori yang efisien</li>
<li><strong>Extension Marketplace</strong> — Lebih dari 40.000 extension yang tersedia gratis</li>
<li><strong>Remote Development</strong> — SSH, WSL, dan container development yang seamless</li>
<li><strong>Integrated Terminal</strong> — Terminal built-in yang powerful</li>
<li><strong>Gratis dan Open-Source</strong> — Tidak ada biaya lisensi</li>
</ul>
<p>Dengan extension yang tepat, VSCode bisa menjadi sangat powerful. Extension seperti GitLens, Thunder Client, dan Docker memberikan fungsionalitas yang mendekati IDE premium.</p>

<h2 id="performa">Perbandingan Performa</h2>
<p>Dari segi performa, VSCode jelas lebih ringan. Dengan RAM 4GB, VSCode masih berjalan lancar, sementara JetBrains IDE minimal membutuhkan 8GB RAM untuk pengalaman yang optimal.</p>
<p>Namun, untuk project besar dengan ratusan ribu baris kode, JetBrains menunjukkan keunggulan dalam hal indexing dan code analysis. Fitur seperti "Find Usages" dan "Navigate to Declaration" bekerja jauh lebih akurat di JetBrains.</p>

<h2 id="harga">Perbandingan Harga</h2>
<p>VSCode gratis sepenuhnya. JetBrains memiliki model subscription:</p>
<ul>
<li><strong>Individual:</strong> $14.90-$24.90/bulan tergantung IDE</li>
<li><strong>All Products Pack:</strong> $24.90/bulan untuk akses semua IDE</li>
<li><strong>Free untuk open-source:</strong> JetBrains memberikan lisensi gratis untuk project open-source</li>
<li><strong>Student license:</strong> Gratis untuk mahasiswa dengan email .edu</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Keduanya adalah IDE hebat dengan kekuatan masing-masing. JetBrains cocok untuk developer yang menginginkan fitur lengkap out-of-the-box dan bekerja pada project besar. VSCode ideal untuk developer yang menginginkan fleksibilitas, kecepatan, dan tidak ingin mengeluarkan biaya lisensi.</p>
<p>Rekomendasi: Coba keduanya dan lihat mana yang paling cocok dengan workflow Anda. Banyak developer bahkan menggunakan keduanya — VSCode untuk quick editing dan scripting, JetBrains untuk project development serius.</p>`
  },
  {
    id: 3,
    slug: "agentic-ai-untuk-cybersecurity",
    title: "Agentic AI untuk Cybersecurity: Masa Depan Keamanan Digital",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    author: "Budi Santoso",
    date: "31 Maret 2026",
    readTime: "12 menit baca",
    description: "Bagaimana Agentic AI merevolusi dunia cybersecurity dengan kemampuan autonomous threat detection dan response.",
    tags: ["AI", "Cybersecurity", "Machine Learning", "Automation"],
    content: `<h2 id="apa-itu-agentic-ai">Apa itu Agentic AI?</h2>
<p>Agentic AI adalah sistem kecerdasan buatan yang mampu bertindak secara otonom untuk mencapai tujuan tertentu. Berbeda dengan AI tradisional yang hanya memberikan rekomendasi, Agentic AI dapat mengambil tindakan nyata berdasarkan analisis yang dilakukannya.</p>
<p>Dalam konteks cybersecurity, ini berarti AI yang bisa mendeteksi, menganalisis, dan merespons ancaman tanpa intervensi manusia. Bayangkan memiliki security analyst yang bekerja 24/7 tanpa lelah, mampu memproses jutaan event per detik.</p>

<h2 id="bagaimana-cara-kerja">Bagaimana Cara Kerjanya?</h2>
<p>Agentic AI dalam cybersecurity bekerja melalui beberapa tahap:</p>
<ul>
<li><strong>Data Collection</strong> — Mengumpulkan data dari berbagai sumber: network logs, endpoint telemetry, cloud events</li>
<li><strong>Pattern Recognition</strong> — Menggunakan machine learning untuk mendeteksi pola anomali</li>
<li><strong>Threat Classification</strong> — Mengklasifikasikan jenis ancaman berdasarkan knowledge base yang terus diperbarui</li>
<li><strong>Autonomous Response</strong> — Mengambil tindakan preventif atau reaktif secara otomatis</li>
<li><strong>Learning Loop</strong> — Belajar dari setiap insiden untuk meningkatkan akurasi di masa depan</li>
</ul>

<h2 id="aplikasi">Aplikasi dalam Cybersecurity</h2>
<p>Agentic AI digunakan dalam berbagai aspek keamanan digital:</p>
<ul>
<li><strong>Threat Hunting</strong> — Proaktif mencari ancaman tersembunyi dalam jaringan</li>
<li><strong>Malware Analysis</strong> — Menganalisis malware baru secara real-time menggunakan sandbox AI</li>
<li><strong>Incident Response</strong> — Merespons insiden keamanan dalam hitungan detik</li>
<li><strong>Vulnerability Management</strong> — Mengidentifikasi dan memprioritaskan patching vulnerabilitas</li>
<li><strong>Phishing Detection</strong> — Mendeteksi email phishing yang semakin sophisticated</li>
</ul>
<p>Perusahaan seperti CrowdStrike, SentinelOne, dan Darktrace sudah mengimplementasikan Agentic AI dalam produk mereka, menunjukkan bahwa teknologi ini bukan lagi konsep futuristik.</p>

<h2 id="tantangan">Tantangan Implementasi</h2>
<p>Meskipun menjanjikan, ada beberapa tantangan serius yang perlu diatasi:</p>
<ul>
<li><strong>False Positives</strong> — AI bisa salah mengidentifikasi aktivitas normal sebagai ancaman, menyebabkan alert fatigue</li>
<li><strong>Data Quality</strong> — Model AI membutuhkan data training yang berkualitas dan beragam</li>
<li><strong>Adversarial Attacks</strong> — Penyerang bisa memanipulasi model AI melalui adversarial machine learning</li>
<li><strong>Explainability</strong> — Sulit menjelaskan mengapa AI mengambil keputusan tertentu (black box problem)</li>
<li><strong>Compliance</strong> — Regulasi seperti GDPR mengharuskan transparansi dalam pengambilan keputusan otomatis</li>
</ul>

<h2 id="studi-kasus">Studi Kasus</h2>
<p>Sebuah perusahaan fintech di Indonesia mengimplementasikan Agentic AI untuk cybersecurity dan mencatat hasil yang menakjubkan: deteksi ancaman meningkat 340%, response time turun dari rata-rata 4 jam menjadi 12 detik, dan false positive rate berkurang 67%.</p>
<p>Kunci keberhasilannya adalah pendekatan hybrid: AI menangani ancaman yang sudah diketahui polanya secara otomatis, sementara ancaman baru (zero-day) di-escalate ke tim human analyst untuk review.</p>

<h2 id="masa-depan">Masa Depan</h2>
<p>Dengan perkembangan LLM dan multi-agent systems, Agentic AI akan semakin canggih. Prediksi untuk beberapa tahun ke depan:</p>
<ul>
<li>AI agents yang bisa berkolaborasi satu sama lain untuk menangani serangan kompleks</li>
<li>Integration dengan threat intelligence global secara real-time</li>
<li>Self-healing infrastructure yang bisa memperbaiki vulnerabilitas secara otomatis</li>
<li>Personalized security posture berdasarkan profil risiko organisasi</li>
</ul>
<p>Agentic AI bukan pengganti human security analyst, tetapi force multiplier yang membuat tim keamanan jauh lebih efektif dalam melindungi infrastruktur digital.</p>`
  },
  {
    id: 4,
    slug: "cara-agar-konten-dikutip-bing-ai",
    title: "Cara Agar Konten Website Dikutip oleh Bing AI & Copilot",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    author: "Siti Nurhaliza",
    date: "30 Maret 2026",
    readTime: "9 menit baca",
    description: "Tips dan strategi SEO agar konten website Anda dikutip oleh Bing AI dan Microsoft Copilot dalam hasil pencarian.",
    tags: ["SEO", "Bing AI", "Content Marketing", "Copilot"],
    content: `<h2 id="mengapa-penting">Mengapa Ini Penting?</h2>
<p>Dengan semakin populernya AI-powered search, lanskap SEO berubah drastis. Bing AI dan Microsoft Copilot kini menjadi sumber informasi utama bagi jutaan pengguna. Jika konten Anda dikutip oleh AI, traffic dan kredibilitas website Anda akan meningkat signifikan.</p>
<p>Data menunjukkan bahwa website yang dikutip oleh Bing AI mengalami peningkatan traffic organik rata-rata 45% dalam 3 bulan pertama. Ini adalah peluang besar yang tidak boleh dilewatkan oleh content creator dan digital marketer.</p>

<h2 id="memahami-algoritma">Memahami Algoritma Bing AI</h2>
<p>Bing AI menggunakan beberapa faktor untuk memilih sumber yang dikutip:</p>
<ul>
<li><strong>Authority Score</strong> — Reputasi domain berdasarkan backlink profile dan history</li>
<li><strong>Content Freshness</strong> — Konten yang up-to-date lebih disukai</li>
<li><strong>Structured Data</strong> — Schema markup membantu AI memahami konteks konten</li>
<li><strong>Answer Quality</strong> — Konten yang langsung menjawab pertanyaan mendapat prioritas</li>
<li><strong>Factual Accuracy</strong> — AI cross-reference dengan multiple sources untuk verifikasi</li>
</ul>

<h2 id="strategi-seo">Strategi SEO untuk AI</h2>
<p>Berikut strategi yang terbukti efektif untuk meningkatkan peluang dikutip Bing AI:</p>
<ul>
<li><strong>Gunakan Structured Data</strong> — Implementasi JSON-LD schema untuk Article, FAQ, dan HowTo</li>
<li><strong>Buat Konten Authoritative</strong> — Sertakan data, statistik, dan referensi yang dapat diverifikasi</li>
<li><strong>Optimalkan untuk Bing Webmaster Tools</strong> — Submit sitemap dan pastikan IndexNow aktif</li>
<li><strong>Format Konten dengan Baik</strong> — Gunakan heading hierarchy, bullet points, dan paragraf pendek</li>
<li><strong>Update Konten Secara Regular</strong> — Konten yang sering diupdate menunjukkan freshness</li>
</ul>

<h2 id="teknik-konten">Teknik Pembuatan Konten</h2>
<p>Konten yang disukai Bing AI memiliki karakteristik tertentu:</p>
<ul>
<li>Menjawab pertanyaan secara langsung dan ringkas di paragraf pertama</li>
<li>Menggunakan format FAQ untuk pertanyaan yang sering dicari</li>
<li>Menyertakan data statistik yang akurat dan terkini</li>
<li>Menggunakan bahasa yang jelas dan tidak ambigu</li>
<li>Menyertakan expert quotes atau first-hand experience</li>
</ul>
<p>Pro tip: Buat "TL;DR" atau ringkasan di awal artikel. AI sering mengutip bagian ringkasan karena informasinya padat dan langsung menjawab query pengguna.</p>

<h2 id="tools-monitoring">Tools untuk Monitoring</h2>
<p>Beberapa tools yang bisa membantu memantau performa konten Anda di Bing AI:</p>
<ul>
<li><strong>Bing Webmaster Tools</strong> — Gratis, memberikan data lengkap tentang indexing dan performance</li>
<li><strong>Ahrefs/Semrush</strong> — Tracking keyword ranking di Bing</li>
<li><strong>Schema Validator</strong> — Memastikan structured data terimplementasi dengan benar</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Optimasi untuk AI search adalah investasi jangka panjang yang akan semakin penting seiring berkembangnya teknologi AI. Mulai sekarang untuk membangun authority dan structured content yang disukai oleh Bing AI. Konsistensi adalah kunci — buat konten berkualitas secara regular dan pantau hasilnya melalui tools yang tersedia.</p>`
  },
  {
    id: 5,
    slug: "panduan-lengkap-next-js-15",
    title: "Panduan Lengkap Next.js 15: Fitur Baru dan Cara Migrasi",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    author: "Ahmad Fauzi",
    date: "29 Maret 2026",
    readTime: "11 menit baca",
    description: "Eksplorasi fitur-fitur baru di Next.js 15 termasuk Turbopack stable, improved caching, dan partial prerendering.",
    tags: ["Next.js", "React", "Framework", "Turbopack"],
    content: `<h2 id="intro">Apa yang Baru di Next.js 15?</h2>
<p>Next.js 15 membawa banyak peningkatan signifikan yang sudah ditunggu-tunggu oleh komunitas developer. Release ini fokus pada tiga area utama: performa build, caching yang lebih intuitif, dan rendering strategies yang lebih fleksibel.</p>
<p>Vercel, perusahaan di balik Next.js, menyebut ini sebagai "the most stable and performant release" yang pernah mereka buat. Mari kita eksplorasi setiap fitur baru secara mendalam.</p>

<h2 id="turbopack">Turbopack Stable</h2>
<p>Turbopack kini sudah production-ready setelah lebih dari 2 tahun development. Peningkatan performa yang ditawarkan sangat signifikan:</p>
<ul>
<li><strong>Dev server startup:</strong> 76% lebih cepat dibanding Webpack</li>
<li><strong>HMR (Hot Module Replacement):</strong> 96% lebih cepat untuk update kode</li>
<li><strong>Production build:</strong> 45% lebih cepat untuk project besar</li>
<li><strong>Memory usage:</strong> 40% lebih efisien dibanding Webpack</li>
</ul>
<p>Untuk mengaktifkan Turbopack, cukup tambahkan flag <code>--turbopack</code> saat menjalankan dev server: <code>next dev --turbopack</code>.</p>

<h2 id="caching">Improved Caching</h2>
<p>Salah satu keluhan terbesar tentang Next.js 14 adalah caching behavior yang terlalu agresif dan membingungkan. Next.js 15 memperbaiki ini dengan pendekatan yang lebih intuitif:</p>
<ul>
<li>Fetch requests tidak lagi di-cache secara default</li>
<li>Route handlers GET method tidak lagi di-cache secara default</li>
<li>Client-side router cache tidak lagi cache page components secara default</li>
</ul>
<p>Developer sekarang memiliki kontrol penuh atas caching strategy mereka. Ini menghilangkan banyak "gotcha" moments yang sering terjadi saat development.</p>

<h2 id="partial-prerendering">Partial Prerendering (PPR)</h2>
<p>PPR adalah fitur revolusioner yang memungkinkan satu halaman memiliki bagian yang static dan dynamic secara bersamaan. Ini menggabungkan keunggulan SSG (Static Site Generation) dan SSR (Server-Side Rendering) dalam satu halaman.</p>
<p>Contoh use case: header dan footer bisa di-prerender secara static, sementara konten yang personalized (seperti user dashboard) di-render secara dynamic. Hasilnya: Time to First Byte (TTFB) yang sangat cepat dengan konten yang tetap fresh.</p>

<h2 id="migrasi">Cara Migrasi dari Next.js 14</h2>
<p>Migrasi dari Next.js 14 ke 15 relatif mudah, tapi ada beberapa breaking changes yang perlu diperhatikan:</p>
<ul>
<li>Update dependency: <code>npm install next@15 react@19 react-dom@19</code></li>
<li>Review caching strategy — pastikan menambahkan explicit cache configuration</li>
<li>Update middleware jika menggunakan geo atau IP headers</li>
<li>Test semua API routes karena perubahan default caching behavior</li>
</ul>
<p>Next.js menyediakan codemod untuk automasi sebagian besar migrasi: <code>npx @next/codemod@latest upgrade</code>.</p>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Next.js 15 adalah upgrade yang sangat worthwhile. Turbopack stable memberikan pengalaman development yang jauh lebih cepat, caching yang lebih intuitif mengurangi debugging time, dan PPR membuka kemungkinan baru untuk arsitektur web modern. Upgrade sekarang untuk mendapatkan semua keuntungan ini.</p>`
  },
  {
    id: 6,
    slug: "machine-learning-untuk-pemula",
    title: "Machine Learning untuk Pemula: Panduan Memulai dari Nol",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    author: "Budi Santoso",
    date: "28 Maret 2026",
    readTime: "15 menit baca",
    description: "Panduan lengkap belajar Machine Learning dari dasar. Cocok untuk pemula yang ingin memulai karir di bidang AI.",
    tags: ["Machine Learning", "Python", "AI", "Tutorial"],
    content: `<h2 id="dasar-ml">Apa itu Machine Learning?</h2>
<p>Machine Learning (ML) adalah cabang Artificial Intelligence yang memungkinkan komputer belajar dari data dan membuat prediksi tanpa diprogram secara eksplisit. Alih-alih menulis aturan satu per satu, kita memberikan data kepada algoritma dan membiarkannya menemukan pola sendiri.</p>
<p>Contoh sederhana: alih-alih menulis kode "jika suhu > 30°C dan kelembaban > 80%, maka hujan", kita memberikan data cuaca historis dan membiarkan ML menemukan pola yang menentukan kapan akan hujan.</p>

<h2 id="jenis-ml">Jenis-Jenis Machine Learning</h2>
<p>Ada tiga jenis utama ML yang perlu Anda pahami:</p>
<ul>
<li><strong>Supervised Learning</strong> — Model belajar dari data yang sudah berlabel. Contoh: prediksi harga rumah, klasifikasi email spam</li>
<li><strong>Unsupervised Learning</strong> — Model menemukan pola dari data tanpa label. Contoh: customer segmentation, anomaly detection</li>
<li><strong>Reinforcement Learning</strong> — Model belajar melalui trial and error dengan sistem reward. Contoh: game AI, self-driving cars</li>
</ul>
<p>Untuk pemula, disarankan memulai dari Supervised Learning karena konsepnya paling intuitif dan banyak digunakan di industri.</p>

<h2 id="tools">Tools yang Dibutuhkan</h2>
<p>Berikut tools essential untuk memulai perjalanan ML Anda:</p>
<ul>
<li><strong>Python</strong> — Bahasa pemrograman utama untuk ML, mudah dipelajari dan memiliki ekosistem library yang kaya</li>
<li><strong>Jupyter Notebook</strong> — Interactive environment untuk eksperimen dan visualisasi data</li>
<li><strong>NumPy & Pandas</strong> — Library untuk manipulasi data dan komputasi numerik</li>
<li><strong>scikit-learn</strong> — Library ML paling populer untuk algoritma klasik</li>
<li><strong>Matplotlib & Seaborn</strong> — Visualisasi data</li>
<li><strong>TensorFlow/PyTorch</strong> — Framework untuk deep learning (tahap lanjut)</li>
</ul>

<h2 id="roadmap">Roadmap Belajar</h2>
<p>Berikut roadmap yang direkomendasikan untuk pemula:</p>
<ul>
<li><strong>Bulan 1-2:</strong> Kuasai Python dasar dan library data science (NumPy, Pandas)</li>
<li><strong>Bulan 3-4:</strong> Pelajari statistik dan probabilitas dasar</li>
<li><strong>Bulan 5-6:</strong> Mulai dengan algoritma ML klasik menggunakan scikit-learn</li>
<li><strong>Bulan 7-8:</strong> Praktik dengan project nyata dan dataset Kaggle</li>
<li><strong>Bulan 9-12:</strong> Eksplorasi deep learning dengan TensorFlow atau PyTorch</li>
</ul>

<h2 id="project-pertama">Project Pertama Anda</h2>
<p>Project terbaik untuk pemula adalah klasifikasi Iris flower menggunakan scikit-learn. Project ini sederhana tapi mencakup seluruh workflow ML:</p>
<ul>
<li>Loading dan eksplorasi data</li>
<li>Data preprocessing</li>
<li>Training model</li>
<li>Evaluasi performa</li>
<li>Making predictions</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Machine Learning bukanlah sesuatu yang harus ditakuti. Dengan pendekatan yang terstruktur dan konsistensi belajar, siapa pun bisa menguasainya. Mulai dari dasar, praktik secara konsisten, dan jangan takut untuk bereksperimen. Komunitas ML di Indonesia juga sangat aktif dan supportive — bergabunglah untuk mendapatkan support dan networking.</p>`
  },
  {
    id: 7,
    slug: "strategi-social-media-marketing-2026",
    title: "Strategi Social Media Marketing Terbaik di 2026",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    author: "Siti Nurhaliza",
    date: "27 Maret 2026",
    readTime: "8 menit baca",
    description: "Tren dan strategi social media marketing yang efektif untuk meningkatkan brand awareness dan engagement di tahun 2026.",
    tags: ["Social Media", "Marketing", "Strategy", "Content"],
    content: `<h2 id="tren">Tren Social Media Marketing 2026</h2>
<p>Lanskap social media terus berevolusi dengan cepat. Di tahun 2026, beberapa tren utama mendominasi:</p>
<ul>
<li><strong>Short-form Video Dominance</strong> — TikTok, Reels, dan Shorts masih menjadi format konten paling efektif dengan engagement rate tertinggi</li>
<li><strong>AI-Generated Content</strong> — Brand menggunakan AI untuk scaling content production sambil mempertahankan brand voice</li>
<li><strong>Community-Led Growth</strong> — Brand yang membangun komunitas loyal mengalahkan yang hanya fokus pada followers</li>
<li><strong>Social Commerce</strong> — Pembelian langsung dari platform social media meningkat 120% dibanding tahun lalu</li>
</ul>

<h2 id="platform">Platform Terbaik per Industri</h2>
<p>Setiap platform memiliki kekuatan untuk industri yang berbeda:</p>
<ul>
<li><strong>TikTok:</strong> Fashion, F&B, lifestyle, entertainment — audience Gen Z dan Millennial</li>
<li><strong>Instagram:</strong> Beauty, travel, home decor — visual-heavy industries</li>
<li><strong>LinkedIn:</strong> B2B, SaaS, professional services — decision makers dan profesional</li>
<li><strong>YouTube:</strong> Education, tech, gaming — konten long-form dan tutorial</li>
<li><strong>Twitter/X:</strong> Tech, news, thought leadership — real-time engagement</li>
</ul>

<h2 id="content-strategy">Content Strategy Framework</h2>
<p>Framework content yang terbukti efektif di 2026:</p>
<ul>
<li><strong>70% Value Content</strong> — Edukasi, tips, dan insight yang bermanfaat bagi audience</li>
<li><strong>20% Brand Content</strong> — Behind-the-scenes, culture, dan team stories</li>
<li><strong>10% Promotional</strong> — Direct selling dan offers</li>
</ul>
<p>Kunci utama adalah konsistensi dan authenticity. Audience di 2026 sangat sensitif terhadap konten yang terasa "salesy" atau tidak genuine.</p>

<h2 id="metrics">Metrics yang Penting</h2>
<p>Jangan terjebak vanity metrics. Fokus pada metrics yang benar-benar matter:</p>
<ul>
<li><strong>Engagement Rate</strong> — Lebih penting dari jumlah followers</li>
<li><strong>Save dan Share Rate</strong> — Indikator content value yang kuat</li>
<li><strong>Click-Through Rate</strong> — Seberapa efektif CTA Anda</li>
<li><strong>Conversion Rate</strong> — Ultimate metric: berapa yang menjadi customer</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Social media marketing di 2026 tentang building genuine connections, bukan sekadar broadcast message. Investasikan waktu untuk memahami audience Anda, create value consistently, dan leverage AI tools untuk scaling tanpa mengorbankan authenticity.</p>`
  },
  {
    id: 8,
    slug: "rust-programming-language-2026",
    title: "Mengapa Rust Menjadi Bahasa Pemrograman Favorit di 2026",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    author: "Rina Saputri",
    date: "26 Maret 2026",
    readTime: "10 menit baca",
    description: "Rust terus naik popularitasnya. Pelajari mengapa developer semakin memilih Rust untuk system programming.",
    tags: ["Rust", "System Programming", "Performance", "Safety"],
    content: `<h2 id="kenapa-rust">Mengapa Developer Memilih Rust?</h2>
<p>Rust telah menjadi bahasa pemrograman paling dicintai di Stack Overflow Survey selama 8 tahun berturut-turut. Tapi apa yang membuat Rust begitu spesial?</p>
<p>Jawaban singkatnya: Rust memberikan performa setara C/C++ dengan memory safety guarantees tanpa garbage collector. Ini adalah holy grail yang dicari developer system programming selama puluhan tahun.</p>

<h2 id="memory-safety">Memory Safety Tanpa Garbage Collector</h2>
<p>Rust menggunakan ownership system yang unik untuk mengelola memory. Setiap value memiliki satu owner, dan memory otomatis di-deallocate ketika owner keluar dari scope. Ini mengeliminasi entire classes of bugs:</p>
<ul>
<li>Null pointer dereferences</li>
<li>Buffer overflows</li>
<li>Use-after-free</li>
<li>Double free</li>
<li>Data races dalam concurrency</li>
</ul>
<p>Compiler Rust menangkap semua memory errors ini pada compile time, bukan runtime. Artinya, jika code Anda berhasil di-compile, Anda bisa yakin tidak ada memory bugs.</p>

<h2 id="use-cases">Use Cases Populer</h2>
<p>Rust digunakan di berbagai domain yang membutuhkan performa dan reliability tinggi:</p>
<ul>
<li><strong>WebAssembly</strong> — Rust adalah bahasa #1 untuk Wasm, memungkinkan performa near-native di browser</li>
<li><strong>System Programming</strong> — OS components, drivers, embedded systems</li>
<li><strong>Web Backend</strong> — Framework Actix Web dan Axum menawarkan performa yang luar biasa</li>
<li><strong>CLI Tools</strong> — Tools seperti ripgrep, fd, dan bat ditulis dalam Rust</li>
<li><strong>Blockchain</strong> — Solana dan Polkadot menggunakan Rust sebagai bahasa utama</li>
<li><strong>Game Development</strong> — Bevy engine dan integrasi dengan existing game engines</li>
</ul>

<h2 id="perusahaan">Perusahaan yang Menggunakan Rust</h2>
<p>Rust bukan hanya bahasa hobi — perusahaan besar mengandalkannya untuk production systems:</p>
<ul>
<li><strong>Mozilla</strong> — Stylo CSS engine di Firefox</li>
<li><strong>Google</strong> — Android OS components dan Chromium</li>
<li><strong>Microsoft</strong> — Windows kernel components</li>
<li><strong>Amazon</strong> — Firecracker microVM untuk AWS Lambda</li>
<li><strong>Discord</strong> — Core infrastructure yang sebelumnya di Go</li>
<li><strong>Cloudflare</strong> — Edge computing platform</li>
</ul>

<h2 id="belajar-rust">Cara Belajar Rust</h2>
<p>Rust memiliki learning curve yang cukup steep, terutama konsep ownership dan borrowing. Berikut resource yang direkomendasikan:</p>
<ul>
<li><strong>The Rust Book</strong> — Dokumentasi resmi yang sangat komprehensif dan gratis</li>
<li><strong>Rustlings</strong> — Exercise-based learning yang interaktif</li>
<li><strong>Rust by Example</strong> — Belajar melalui contoh kode</li>
<li><strong>Exercism Rust Track</strong> — Practice problems dengan mentorship</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Rust bukan sekadar hype — ini adalah evolusi nyata dalam system programming. Jika Anda bekerja di domain yang membutuhkan performa tinggi dan reliability, investasi belajar Rust akan terbayar dengan sangat baik. Mulai dari project kecil seperti CLI tool, lalu gradually tingkatkan complexity seiring pemahaman Anda bertambah.</p>`
  },
  {
    id: 9,
    slug: "google-sge-dan-dampaknya-terhadap-seo",
    title: "Google SGE dan Dampaknya Terhadap SEO di 2026",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    author: "Ahmad Fauzi",
    date: "25 Maret 2026",
    readTime: "9 menit baca",
    description: "Google Search Generative Experience mengubah lanskap SEO. Pelajari cara beradaptasi agar tetap relevan.",
    tags: ["Google", "SGE", "SEO", "AI Search"],
    content: `<h2 id="apa-itu-sge">Apa itu Google SGE?</h2>
<p>Google Search Generative Experience (SGE) adalah fitur pencarian berbasis AI yang memberikan jawaban langsung di halaman hasil pencarian. Alih-alih hanya menampilkan daftar link, Google sekarang menyajikan rangkuman AI yang menjawab pertanyaan pengguna secara langsung.</p>
<p>SGE menggunakan large language model (LLM) milik Google untuk memahami query pengguna dan menghasilkan jawaban komprehensif yang disintesis dari multiple sources. Fitur ini sudah diluncurkan secara global dan berdampak besar pada traffic organik website.</p>

<h2 id="dampak-seo">Dampak terhadap SEO Tradisional</h2>
<p>SGE mengubah beberapa aspek fundamental SEO:</p>
<ul>
<li><strong>CTR Menurun</strong> — Untuk informational queries, CTR organik turun rata-rata 25-40% karena users mendapat jawaban tanpa klik</li>
<li><strong>Featured Snippets Berevolusi</strong> — Position zero tidak lagi jaminan traffic karena SGE bisa menggantikannya</li>
<li><strong>Long-tail Keywords Lebih Penting</strong> — Query spesifik dan complex masih mendorong clicks</li>
<li><strong>E-E-A-T Semakin Krusial</strong> — Google lebih memprioritaskan sumber dengan Experience, Expertise, Authoritativeness, dan Trustworthiness</li>
</ul>

<h2 id="strategi-adaptasi">Strategi Adaptasi</h2>
<p>Untuk tetap relevan di era SGE, berikut strategi yang perlu diadopsi:</p>
<ul>
<li><strong>Fokus pada Konten Unik</strong> — Original research, case studies, dan first-hand experience yang tidak bisa di-generate AI</li>
<li><strong>Build Brand Authority</strong> — Investasi pada personal branding dan thought leadership</li>
<li><strong>Optimize untuk Transactional Queries</strong> — SGE kurang berdampak pada queries dengan buying intent</li>
<li><strong>Diversifikasi Traffic Sources</strong> — Jangan bergantung 100% pada Google organic</li>
<li><strong>Leverage Multimedia</strong> — Video, infographics, dan interactive content yang sulit di-replicate AI</li>
</ul>

<h2 id="peluang-baru">Peluang Baru dari SGE</h2>
<p>SGE juga membuka peluang baru:</p>
<ul>
<li>Website yang dikutip SGE mendapat "citation badge" yang meningkatkan trust</li>
<li>AI-generated answers sering mengarahkan users ke sumber untuk informasi lebih detail</li>
<li>Complex dan nuanced topics masih membutuhkan human-written content</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>SGE bukan akhir dari SEO, tapi transformasinya. SEO di era AI membutuhkan pendekatan yang lebih fokus pada kualitas, keunikan, dan value nyata bagi pengguna. Developer dan content creator yang beradaptasi akan menemukan peluang baru di tengah perubahan ini.</p>`
  },
  {
    id: 10,
    slug: "docker-kubernetes-untuk-developer",
    title: "Docker & Kubernetes: Panduan Praktis untuk Developer",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    author: "Budi Santoso",
    date: "24 Maret 2026",
    readTime: "13 menit baca",
    description: "Pelajari containerization dengan Docker dan orchestration dengan Kubernetes untuk deployment aplikasi modern.",
    tags: ["Docker", "Kubernetes", "DevOps", "Container"],
    content: `<h2 id="docker-dasar">Mengapa Docker?</h2>
<p>Docker memungkinkan Anda mengemas aplikasi beserta semua dependensinya dalam container yang portable. "It works on my machine" bukan lagi excuse yang valid ketika semua orang menjalankan container yang identik.</p>
<p>Container berbeda dari virtual machine — container berbagi kernel OS host, sehingga jauh lebih ringan dan cepat. Satu server bisa menjalankan ratusan container, sementara VM mungkin hanya belasan.</p>

<h2 id="dockerfile">Membuat Dockerfile</h2>
<p>Dockerfile adalah blueprint untuk membuat container image. Berikut best practices untuk Dockerfile yang efisien:</p>
<ul>
<li><strong>Multi-stage builds</strong> — Pisahkan build stage dan runtime stage untuk image yang lebih kecil</li>
<li><strong>Layer caching</strong> — Urutkan instruksi dari yang jarang berubah ke yang sering berubah</li>
<li><strong>Alpine base image</strong> — Gunakan base image yang minimal untuk security dan size</li>
<li><strong>.dockerignore</strong> — Exclude file yang tidak diperlukan dalam container</li>
</ul>

<h2 id="docker-compose">Docker Compose</h2>
<p>Docker Compose memungkinkan Anda mendefinisikan multi-container application dalam satu file YAML. Sangat berguna untuk development environment yang memerlukan multiple services (web server, database, cache, dll).</p>
<p>Dengan satu command <code>docker compose up</code>, seluruh stack development Anda siap digunakan. Ini sangat mempercepat onboarding developer baru ke project.</p>

<h2 id="kubernetes">Kubernetes: Container Orchestration</h2>
<p>Kubernetes (K8s) mengelola container dalam skala besar. Jika Docker adalah tentang membuat dan menjalankan container, Kubernetes tentang mengelola ratusan atau ribuan container di production:</p>
<ul>
<li><strong>Auto-scaling</strong> — Secara otomatis menambah atau mengurangi container berdasarkan load</li>
<li><strong>Load Balancing</strong> — Mendistribusikan traffic secara merata ke semua container</li>
<li><strong>Self-healing</strong> — Restart container yang gagal dan replace yang tidak healthy</li>
<li><strong>Rolling Updates</strong> — Deploy versi baru tanpa downtime</li>
<li><strong>Service Discovery</strong> — Container bisa saling menemukan tanpa hardcoded addresses</li>
</ul>

<h2 id="kapan-k8s">Kapan Menggunakan Kubernetes?</h2>
<p>Kubernetes powerful tapi complex. Gunakan K8s ketika:</p>
<ul>
<li>Anda menjalankan 10+ microservices</li>
<li>Membutuhkan auto-scaling untuk handle traffic spikes</li>
<li>Memerlukan high availability dan zero-downtime deployments</li>
<li>Tim Anda sudah familiar dengan container concepts</li>
</ul>
<p>Untuk project kecil, Docker Compose atau managed services (Railway, Fly.io) mungkin sudah cukup.</p>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Docker dan Kubernetes adalah skills essential untuk developer modern. Mulai dengan Docker untuk local development, lalu gradual ke Kubernetes ketika scale dan complexity meningkat. Managed Kubernetes services seperti GKE, EKS, dan AKS mempermudah adopsi tanpa harus manage cluster sendiri.</p>`
  },
  {
    id: 11,
    slug: "prompt-engineering-untuk-developer",
    title: "Prompt Engineering: Skill Wajib Developer di Era AI",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Rina Saputri",
    date: "23 Maret 2026",
    readTime: "10 menit baca",
    description: "Kuasai teknik prompt engineering untuk memaksimalkan produktivitas development dengan AI tools.",
    tags: ["Prompt Engineering", "AI Tools", "Productivity", "LLM"],
    content: `<h2 id="apa-itu">Apa itu Prompt Engineering?</h2>
<p>Prompt engineering adalah seni dan ilmu membuat instruksi yang efektif untuk AI model agar menghasilkan output yang diinginkan. Di era di mana developer menggunakan AI tools seperti GitHub Copilot, ChatGPT, dan Claude setiap hari, kemampuan ini menjadi sangat krusial.</p>
<p>Prompt yang baik bisa menghemat jam kerja, sementara prompt yang buruk menghasilkan output yang perlu di-debug lebih lama dari menulis manual. Perbedaannya terletak pada teknik dan pemahaman cara kerja AI.</p>

<h2 id="prinsip-dasar">Prinsip Dasar</h2>
<p>Beberapa prinsip fundamental prompt engineering:</p>
<ul>
<li><strong>Be Specific</strong> — Semakin detail instruksi, semakin akurat output. "Buat fungsi sort" vs "Buat fungsi merge sort untuk array of objects, sort by property 'date' descending"</li>
<li><strong>Provide Context</strong> — Berikan informasi tentang project, tech stack, dan constraints</li>
<li><strong>Show Examples</strong> — Few-shot prompting: berikan contoh input-output yang diharapkan</li>
<li><strong>Define Output Format</strong> — Spesifikasikan format output: JSON, TypeScript, markdown, dll</li>
<li><strong>Iterate</strong> — Refine prompt berdasarkan output sebelumnya</li>
</ul>

<h2 id="teknik-lanjut">Teknik Lanjutan</h2>
<p>Teknik advanced yang bisa meningkatkan kualitas output secara signifikan:</p>
<ul>
<li><strong>Chain-of-Thought</strong> — Minta AI menjelaskan reasoning step-by-step sebelum memberikan jawaban final</li>
<li><strong>Role Playing</strong> — Tetapkan role spesifik: "Kamu adalah senior React developer dengan 10 tahun pengalaman"</li>
<li><strong>Constraints</strong> — Tetapkan batasan: "Jangan gunakan any type", "Maksimal 50 baris", "Harus accessible"</li>
<li><strong>Self-Critique</strong> — Minta AI review dan improve output-nya sendiri</li>
</ul>

<h2 id="use-cases-dev">Use Cases untuk Developer</h2>
<p>Prompt engineering praktis untuk developer sehari-hari:</p>
<ul>
<li><strong>Code Generation</strong> — Menulis boilerplate, CRUD operations, API endpoints</li>
<li><strong>Code Review</strong> — Minta AI review kode untuk bugs, security issues, dan best practices</li>
<li><strong>Documentation</strong> — Generate JSDoc, README, dan API documentation</li>
<li><strong>Testing</strong> — Buat unit tests dan integration tests</li>
<li><strong>Debugging</strong> — Explain error messages dan suggest fixes</li>
<li><strong>Refactoring</strong> — Improve code structure dan readability</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>Prompt engineering bukan sekadar "chatting with AI" — ini adalah skill teknis yang bisa dipelajari dan di-master. Developer yang menguasainya memiliki keunggulan kompetitif yang signifikan. Mulai praktik sekarang, eksperimen dengan berbagai teknik, dan build your personal prompt library untuk tasks yang sering dilakukan.</p>`
  },
  {
    id: 12,
    slug: "typescript-5-fitur-baru",
    title: "TypeScript 5: Fitur Baru yang Wajib Anda Ketahui",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    author: "Ahmad Fauzi",
    date: "22 Maret 2026",
    readTime: "11 menit baca",
    description: "Eksplorasi fitur-fitur baru di TypeScript 5 termasuk decorators, const type parameters, dan banyak lagi.",
    tags: ["TypeScript", "JavaScript", "Programming", "Type Safety"],
    content: `<h2 id="overview">Overview TypeScript 5</h2>
<p>TypeScript 5 adalah major release yang membawa banyak peningkatan dari segi fitur, performa, dan developer experience. Release ini fokus pada simplifikasi, modernisasi, dan performance improvement yang sudah ditunggu-tunggu komunitas.</p>
<p>Package size TypeScript 5 berkurang sekitar 50% dibanding TypeScript 4.9, berkat migrasi dari namespaces ke modules. Ini berarti install time dan disk usage yang jauh lebih efisien.</p>

<h2 id="decorators">ECMAScript Decorators</h2>
<p>TypeScript 5 menghadirkan decorators yang sesuai dengan ECMAScript standard (Stage 3), menggantikan experimental decorators yang sudah ada sejak lama:</p>
<ul>
<li>Standard-compliant — akan tetap bekerja tanpa perubahan ketika standard final</li>
<li>Tidak memerlukan <code>experimentalDecorators</code> flag lagi</li>
<li>Lebih powerful dengan decorator metadata support</li>
<li>Backward compatible — experimental decorators masih didukung</li>
</ul>
<p>Decorators sangat berguna untuk cross-cutting concerns seperti logging, validation, dan dependency injection tanpa mengubah logic utama class.</p>

<h2 id="const-type">Const Type Parameters</h2>
<p>Fitur baru ini memungkinkan inference yang lebih presisi untuk literal types dalam generic functions. Dengan menambahkan modifier <code>const</code> pada type parameter, TypeScript akan infer literal types alih-alih wider types:</p>
<p>Ini sangat berguna untuk API yang membutuhkan exact literal types, seperti routing libraries, form builders, dan state management tools.</p>

<h2 id="enum-improvements">Enum Improvements</h2>
<p>TypeScript 5 membawa beberapa perbaikan pada enums:</p>
<ul>
<li>Semua enums sekarang adalah union enums</li>
<li>Computed enum members diperbolehkan</li>
<li>Better narrowing untuk enum types</li>
</ul>
<p>Meskipun ada diskusi apakah enums masih relevan vs union types, peningkatan ini membuat enums lebih predictable dan type-safe.</p>

<h2 id="performa">Peningkatan Performa</h2>
<p>Beberapa peningkatan performa signifikan di TypeScript 5:</p>
<ul>
<li><strong>Build speed:</strong> 10-25% lebih cepat untuk sebagian besar project</li>
<li><strong>Package size:</strong> ~50% lebih kecil</li>
<li><strong>Memory usage:</strong> Lebih efisien berkat internal optimizations</li>
<li><strong>Editor responsiveness:</strong> IntelliSense dan code navigation lebih cepat</li>
</ul>

<h2 id="migrasi">Tips Migrasi</h2>
<p>Untuk migrasi ke TypeScript 5:</p>
<ul>
<li>Update tsconfig.json — beberapa deprecated options telah dihapus</li>
<li>Review decorator usage jika menggunakan experimental decorators</li>
<li>Update build tools yang mungkin belum support TS 5</li>
<li>Run <code>tsc --noEmit</code> untuk catch breaking changes sebelum full migration</li>
</ul>

<h2 id="kesimpulan">Kesimpulan</h2>
<p>TypeScript 5 adalah upgrade yang sangat recommended. Peningkatan performa, fitur decorators yang standard-compliant, dan const type parameters membuat development experience jauh lebih baik. Dengan package size yang 50% lebih kecil, tidak ada alasan untuk tidak upgrade sekarang.</p>`
  }
];

export const categories = ["Digital Marketing", "Artificial Intelligence", "Web Development", "Programming", "Tutorial"];

export function toCategoryParam(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getCategoryByParam(param: string): string | undefined {
  return categories.find((category) => toCategoryParam(category) === param);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    a => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))
  );
}
