"use client";
import { useEffect, useRef } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import styles from "./seller-form.module.css";
export function SellerSuccess({ name }: { name: string }) { const ref=useRef<HTMLHeadingElement>(null); useEffect(()=>{ref.current?.focus()},[]); const first=name.trim().split(/\s+/)[0]; return <div className={styles.success}><CircleCheck className={styles.successIcon} aria-hidden="true"/><div className={styles.successIntro}><h1 ref={ref} tabIndex={-1} className="text-heading-2">{first?`You’re all set, ${first}.`:"You’re all set."}</h1><p className="text-body">I’ve received your property details. I’ll review them and get in touch to learn more about your situation and discuss your options.</p></div><Button href="/">Back to home</Button><div className={styles.successPhone}><span>Prefer to talk now?</span><TextLink href="tel:2165109014">(216) 510-9014</TextLink></div></div>; }
