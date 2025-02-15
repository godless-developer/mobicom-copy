import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel className=" z-20 w-[1400px] h-[700px]">
      <CarouselContent>
        <CarouselItem className="p-3 ">
          <div className="px-4 py-3 gap-4 flex h-[700px] ">
            <div className="w-[50%] h-[100%] bg-[#50575e] rounded-xl border-[2px] border-[#646970] hover:border-amber-700 flex flex-col p-5">
              <img
                src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FHUAWEI_Pura_70_Pro_Black_Rear_expand_3a83fc8cb7.webp&w=2048&q=75"
                alt=""
                className="w-[550px] h-[550px] ml-16"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[14px]">Huawei</p>
                  <p>Huawei Pura 70 Pro</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-4 h-[100%]">
              <div className="flex w-[100%] gap-4 h-[100%]">
                <div className="bg-[#50575e] w-[50%] h-full rounded-xl border-[2px] border-[#646970] hover:border-amber-700 p-2">
                  <img
                    src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FHUAWEI_Pura_70_Pink_Rear_expand_Without_U_e07b3d828c.webp&w=640&q=75"
                    alt=""
                    className="w-[250px] h-[250px] ml-9"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[14px]">Huawei</p>
                      <p>Huawei Pura 70</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#50575e] p-2 w-[50%] h-[100%] rounded-xl border-[2px] border-[#646970] hover:border-amber-700">
                  <img
                    src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2Fredmagic_8s_pro_3_a443836e76.webp&w=640&q=75"
                    alt=""
                    className="w-[250px] h-[250px] ml-9"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[14px]">ZTE</p>
                      <p>Redmagic 8s Pro (+25000₮ card x 2pcs)</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-[100%] gap-4 h-[100%]">
                <div className="bg-[#50575e] p-2 w-[50%] h-[100%] rounded-xl border-[2px] border-[#646970] hover:border-amber-700">
                  <img
                    src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2F011_galaxy_s24_onyxblack_front2_8ee17f8957.webp&w=640&q=75"
                    alt=""
                    className="w-[250px] ml-9 h-[250px]"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[14px]">Huawei</p>
                      <p>Huawei Pura 70</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#50575e] p-2 w-[50%] h-[100%] rounded-xl border-[2px] border-[#646970] hover:border-amber-700">
                  <img
                    src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FZTE_A73_1_566aabf3b7.webp&w=640&q=75"
                    alt=""
                    className="w-[250px] ml-9 h-[250px]"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[14px]">Huawei</p>
                      <p>Huawei Pura 70</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="p-3">
          <div className="px-4 py-3 gap-4 flex h-[700px] ">
            <div className="w-[50%] h-[100%] p-4 bg-[#50575e] rounded-xl border-[2px] border-[#646970] hover:border-amber-700">
              <img
                src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FMU_7_T2_GEO_US_ezgif_com_webp_to_png_converter_removebg_preview_4e2b3dfed3.png&w=2048&q=75"
                alt=""
                className="ml-20"
              />
              <div className="flex justify-between text-white mt-20">
                <div>
                  <p className="text-[13px]">Apple</p>
                  <p className="text-[19px]">20W USB-C power аdapter</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className="bg-[#50575e] p-2 w-[25%] h-[50%] rounded-xl border-[2px] border-[#646970] hover:border-amber-700">
              <img
                src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FAirpods_Pro_gen_2_1_356dd594eb.webp&w=640&q=75"
                alt=""
                className="ml-10 h-[230px] w-[250px]"
              />
              <div className="flex justify-between text-white mt-10">
                <div>
                  <p className="text-[13px]">Apple</p>
                  <p className="text-[19px]">20W USB-C power аdapter</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
