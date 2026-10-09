"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Autocomplete, type Suggestion } from "@/components/ui/autocomplete";
import styles from "./blog-index-navigation.module.css";

type Topic = { name: string; slug: string };

export function BlogIndexNavigation({ topics }: { topics: Topic[] }) {
  const searchId = useId();
  const router = useRouter();
  const [query, setQuery] = useState("");

  async function search(query: string): Promise<Suggestion[]> {
    const normalizedQuery = query.toLowerCase();
    return topics
      .filter(topic => topic.name.toLowerCase().includes(normalizedQuery))
      .map(topic => ({
        id: topic.slug,
        label: topic.name,
        value: topic.name,
      }));
  }

  return (
    <nav className={styles.navigation} aria-label="Blog navigation">
      <div className={styles.search}>
        <label className="visually-hidden" htmlFor={searchId}>Search topics</label>
        <Search className={styles.searchIcon} size={20} aria-hidden="true" focusable="false" />
        <Autocomplete
          id={searchId}
          className={`${styles.control} text-body`}
          placeholder="Search topics"
          autoComplete="off"
          value={query}
          onValueChange={setQuery}
          search={search}
          minLength={1}
          delay={150}
          limit={5}
          loadingMessage="Searching topics…"
          emptyMessage="No matching topics found."
          onSuggestionSelect={topic => router.push(`/blog/${topic.id}`)}
        />
      </div>
      <div className={styles.topicSelect}>
        <label className="visually-hidden" htmlFor="blog-topic">Browse topics</label>
        <select id="blog-topic" className={`${styles.control} text-body`} defaultValue="" onChange={event => {
          if (event.target.value) router.push(`/blog/${event.target.value}`);
        }}>
          <option value="">All topics</option>
          {topics.map(topic => <option key={topic.slug} value={topic.slug}>{topic.name}</option>)}
        </select>
      </div>
    </nav>
  );
}
