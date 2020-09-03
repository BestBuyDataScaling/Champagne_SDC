import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "60s", target: 500 },
    { duration: "3m", target: 2000 },
    { duration: "1m", target: 250 },
  ],
  // ext: {
  //   loadimpact: {
  //     distribution: {
  //       "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
  //     },
  //   },
  // },
};

export default function main() {
  let response;

  // script here []
  response = http.get(
    "http://127.0.0.1:3001/products/Toy/Frozen/violet/Cheese"
  );

  // Automatically added sleep
  sleep(1);
}