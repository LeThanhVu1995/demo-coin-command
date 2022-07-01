import { Slider } from "antd";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import type { SliderMarks } from "antd/lib/slider";

const marks: SliderMarks = {
  25: {
    style: {
      color: "#fff",
    },
    label: <strong>25</strong>,
  },
  50: {
    style: {
      color: "#fff",
    },
    label: <strong>50</strong>,
  },
  75: {
    style: {
      color: "#fff",
    },
    label: <strong>57</strong>,
  },
  100: {
    style: {
      color: "#fff",
    },
    label: <strong>100</strong>,
  },
};

const ChartCrypto = dynamic(() => import("../components/ChartCrypto"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between my-[16px]">
        <img src="/logo.png" width={120} />
        <div className="flex flex-col items-center justify-center gap-[4px]">
          <div className="bg-white w-[22px] text-whte h-[2px]"></div>
          <div className="bg-white w-[22px] text-whte h-[2px]"></div>
          <div className="bg-white w-[22px] text-whte h-[2px]"></div>
        </div>
      </nav>
      <main>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row gap-[8px] items-center">
              <img src="/coin.png" width={30} />
              <span className="font-bold text-white text-[20px]">Sd</span>
            </div>
            <div>
              <span className="font-normal text-[11px] text-[#818DA6]">
                Giá gần nhất
              </span>
            </div>
            <div>
              <span className="font-bold text-white text-[20px]">733 Xu</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <span className="font-normal text-[11px] text-[#818DA6]">
              Thay Đổi 24h
            </span>
            <span className="font-bold text-[12px] text-[#FF424E]">-0.95%</span>
            <span className="font-normal text-[11px] text-[#818DA6]">
              24 Thấp
            </span>
            <span className="font-bold text-[13px] text-white">724 Xu</span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="font-normal text-[11px] text-[#818DA6]">
              24h Cao
            </span>
            <span className="font-bold text-[13px] text-white">724 Xu</span>
            <span className="font-normal text-[11px] text-[#818DA6]">
              KL giao dịch trong 24h
            </span>
            <span className="font-bold text-[13px] text-white">
              6043.2343 Sd
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-[24px] py-[16px]">
          <span className="text-[#818DA6] text-[14px]">5m</span>
          <span className="text-[#818DA6] text-[14px]">15m</span>
          <span className="text-white bg-[#303341] px-[8px] rounded text-[14px]">
            30m
          </span>
          <span className="text-[#818DA6] text-[14px]">1h</span>
          <span className="text-[#818DA6] text-[14px]">4h</span>
          <span className="text-[#818DA6] text-[14px]">1D</span>
          <span className="text-[#818DA6] text-[14px]">1W</span>
        </div>
        <div className="overflow-auto pb-[64px] flex items-center justify-center">
          <ChartCrypto />
        </div>
        <div>
          <span className="font-normal text-white">Sổ lệnh</span>
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex flex-col pt-[16px] gap-[4px]">
              <div className="text-[14px] text-[#818DA6] font-normal flex flex-row justify-between">
                <span>Giá đặt mua</span>
                <span>KL</span>
              </div>
              <div className="flex flex-row justify-between text-[14px] pt-[8px]">
                <span className="text-[#2DC26D] text-left">730</span>
                <span className="text-white text-right">3442</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">729</span>
                <span className="text-white text-right">2892</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">730</span>
                <span className="text-white text-right">23.523</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">726</span>
                <span className="text-white text-right">11.223</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">736</span>
                <span className="text-white text-right">7.232</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">724</span>
                <span className="text-white text-right">13442</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#2DC26D] text-left">730</span>
                <span className="text-white text-right">9442</span>
              </div>
            </div>
            <div className="flex flex-col pt-[16px] gap-[4px]">
              <div className="text-[14px] text-[#818DA6] font-normal flex flex-row justify-between">
                <span>Giá đặt bán</span>
                <span>KL</span>
              </div>
              <div className="flex flex-row justify-between text-[14px] pt-[8px]">
                <span className="text-[#FF424E] text-left">730</span>
                <span className="text-white text-right">3442</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">729</span>
                <span className="text-white text-right">2892</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">730</span>
                <span className="text-white text-right">23.523</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">726</span>
                <span className="text-white text-right">11.223</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">736</span>
                <span className="text-white text-right">7.232</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">724</span>
                <span className="text-white text-right">13442</span>
              </div>
              <div className="flex flex-row justify-between text-[14px]">
                <span className="text-[#FF424E] text-left">730</span>
                <span className="text-white text-right">9442</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[16px]">
          <span className="text-white text-normal">Giao dịch của tôi</span>
          <div className="min-h-[300px] flex justify-center items-center text-[14px] text-white">
            Vui Lòng &nbsp;
            <span className="text-[#fdd116]"> {"Đăng nhập"} &nbsp;</span> hoặc
            &nbsp;
            <span className="text-[#fdd116]">Đăng Ký</span> &nbsp; để giao dịch
          </div>
        </div>
        <div className=" mt-[16px]">
          <div className="grid grid-cols-2 gap-[8px]">
            <button className="bg-[#fdd116] p-[8px] rounded-md text-black">
              Mua
            </button>
            <button className="bg-[#303341] p-[8px] rounded-md text-white">
              Bán
            </button>
          </div>
        </div>
        <div className="mt-[32px]">
          <div className="grid grid-cols-2">
            <div className="flex flex-row justify-center items-center gap-[8px]">
              <span className="block border-solid border-[1px] broder-[#fff] rounded-xl bg-[#fdd116] px-[8px] text-[14px] font-semibold">
                New
              </span>
              <span className="text-[16px] text-[#818DA6] font-normal">
                Lệnh nhanh
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3009_19263)">
                  <path
                    d="M10.625 9.375C10.625 9.02982 10.3452 8.75 10 8.75C9.65482 8.75 9.375 9.02982 9.375 9.375V13.125C9.375 13.4702 9.65482 13.75 10 13.75C10.3452 13.75 10.625 13.4702 10.625 13.125V9.375Z"
                    fill="#808089"
                  ></path>
                  <path
                    d="M10.625 6.875C10.625 7.22018 10.3452 7.5 10 7.5C9.65482 7.5 9.375 7.22018 9.375 6.875C9.375 6.52982 9.65482 6.25 10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875Z"
                    fill="#808089"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4518 3.75 16.25 6.54822 16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10Z"
                    fill="#808089"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3009_19263">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(2.5 2.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-row justify-center items-center gap-[8px] border-b-[2px] border-[#fdd116]">
              <span className="text-[16px] text-[#fdd116] font-normal">
                Lệnh chờ
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3009_19263)">
                  <path
                    d="M10.625 9.375C10.625 9.02982 10.3452 8.75 10 8.75C9.65482 8.75 9.375 9.02982 9.375 9.375V13.125C9.375 13.4702 9.65482 13.75 10 13.75C10.3452 13.75 10.625 13.4702 10.625 13.125V9.375Z"
                    fill="#808089"
                  ></path>
                  <path
                    d="M10.625 6.875C10.625 7.22018 10.3452 7.5 10 7.5C9.65482 7.5 9.375 7.22018 9.375 6.875C9.375 6.52982 9.65482 6.25 10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875Z"
                    fill="#808089"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4518 3.75 16.25 6.54822 16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10Z"
                    fill="#808089"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3009_19263">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(2.5 2.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="my-[16px] flex flex-col">
            <div>
              <span className="text-[#818DA6]">Giá mua Shopdi</span>
            </div>
            <div className="my-[16px] rounded-lg p-[8px] bg-[#303341] flex">
              <input
                type={"text"}
                className="rounded-sm w-[100%] bg-[#303341] active:border-[0px] focus-visible:border-[0px] focus:border-[0px] hover:border-[0px] text-white"
              />
              <span>
                <img src="/smile.svg" />
              </span>
            </div>
            <div>
              <span className="text-[#818DA6]">Số Xu sử dụng</span>
            </div>
            <div className="my-[16px] rounded-lg p-[8px] bg-[#303341] flex">
              <input
                type={"text"}
                className="rounded-sm w-[100%] bg-[#303341] active:border-[0px] focus-visible:border-[0px] focus:border-[0px] hover:border-[0px] text-white"
              />
              <span>
                <img src="/smile.svg" />
              </span>
            </div>
            <div>
              <span className="text-[#818DA6]">Chọn nhanh % tài sản</span>
              <Slider
                trackStyle={{
                  backgroundColor: "#fdd116",
                  borderColor: "#fdd116",
                }}
                handleStyle={{
                  borderColor: "#fdd116",
                  backgroundColor: "#fdd116",
                }}
                range
                marks={marks}
                defaultValue={[26, 37]}
              />
            </div>
          </div>
          <div>
            <span className="text-[#818DA6]">KL Shopdi ước tính nhận được</span>
            <div className="my-[16px]  flex flex-row items-center gap-[8px]">
              <span className="text-white text-[15px]">0</span>
              <img src="/coin.png" width={32} />
            </div>
          </div>
          <div className="flex flex-col mt-[32px] gap-[16px] mb-[128px]">
            <button className="bg-[#fdd116] p-[8px] rounded-md text-black text-[18px]">
              Đăng Ký
            </button>
            <button className="bg-[#303341] p-[8px] rounded-md text-white text-[18px]">
              Đăng Nhập
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
