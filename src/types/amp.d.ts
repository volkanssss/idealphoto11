
// Type declarations for AMP HTML elements (cleaned)
declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src: string;
      width: string;
      height: string;
      alt?: string;
      layout?: string;
    }, HTMLElement>;
  }
}
