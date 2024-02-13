import React from "react";
import Container from "../layout/Container";

const project = () => {
  return (
    <div className="mt-[10%]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Share a real that hits some of your benefits from one of your
                popular customer.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Make sure you only pick the right sentence to keep it short and
                simple.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                This is an landing page template I&apos;ve seen. I would use
                this for anything.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default project;
