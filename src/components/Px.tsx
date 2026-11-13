import { ART } from '../pxArt'

/** A drawing from px.py (see src/pxArt.ts), placed as inline SVG so the house stylesheet can style and animate it. */
export default function Px({ name }: { name: string }) {
  return <span className="px" dangerouslySetInnerHTML={{ __html: ART[name] }} />
}
