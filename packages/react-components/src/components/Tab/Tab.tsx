import React, { FC, Fragment, useState, Children } from "react";

type TabsProps = {
  initialTab?: number;
};

export const Tabs: FC<TabsProps> & { Tab: FC<{ label: string }> } = ({
  children,
  initialTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(
    initialTab > 0 ? initialTab - 1 : 0
  );

  const childrens = Children.toArray(children);

  console.log(childrens);

  return (
    <>
      <div>
        {childrens.map((children, index) => (
          <button onClick={() => setActiveTab(index)}>
            {children?.props?.label}
          </button>
        ))}
        {childrens[activeTab]?.props?.children}
      </div>
    </>
  );
};

const Tab: FC<{ label: string }> = ({ label, children }) => {
  return <Fragment key={label}>{children}</Fragment>;
};

Tabs.Tab = Tab;
