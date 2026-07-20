import type { I18nKey } from "@/lib/i18n/dictionary"

export type CvEntry = {
  titleKey: I18nKey
  metaKey: I18nKey
}

export const experience: CvEntry[] = [
  { titleKey: "cv.job1.title", metaKey: "cv.job1.meta" },
  { titleKey: "cv.job3.title", metaKey: "cv.job3.meta" },
  { titleKey: "cv.job4.title", metaKey: "cv.job4.meta" },
]

export type StatBadge = {
  valueKey: I18nKey
  labelKey: I18nKey
}

export const stats: StatBadge[] = [
  { valueKey: "cv.stat1.value", labelKey: "cv.stat1.label" },
  { valueKey: "cv.stat2.value", labelKey: "cv.stat2.label" },
  { valueKey: "cv.stat3.value", labelKey: "cv.stat3.label" },
]
