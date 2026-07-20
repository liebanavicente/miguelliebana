import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import type { I18nKey } from "@/lib/i18n/dictionary"

const VARIANT_BY_KEY: Partial<Record<I18nKey, string>> = {
  "status.saas": "status--green",
  "status.activo": "status--activo",
  "status.destacado": "status--destacado",
  "status.dev": "status--beta",
  "status.beta": "status--beta",
}

export function StatusBadge({ statusKey }: { statusKey: I18nKey }) {
  const { t } = useLanguage()
  return <span className={cn("status", VARIANT_BY_KEY[statusKey])}>{t(statusKey)}</span>
}
