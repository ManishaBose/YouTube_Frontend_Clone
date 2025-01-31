import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between pt-1 p-3">
      <img className="h-12" src="/icon.png" alt="YouTube Icon" />
      <SearchBar />
      <div>Sign in</div>
      {/* <img src="/icon.png" alt="" />
      <input placeholder="Search" /> */}
    </div>
  );
}
