export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Ano atual, usado no copyright dinâmico do rodapé. */
export function currentYear(): number {
  return new Date().getFullYear();
}
