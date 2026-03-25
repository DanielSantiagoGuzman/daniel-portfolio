import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Certifications & Honors
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.certifications.map((cert, idx) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 14 + idx * 0.05}
            >
              <div className="border rounded-xl p-4 flex flex-col gap-2 hover:ring-2 hover:ring-primary/30 transition-all duration-200">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-sm leading-tight">
                    {cert.title}
                  </h3>
                  <Badge
                    variant={cert.status === "Completed" ? "default" : "outline"}
                    className="text-[11px] shrink-0"
                  >
                    {cert.status === "Completed"
                      ? "✅"
                      : cert.status === "In Progress"
                        ? "🔄 In Progress"
                        : "🏆"}
                  </Badge>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
