from pathlib import Path

from docx import Document
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/Users/alia25/Downloads/The case for an independent Somali digital research institute.docx")
OUT = ROOT / "public" / "downloads" / "afka-founding-brief.pdf"
LOGO = ROOT / "public" / "images" / "afka-wordmark-black.png"

DEEP_TEAL = colors.HexColor("#0A5C6B")
MIST_BLUE = colors.HexColor("#C8E8ED")
CLOUD_WHITE = colors.HexColor("#F4F8F9")
DEEP_INK = colors.HexColor("#0D1F22")


def clean(text: str) -> str:
    replacements = {
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2013": "-",
        "\u2014": "-",
        "\u00a0": " ",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return " ".join(text.split())


def get_paragraphs() -> list[str]:
    doc = Document(str(SOURCE))
    return [clean(p.text) for p in doc.paragraphs if clean(p.text)]


SECTIONS = [
    ("The digital public sphere", "Somali digital life is visible, active, and consequential, but still weakly studied.", range(2, 7), "Somali public life is already digital. The work of understanding it is still catching up."),
    ("The Somali language sphere", "The proper frame is the Somali language sphere across the Horn and diaspora.", range(7, 10), "The unit of analysis cannot simply be the Somali state. It has to be the Somali language sphere."),
    ("Platforms as governors", "Platforms rank, recommend, remove, restrict, monetize, and govern visibility.", range(10, 13), None),
    ("Digital rights and public protection", "Rights questions are concrete: censorship, takedown pressure, harassment, surveillance, and manipulation.", range(13, 15), None),
    ("Language as infrastructure", "Somali moderation, AI, and platform analysis depend on language infrastructure that remains thin.", range(15, 22), "Language is not a small technical detail here. It is the material itself."),
    ("The research gap", "Without independent evidence, harms become incidents and patterns disappear.", range(22, 25), None),
    ("The creator economy and mobile money", "Somali digital ecosystems include money, media, politics, culture, family, religion, migration, and identity.", range(25, 28), None),
    ("Why an institute", "Afka's role is continuity, restraint, and institutional memory.", range(28, 36), "An institute is a form of memory."),
    ("Independence and method", "Independence is a working condition: evidence, limits, language knowledge, and ethical method.", range(36, 41), None),
    ("The work ahead", "The work is slow by design: archives, briefs, explainers, datasets, field notes, and usable evidence.", range(41, 43), None),
    ("Closing argument", "Somali digital life is too consequential to remain dependent on fragments.", range(43, 46), "The Somali-speaking world is already living inside platform power."),
]

QUICK_READ = [
    "Somali public life is already shaped by platforms, but continuous Somali research infrastructure is weak.",
    "The correct unit of analysis is not only the Somali state, but the Somali language sphere across the Horn and diaspora.",
    "Platform decisions affect speech, visibility, monetization, safety, moderation, and public knowledge.",
    "Somali remains under-resourced in AI, moderation, and language-specific analysis.",
    "The need is not another isolated study, but sustained institutional memory.",
    "Afka is being built to produce evidence, preserve memory, and make Somali digital life legible.",
]

SOURCES = [
    "DataReportal - Global Digital Insights",
    "WorldData.info",
    "Rift Valley Institute",
    "AP News",
    "Eu SEE and Hivos",
    "arXiv",
    "MediaWell",
    "Meta Oversight Board",
    "Google Help",
    "World Bank",
]


class AfkaDocTemplate(BaseDocTemplate):
    def __init__(self, filename: str):
        super().__init__(
            filename,
            pagesize=letter,
            leftMargin=0.85 * inch,
            rightMargin=0.85 * inch,
            topMargin=0.82 * inch,
            bottomMargin=0.78 * inch,
            title="Afka Digital Institute Founding Brief",
            author="Afka Digital Institute",
        )
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            id="normal",
        )
        self.addPageTemplates(
            [
                PageTemplate(id="cover", frames=frame, onPage=self.cover_page),
                PageTemplate(id="body", frames=frame, onPage=self.body_page),
            ]
        )

    def cover_page(self, canvas, doc):
        canvas.saveState()
        canvas.setFillColor(CLOUD_WHITE)
        canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)
        canvas.setFillColor(MIST_BLUE)
        canvas.rect(0, 0, letter[0], 1.35 * inch, fill=1, stroke=0)
        canvas.setStrokeColor(DEEP_TEAL)
        canvas.setLineWidth(1.2)
        canvas.line(0.85 * inch, 1.35 * inch, letter[0] - 0.85 * inch, 1.35 * inch)
        canvas.restoreState()

    def body_page(self, canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(colors.Color(10 / 255, 92 / 255, 107 / 255, alpha=0.2))
        canvas.setLineWidth(0.6)
        canvas.line(0.85 * inch, letter[1] - 0.48 * inch, letter[0] - 0.85 * inch, letter[1] - 0.48 * inch)
        canvas.setFillColor(DEEP_TEAL)
        canvas.setFont("Helvetica-Bold", 7.5)
        canvas.drawString(0.85 * inch, letter[1] - 0.36 * inch, "AFKA DIGITAL INSTITUTE · FOUNDING BRIEF")
        canvas.setFillColor(colors.Color(13 / 255, 31 / 255, 34 / 255, alpha=0.54))
        canvas.setFont("Helvetica", 8)
        canvas.drawRightString(letter[0] - 0.85 * inch, 0.44 * inch, str(doc.page))
        canvas.restoreState()


def build():
    paragraphs = get_paragraphs()
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            "AfkaTitle",
            fontName="Times-Roman",
            fontSize=35,
            leading=38,
            textColor=DEEP_INK,
            spaceAfter=18,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaSubtitle",
            fontName="Helvetica",
            fontSize=13,
            leading=21,
            textColor=colors.Color(13 / 255, 31 / 255, 34 / 255, alpha=0.72),
            spaceAfter=18,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaMeta",
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=12,
            textColor=DEEP_TEAL,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaH1",
            fontName="Times-Roman",
            fontSize=22,
            leading=26,
            textColor=DEEP_INK,
            spaceBefore=18,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaSummary",
            fontName="Helvetica",
            fontSize=10,
            leading=16,
            leftIndent=12,
            borderColor=DEEP_TEAL,
            borderWidth=0,
            borderPadding=0,
            textColor=colors.Color(13 / 255, 31 / 255, 34 / 255, alpha=0.68),
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaBody",
            fontName="Helvetica",
            fontSize=9.6,
            leading=15.2,
            textColor=colors.Color(13 / 255, 31 / 255, 34 / 255, alpha=0.78),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaPull",
            fontName="Times-Italic",
            fontSize=17,
            leading=22,
            textColor=DEEP_TEAL,
            leftIndent=14,
            rightIndent=14,
            spaceBefore=8,
            spaceAfter=14,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaTOC",
            fontName="Helvetica",
            fontSize=10.5,
            leading=16,
            textColor=DEEP_INK,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            "AfkaCenterMeta",
            parent=styles["AfkaMeta"],
            alignment=TA_CENTER,
        )
    )

    story = []
    story.append(Paragraph("AFKA DIGITAL INSTITUTE", styles["AfkaMeta"]))
    if LOGO.exists():
        img = Image(str(LOGO), width=1.45 * inch, height=0.58 * inch)
        story.append(img)
        story.append(Spacer(1, 0.5 * inch))
    story.append(Paragraph("Founding Brief · 2026", styles["AfkaMeta"]))
    story.append(Paragraph(paragraphs[0], styles["AfkaTitle"]))
    story.append(Paragraph(paragraphs[1], styles["AfkaSubtitle"]))
    story.append(Spacer(1, 1.4 * inch))
    story.append(Paragraph("A publication by Afka Digital Institute", styles["AfkaMeta"]))
    story.append(NextPageTemplate("body"))
    story.append(PageBreak())

    story.append(Paragraph("Brief in focus", styles["AfkaH1"]))
    story.append(
        ListFlowable(
            [ListItem(Paragraph(item, styles["AfkaBody"]), leftIndent=12) for item in QUICK_READ],
            bulletType="bullet",
            start="circle",
            leftIndent=18,
        )
    )
    story.append(Spacer(1, 0.18 * inch))
    story.append(Paragraph("Contents", styles["AfkaH1"]))
    for index, (title, summary, _, _) in enumerate(SECTIONS, start=1):
        story.append(Paragraph(f"{index:02d}  {title} - {summary}", styles["AfkaTOC"]))
    story.append(PageBreak())

    for index, (title, summary, indices, quote) in enumerate(SECTIONS, start=1):
        block = [
            Paragraph(f"{index:02d}", styles["AfkaMeta"]),
            Paragraph(title, styles["AfkaH1"]),
            Paragraph(summary, styles["AfkaSummary"]),
        ]
        story.append(KeepTogether(block))
        if quote:
            story.append(Paragraph(f'"{quote}"', styles["AfkaPull"]))
        for idx in indices:
            story.append(Paragraph(paragraphs[idx], styles["AfkaBody"]))

    story.append(PageBreak())
    story.append(Paragraph("Sources referenced in the brief", styles["AfkaH1"]))
    story.append(
        ListFlowable(
            [ListItem(Paragraph(source, styles["AfkaBody"]), leftIndent=12) for source in SOURCES],
            bulletType="bullet",
            leftIndent=18,
        )
    )
    story.append(Spacer(1, 0.28 * inch))
    story.append(Paragraph("Read the brief. Build the field.", styles["AfkaH1"]))
    story.append(
        Paragraph(
            "Afka Digital Institute is being built to produce evidence, preserve institutional memory, and make Somali digital life legible to the people and institutions making decisions about it.",
            styles["AfkaBody"],
        )
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = AfkaDocTemplate(str(OUT))
    doc.build(story)


if __name__ == "__main__":
    build()
