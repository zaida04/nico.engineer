export interface ServicePreviewProps {
  name: string;
  description: string;
  date?: Date;
  tags: string[];
}

export default function ServicePreview(props: ServicePreviewProps) {
  return <div className="border-2 rounded-xl px-8 md:px-12 py-8 flex flex-col gap-1 justify-center">
    <h1 className="text-3xl md:text-4xl">{props.name}</h1>
    <div className="flex flex-wrap gap-1">
      {props.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
    </div>
    <p className="whitespace-pre-wrap text-sm md:text-lg">{props.description}</p>
  </div>
}

export function Tag(props: { children: string }) {
  return <p className="px-2 py-1 rounded-xl bg-black text-xs">{props.children}</p>
}