export const metadata = {\n  title: "Ideas from: Smart Contract Auditor AI",\n  description: "إليك تحليل الترند مع ثلاث أفكار SaaS قابلة للتنفيذ خلال 72 ساعة بصيغة JSON:

```json
[
  {
    title: Smart Contract Vulnerability Scanner,
    description: أداة تعتمد على الذكاء الاصطناعي لتحليل العقود الذكية واكتشاف الثغرات الأمنية المحتملة.,
    mvp_plan: تطوير نموذج أولي يقوم بتحليل كود العقد الذكي باستخدام مكتبة تحليلية مفتوحة المصدر، وإنتاج تقرير يوضح الثغرات المحتملة.
  },
  {
    title: Automated Compliance Checker for Smart Contracts,
    description: منصة تتحقق من توافق العقود الذكية مع اللوائح والقوانين المحلية والدولية.,
    mvp_plan: إنشاء واجهة بسيطة تسمح للمستخدمين بتحميل العقود الذكية، مع استخدام قواعد بيانات قانونية مفتوحة للتحقق من التوافق وإصدار تقرير.
  },
  {
    title: Smart Contract Audit Marketplace,
    description: سوق يربط بين مطوري العقود الذكية ومراجعي الأمان المستقلين لتقديم خدمات تدقيق العقود.,
    mvp_plan: بناء منصة بسيطة تتيح للمستخدمين نشر عقودهم الذكية وطلب تدقيق، مع توفير نظام تقييم للمراجعين.
  }
]
``` 

هذه الأفكار تستفيد من الترند الحالي في مجال العقود الذكية والأمان، ويمكن تنفيذها بسرعة باستخدام أدوات وتقنيات متاحة.",\n};\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}