export type Option = { label: string; emoji?: string };

export const recipients: Option[] = [
  { label: "Namorada", emoji: "💗" },
  { label: "Esposa", emoji: "💍" },
  { label: "Namorado", emoji: "💙" },
  { label: "Marido", emoji: "🤵" },
  { label: "Mãe", emoji: "🌷" },
  { label: "Pai", emoji: "🧔" },
  { label: "Vó", emoji: "👵" },
  { label: "Vô", emoji: "👴" },
  { label: "Irmã", emoji: "👧" },
  { label: "Irmão", emoji: "👦" },
  { label: "Filha", emoji: "🎀" },
  { label: "Filho", emoji: "🧸" },
  { label: "Amiga", emoji: "🤝" },
  { label: "Amigo", emoji: "🙌" },
  { label: "Chefe", emoji: "💼" },
  { label: "Eu mesmo", emoji: "🙂" },
  { label: "Outro", emoji: "✨" },
];

export const relationsMale = ["Esposo", "Filho", "Namorado", "Amigo", "Pai", "Neto", "Irmão"];
export const relationsFemale = ["Esposa", "Filha", "Namorada", "Amiga", "Mãe", "Neta", "Irmã"];

export const occasions: Option[] = [
  { label: "Dia das Crianças", emoji: "🧒" },
  { label: "Declaração de Amor", emoji: "💌" },
  { label: "Aniversário", emoji: "🎂" },
  { label: "Homenagem", emoji: "🏅" },
  { label: "Surpresa", emoji: "🎁" },
  { label: "Aniversário de Casamento", emoji: "💍" },
  { label: "Pedido de Namoro", emoji: "🌹" },
  { label: "Pedido de Casamento", emoji: "💐" },
  { label: "Nascimento", emoji: "👶" },
  { label: "Chá Revelação", emoji: "🎈" },
  { label: "Aniversário de Namoro", emoji: "❤️" },
  { label: "Política", emoji: "🗳️" },
  { label: "Reconciliação", emoji: "🕊️" },
  { label: "Formatura", emoji: "🎓" },
  { label: "Feliz Natal", emoji: "🎄" },
  { label: "Feliz Ano Novo", emoji: "🎆" },
  { label: "Dia das Mães", emoji: "👩" },
  { label: "Dia dos Namorados", emoji: "💕" },
  { label: "Dia dos Pais", emoji: "👨" },
  { label: "Outro", emoji: "✨" },
];

export const genres = [
  "Sertanejo",
  "Forró",
  "Arrocha",
  "Pagode",
  "Pop",
  "Romântica",
  "Gospel",
  "MPB",
  "Samba",
  "Xote",
  "Funk",
  "Bossa Nova",
  "Rock",
  "Hip Hop",
  "Eletrônica",
];

export const moods: Option[] = [
  { label: "Alegre", emoji: "😄" },
  { label: "Emocionante", emoji: "🥹" },
  { label: "Energética", emoji: "⚡" },
  { label: "Nostálgica", emoji: "🕰️" },
  { label: "Calma", emoji: "🌙" },
];

export const storyPrompts = [
  "Algo que ele fez e você nunca esqueceu",
  "Uma lição que ele te ensinou",
  "O que quer agradecer?",
];

export const SURPRISE = "Não sei — escolham por mim";

export type WizardData = {
  recipient: string;
  recipientName: string;
  myRelation: string;
  occasion: string;
  story: string;
  moments: string;
  genre: string;
  mood: string;
  nameInSong: string;
  specialPhrase: string;
  whatsapp: string;
};

export const initialData: WizardData = {
  recipient: "",
  recipientName: "",
  myRelation: "",
  occasion: "",
  story: "",
  moments: "",
  genre: "",
  mood: "",
  nameInSong: "",
  specialPhrase: "",
  whatsapp: "",
};

export function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^55/, "").slice(0, 11);
  if (!digits) return "";
  const ddd = digits.slice(0, 2);
  const first = digits.slice(2, 7);
  const last = digits.slice(7, 11);
  let out = `+55 (${ddd}`;
  if (digits.length > 2) out += `) ${first}`;
  if (digits.length > 7) out += `-${last}`;
  return out;
}
