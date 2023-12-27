import React from 'react';

interface InnerConProps {
  children: React.ReactNode;
}

const InnerCon = ({ children }: InnerConProps) => (
  <section className="max-w-default">{children}</section>
);

export default InnerCon;
