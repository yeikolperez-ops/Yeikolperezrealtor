module.exports = function (eleventyConfig) {
  // Todo lo que ya existe se copia tal cual, sin tocarlo
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("listings.html");
  eleventyConfig.addPassthroughCopy("videos.html");
  eleventyConfig.addPassthroughCopy("testimonios.html");
  eleventyConfig.addPassthroughCopy("clientes.html");
  eleventyConfig.addPassthroughCopy("blog.html");
  eleventyConfig.addPassthroughCopy("content/listings.json");
  eleventyConfig.addPassthroughCopy("content/testimonials.json");
  eleventyConfig.addPassthroughCopy("content/reviews.json");

  // Filtro para convertir datos a JSON válido dentro de plantillas
  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value === undefined ? "" : value);
  });

  // Colección de artículos del blog, ordenados del más nuevo al más viejo
  eleventyConfig.addCollection("blogPosts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("eleventy-src/blog/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "eleventy-src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
