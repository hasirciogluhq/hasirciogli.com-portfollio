import * as React from "react"
import { cn } from "@/lib/utils"

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  // Arka planın ana rengini buraya props olarak geçirebilirsiniz
  // Bu, efektin daha dinamik görünmesine yardımcı olacaktır.
  // Örn: bg-blue-500 ise "blue" veya "var(--your-theme-color)"
  baseColor?: string;
}

const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ className, baseColor = 'white', ...props }, ref) => {
    // baseColor'ı kullanarak daha dinamik bir arka plan rengi oluşturma
    // Bu, Tailwind'in dinamik sınıfları direkt olarak almadığı için stil objesi kullanmayı gerektirebilir.
    // Gerçek bir Apple Liquid Glass efekti, arkadaki içeriğin renklerini örnekler.
    // Buradaki yaklaşım, verilen bir 'baseColor' etrafında dönüyor.
    const bgColorStyle = {
      // Daha derin ve dinamik bir etki için RGBA değerlerini kullanın
      // baseColor'ın RGB değerlerini manuel olarak ayarlamanız gerekebilir
      // veya bir renk dönüştürücü kullanabilirsiniz.
      backgroundColor: `rgba(var(--${baseColor}-rgb, 255, 255, 255), .03)`, // Hafif, temel renk
      // Alternatif olarak, bir gradient overlay ile daha zengin bir görünüm:
      // backgroundImage: `linear-gradient(135deg, rgba(var(--${baseColor}-rgb, 255,255,255),0.1) 0%, rgba(var(--${baseColor}-rgb, 255,255,255),0) 100%)`
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          "overflow-hidden", // Pseudo-elementlar için
          "backdrop-filter", // Tarayıcı desteği için ön ekler gerekebilir
          "backdrop-blur-3xl", // Daha güçlü blur
          "backdrop-saturate-150", // Canlılık katmanı
          "backdrop-brightness-110", // Parlaklık artışı
          "border",
          "border-white/[0.12]", // Daha belirgin ama hala şeffaf bir kenarlık
          "rounded-[14px]", // Apple standartı yuvarlaklık
          "shadow-xl",
          "shadow-black/[0.2]", // Daha derin bir gölge
          "p-4",
          // Dinamik renk için varsayılan bir Tailwind arka plan sınıfı
          // Eğer baseColor'ı dinamik olarak Tailwind sınıfı olarak geçirecekseniz
          // bu kısmı kullanabilirsiniz. Ancak RGBA ile daha kontrollü olur.
          // `bg-${baseColor}-50/[0.08]`,

          // Hover efektleri için hafif bir renk değişimi
          "transition-all duration-300 ease-out",
          "hover:border-white/[0.18]",
          "hover:shadow-black/[0.25]",

          // İç bir parlaklık efekti için after pseudo-element
          "after:content-['']",
          "after:absolute",
          "after:inset-0",
          "after:rounded-[inherit]", // Üst elementin köşelerini miras al
          "after:pointer-events-none",
          "after:bg-gradient-to-br",
          "after:from-white/[0.05]",
          "after:to-transparent",
          "after:opacity-0",
          "hover:after:opacity-100", // Hover'da parlaklık göster
          "after:transition-opacity duration-300 ease-out",

          className
        )}
        style={bgColorStyle} // Dinamik arka plan rengi için
        {...props}
      >
        {/* Buraya içeriğiniz gelecek */}
        {props.children}
      </div>
    )
  }
)

LiquidGlass.displayName = "LiquidGlass"

export { LiquidGlass }