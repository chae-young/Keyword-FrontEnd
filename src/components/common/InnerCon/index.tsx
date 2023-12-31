import React from 'react';

interface InnerConProps {
  children: React.ReactNode;
}

const InnerCon = ({ children }: InnerConProps) => (
  <section className="max-w-default m-auto px-5 pt-[60px]">{children}</section>
);

export default InnerCon;
