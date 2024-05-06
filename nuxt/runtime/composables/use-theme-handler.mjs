import { useNuxtApp } from "#imports";
import { useThemeHandler as useThemeHandlerComposable } from "maz-ui";
export function useThemeHandler(options) {
  const { $config } = useNuxtApp();
  const themeHandlerOptions = $config.public.mazUi?.injectUseThemeHandler;
  const mergedOptions = typeof themeHandlerOptions === "object" ? { ...themeHandlerOptions, ...options } : { ...options };
  return useThemeHandlerComposable(mergedOptions);
}
