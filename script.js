const DEFAULT_HEADSHOT_SVG = [
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000' role='img' aria-label='Author portrait placeholder'>",
  "<defs>",
  "<linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>",
  "<stop offset='0%' stop-color='#2b2d35'/>",
  "<stop offset='55%' stop-color='#1a1c23'/>",
  "<stop offset='100%' stop-color='#0f1015'/>",
  "</linearGradient>",
  "<radialGradient id='glowA' cx='18%' cy='20%' r='48%'>",
  "<stop offset='0%' stop-color='rgba(242,186,106,0.5)'/>",
  "<stop offset='100%' stop-color='rgba(242,186,106,0)'/>",
  "</radialGradient>",
  "<radialGradient id='glowB' cx='80%' cy='84%' r='46%'>",
  "<stop offset='0%' stop-color='rgba(223,170,148,0.45)'/>",
  "<stop offset='100%' stop-color='rgba(223,170,148,0)'/>",
  "</radialGradient>",
  "</defs>",
  "<rect width='100%' height='100%' fill='url(#bg)'/>",
  "<rect width='100%' height='100%' fill='url(#glowA)'/>",
  "<rect width='100%' height='100%' fill='url(#glowB)'/>",
  "<circle cx='400' cy='365' r='150' fill='rgba(247,242,234,0.08)'/>",
  "<path d='M170 845c28-136 134-214 230-214s204 78 230 214' fill='rgba(247,242,234,0.08)'/>",
  "<text x='50%' y='92%' text-anchor='middle' fill='#f2ba6a' font-family='Inter,Arial,sans-serif' font-size='34' letter-spacing='6'>AUTHOR PORTRAIT</text>",
  "</svg>",
].join("");

const SITE = {
  author: {
    name: "Francis Nabrynski",
    shortTagline: "\"Girls with Black Hair\" erotic/romantic saga",
    subtitleLine: "Public listings for this title may also show Frank Roberts.",
    location: "Florida, USA",
    longBio:
      "The author grew up in a small mill town in the Merrimack Valley of northern Massachusetts.\n\nAfter completing a two-year military service obligation as a draftee in the United States Marine Corps, including one tour of duty in Vietnam, he returned home to the small-town America he knew.\n\nInfluenced by this overseas adventure, he spent the next forty-five years traveling across the lower 48 states and internationally in fifteen countries on four continents while working in the engineering and construction industries.\n\nNow retired and happily remarried to a girl with black hair, he lives in Florida.",
    headshotUrl: "./francis headshot.png",
    brandMark: "FN",
  },
  featured: {
    title: "The Girl with the Black Hair",
    subtitle: "A Reluctant Love Affair",
    description:
      "Corporate ambition collides with complicated affairs, addiction, and ethics.",
    cardBlurb: "A high-stakes romance where ambition, loyalty, and ethics collide.",
    isbns: ["9798889826194 (Print)", "9798889826200 (eText)"],
    buyUrl: "https://www.barnesandnoble.com/s/9798889826194",
    coverUrl: "./book-cover.png",
  },
  books: [
    {
      title: "The Girl with the Black Hair",
      subtitle: "A Reluctant Love Affair",
      publisher: "Fulton Books",
      year: "2024",
      pages: "356",
      isbns: ["9798889826194 (Print)", "9798889826200 (eText)"],
      buyUrl: "https://www.barnesandnoble.com/s/9798889826194",
      coverUrl: "./book-cover.png",
      featured: true,
    },
  ],
  media: {
    youtube: "",
  },
  contact: {
    email: "nabrynskif@gmail.com",
    bookingUrl: "",
  },
};

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const byId = (id) => document.getElementById(id);

function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}

function setHref(id, href) {
  const el = byId(id);
  if (el) el.href = href;
}

function setButtonLabel(id, label, ariaLabel) {
  const el = byId(id);
  if (!el) return;
  el.textContent = label;
  if (ariaLabel) {
    el.setAttribute("aria-label", ariaLabel);
  }
}

function getBrandMark(name, explicitMark) {
  if (explicitMark && explicitMark.trim()) return explicitMark.trim().slice(0, 4).toUpperCase();
  const initials = (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
  return initials || "AA";
}

function fillIsbnList(target, values) {
  target.innerHTML = "";
  if (!Array.isArray(values) || values.length === 0) {
    const line = document.createElement("p");
    line.textContent = "Not listed";
    target.append(line);
    return;
  }
  values.forEach((isbn) => {
    const line = document.createElement("p");
    line.textContent = isbn;
    target.append(line);
  });
}

function formatPublisherLine(book) {
  const parts = [];
  if (book.publisher) parts.push(book.publisher);
  if (book.year) parts.push(book.year);
  if (book.pages) parts.push(`${book.pages} pages`);
  return parts.join(" • ") || "Publication details not listed.";
}

function parseYouTubeId(raw) {
  if (!raw || !raw.trim()) return null;
  const source = raw.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(source)) {
    return source;
  }

  try {
    const url = new URL(source);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return /^[a-zA-Z0-9_-]{11}$/.test(id || "") ? id : null;
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname === "/watch") {
        const id = url.searchParams.get("v");
        return /^[a-zA-Z0-9_-]{11}$/.test(id || "") ? id : null;
      }
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts") {
        const id = parts[1];
        return /^[a-zA-Z0-9_-]{11}$/.test(id || "") ? id : null;
      }
    }
  } catch (error) {
    const matched = source.match(/([a-zA-Z0-9_-]{11})/);
    return matched ? matched[1] : null;
  }

  return null;
}

function attachImageFallbacks(root = document) {
  const images = root.querySelectorAll("img[data-fallback]");
  images.forEach((img) => {
    const shell = img.closest(".image-shell");
    const fallbackLabel = img.getAttribute("data-fallback") || "Image unavailable";

    const applyFallback = () => {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";
      if (shell) {
        shell.classList.add("is-fallback");
        shell.setAttribute("data-fallback-label", fallbackLabel);
      }
      img.alt = fallbackLabel;
      img.src = TRANSPARENT_PIXEL;
    };

    img.addEventListener("error", applyFallback, { once: true });
    if (!img.getAttribute("src")) {
      applyFallback();
    } else if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    }
  });
}

function renderBooks() {
  const track = byId("book-track");
  if (!track) return;
  track.innerHTML = "";

  SITE.books.forEach((book) => {
    const card = document.createElement("article");
    card.className = `book-card${book.featured ? " featured" : ""}`;

    const coverShell = document.createElement("div");
    coverShell.className = "image-shell cover-shell";

    const cover = document.createElement("img");
    cover.src = book.coverUrl || "";
    cover.alt = `${book.title} cover`;
    cover.loading = "lazy";
    cover.decoding = "async";
    cover.referrerPolicy = "no-referrer";
    cover.setAttribute("data-fallback", `${book.title} cover unavailable`);
    coverShell.append(cover);

    const content = document.createElement("div");
    content.className = "book-content";

    const title = document.createElement("h3");
    title.textContent = book.title || "Untitled";

    const subtitle = document.createElement("p");
    subtitle.className = "book-meta";
    subtitle.textContent = `Subtitle: ${book.subtitle || "None listed"}`;

    const publication = document.createElement("p");
    publication.className = "book-meta";
    publication.textContent = formatPublisherLine(book);

    const isbnLine = document.createElement("p");
    isbnLine.className = "book-meta";
    isbnLine.textContent = Array.isArray(book.isbns) && book.isbns.length
      ? `ISBNs: ${book.isbns.join(", ")}`
      : "ISBNs: Not listed";

    content.append(title, subtitle, publication, isbnLine);

    if (book.buyUrl) {
      const buy = document.createElement("a");
      buy.className = "text-link";
      buy.href = book.buyUrl;
      buy.target = "_blank";
      buy.rel = "noopener";
      buy.textContent = "Buy link";
      buy.setAttribute("aria-label", `Buy ${book.title}`);
      content.append(buy);
    } else {
      const comingSoon = document.createElement("span");
      comingSoon.className = "text-link muted";
      comingSoon.textContent = "Buy link: Coming soon";
      content.append(comingSoon);
    }

    card.append(coverShell, content);
    track.append(card);
  });
}

function applyBooksLayoutMode() {
  const booksSection = document.querySelector(".books");
  const carousel = document.querySelector(".carousel");
  const viewport = byId("books-viewport");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const isSingleBook = Array.isArray(SITE.books) && SITE.books.length <= 1;

  if (booksSection) booksSection.classList.toggle("single-book", isSingleBook);
  if (carousel) carousel.classList.toggle("single-book", isSingleBook);

  if (prevBtn && nextBtn) {
    prevBtn.hidden = isSingleBook;
    nextBtn.hidden = isSingleBook;
    if (isSingleBook) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
    }
  }

  if (viewport) {
    viewport.tabIndex = isSingleBook ? -1 : 0;
    viewport.setAttribute(
      "aria-label",
      isSingleBook ? "Book details" : "Scrollable list of books"
    );
  }
}

function setupMedia() {
  const shell = byId("media-shell");
  const fallback = byId("media-fallback");
  if (!shell || !fallback) return;

  const videoId = parseYouTubeId(SITE.media.youtube);
  if (!videoId) {
    fallback.textContent = `Trailer coming soon: ${SITE.featured.title}`;
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  iframe.title = `${SITE.featured.title} trailer`;
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  shell.append(iframe);
  fallback.remove();
}

function setupCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const viewport = carousel.querySelector(".carousel-viewport");
  const track = carousel.querySelector(".book-track");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");

  if (!viewport || !track || !prevBtn || !nextBtn) return;
  if (track.querySelectorAll(".book-card").length <= 1) return;

  const getStep = () => {
    const card = track.querySelector(".book-card");
    if (!card) return viewport.clientWidth;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    return Math.ceil(card.getBoundingClientRect().width + gap);
  };

  const updateButtons = () => {
    const maxLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth - 1);
    prevBtn.disabled = viewport.scrollLeft <= 0;
    nextBtn.disabled = viewport.scrollLeft >= maxLeft;
  };

  prevBtn.addEventListener("click", () => {
    viewport.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    viewport.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      viewport.scrollBy({ left: -getStep(), behavior: "smooth" });
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      viewport.scrollBy({ left: getStep(), behavior: "smooth" });
    }
    if (event.key === "Home") {
      event.preventDefault();
      viewport.scrollTo({ left: 0, behavior: "smooth" });
    }
    if (event.key === "End") {
      event.preventDefault();
      viewport.scrollTo({ left: viewport.scrollWidth, behavior: "smooth" });
    }
  });

  viewport.addEventListener("scroll", () => window.requestAnimationFrame(updateButtons), {
    passive: true,
  });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}

function setupNavigationState() {
  const header = document.querySelector(".site-header");
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      if (!id) return null;
      const section = document.querySelector(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (sections.length === 0) return;

  const setActive = (targetId) => {
    sections.forEach(({ link }) => {
      const isActive = link.getAttribute("href") === targetId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const top = visible[0].target;
      const active = sections.find(({ section }) => section === top);
      if (active) {
        setActive(`#${active.section.id}`);
      }
    },
    {
      root: null,
      threshold: [0.35, 0.55, 0.75],
      rootMargin: "-22% 0px -46% 0px",
    }
  );

  sections.forEach(({ section }) => observer.observe(section));
  setActive("");
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function populatePage() {
  const description = `${SITE.featured.title}: ${SITE.featured.description}`;
  const brandMark = getBrandMark(SITE.author.name, SITE.author.brandMark);

  document.title = `${SITE.author.name} | Author`;
  const descriptionMeta = byId("meta-description");
  if (descriptionMeta) descriptionMeta.setAttribute("content", description);
  const ogTitle = byId("meta-og-title");
  if (ogTitle) ogTitle.setAttribute("content", document.title);
  const ogDescription = byId("meta-og-description");
  if (ogDescription) ogDescription.setAttribute("content", description);
  const ogImage = byId("meta-og-image");
  if (ogImage) ogImage.setAttribute("content", SITE.featured.coverUrl || "");

  setText("brand-mark", brandMark);
  setText("brand-name", SITE.author.name);
  setText("brand-sub", SITE.author.subtitleLine);
  setText("hero-signature", SITE.author.name);
  setText("author-tagline", SITE.author.shortTagline);
  setText("featured-title", SITE.featured.title);
  setText("featured-subtitle", `Subtitle: ${SITE.featured.subtitle || "None listed"}`);
  setText("featured-description", SITE.featured.description);
  setText("featured-card-title", SITE.author.name);
  setText("featured-card-blurb", "Author");
  setText("author-location", SITE.author.location);
  setText("about-name", SITE.author.name);
  setText("about-tagline", SITE.author.shortTagline);
  setText("about-bio", SITE.author.longBio);
  setText("about-location", `Location: ${SITE.author.location}`);
  const bookCount = Array.isArray(SITE.books) ? SITE.books.length : 0;
  const singleBookTitle = SITE.books?.[0]?.title || SITE.featured.title;
  setText("books-heading", bookCount <= 1 ? "Published Book" : "Books & Collections");
  setText(
    "books-subtitle",
    bookCount <= 1
      ? `Currently published: ${singleBookTitle}.`
      : "Editorial catalog of published and forthcoming titles."
  );
  setText("contact-copy", `For inquiries and press, contact ${SITE.author.name}.`);
  setText("footer-name", SITE.author.name);
  setText("footer-location", SITE.author.location);

  const featuredCover = byId("featured-cover");
  if (featuredCover) {
    featuredCover.src = SITE.author.headshotUrl || SITE.featured.coverUrl || "";
    featuredCover.alt = `${SITE.author.name} portrait`;
    featuredCover.setAttribute("data-fallback", `${SITE.author.name} portrait unavailable`);
  }

  const headshot = byId("author-headshot");
  if (headshot) {
    headshot.src = SITE.author.headshotUrl || "";
    headshot.alt = `${SITE.author.name} headshot`;
    headshot.setAttribute("data-fallback", `${SITE.author.name} photo unavailable`);
  }

  const featuredIsbns = byId("featured-isbns");
  if (featuredIsbns) fillIsbnList(featuredIsbns, SITE.featured.isbns);

  setHref("header-buy-cta", SITE.featured.buyUrl || "#");
  setHref("hero-buy-cta", SITE.featured.buyUrl || "#");
  setButtonLabel("header-buy-cta", "Buy Now", `Buy ${SITE.featured.title}`);
  setButtonLabel("hero-buy-cta", "Buy on Store", `Buy ${SITE.featured.title}`);

  const emailLink = byId("contact-email");
  if (emailLink) {
    emailLink.textContent = SITE.contact.email;
    emailLink.href = `mailto:${SITE.contact.email}`;
  }
  const utilityEmail = byId("utility-email");
  if (utilityEmail) {
    utilityEmail.textContent = `Email: ${SITE.contact.email}`;
    utilityEmail.href = `mailto:${SITE.contact.email}`;
  }

  const bookingLink = byId("contact-booking");
  const hasBooking = Boolean(SITE.contact.bookingUrl && SITE.contact.bookingUrl.trim());
  setText("contact-heading", hasBooking ? "Bookings & Press" : "Contact");
  if (bookingLink) {
    if (hasBooking) {
      bookingLink.href = SITE.contact.bookingUrl;
      bookingLink.hidden = false;
    } else {
      bookingLink.remove();
    }
  }
}

function setCurrentYear() {
  const yearEl = byId("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

populatePage();
renderBooks();
applyBooksLayoutMode();
setupMedia();
attachImageFallbacks();
setupCarousel();
setupNavigationState();
setCurrentYear();
