import React, { useEffect, useState } from "react";

export function EmailLink() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "cicerojr10";
    const domain = "gmail.com";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <div>
      <h4 className="font-medium">Email</h4>
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {email}
        </a>
      )}
    </div>
  );
}
