import React from 'react';
import { Helmet } from 'react-helmet-async';

//Ref를 Props로 받기 위해서 forwardRef 로 wrap
const Page = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, title = 'page', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  },
);

export default Page;
