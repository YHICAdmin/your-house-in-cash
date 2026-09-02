"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone as PhoneIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./site-header.module.css";

const navigationItems = [
  "How It Works",
  "Situations",
  "Areas We Buy In",
  "Reviews",
  "FAQ",
  "About Us",
];

const closeDuration = 180;
const phoneNumber = "216-111-1111";
const phoneHref = "tel:2161111111";

type PhoneContactProps = {
  placement: "header" | "menu";
};

function PhoneContact({ placement }: PhoneContactProps) {
  return (
    <a
      className={`${styles.phoneContact} ${
        placement === "header" ? styles.headerPhoneContact : styles.menuPhoneContact
      }`}
      href={phoneHref}
    >
      <PhoneIcon className={styles.phoneIcon} aria-hidden="true" />
      <span className={styles.phoneLabel}>Call Us</span>
      <span className={styles.phoneDivider} aria-hidden="true" />
      <span className={styles.phoneNumber}>{phoneNumber}</span>
    </a>
  );
}

export function SiteHeader() {
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const animationFrameRef = useRef<number>(null);

  const closeMenu = useCallback((returnFocus = false, immediately = false) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsMenuOpen(false);

    if (returnFocus) {
      toggleRef.current?.focus();
    }

    const shouldUnmountImmediately =
      immediately || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldUnmountImmediately) {
      setIsMenuRendered(false);
      return;
    }

    closeTimerRef.current = setTimeout(() => {
      setIsMenuRendered(false);
    }, closeDuration);
  }, []);

  const openMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setIsMenuRendered(true);
    animationFrameRef.current = requestAnimationFrame(() => {
      setIsMenuOpen(true);
    });
  };

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 0);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    firstMenuItemRef.current?.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuRendered) {
      return;
    }

    const pageContent = document.getElementById("site-content");
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    if (pageContent) {
      pageContent.inert = true;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (pageContent) {
        pageContent.inert = false;
      }
    };
  }, [isMenuRendered]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !headerRef.current) {
        return;
      }

      const focusableElements = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1200px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu(false, true);
      }
    };

    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [closeMenu]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} system-lines-bg${isScrolled ? ` ${styles.scrolled}` : ""}`}
    >
      <div className={styles.inner}>
        <Link className={styles.logoLink} href="/" aria-label="Your House in Cash home">
          <Image
            className={styles.logo}
            src="/brand/Logo.svg"
            alt="Your House in Cash"
            width={5423}
            height={3534}
            priority
          />
        </Link>

        <nav className={styles.desktopNavigation} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <PhoneContact placement="header" />
          <span className={styles.headerCta}>
            <Button href="/get-cash-offer">Get My Cash Offer</Button>
          </span>
          <button
            ref={toggleRef}
            className={styles.menuToggle}
            type="button"
            aria-controls="responsive-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {isMenuRendered ? (
        <div
          id="responsive-navigation"
          className={`${styles.menuPanel}${isMenuOpen ? ` ${styles.menuPanelOpen}` : ""}`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className={styles.menuContent}>
            <nav className={styles.menuNavigation} aria-label="Menu navigation">
              {navigationItems.map((item, index) => (
                <a
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  href="#"
                  key={item}
                  onClick={() => closeMenu()}
                >
                  {item}
                </a>
              ))}
            </nav>
            <PhoneContact placement="menu" />
            <div className={styles.menuCta}>
              <Button href="/get-cash-offer">Get My Cash Offer</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
