
async function copy(src: string, dest: string) {
  const file = Bun.file(src);
  await Bun.write(dest, file);
}

await copy("index.html", "dist/index.html");

await Bun.build({
  entrypoints: ['src/index.tsx'],
  outdir: 'dist',
});

