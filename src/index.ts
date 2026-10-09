import { readConfig, setUser } from "./config";
function main() {
  setUser("Jeremy");
  const cfg = readConfig();
  console.log(cfg);
}

main();
