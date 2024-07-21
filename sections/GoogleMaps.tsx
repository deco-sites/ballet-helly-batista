
import { HTMLWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format html
   */
  iframeCode?: HTMLWidget;
}

export default function GoogleMaps({
  iframeCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2445072349656!2d-42.80324992428075!3d-5.0640725514265155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3999867a609d:0x1d041b3368963600!2sR.20Parente202683 - FA1tC Teresina 2C 64049-544!5e0!3m2!1spt-BR!2sbr!4v1721593508268!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
}: Props) {
  return (
    <div class="flex flex-col items-center justify-center">
      <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 pb-10">Google Maps Widget</h2>
      <div class="w-full h-full" dangerouslySetInnerHTML={{ __html: iframeCode }} />
    </div>
  );
}
