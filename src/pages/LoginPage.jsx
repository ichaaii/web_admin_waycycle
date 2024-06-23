import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import logo1 from "../assets/img/logo1.png";

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-custom flex items-center justify-center">
      <Card
        className="p-10 pb-24 bg-white bg-opacity-70 backdrop-blur-xl"
        shadow={true}
      >
        <div className="flex justify-center">
          <img className="w-full max-w-xs" src={logo1} alt="logo" />
        </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="admin1"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Kata sandi
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <a href="/input">
              <Button className="mt-2 px-16 rounded-full justify-center font-custom bg-hijau">
                Masuk
              </Button>
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};
