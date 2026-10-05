import type { BlogPostRecord, BlogPostSlug } from "./types";

/**
 * Editorial posts — orientation and process only.
 * No condition landers, outcome guarantees, or invented credentials.
 */
export const blogPosts: BlogPostRecord[] = [
  {
    slug: "starting-online-therapy-in-persian",
    publishedAt: "2026-10-05",
    image: {
      src: "/images/Blogs/Starting.webp",
      alt: {
        fa: "فضایی آرام برای آغاز روان‌درمانی آنلاین به زبان فارسی",
        en: "A calm setting for beginning online psychotherapy in Persian",
      },
    },
    fa: {
      title: "شروع روان‌درمانی آنلاین به زبان فارسی",
      description:
        "چگونه می‌توان گفت‌وگوی اولیه برای روان‌درمانی آنلاین به زبان فارسی را آغاز کرد؛ از پیام اول تا چارچوب جلسات.",
      excerpt:
        "اگر به فکر شروع کار آنلاین هستید، معمولاً یک پیام کوتاه کافی است. در اینجا مسیر شروع، زبان جلسات، و آنچه پیش از تماس مفید است آمده است.",
      sections: [
        {
          paragraphs: [
            "بسیاری از افراد پیش از نوشتن اولین پیام تردید می‌کنند: چه بگویند، از کجا شروع کنند، و آیا کار آنلاین «جدی» است یا نه. در کار مهرآفرین کلاهدوزان، جلسات به‌صورت آنلاین و به زبان فارسی برگزار می‌شوند. این نوشتار برای روشن‌کردن همین نقطهٔ شروع است؛ نه برای وعدهٔ نتیجه.",
          ],
        },
        {
          title: "پیام اول می‌تواند کوتاه باشد",
          paragraphs: [
            "برای آغاز گفت‌وگو معمولاً چند خط کافی است: نام، راه ارتباطی ترجیحی، و یک اشارهٔ کوتاه به آنچه شما را به تماس رسانده. نیازی نیست در پیام اول شرح بالینی مفصل بنویسید. جزئیات دقیق‌تر، اگر مناسب باشد، در گفت‌وگوی بعدی شکل می‌گیرد.",
            "راه‌های تماس عمومی، ایمیل و تلگرام است. جزئیات در صفحهٔ تماس آمده است.",
          ],
        },
        {
          title: "چارچوب معمول جلسات",
          paragraphs: [
            "پس از تماس اولیه، اگر ادامه ممکن باشد، کار به‌صورت جلسات آنلاین منظم پیش می‌رود. مدت معمول هر جلسه حدود چهل‌و‌پنج دقیقه است. تداوم و زمان نسبتاً ثابت به ایجاد فضای قابل‌اتکا کمک می‌کند؛ هرچند جزئیات عملی با توجه به شرایط هر نفر تنظیم می‌شود.",
            "زبان جلسات فارسی است. نسخهٔ انگلیسی وب‌سایت برای اطلاع‌رسانی است و به‌معنای ارائهٔ درمان به زبان انگلیسی نیست.",
          ],
        },
        {
          title: "چه چیزی را وعده نمی‌دهیم",
          paragraphs: [
            "روان‌درمانی مسیر واحد و تضمینی ندارد. این نوشتار برای جهت‌دهی عملی نوشته شده، نه برای قول بهبود سریع یا نتیجهٔ قطعی. اگر آمادگی دارید گفت‌وگو را شروع کنید، می‌توانید از صفحهٔ فرآیند با مسیر کلی آشنا شوید یا مستقیماً پیام بفرستید.",
          ],
        },
      ],
      cta: {
        template:
          "مسیر شروع را در {{process}} ببینید، یا از {{contact}} پیام بفرستید.",
        labels: {
          process: "فرآیند",
          contact: "تماس",
        },
      },
    },
    en: {
      title: "Starting online psychotherapy in Persian",
      description:
        "How a first message and early conversation can begin for online psychotherapy in Persian — without promising outcomes.",
      excerpt:
        "If you are considering online work, a short first message is usually enough. This note covers language, format, and how contact typically begins.",
      sections: [
        {
          paragraphs: [
            "Many people hesitate before writing a first message: what to say, where to begin, and whether online work can feel serious enough. In Mehrafarin Kolahdoozan’s practice, sessions are online and conducted in Persian. This article is meant to clarify that starting point — not to promise a result.",
          ],
        },
        {
          title: "A short first message is enough",
          paragraphs: [
            "A few lines are usually enough to begin: your name, a preferred way to reply, and a brief note about what brought you to write. You do not need to include a detailed clinical history in the first message. Fuller conversation can follow later, if it makes sense to continue.",
            "Public contact channels are email and Telegram. Details are on the Contact page.",
          ],
        },
        {
          title: "The usual frame of sessions",
          paragraphs: [
            "After an initial exchange, if continuing seems possible, work proceeds through regular online sessions. A typical session lasts about 45 minutes. Continuity and a relatively stable time help create a reliable space, though practical details are arranged case by case.",
            "Therapy itself is conducted in Persian. The English pages of this site are for information and do not imply English-language therapy.",
          ],
        },
        {
          title: "What this is not promising",
          paragraphs: [
            "Psychotherapy does not follow one guaranteed path. This note is practical orientation, not a promise of quick improvement or a fixed outcome. If you would like to begin a conversation, you can read the Process page or write via Contact.",
          ],
        },
      ],
      cta: {
        template: "See {{process}} for how work typically begins, or go to {{contact}}.",
        labels: {
          process: "Process",
          contact: "Contact",
        },
      },
    },
  },
  {
    slug: "analytical-psychotherapy",
    publishedAt: "2026-10-05",
    image: {
      src: "/images/Blogs/analytical.webp",
      alt: {
        fa: "تصویری انتزاعی از جهت‌گیری تحلیلی در روان‌درمانی",
        en: "An abstract visual for analytical psychotherapy orientation",
      },
    },
    fa: {
      title: "روان‌درمانی با رویکرد تحلیلی چیست؟",
      description:
        "توضیحی آرام دربارهٔ جهت‌گیری تحلیلی در کار مهرآفرین کلاهدوزان؛ بدون تضمین نتیجه و بدون تبدیل رویکرد به محصول.",
      excerpt:
        "رویکرد تحلیلی اینجا یک برچسب تبلیغاتی نیست؛ چارچوبی برای شنیدن دقیق‌تر تجربه، رابطه، و آنچه در گفت‌وگو تکرار می‌شود.",
      sections: [
        {
          paragraphs: [
            "وقتی از «روان‌درمانی با رویکرد تحلیلی» سخن می‌گوییم، منظور یک بستهٔ درمانی با وعدهٔ مشخص نیست. در کار مهرآفرین کلاهدوزان، این عبارت به جهت‌گیری حرفه‌ای اشاره دارد: گوش‌دادن دقیق به تجربهٔ درونی، الگوهای تکرارشونده، و آنچه در رابطهٔ درمانی و در گفتار آشکار می‌شود.",
            "در معرفی عمومی کار او، واژه‌هایی مانند رویکرد تحلیلی، روان‌پویشی، روانکاوانه و لاکانی به‌عنوان جهت‌گیری به‌کار می‌روند؛ نه به‌عنوان مدرک جداگانه یا تخصص تشخیص‌محور.",
          ],
        },
        {
          title: "تمرکز این جهت‌گیری معمولاً کجاست؟",
          paragraphs: [
            "در چنین فضایی، کار اغلب فراتر از توصیهٔ فوری برای «حل مسئله» می‌رود. ممکن است توجه به معنایی باشد که یک موقعیت برای فرد دارد، به تکرارهایی در روابط یا انتخاب‌ها، یا به آنچه گفتن یا نگفتن در جلسه آشکار می‌کند.",
            "این به آن معنا نیست که هر جلسه دشوار یا مبهم است. فضای کار می‌تواند آرام و دقیق باشد؛ اما هدف آن ساده‌سازی تجربه به چند راهکار آماده نیست.",
          ],
        },
        {
          title: "برای چه کسانی ممکن است مرتبط باشد؟",
          paragraphs: [
            "او با بزرگسالان و زوج‌ها کار می‌کند. این اشاره به گروه مراجعان است، نه فهرست تشخیص یا لندینگ بیماری. اگر کسی به‌دنبال فهم عمیق‌تر تجربهٔ خود و رابطه باشد، جهت‌گیری تحلیلی ممکن است برایش معنادار به نظر برسد؛ تشخیص تناسب، در گفت‌وگوی واقعی روشن‌تر می‌شود.",
          ],
        },
        {
          title: "مرزهای صادقانه",
          paragraphs: [
            "هیچ رویکردی برای همه مناسب نیست و هیچ نوشتاری جایگزین ارزیابی فردی نمی‌شود. همچنین هیچ تضمینی دربارهٔ نتیجه وجود ندارد. اگر می‌خواهید با این جهت‌گیری بیشتر آشنا شوید، صفحهٔ درباره و خدمات نقطهٔ شروع خوبی هستند.",
          ],
        },
      ],
      cta: {
        template:
          "برای آشنایی بیشتر صفحهٔ {{about}} را ببینید، یا فهرست {{services}} را مرور کنید.",
        labels: {
          about: "درباره",
          services: "خدمات",
        },
      },
    },
    en: {
      title: "What does analytical psychotherapy mean here?",
      description:
        "A calm explanation of analytical orientation in Mehrafarin Kolahdoozan’s work — without turning an approach into a product or promising outcomes.",
      excerpt:
        "Analytical orientation here is not a marketing label. It names a way of listening closely to experience, relationship, and what repeats in speech.",
      sections: [
        {
          paragraphs: [
            "When this site speaks of “psychotherapy with an analytical orientation,” it is not describing a packaged treatment with a promised result. In Mehrafarin Kolahdoozan’s work, the phrase points to a professional orientation: careful attention to inner experience, recurring patterns, and what becomes visible in speech and in the therapeutic relationship.",
            "Public wording may also use terms such as analytical, psychodynamic, psychoanalytic, and Lacanian as orientation labels — not as separate certificates or diagnosis-based specialties.",
          ],
        },
        {
          title: "Where attention often goes",
          paragraphs: [
            "In this kind of space, the work often goes beyond immediate advice for “fixing the problem.” Attention may turn to what a situation means for someone, to repetitions in relationships or choices, or to what speaking — or not speaking — reveals in the session.",
            "That does not mean every meeting must feel heavy or obscure. The atmosphere can be calm and precise. Still, the aim is not to reduce experience to a set of ready-made tips.",
          ],
        },
        {
          title: "Who this may be relevant for",
          paragraphs: [
            "She works with adults and couples. That names client groups, not a menu of diagnoses. Someone looking for a deeper understanding of their experience and relationships may find an analytical orientation meaningful; whether it fits becomes clearer in an actual conversation.",
          ],
        },
        {
          title: "Honest limits",
          paragraphs: [
            "No approach suits everyone, and no article replaces individual consideration. There is also no guarantee of outcome. If you want to learn more about this orientation, the About and Services pages are a good place to continue.",
          ],
        },
      ],
      cta: {
        template: "Learn more on the {{about}} page, or review {{services}}.",
        labels: {
          about: "About",
          services: "Services",
        },
      },
    },
  },
  {
    slug: "consultation-and-analytical-work",
    publishedAt: "2026-10-05",
    image: {
      src: "/images/Blogs/Consultation.webp",
      alt: {
        fa: "تصویری برای تفاوت مشاورهٔ کوتاه و کار تحلیلی ادامه‌دار",
        en: "A visual for consultation versus ongoing analytical work",
      },
    },
    fa: {
      title: "تفاوت مشاورهٔ کوتاه و کار تحلیلی ادامه‌دار",
      description:
        "توضیح تفاوت میان مشاورهٔ روان‌شناختی و روان‌درمانی با رویکرد تحلیلی در این سایت؛ برای انتخاب واقع‌بینانه‌تر مسیر تماس.",
      excerpt:
        "هر دو در فهرست خدمات آمده‌اند، اما ریتم و انتظارشان یکی نیست. این نوشتار کمک می‌کند پیش از پیام، تصویر روشن‌تری داشته باشید.",
      sections: [
        {
          paragraphs: [
            "در صفحهٔ خدمات، هم «مشاورهٔ روان‌شناختی» آمده و هم «روان‌درمانی با رویکرد تحلیلی». این دو برچسب برای بسیاری از افراد شبیه هم به‌نظر می‌رسند؛ در عمل اما انتظار از زمان، عمق، و شکل گفت‌وگو می‌تواند متفاوت باشد. هدف این نوشتار جداکردن آن‌ها با لحن تبلیغاتی نیست؛ روشن‌کردن تفاوت برای انتخاب آگاهانه‌تر است.",
          ],
        },
        {
          title: "مشاورهٔ روان‌شناختی",
          paragraphs: [
            "مشاوره اغلب جایی است برای روشن‌کردن یک موقعیت مشخص، پرسیدن سؤال‌های عملی، یا گرفتن جهت در یک مقطع. ممکن است کوتاه‌تر بماند یا بر یک مسئلهٔ جاری متمرکز باشد. این به‌معنای سطحی‌بودن نیست؛ بلکه ریتم و هدف گفت‌وگو معمولاً نزدیک‌تر به روشن‌سازی و تصمیم‌گیری در همان دوره است.",
          ],
        },
        {
          title: "کار تحلیلی ادامه‌دار",
          paragraphs: [
            "روان‌درمانی با رویکرد تحلیلی معمولاً به تداوم بیشتری متکی است. اینجا فرصت بیشتری برای دنبال‌کردن الگوها، رابطه، و معناهایی هست که به‌سرعت در یک یا دو گفت‌وگو جمع نمی‌شوند. فرد ممکن است با سوالی مشخص بیاید، اما کار می‌تواند به‌تدریج لایه‌های عمیق‌تری از تجربه را دربر بگیرد — بدون اینکه از پیش قول نتیجه داده شود.",
          ],
        },
        {
          title: "چطور انتخاب کنید؟",
          paragraphs: [
            "لازم نیست پیش از تماس، نام دقیق مسیر را قطعی کنید. بسیاری از گفت‌وگوها با یک پیام کوتاه آغاز می‌شوند و تناسب مسیر در ادامه روشن‌تر می‌شود. اگر هنوز مردد هستید، خواندن صفحهٔ خدمات و سپس نوشتن چند خط در صفحهٔ تماس کافی است.",
            "نکتهٔ مهم: این تفاوت‌ها راهنمای کلی‌اند، نه مرزهای سخت بالینی و نه وعدهٔ درمان.",
          ],
        },
      ],
      cta: {
        template:
          "فهرست خدمات را در {{services}} ببینید، یا از {{contact}} پیام بفرستید.",
        labels: {
          services: "خدمات",
          contact: "تماس",
        },
      },
    },
    en: {
      title: "Consultation and ongoing analytical work",
      description:
        "How psychological consultation and analytical psychotherapy differ on this site — to help you choose a realistic next step.",
      excerpt:
        "Both appear in the services list, but their tempo and expectations are not the same. This note helps clarify the difference before you write.",
      sections: [
        {
          paragraphs: [
            "The Services page names both “psychological consultation” and “analytical psychotherapy.” For many people the two sound alike; in practice, expectations around time, depth, and the shape of the conversation can differ. This article is not a sales comparison. It is meant to make the distinction clearer so a first message can be more grounded.",
          ],
        },
        {
          title: "Psychological consultation",
          paragraphs: [
            "Consultation is often a place to clarify a specific situation, ask practical questions, or find orientation at a particular moment. It may remain shorter, or stay close to a current issue. That does not make it shallow; it usually means the tempo is nearer to clarification and decision-making within that period.",
          ],
        },
        {
          title: "Ongoing analytical work",
          paragraphs: [
            "Psychotherapy with an analytical orientation usually depends on more continuity. There is more room to follow patterns, relationship, and meanings that do not gather neatly in one or two conversations. Someone may arrive with a clear question, yet the work can gradually open deeper layers of experience — without promising an outcome in advance.",
          ],
        },
        {
          title: "How to choose",
          paragraphs: [
            "You do not need to decide the exact path before writing. Many conversations begin with a short message, and fit becomes clearer over time. If you are still unsure, reading the Services page and then sending a few lines via Contact is enough.",
            "Important: these differences are general orientation, not rigid clinical borders and not a treatment promise.",
          ],
        },
      ],
      cta: {
        template: "See {{services}}, or go to {{contact}}.",
        labels: {
          services: "Services",
          contact: "Contact",
        },
      },
    },
  },
];

export const blogPostSlugs: BlogPostSlug[] = blogPosts.map((post) => post.slug);

export function isBlogPostSlug(value: string): value is BlogPostSlug {
  return blogPostSlugs.includes(value as BlogPostSlug);
}
