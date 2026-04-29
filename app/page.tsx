import React from "react";

const links = {
  resume: "/images/Eric_Han_Resume.pdf",
  email: "mailto:erichanx1226@gmail.com?subject=Portfolio Inquiry&body=Hi Eric, I saw your portfolio and wanted to reach out.",
  linkedin: "https://www.linkedin.com/in/eric-han-2004-/"
};

const projects = [
  {
    title: "Brain Matrix",
    tag: "Biomedical CAD • MRI-to-STL • 3D Printing",
    summary:
      "Designed and 3D printed a mold with pre-cut slicing channels along the axial length for dissection of 12-week-old pig brains.",
    tools: ["3D Slicer", "Autodesk Fusion", "3D Printing", "Prototyping"],
    highlights: [
      "Developed a workflow in 3D Slicer to convert MRI scans into usable STL CAD files.",
      "Created a mesh block and extruded slot geometry in Autodesk Fusion.",
      "Printed two prototype iterations and planned resin printing for improved precision."
    ],
    images: ["/images/matrix1.jpg", "/images/matrix2.jpg"]
  },
  {
    title: "Industrial Powder Coat Rack",
    tag: "Mechanical Design • Manufacturing • FEA",
    summary:
      "Designed and deployed a rack assembly for an industrial powder-coating line to improve loading time, space efficiency, and system mobility.",
    tools: ["Autodesk Inventor", "AutoCAD", "Finite Element Analysis (FEA)", "Manufacturing", "Part Tracking & Vendor Coordination"],
    highlights: [
      "Designed around a 500°F oven environment, ~800 lbf loading, and conveyor compatibility.",
      "Validated structural integrity using FEA with a 1.5× factor of safety.",
      "Generated AutoCAD production drawings for laser cutting and fabrication workflows."
    ],
    images: ["/images/rack1.png", "/images/rack2.png"]
  },
  {
    title: "MAqCI Design",
    tag: "Microfluidics • Photomask Design • AutoCAD",
    summary:
      "Designed a multi-layer photomask for a MAqCI device, resolving micron-scale channel spacing and functional constraints through iterative design.",
    tools: ["AutoCAD", "Microfluidics", "Photomask Design"],
    highlights: [
      "Designed a chip intended to extract large amounts of information from a small biomass sample.",
      "Developed 200+ 400-µm-long, 10-µm-tall Y-channels at a 65-degree bifurcation angle.",
      "Modified geometry into a manufacturable two-layer mask with alignment-error compensation."
    ],
    images: ["/images/maqci1.png", "/images/maqci2.png"]
  },
  {
    title: "Dumbbell Press Machine",
    tag: "Product Design • SolidWorks • Manufacturing Drawings",
    summary:
      "Designed a complete system to support the dumbbell press exercise, from concept development to final product proposal presentation.",
    tools: ["SolidWorks", "Assembly", "Manufacturing Drawings"],
    highlights: [
      "Iterated through concept sketches and team-based design revisions.",
      "Sized structural members, selected materials, and identified off-the-shelf components.",
      "Produced manufacturing drawings, exploded views, renderings, and a final design report."
    ],
    images: ["/images/bench1.png", "/images/bench2.png"]
  }
];

const skills = [
  "Mechanical Design",
  "CAD Modeling",
  "FEA",
  "Manufacturing Drawings",
  "Design for Manufacturing",
  "Prototyping",
  "3D Printing",
  "Microfluidics",
  "Inventor",
  "AutoCAD",
  "SolidWorks",
  "Fusion 360",
  "3D Slicer",
  "Excel",
  "ISO 9001:2015"
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,.20), transparent 35%), radial-gradient(circle at 80% 20%, rgba(168,85,247,.18), transparent 30%), #0b1120",
    color: "#e5e7eb",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif"
  },
  shell: { maxWidth: "1180px", margin: "0 auto", padding: "28px 24px 70px" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "70px" },
  navLinks: { display: "flex", gap: "22px", fontSize: "14px" },
  link: { color: "#cbd5e1", textDecoration: "none" },
  hero: { display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "36px", alignItems: "center" },
  eyebrow: {
    display: "inline-block",
    padding: "8px 12px",
    border: "1px solid rgba(34,211,238,.25)",
    borderRadius: "999px",
    background: "rgba(34,211,238,.08)",
    color: "#67e8f9",
    fontSize: "13px",
    marginBottom: "20px"
  },
  title: { fontSize: "clamp(42px, 7vw, 76px)", lineHeight: "0.95", letterSpacing: "-0.055em", margin: 0, color: "white" },
  subtitle: { fontSize: "18px", lineHeight: "1.7", color: "#cbd5e1", maxWidth: "680px", marginTop: "24px" },
  buttons: { display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "30px" },
  primaryButton: {
    display: "inline-block",
    padding: "13px 18px",
    borderRadius: "16px",
    background: "#22d3ee",
    color: "#07111f",
    fontWeight: 700,
    textDecoration: "none"
  },
  ghostButton: {
    display: "inline-block",
    padding: "13px 18px",
    borderRadius: "16px",
    border: "1px solid rgba(148,163,184,.35)",
    color: "white",
    textDecoration: "none",
    background: "rgba(255,255,255,.04)"
  },
  heroCard: {
    border: "1px solid rgba(148,163,184,.22)",
    background: "rgba(15,23,42,.72)",
    backdropFilter: "blur(16px)",
    borderRadius: "28px",
    padding: "24px",
    boxShadow: "0 24px 70px rgba(0,0,0,.35)"
  },
  stat: { padding: "18px", borderRadius: "20px", background: "rgba(2,6,23,.65)", border: "1px solid rgba(148,163,184,.15)", marginBottom: "12px" },
  statBig: { color: "#67e8f9", fontSize: "24px", fontWeight: 800, marginBottom: "4px" },
  statSmall: { color: "#94a3b8", fontSize: "14px", lineHeight: "1.5" },
  section: { marginTop: "90px" },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "end", gap: "24px", marginBottom: "28px" },
  sectionTitle: { fontSize: "38px", color: "white", margin: "8px 0 0", letterSpacing: "-0.035em" },
  sectionText: { color: "#94a3b8", maxWidth: "560px", lineHeight: "1.7" },
  project: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    overflow: "hidden",
    borderRadius: "28px",
    border: "1px solid rgba(148,163,184,.18)",
    background: "rgba(15,23,42,.78)",
    marginBottom: "24px",
    boxShadow: "0 18px 55px rgba(0,0,0,.25)"
  },
  projectVisual: { padding: "26px", background: "linear-gradient(135deg, rgba(15,23,42,.95), rgba(8,47,73,.75))" },
  projectBody: { padding: "30px" },
  imageGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "26px" },
  image: { width: "100%", height: "285px", objectFit: "cover", borderRadius: "18px", border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.06)" },
  tag: { color: "#67e8f9", fontSize: "14px", marginBottom: "10px" },
  projectTitle: { fontSize: "30px", color: "white", margin: "0 0 14px" },
  summary: { color: "#cbd5e1", fontSize: "16px", lineHeight: "1.7" },
  toolWrap: { display: "flex", flexWrap: "wrap", gap: "9px", marginTop: "16px" },
  tools: { display: "inline-block", padding: "9px 12px", borderRadius: "999px", background: "rgba(34,211,238,.09)", color: "#a5f3fc", fontSize: "13px", border: "1px solid rgba(34,211,238,.16)" },
  list: { marginTop: "22px", paddingLeft: "22px", color: "#94a3b8", lineHeight: "1.7", listStyleType: "disc" },
  skillWrap: { display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "24px" },
  skill: { padding: "9px 13px", borderRadius: "999px", border: "1px solid rgba(148,163,184,.25)", background: "rgba(15,23,42,.68)", color: "#dbeafe", fontSize: "14px" },
  contact: { marginTop: "90px", padding: "34px", borderRadius: "28px", background: "linear-gradient(135deg, rgba(34,211,238,.16), rgba(99,102,241,.14))", border: "1px solid rgba(34,211,238,.22)" }
};

export default function PortfolioWebsite() {
  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        <nav style={styles.nav}>
          <strong style={{ color: "white", letterSpacing: ".08em" }}>ERIC HAN</strong>
          <div style={styles.navLinks}>
            <a style={styles.link} href="#projects">Projects</a>
            <a style={styles.link} href="#skills">Skills</a>
            <a style={styles.link} href="#contact">Contact</a>
          </div>
        </nav>

        <section style={styles.hero}>
          <div>
            <span style={styles.eyebrow}>Mechanical & Aerospace Engineering Portfolio</span>
            <h1 style={styles.title}>CAD-driven mechanical design projects.</h1>
            <p style={styles.subtitle}>
              A project portfolio covering biomedical CAD, industrial manufacturing, microfluidic device design, product development, analysis, prototyping, and design documentation.
            </p>
            <div style={styles.buttons}>
              <a href="#projects" style={styles.primaryButton}>View Projects ↗</a>
              <a href={links.resume} download style={styles.ghostButton}>Download Resume</a>
            </div>
          </div>

          <aside style={styles.heroCard}>
            <div style={styles.stat}>
              <div style={styles.statBig}>Design</div>
              <div style={styles.statSmall}>Mechanical systems developed from concept through CAD models and manufacturing documentation.</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statBig}>Prototype</div>
              <div style={styles.statSmall}>3D-printed, fabricated, assembled, and presentation-ready engineering outputs.</div>
            </div>
            <div style={{ ...styles.stat, marginBottom: 0 }}>
              <div style={styles.statBig}>Analyze</div>
              <div style={styles.statSmall}>FEA, engineering calculations, design constraints, and manufacturing tradeoffs.</div>
            </div>
          </aside>
        </section>

        <section id="projects" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={{ color: "#67e8f9", fontSize: "13px", letterSpacing: ".18em", textTransform: "uppercase" }}>Selected Work</div>
              <h2 style={styles.sectionTitle}>Engineering Projects</h2>
            </div>
            
          </div>

          {projects.map((project) => (
            <article key={project.title} style={styles.project}>
              <div style={styles.projectVisual}>
                <div style={styles.tag}>{project.tag}</div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.summary}>{project.summary}</p>
                <div style={styles.toolWrap}>
                  {project.tools.map((tool) => (
                    <span key={tool} style={styles.tools}>{tool}</span>
                  ))}
                </div>
                <div style={styles.imageGrid}>
                  {project.images.map((img) => (
                    <img key={img} src={img} alt={`${project.title} image`} style={styles.image} />
                  ))}
                </div>
              </div>

              <div style={styles.projectBody}>
                <h4 style={{ color: "white", fontSize: "18px", marginTop: 0 }}>Process Highlights</h4>
                <ul style={styles.list}>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section id="skills" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={{ color: "#67e8f9", fontSize: "13px", letterSpacing: ".18em", textTransform: "uppercase" }}>Toolbox</div>
              <h2 style={styles.sectionTitle}>Skills</h2>
            </div>
            <p style={styles.sectionText}>CAD modeling, manufacturing documentation, prototyping, design iteration, and analysis.</p>
          </div>
          <div style={styles.skillWrap}>
            {skills.map((skill) => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.contact}>
          <h2 style={{ ...styles.sectionTitle, marginTop: 0 }}>Contact</h2>
          <p style={styles.sectionText}>Interested in mechanical design, aerospace hardware, biomedical device design, manufacturing, CAD, analysis, and prototyping.</p>
          <div style={styles.buttons}>
            <a href={links.email} style={styles.primaryButton}>Email</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" style={styles.ghostButton}>LinkedIn</a>
            
          </div>
        </section>
      </div>
    </main>
  );
}
