import { defineNuxtPlugin } from "#imports";
import { vTooltipInstall } from "maz-ui";
export default defineNuxtPlugin(({ vueApp, $config }) => {
  const installVTooltip = $config.public.mazUi?.installVTooltip;
  const options = typeof installVTooltip === "object" ? installVTooltip : void 0;
  vueApp.use(vTooltipInstall, options);
});
