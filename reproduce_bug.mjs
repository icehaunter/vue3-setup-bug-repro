import fs from "fs";
import t from "timers";

const fname = "./src/components/HelloWorld.vue";

const updateFile = (fname, add = true) => {
  const file = fs.readFileSync(fname, { flag: "r" });

  const replace = add ? 'lang="ts">\n' : 'lang="ts">\n\n';
  const replace_with = !add ? 'lang="ts">\n' : 'lang="ts">\n\n';

  const updated = file.toString().replace(replace, replace_with);

  fs.writeFileSync(fname, updated);
};

const sleep = (n) => new Promise((r) => t.setTimeout(r, n));

const runner = async () => {
  for (const _ of Array(500)) {
    updateFile(fname, true);
    updateFile(fname, false);
    await sleep(0.2);
  }
};

runner();
