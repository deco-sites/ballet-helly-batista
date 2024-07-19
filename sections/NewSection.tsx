
import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  primaryColor?: string;
  /**
   * @format color-input
   */
  secondaryColor?: string;
  weekdays: string[];
  events: {
    day: number;
    time: string;
    title: string;
    /**
     * @format color-input
     */
    color?: string;
  }[];
}

export default function Calendar({
  title = "Ballerina School Monthly",
  description = "Check our monthly schedule",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  primaryColor = "#f472b6",
  secondaryColor = "#c026d3",
  weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  events = [
    { day: 1, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
    { day: 1, time: "12:00 PM", title: "Modern", color: "#c026d3" },
    { day: 2, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
    { day: 2, time: "2:00 PM", title: "Modern", color: "#c026d3" },
    { day: 3, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
    { day: 4, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
    { day: 4, time: "2:00 PM", title: "Modern", color: "#c026d3" },
    { day: 5, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
    { day: 6, time: "10:00 AM", title: "Modern", color: "#c026d3" },
    { day: 7, time: "10:00 AM", title: "Ballet", color: "#f472b6" },
  ],
}: Props) {
  return (
    <div class="bg-white py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h2>
        <p class="text-lg md:text-xl mb-8 text-center">{description}</p>
        <img
          src={image}
          alt="Calendar"
          class="w-full h-64 md:h-96 object-cover object-center rounded-xl shadow-lg mb-8"
        />
        <div class="grid grid-cols-7 gap-4">
          {weekdays.map((day) => (
            <div
              class="bg-gray-100 rounded-lg shadow-md p-4 text-center"
              style={{ color: primaryColor }}
            >
              <h3 class="text-lg font-bold">{day}</h3>
            </div>
          ))}
        </div>
        <div class="grid grid-cols-7 gap-4 mt-4">
          {events.map((event) => (
            <div
              class={`rounded-lg shadow-md p-4 text-center ${
                event.day === 1
                  ? "col-start-1"
                  : event.day === 2
                  ? "col-start-2"
                  : event.day === 3
                  ? "col-start-3"
                  : event.day === 4
                  ? "col-start