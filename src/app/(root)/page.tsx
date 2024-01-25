import { account } from "@/lib/appwrite/config";
import Gallery from "../../../components/pages/home/Gallery";
import TestBtn from "../../../components/common/TestBtn";

export default function Home() {
  return (
    <main className=" mt-[var(--h-navbar)]">
      <Gallery />
    </main>
  );
}
