import { useId } from "../../sdk/useId.ts";

export interface Props {
  alerts?: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
}

function Alert({ alerts = [] }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <ul class="flex items-center py-5 justify-center  w-screen bg-primary text-neutral text-xs lg:text-sm/4">
        {alerts.map((alert, index) => (
          <li
            key={index}
            class={`text-neutral font-medium lg:h-4 w-1/${alerts.length} px-5 first:border-r-2 first:border-r-neutral `}
          >
            <span
              class=" text-center text-xs"
              dangerouslySetInnerHTML={{ __html: alert }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alert;
