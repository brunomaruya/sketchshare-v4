import { account } from "@/lib/appwrite/config";
import Gallery from "../../../components/Gallery";
import TestBtn from "../../../components/common/TestBtn";

export default function Home() {
  return (
    <main className=" mt-[var(--h-navbar)]">
      <TestBtn />
      <Gallery />
    </main>
  );
}
