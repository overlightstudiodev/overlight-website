import { getCollection, type CollectionEntry } from "astro:content";
import { entryLang, entrySlug, type Lang } from "../i18n";

export async function getSoftware(lang: Lang): Promise<CollectionEntry<"software">[]> {
  const all = await getCollection("software", (e) => entryLang(e.id) === lang && !e.data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getArticles(lang: Lang): Promise<CollectionEntry<"articles">[]> {
  const all = await getCollection("articles", (e) => entryLang(e.id) === lang && !e.data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Ada terjemahan entry ini di bahasa lain? */
export async function hasTranslation(collection: "software" | "articles", id: string): Promise<boolean> {
  const other = entryLang(id) === "id" ? "en" : "id";
  const all = await getCollection(collection);
  return all.some((e) => e.id === `${other}/${entrySlug(id)}`);
}
