// src/utils/GenerateSlug.ts
function GenerateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

export {
  GenerateSlug
};
