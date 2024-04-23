"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import { Filter, ListFilter, Search } from "lucide-react";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
interface CustomDropdownProps {
  placeholder: string;
  label: string;
  icon: React.ReactNode;
  items: Array<string>;
}
const CustomDropdown = ({
  placeholder,
  icon,
  label,
  items,
}: CustomDropdownProps) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(items[0]);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "flex items-center w-full justify-between bg-white hover:bg-white focus-visible:outline-none text-gray-600"
          )}
        >
          {" "}
          <span>{placeholder}</span> <span>{icon}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full mb-5 ">
        <DrawerTitle className="ml-2 mt-2 mb-10">{label}</DrawerTitle>

        <div>
          <RadioGroup
            defaultValue={items[0]}
            value={value}
            onValueChange={(val) => {
              router.push(`?${label}=${val}`);
              return setValue(val);
            }}
          >
            {items.map((item, index) => (
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border-0 cursor-pointer"
                  value={item}
                  id={item}
                />
                <Label htmlFor={item} className="cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const ProductSidebar = () => {
  const router = useRouter();
  const [val, setVal] = useState<Array<number>>([0]);
  const handleRangeChange = (e: any) => {
    router.push(`?price=${e.target.value}`);
    if (parseInt(e.target.value) >= 0) {
      return setVal([parseInt(e.target.value)]);
    }
    if (parseInt(e.target.value) > 20000) {
      return setVal([20000]);
    }
    return setVal([0]);
  };
  return (
    <div className="bg-primary/20 rounded-lg  md:h-full ">
      <div className="w-full h-full flex flex-col px-4 py-3 relative">
        <div className="flex relative ">
          <Input className="rounded-full pr-11" />
          <Button
            variant="ghost"
            className="absolute right-0 rounded-full p-0  px-3 py-2"
          >
            {" "}
            <Search className="w-5 h-5 " />
          </Button>
        </div>
        <div className="w-full flex gap-2 mt-10">
          <div id="filterBy" className="w-full">
            <CustomDropdown
              placeholder="filter"
              icon={<Filter className="w-4 text-gray-600" />}
              label="Filter by"
              items={[
                "Alphabetical (A to Z)",
                "Alphabetical (Z to A)",
                "Date (Newest to Oldest)",
                " Date (Oldest to Newest)",
                " Price (Low to High)",
                "Price (High to Low)",
                " Relevance",
                " Most Popular ",
                "Least Popular",
              ]}
            />
          </div>
          <div id="sortBy" className=" w-full">
            <CustomDropdown
              placeholder="sort"
              icon={<ListFilter className="w-4 text-gray-600 " />}
              label="Sort by"
              items={[
                "Category",
                "Price Range",
                "Brand",
                "Availability (In Stock/Out of Stock)",
                "Color",
                "Size",
                "Rating (Range)",
                "Attributes",
              ]}
            />
          </div>
          <div></div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-5">
            <Slider
              className="focus-visible:ring"
              defaultValue={[0]}
              max={20000}
              min={0}
              step={500}
              onValueChange={(value) => {
                router.push(`?price=${value}`);
                return setVal(value);
              }}
              value={val}
            />

            <div className="flex items-center w-full justify-between">
              <Label className="font-semibold">Price Range: </Label>
              <div className="flex gap-2 items-center relative">
                <Input
                  type="text"
                  className="w-32 pr-10 pl-6 appearance-none focus-visible:ring-0 shadow-sm font-medium text-primary text-xl"
                  value={val[0]}
                  onChange={handleRangeChange}
                />
                <span className="text-gray-600 font-medium absolute right-2 top-[0.4rem] text-primary text-xl">
                  {" "}
                  RS{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 " id="tabs">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>type</AccordionTrigger>
                <AccordionContent>
                  <Tabs>
                    <TabsList>
                      <TabsTrigger value="eightInch" className="text-primary">
                        8 inch{" "}
                      </TabsTrigger>
                      <TabsTrigger value="fourInch" className="text-primary">
                        4 inch
                      </TabsTrigger>
                      <TabsTrigger value="domestic" className="text-primary">
                        domestic
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
