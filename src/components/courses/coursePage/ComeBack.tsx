import Link from "next/link"
import ArrowLeft from "@/components/icons/ArrowLeft"
import css from '@/app/[locale]/courses/[course]/page.module.css'
import { useLocale, useTranslations } from "next-intl";

const ComeBackLink = ()=> {
    const t = useTranslations("Courses")
    const locale = useLocale()
    return (
<Link href={`/${locale}/#courses`} className={css.link}>
<ArrowLeft />
<p className={css.link__text}>{t("comeBack")}</p>
</Link>
    )
};

export default ComeBackLink;

