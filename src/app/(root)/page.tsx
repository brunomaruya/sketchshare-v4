import { account } from "@/lib/appwrite/config";
import HomeGallery from "../../../components/pages/home/HomeGallery";

export default function Home() {
  return (
    <main className=" mt-[var(--h-navbar)]">
      <HomeGallery />
    </main>
  );
}
