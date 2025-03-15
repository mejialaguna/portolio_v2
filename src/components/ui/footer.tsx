import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row m-auto">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jose Mejia. All rights reserved.
        </p>
        <div className="flex gap-4">
          <p className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </p>
          <p className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
