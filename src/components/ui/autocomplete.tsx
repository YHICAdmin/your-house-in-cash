"use client";

import { useEffect, useId, useRef, useState, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./autocomplete.module.css";

export type Suggestion = { id: string; label: string; value: string };
type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  value: string;
  onValueChange: (value: string) => void;
  search: (query: string, signal: AbortSignal) => Promise<Suggestion[]>;
  minLength: number;
  delay: number;
  limit: number;
  loadingMessage: string;
  emptyMessage: string;
  attribution?: ReactNode;
};

export function Autocomplete({ value, onValueChange, search, minLength, delay, limit, loadingMessage, emptyMessage, attribution, ...inputProps }: Props) {
  const listId = useId();
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const request = useRef<AbortController | null>(null);
  const generation = useRef(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<Suggestion[]>([]);
  const [active, setActive] = useState(-1);
  const [height, setHeight] = useState(0);

  function cancel() {
    generation.current++;
    if (timer.current) clearTimeout(timer.current);
    request.current?.abort();
  }
  function close() {
    cancel();
    setOpen(false);
    setActive(-1);
  }
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
    request.current?.abort();
  }, []);

  useEffect(() => {
    if (!open) return;
    function resize() {
      const viewport = window.visualViewport;
      const bottom = viewport ? viewport.height + viewport.offsetTop : window.innerHeight;
      setHeight(Math.max(0, bottom - (input.current?.getBoundingClientRect().bottom ?? 0)));
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", resize, true);
    window.visualViewport?.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("scroll", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", resize, true);
      window.visualViewport?.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("scroll", resize);
    };
  }, [open]);

  useEffect(() => {
    if (active >= 0) document.getElementById(listId + "-" + active)?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) {
        generation.current++;
        request.current?.abort();
        if (timer.current) clearTimeout(timer.current);
        setOpen(false);
        setActive(-1);
      }
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  function change(next: string) {
    cancel();
    onValueChange(next);
    setOptions([]);
    setActive(-1);
    setOpen(false);
    setLoading(false);
    if (next.trim().length < minLength) return;
    const current = generation.current;
    timer.current = setTimeout(async () => {
      const controller = new AbortController();
      request.current = controller;
      setLoading(true);
      setOpen(true);
      try {
        const results = await search(next, controller.signal);
        if (current !== generation.current || input.current?.value !== next) return;
        setOptions(results.slice(0, limit));
        setLoading(false);
      } catch {
        if (current === generation.current) {
          setOpen(false);
          setLoading(false);
        }
      }
    }, delay);
  }

  function select(option: Suggestion) {
    onValueChange(option.value);
    close();
    input.current?.focus();
  }

  const status = open ? loading ? loadingMessage : options.length ? "" : emptyMessage : "";
  return <div ref={root} className={styles.root} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  }}>
    <input {...inputProps} ref={input} value={value} role="combobox" aria-autocomplete="list"
      aria-expanded={open} aria-controls={open ? listId : undefined}
      aria-activedescendant={open && active >= 0 ? listId + "-" + active : undefined}
      onChange={event => change(event.target.value)}
      onKeyDown={event => {
        if (!open) return;
        if (event.key === "Escape") { event.preventDefault(); close(); }
        else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && options.length) {
          event.preventDefault();
          setActive(previous => event.key === "ArrowDown" ? Math.min(previous + 1, options.length - 1) : previous < 0 ? options.length - 1 : Math.max(0, previous - 1));
        } else if (event.key === "Enter" && active >= 0) { event.preventDefault(); select(options[active]); }
      }} />
    {open && <div className={styles.panel} style={{ maxHeight: height }}>
      <div className={styles.results}>
        {status && <p className={`text-body-small ${styles.message}`}>{status}</p>}
        <ul id={listId} role="listbox">
          {options.map((option, index) => <li id={listId + "-" + index} key={option.id}
            role="option" aria-selected={active === index} className={styles.option}
            onPointerDown={event => event.preventDefault()} onClick={() => select(option)}>{option.label}</li>)}
        </ul>
      </div>
      {attribution && <div className={`text-caption ${styles.attribution}`}>{attribution}</div>}
    </div>}
    <span role="status" className="visually-hidden">{status}</span>
  </div>;
}
