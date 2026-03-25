import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Daniel Santiago Guzman",
  initials: "DSG",
  url: "https://github.com/danielguzman01",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description:
    "Business Analytics Graduate Student at UW Foster | Turning complex data into strategic decisions that drive measurable business impact.",
  summary:
    "I'm a MS Business Analytics candidate at the **University of Washington Foster School of Business** (GPA: 3.85, Top 10%) with 3+ years of experience transforming data into business strategy. I've built ML models that identified **847 vulnerabilities across 50K+ endpoints**, generated **$672K in incremental revenue** through territory optimization, and automated reporting pipelines that save **1,200+ work hours annually**. My work spans predictive modeling, causal inference, and business intelligence — always focused on the question that matters most: *what should we do next?*",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Postgresql },
    { name: "R", icon: null },
    { name: "Tableau", icon: null },
    { name: "Power BI", icon: null },
    { name: "XGBoost", icon: null },
    { name: "Random Forest", icon: null },
    { name: "K-means", icon: null },
    { name: "ARIMA", icon: null },
    { name: "Prophet", icon: null },
    { name: "LSTM", icon: null },
    { name: "A/B Testing", icon: null },
    { name: "DiD", icon: null },
    { name: "Synthetic Control", icon: null },
    { name: "IPW", icon: null },
    { name: "Double ML", icon: null },
    { name: "Fine-Tuning", icon: null },
    { name: "RAG", icon: null },
    { name: "Prompt Engineering", icon: null },
    { name: "OpenAI API", icon: null },
    { name: "AWS", icon: null },
    { name: "Databricks", icon: null },
    { name: "Git/GitHub", icon: null },
    { name: "ETL Pipelines", icon: null },
    { name: "Plotly", icon: null },
    { name: "Seaborn", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "danielsantiagoguzman@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danielguzman01/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/danielguzman01",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:danielsantiagoguzman@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Re-Systems Group Americas",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Business Data Analyst",
      logoUrl: "",
      start: "May 2024",
      end: "Present",
      description:
        "Reduced executive reporting cycles from 5 days to 4 hours by building 28-KPI dashboards (Tableau, Power BI) across $3.45M in projects. Built an ML vendor risk model (Random Forest) on 75K+ transactions to proactively flag supply chain risks. Automated ETL pipelines processing 2M+ daily records, cutting manual data prep by 65% (Python, PostgreSQL). Improved on-time delivery to 94% across 150+ projects.",
    },
    {
      company: "PC Connection, Inc.",
      badges: [],
      href: "https://www.connection.com/",
      location: "Remote",
      title: "Business Solutions Analyst",
      logoUrl: "",
      start: "Apr 2023",
      end: "May 2024",
      description:
        "Built an anomaly detection system (XGBoost) identifying 847 vulnerabilities across 50K+ endpoints, reducing incident response time from 72 to 8 hours. Generated $672K in incremental revenue via K-means territory optimization on 125K+ customer accounts. Saved 1,200+ annual work hours by automating 47 reports processing 3M+ monthly transactions. Recovered $428K in enterprise software waste through license optimization.",
    },
    {
      company: "Total Quality Logistics",
      href: "https://www.tql.com/",
      badges: [],
      location: "Cincinnati, OH",
      title: "Logistics Operations Analyst",
      logoUrl: "",
      start: "Jul 2022",
      end: "Mar 2023",
      description:
        "Generated $363K in annual savings from 100K+ shipping route analysis using K-means clustering, PCA, and Power BI. Improved on-time delivery from 71% to 94% across 6 distribution centers. Supported $520K in contract savings via automated carrier scorecards for 200+ vendors (VBA, SQL).",
    },
  ],
  education: [
    {
      school: "University of Washington, Foster School of Business",
      href: "https://foster.uw.edu/",
      degree: "MS Business Analytics | GPA: 3.85/4.0 (Top 10%) | Expected June 2026",
      logoUrl: "",
      start: "2025",
      end: "2026",
    },
    {
      school: "University of Minnesota",
      href: "https://twin-cities.umn.edu/",
      degree: "BS Economics | Minor: Management & Statistics | May 2022",
      logoUrl: "",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "A/B Testing — Digital Marketing Campaign",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** Do display ads actually drive conversions across 576K users? Designed a randomized controlled trial with ITT/ATT analysis and segmentation by user type and geography. **Impact:** Identified a 2.2% conversion lift in inactive users (89% of the base) and a 3.67% lift in non-American users — recommending targeted spend reallocation to improve ROI.",
      technologies: [
        "Python",
        "SciPy",
        "statsmodels",
        "pandas",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Geo-Experiment — Local Search Advertising ROI",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** Was Google Maps advertising actually driving incremental store visits across 200 US markets? Applied Difference-in-Differences and Synthetic Control methods across 200 DMAs, controlling for market characteristics. **Impact:** Proved naive last-click attribution dramatically overstated ROI — enabling accurate multi-million dollar budget reallocation.",
      technologies: [
        "Python",
        "DiD",
        "Synthetic Control",
        "statsmodels",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Predictive Modeling — Mobile Ad Click-Through Rate",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** Which ad impressions are actually worth buying? Built CART and XGBoost models on 80K+ impression-level observations to forecast click-through rate. **Impact:** Recommended targeting the top 5K impressions for a 5.5x ROI versus the untargeted baseline.",
      technologies: [
        "Python",
        "XGBoost",
        "CART",
        "pandas",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "LLM Fine-Tuning — Customer Service Classifier",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** How do you automate routing and escalation of customer service tickets at scale? Fine-tuned GPT-4.1-mini on 67 curated examples to generate structured JSON outputs with issue tags and safety flags. **Impact:** Significantly improved classification accuracy and escalation detection versus prompt engineering alone.",
      technologies: [
        "Python",
        "OpenAI API",
        "pandas",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RAG-Based Recommendation System",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** How do consulting teams find relevant past solutions without reading thousands of documents? Built an end-to-end RAG system using GPT-4 to semantically search 3 years of project documentation. **Impact:** 65% resolution rate on standard queries, sub-3-minute response time, reduced hallucinations versus plain LLM baseline.",
      technologies: [
        "Python",
        "OpenAI API",
        "NLTK",
        "RAG",
        "Embeddings",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Causal Inference Methods Evaluation",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "**Business Problem:** Can we trust observational data to make attribution decisions worth millions? Compared IPW, Double ML, and adjusted regression against experimental ground truth on a 2M-user advertising dataset. **Impact:** Double ML achieved 83% accuracy while naive attribution overestimated lift by 148% — a critical finding for ad spend decisions.",
      technologies: [
        "Python",
        "scikit-learn",
        "statsmodels",
        "IPW",
        "Double ML",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      title: "DataCamp SQL Associate",
      issuer: "DataCamp",
      date: "2024",
      status: "Completed" as const,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      status: "In Progress" as const,
    },
    {
      title: "Power BI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      status: "Completed" as const,
    },
    {
      title: "MIT Sloan Sports Analytics Competition Finalist",
      issuer: "MIT Sloan — Top 3 Global, 2026",
      date: "2026",
      status: "Honored" as const,
    },
    {
      title: "Culture Corps Scholarship",
      issuer: "University of Minnesota",
      date: "2022",
      status: "Honored" as const,
    },
    {
      title: "Tony Diggs Excellence Awards — Outstanding Collaboration",
      issuer: "PC Connection, Inc.",
      date: "2024",
      status: "Honored" as const,
    },
  ],
} as const;
