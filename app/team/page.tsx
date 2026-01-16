import Footer from "@/components/app/footer";
import Navbar from "@/components/app/navbar/navbar";
import TeamSelector from "@/components/app/teams/TeamSelector";

export default function TeamsPage() {
  return (
    <>
      <Navbar />
      <TeamSelector />
      {/* h */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
