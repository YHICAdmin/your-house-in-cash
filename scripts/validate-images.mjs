import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const imagesDirectory = join(process.cwd(), "public", "images");
const expectedSignatures = {
  ".jpg": [0xff, 0xd8, 0xff],
  ".png": [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
};

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  }));
  return files.flat();
}

const failures = [];

for (const file of await filesIn(imagesDirectory)) {
  const extension = file.slice(file.lastIndexOf(".")).toLowerCase();
  const signature = expectedSignatures[extension];
  if (!signature) continue;

  const contents = await readFile(file);
  if (!signature.every((byte, index) => contents[index] === byte)) {
    failures.push(file.replace(`${process.cwd()}\\`, ""));
  }
}

if (failures.length) {
  console.error(`Invalid raster image file(s):\n${failures.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log("All JPEG and PNG assets have valid file signatures.");
}
