"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "@/lib/schema";
import { en, type Dict } from "./en";
import { nl } from "./nl";

const DICTS: Record<Language, Dict> = { en, nl };
const STORAGE_KEY = "boc:lang";

type I18nValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof Dict) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // Deferred a tick: avoids a synchronous setState cascade in the effect
    // body while staying SSR-safe (localStorage is browser-only).
    const id = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "nl") {
          setLangState(stored);
        } else if (navigator.language?.toLowerCase().startsWith("nl")) {
          setLangState("nl");
        }
      } catch {
        // private mode etc. — keep default
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore quota/private-mode errors
    }
  }, []);

  const t = useCallback((key: keyof Dict) => DICTS[lang][key] ?? en[key], [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  return useContext(I18nContext);
}

export type { Dict };
