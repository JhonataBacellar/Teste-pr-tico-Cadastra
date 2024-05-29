import { Product } from "./Product";
import "../../dist/src/ts/menuMobileOrder";
import "../../dist/src/ts/menuFilter"
import "../../dist/src/ts/request/requestProducts"
import "../../dist/src/ts/filtersDOM"

const serverUrl = "http://localhost:5000";

function main() {
  console.log(serverUrl);
}
document.addEventListener("DOMContentLoaded", main);