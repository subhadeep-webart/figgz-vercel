import { Card, CardBody, Tab, Tabs } from "@heroui/react";

const TabCard = ({ tabs }) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          radius="none"
          classNames={{
            tabList: "bg-shopping-cart h-[59px]  flex gap-x-6 w-full",
             tab: `
            bg-transparent h-[59px] shadow-none !px-[24px]
            border-1 border-transparent 
            data-[selected=true]:border-border-product-filter
            data-[selected=true]:shadow-none
          `,
            tabContent: "text-lg font-semibold",
             panel: "!mt-[24px]", 
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card className="shadow-none border-none rounded-none p-2 ">
                <CardBody className="text-md font-normal text-text-payment-info">
                  {item.content}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default TabCard;
