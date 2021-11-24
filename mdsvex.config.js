const config = {
  layout: {
    page: "./src/lib/PageLayout.svelte",
  },

  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
}

export default config
