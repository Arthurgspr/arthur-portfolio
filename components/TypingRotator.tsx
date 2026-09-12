"use client";

import { useEffect, useState } from "react";

interface TypingRotatorProps {
  roles: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

/**
 * Alterna entre os cargos de Arthur digitando e apagando o texto.
 * A velocidade é intencionalmente moderada (respeitando prefers-reduced-motion).
 */
export default function TypingRotator({
  roles,
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseMs = 1800,
}: TypingRotatorProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(roles[0] ?? "");
      return;
    }

    const currentRole = roles[roleIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < currentRole.length) {
        timeout = setTimeout(
          () => setText(currentRole.slice(0, text.length + 1)),
          typingSpeedMs
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pauseMs / 3);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentRole.slice(0, text.length - 1)),
          deletingSpeedMs
        );
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles, typingSpeedMs, deletingSpeedMs, pauseMs, reducedMotion]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient font-medium">{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1.1em] w-[2px] bg-accent-green/80 animate-pulse"
      />
    </span>
  );
}
