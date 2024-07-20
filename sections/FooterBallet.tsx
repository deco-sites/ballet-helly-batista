
import type { HTMLWidget } from "apps/admin/widgets.ts";

interface FooterProps {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   * @description The address of the business
   */
  address?: string;
  /**
   * @description The phone number of the business
   */
  phone?: string;
  /**
   * @description The opening hours of the business
   */
  hours?: string;
  /**
   * @widget ImageWidget
   * @description The Instagram feed images
   */
  instagramImages?: HTMLWidget;
  /**
   * @format rich-text
   * @description The latest news titles
   */
  news?: HTMLWidget;
}

export default function Footer({
  title = "CONTACT & FOLLOW US",
  address = "186 North Collins Street, Chicago",
  phone = "(847)704-4427",
  hours = "Mon - Sat 8:00 - 19:00",
  instagramImages = '<div class="grid grid-cols-3 gap-2"><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" class="w-full" /></div>',
  news = '<div class="space-y-2"><p>Charming body language</p><p>Today may be just like</p><p>Rhythm, mind & footstep</p></div>',
}: FooterProps) {
  return (
    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">{title}</h3>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{hours}</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">INSTAGRAM</h3>
            <div dangerouslySetInnerHTML={{ __html: instagramImages }} />
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">LATEST NEWS</h3>
            <div dangerouslySetInnerHTML={{ __html: news }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
