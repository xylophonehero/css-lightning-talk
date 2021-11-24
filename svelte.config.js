import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import sveltePreprocess from "svelte-preprocess"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],
}
