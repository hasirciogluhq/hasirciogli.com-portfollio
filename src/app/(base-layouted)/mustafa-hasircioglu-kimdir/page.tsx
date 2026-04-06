import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { SectionBlock } from "@/components/layout/SectionBlock"

export default function MustafaKimdirPage() {
  return (
    <PageShell
      kicker="Biyografi"
      title="Mustafa Hasırcıoğlu kimdir?"
      description="Yazılım mühendisi ve kurucu; üretim ortamlarında çalışan, ölçeklenebilir backend ve altyapı sistemleri üzerine odaklanıyorum."
    >
      <SectionBlock>
        <div className="max-w-2xl space-y-4">
          <p className="ui-body text-base">
            Mustafa Hasırcıoğlu; Go, Kubernetes, dağıtık sistemler ve ödeme altyapıları konularında deneyimli bir yazılım
            mühendisidir. Ürünü uçtan uca sahiplenme, net iletişim ve uzun vadeli sürdürülebilir kod yaklaşımıyla çalışır.
          </p>
          <p className="ui-body">
            İzmir&apos;de yaşayıp uzaktan çalışmaktadır. MVP&apos;den ölçeğe kadar projelerde; mimari kararlar, gözlemlenebilirlik ve
            güvenli dağıtım süreçleriyle üretim kalitesini önceler.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
          >
            English About
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
          >
            İletişim
          </Link>
        </div>
      </SectionBlock>
    </PageShell>
  )
}
