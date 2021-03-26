import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import AccessDenied from "../components/error/acces-denied";

export default function Blog() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blog");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };

    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) return <AccessDenied />;

  return (
    <>
      <h1>Blog</h1>
      <p>
        <strong>{content || "\u00a0"}</strong>
      </p>
    </>
  );
}
