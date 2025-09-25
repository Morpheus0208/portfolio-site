import { withBase } from '@utils/withBase';

export default function VsCodeIcon({ size = 24 }: { size?: number }) {
  return (
    <img
      src={withBase('images/skills/vscode.svg')}
      alt="VS Code"
      width={size}
      height={size}
      loading="lazy"
    />
  );
}
