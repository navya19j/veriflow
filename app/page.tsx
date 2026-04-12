"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { VeriflowLockup, VeriflowMark } from "@/components/veriflow-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const heroStats = [
  {
    label: "U.S. food recalls tied to label errors in 2024",
    value: "$1.92B",
  },
  {
    label: "Share tied to undeclared allergens",
    value: "84%",
  },
];

const problemPoints = [
  {
    title: "Undeclared allergens",
    detail:
      "The #1 driver of Class I recalls — immediate consumer safety risk and mandatory market withdrawal.",
  },
  {
    title: "Wrong net weight declarations",
    detail:
      "Inaccurate quantity statements trigger regulatory action and customer chargebacks.",
  },
  {
    title: "Missing nutrition or regulatory fields",
    detail:
      "Incomplete labeling blocks distribution in regulated markets and invites audit findings.",
  },
];

const workflowSteps = [
  {
    title: "Scan",
    description:
      "Capture label images from a mobile or tablet device, or connect directly to line cameras and sensors already in place.",
    badge: "01",
  },
  {
    title: "Extract",
    description:
      "Veriflow extracts 37+ structured fields — identity, nutrition, allergens, weight, and lot data — in seconds.",
    badge: "02",
  },
  {
    title: "Validate",
    description:
      "A rules engine checks every field against compliance requirements for FDA, FSSAI, and other regulated frameworks — updated in real time as guidelines change.",
    badge: "03",
  },
  {
    title: "Decide",
    description:
      "Operators receive an immediate pass or fail decision before mislabeled product moves downstream.",
    badge: "04",
  },
  {
    title: "Log",
    description:
      "Every event is stored with image evidence, structured data, timestamps, and operator context for audit-ready traceability.",
    badge: "05",
  },
];

const features = [
  {
    title: "Label Inspection",
    description:
      "Inspect what is physically on pack — not what was intended in a template or ERP record.",
    icon: InspectionIcon,
  },
  {
    title: "Pre-Run Verification",
    description:
      "Confirm the first labels on the line match the SKU, region, allergen profile, and lot configuration before full production begins.",
    icon: ShieldIcon,
  },
  {
    title: "Line Clearance (BRCGS)",
    description:
      "Support changeovers with image-backed verification that prior-run labels and materials are fully cleared.",
    icon: ClearanceIcon,
  },
  {
    title: "Audit Logs",
    description:
      "Keep a durable, immutable record of every pass, fail, override, and image for QA, compliance, and customer reviews.",
    icon: LogIcon,
  },
  {
    title: "Dashboard & Analytics",
    description:
      "Track recurring failure modes, line-level trends, and compliance performance across facilities and shifts.",
    icon: DashboardIcon,
  },
  {
    title: "Multi-Region Compliance",
    description:
      "Apply rulesets for U.S., India, and other regulated markets without rebuilding workflows for each region.",
    icon: GlobeIcon,
  },
];

const marketGaps = [
  {
    title: "Hardware vision systems",
    detail:
      "Expensive deployments ($30K–$150K), complex setup, rigid change management, and long implementation cycles.",
    icon: HardwareIcon,
  },
  {
    title: "Compliance software",
    detail:
      "Strong for documentation and workflows, but it does not verify the physical label actually leaving the line.",
    icon: DocIcon,
  },
  {
    title: "ERP and label creation tools",
    detail:
      "Useful for print orchestration and template management, but not for confirming the right label is on the right product.",
    icon: ErpIcon,
  },
];

const credibilityPoints = [
  {
    value: "37+",
    label: "Fields extracted",
    detail: "Product identity, nutrition, allergens, weight, lot, and packaging details",
  },
  {
    value: "50+",
    label: "Compliance rules",
    detail: "Configurable checks mapped to FDA, FSSAI, and regulated manufacturing workflows",
  },
  {
    value: "SQLite",
    label: "Local audit logs",
    detail: "Durable, local-first audit trail with image evidence and structured data",
  },
];

const apiIntegrations = [
  { name: "FDA FoodData Central", description: "Nutrient and ingredient verification" },
  { name: "FSSAI API", description: "India food standards compliance" },
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
});

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.10),transparent)] text-slate-950">

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-40 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a
            href="#"
            aria-label="Veriflow home"
            className="flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-md"
          >
            <VeriflowLockup size="md" />
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-md md:flex">
            <a href="#how-it-works" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100">
              How It Works
            </a>
            <a href="#features" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100">
              Features
            </a>
            <a href="#technology" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100">
              Technology
            </a>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button size="default" className="shadow-md shadow-blue-600/20" asChild>
              <a href="#demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 pb-16 pt-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.07)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-20">
            <motion.div {...fadeIn} className="space-y-8 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold tracking-[0.15em] text-blue-700 uppercase">
                  Compliance + inspection layer for regulated manufacturing
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-950 lg:text-6xl leading-[1.05]">
                  Catch label errors<br />
                  <span className="text-blue-600">before they become recalls</span>
                </h1>
                <p className="text-lg leading-8 text-slate-600 max-w-xl">
                  Veriflow verifies product labels at the production line — so manufacturers can stop non-compliant product before it reaches distribution.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="shadow-lg shadow-blue-600/20 h-13 px-7" asChild>
                  <a href="#demo">
                    Request Demo
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-13 px-7" asChild>
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>

              <div className="flex items-center gap-5 pt-1">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon className="h-4 w-4 text-emerald-500" />
                  No hardware required
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon className="h-4 w-4 text-emerald-500" />
                  FDA + FSSAI ready
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon className="h-4 w-4 text-emerald-500" />
                  Works without wifi
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <Card className="border-slate-900/80 bg-slate-950 text-white overflow-hidden">
                <CardContent className="space-y-5 p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      2024 Recall Signal
                    </p>
                    <div className="rounded-full bg-red-500/15 px-2.5 py-1 text-xs font-medium text-red-400">
                      High risk
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5"
                      >
                        <p className="text-4xl font-semibold tracking-tight text-white">{stat.value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-slate-400 border-t border-white/[0.06] pt-4">
                    Label errors remain the most expensive preventable failure mode in food manufacturing. Veriflow puts verification at the line, where operators can still act.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-3">
                {credibilityPoints.slice(0, 3).map((pt) => (
                  <div
                    key={pt.value}
                    className="rounded-2xl border border-slate-200/80 bg-blue-50/60 p-4 text-center"
                  >
                    <p className="text-2xl font-semibold text-slate-950">{pt.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{pt.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Problem ── */}
        <motion.section {...fadeIn} className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-slate-200/80 bg-white/90">
            <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
              <div className="space-y-5">
                <SectionEyebrow label="The Problem" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 leading-tight">
                  Existing systems know what should ship. They don&apos;t verify what actually goes out the door.
                </h2>
                <p className="text-base leading-7 text-slate-600">
                  Fast-moving lines and manual checks are a reliable recipe for mislabeled product reaching distribution — and a recall notice weeks later.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500 mb-3">Common failure modes</p>
                <div className="space-y-2">
                  {["Undeclared allergens", "Wrong net weight", "Missing regulatory fields", "Incorrect lot / date codes"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            {problemPoints.map((point, index) => (
              <motion.div key={point.title} {...stagger(index)}>
                <Card className="border-slate-200/80 bg-white/90 hover:-translate-y-0.5 transition-transform duration-300">
                  <CardContent className="flex items-start gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-50 border border-red-100 text-sm font-bold text-red-500">
                      0{index + 1}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-slate-950">{point.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{point.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── How It Works ── */}
        <motion.section id="how-it-works" {...fadeIn} className="space-y-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3 max-w-xl">
              <SectionEyebrow label="How It Works" />
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A five-step verification layer for real production environments
              </h2>
            </div>
            <p className="text-sm leading-6 text-slate-500 max-w-xs">
              Designed to run at the line — not as a back-office compliance tool.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <motion.div key={step.title} {...stagger(index)}>
                <Card className="h-full border-slate-200/80 bg-white/90 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(37,99,235,0.10)]">
                  <CardContent className="flex h-full flex-col gap-6 p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-[0.18em] text-blue-700 uppercase">
                        {step.badge}
                      </span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Features ── */}
        <motion.section id="features" {...fadeIn} className="space-y-7">
          <div className="max-w-2xl space-y-3">
            <SectionEyebrow label="Capabilities" />
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Purpose-built for QA, operations, and compliance teams
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Each workflow reduces manual inspection load while improving the evidence trail behind every production decision.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} {...stagger(index)}>
                  <Card className="h-full border-slate-200/80 bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]">
                    <CardContent className="flex h-full flex-col gap-5 p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100/80 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2.5">
                        <h3 className="text-base font-semibold text-slate-950">{feature.title}</h3>
                        <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Positioning ── */}
        <motion.section {...fadeIn} className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="border-slate-900/80 bg-slate-950 text-white overflow-hidden">
            <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
              <div className="space-y-5">
                <SectionEyebrow label="Market Positioning" dark />
                <h2 className="text-3xl font-semibold tracking-tight leading-tight">
                  Veriflow verifies the label on the product — at the moment it matters.
                </h2>
                <p className="text-base leading-7 text-slate-400">
                  The market is split between hardware-heavy inspection systems and documentation software. Manufacturers still need a practical layer that verifies finished goods in motion.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                <p className="text-sm text-blue-300 font-medium">
                  &ldquo;Most recalls aren&apos;t caught at the line — they&apos;re caught by a customer, a retailer, or the FDA.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            {marketGaps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...stagger(index)}>
                  <Card className="border-slate-200/80 bg-white/90">
                    <CardContent className="flex items-start gap-5 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 text-slate-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                        <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            <Card className="border-blue-200/80 bg-blue-600 text-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <TargetIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Veriflow fills the gap</p>
                  <p className="text-sm leading-6 text-blue-100">Line-side verification — no expensive hardware, no documentation-only limitations.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* ── Tech Credibility ── */}
        <motion.section id="technology" {...fadeIn}>
          <Card className="overflow-hidden border-slate-200/80 bg-white/90">
            <CardContent className="flex flex-col gap-6 p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <SectionEyebrow label="Technical Credibility" />
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                      Built for industrial reliability, not demo-day optics
                    </h2>
                    <p className="text-base leading-7 text-slate-600">
                      Runs close to the line with structured validation, durable traceability, and integrations built around real compliance workflows.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">API Integrations</p>
                    <div className="flex flex-col gap-2">
                      {apiIntegrations.map((api) => (
                        <div key={api.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <span className="text-sm font-medium text-slate-950">{api.name}</span>
                          <span className="text-xs text-slate-500">{api.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 content-start">
                  {credibilityPoints.map((pt, index) => (
                    <motion.div key={pt.value} {...stagger(index)}>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 h-full">
                        <p className="text-3xl font-semibold tracking-tight text-slate-950">{pt.value}</p>
                        <p className="mt-1 text-sm font-medium text-blue-600">{pt.label}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">{pt.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── On-device callout ── */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-7 lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.25),transparent_60%)]" />
                <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <WifiOffIcon className="h-5 w-5 text-blue-400" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">On-Device AI — Add-on</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Works where wifi doesn&apos;t
                    </h3>
                    <p className="text-sm leading-6 text-slate-400 max-w-2xl">
                      Factory floors, cold storage, and remote production lines often have spotty or zero connectivity. Veriflow&apos;s on-device mode runs the full AI extraction and compliance check locally — no cloud dependency, no dropped inspections. Audit logs sync automatically when the connection returns.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 lg:items-end">
                    {["Full AI extraction, on-device", "Local SQLite audit logs", "Auto-syncs when online"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckIcon className="h-4 w-4 text-blue-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.section>

        {/* ── Demo Form ── */}
        <motion.section id="demo" {...fadeIn}>
          <Card className="overflow-hidden border-slate-200/80 bg-white/90">
            <CardContent className="grid gap-10 p-8 lg:grid-cols-[1fr_1fr] lg:p-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <SectionEyebrow label="Request a Demo" />
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                    See Veriflow on your production line
                  </h2>
                  <p className="text-base leading-7 text-slate-600">
                    We&apos;ll walk you through a live inspection workflow tailored to your SKUs, compliance region, and existing line setup — no hardware required.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: CheckIcon, text: "30-minute walkthrough, no sales pressure" },
                    { icon: CheckIcon, text: "Live label scan against your compliance rules" },
                    { icon: CheckIcon, text: "Works with your existing cameras or a phone" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                        <Icon className="h-3 w-3" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <DemoForm />
            </CardContent>
          </Card>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section {...fadeIn}>
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.20)] sm:px-10 lg:px-14 lg:py-18">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.30),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.15),transparent_55%)]" />
            <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-5 max-w-xl">
                <SectionEyebrow label="Get Started" dark />
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-[1.05]">
                  Stop recalls<br />before they start
                </h2>
                <p className="text-base leading-7 text-slate-400">
                  Bring verification closer to the line. Reduce recall exposure and give QA teams a faster way to act on label risk before product ships.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="h-13 px-8 bg-white text-slate-950 hover:bg-slate-100 shadow-lg" asChild>
                    <a href="#demo">
                      Request Demo
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="ghost" className="h-13 px-8 text-slate-300 hover:text-white hover:bg-white/10 border border-white/15" asChild>
                    <a href="#how-it-works">See How It Works</a>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  {["No setup fee", "30-day pilot", "Dedicated onboarding"].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckIcon className="h-3.5 w-3.5 text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Footer ── */}
        <footer className="mt-4 border-t border-slate-200/80 pt-8 pb-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <VeriflowMark size={32} className="shadow-md shadow-blue-600/20" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Veriflow</p>
                <p className="text-xs text-slate-500">Compliance verification for production lines</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>© 2026 Veriflow</span>
              <span className="text-slate-400">Privacy</span>
              <span className="text-slate-400">Terms</span>
              <span className="text-slate-400">Contact</span>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Demo Form
───────────────────────────────────────────── */

function DemoForm() {
  const [fields, setFields] = useState({
    name: "", email: "", company: "", role: "",
    skus: "", current_process: "", message: "",
  });
  const [regions, setRegions] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleRegion = (r: string) =>
    setRegions((prev) => prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mjgjbvwd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, compliance_regions: regions.join(", ") }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-10 text-center h-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-7 w-7" />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-950">Request received</p>
          <p className="text-sm leading-6 text-slate-600">
            We&apos;ll reach out within one business day to schedule your walkthrough.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Full name <span className="text-red-400">*</span></label>
          <input name="name" required value={fields.name} onChange={update} placeholder="Jane Smith" className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Work email <span className="text-red-400">*</span></label>
          <input name="email" type="email" required value={fields.email} onChange={update} placeholder="jane@company.com" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Company <span className="text-red-400">*</span></label>
          <input name="company" required value={fields.company} onChange={update} placeholder="Acme Foods" className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Role</label>
          <select name="role" value={fields.role} onChange={update} className={inputCls}>
            <option value="">Select role</option>
            <option>QA Manager</option>
            <option>Operations Manager</option>
            <option>Compliance Officer</option>
            <option>Plant Manager</option>
            <option>CTO / Engineering</option>
            <option>Founder / CEO</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Number of SKUs</label>
          <select name="skus" value={fields.skus} onChange={update} className={inputCls}>
            <option value="">Select range</option>
            <option value="<50">&lt;50</option>
            <option value="50–200">50–200</option>
            <option value="200+">200+</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Current label verification</label>
          <select name="current_process" value={fields.current_process} onChange={update} className={inputCls}>
            <option value="">Select process</option>
            <option>Manual checks</option>
            <option>Vision system</option>
            <option>ERP only</option>
            <option>No process</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-600">Compliance region <span className="text-slate-400 font-normal">(select all that apply)</span></label>
        <div className="flex flex-wrap gap-2">
          {["FDA", "FSSAI", "Both", "Other"].map((r) => {
            const active = regions.includes(r);
            return (
              <button
                key={r}
                type="button"
                onClick={() => toggleRegion(r)}
                className={[
                  "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-150",
                  active
                    ? "border-blue-500 bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
                ].join(" ")}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-600">What would you like to verify? <span className="text-slate-400 font-normal">(optional)</span></label>
        <textarea
          name="message"
          value={fields.message}
          onChange={update}
          rows={3}
          placeholder="e.g. allergen labels for FDA, BRCGS line clearance, net weight declarations..."
          className={inputCls + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-sm text-red-600">
          Something went wrong — please email us directly at hello@veriflow.com
        </p>
      )}
      <Button
        size="lg"
        type="submit"
        className="mt-1 w-full shadow-lg shadow-blue-600/20"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Request Demo"}
        {status !== "loading" && <ArrowRightIcon className="ml-2 h-4 w-4" />}
      </Button>
      <p className="text-center text-xs text-slate-400">No commitment. Responds within 1 business day.</p>
    </form>
  );
}

/* ─────────────────────────────────────────────
   Reusable UI components
───────────────────────────────────────────── */

function SectionEyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={[
        "inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]",
        dark
          ? "border border-white/10 bg-white/[0.07] text-blue-300"
          : "border border-blue-100 bg-blue-50 text-blue-700",
      ].join(" ")}
    >
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Icons
───────────────────────────────────────────── */

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function InspectionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
      <path d="M8 11h6M11 8v6" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3 5 6v5c0 4.5 2.9 8.7 7 10 4.1-1.3 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClearanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M8 10h8M8 14h5" />
      <path d="M16 2v4M8 2v4" />
    </svg>
  );
}

function LogIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function HardwareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15h6M9 11h6M9 7h3" />
    </svg>
  );
}

function ErpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

function WifiOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="2" y1="2" x2="22" y2="22" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
      <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
      <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
      <path d="M5 13a10 10 0 0 1 5.24-2.76" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
}
