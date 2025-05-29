import StyledLink from "@/components/StyledLink";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="py-4 px-8 flex justify-between bg-gray-950 border-b border-gray-800 sticky top-0">
      <Link href="/" className="content-center">
        <h1 className="text-gray-300 font-bold text-2xl">HGHS I.T. Club</h1>
      </Link>

      <section className="flex space-x-6 px-4 font-light text-base">
        <div className="content-center">
          <StyledLink href="/about">About</StyledLink>
        </div>

        <div className="content-center">
          <StyledLink href="/contact">Contact</StyledLink>
        </div>

        <div className="content-center">
          <StyledLink href="/blog">Blog</StyledLink>
        </div>

        <div className="content-center">
          <StyledLink href="/account/login" variant="primary">
            Sign in
          </StyledLink>
        </div>
      </section>
    </div>
  );
}
