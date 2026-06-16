import { Printer } from 'lucide-react'

function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

          html, body, #root {
            margin: 0;
            min-height: 100%;
          }

          .font-sarabun {
            font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
          }

          .weight-slip {
            width: 240mm;
            height: 148mm;
            background: white;
            border: 1px solid #000;
            color: #000;
            font-size: 18px;
            line-height: 1.25;
            box-sizing: border-box;
          }

          @media print {
            @page {
              size: A4 landscape;
              margin: 0;
            }

            html,
            body,
            #root {
              width: 297mm;
              height: 210mm;
              margin: 0;
              padding: 0;
              background: white !important;
            }

            .no-print {
              display: none !important;
            }

            .screen-layout {
              display: block !important;
              width: 297mm !important;
              min-height: 210mm !important;
              padding: 0 !important;
              background: white !important;
            }

            .print-page {
              width: 297mm !important;
              min-height: 210mm !important;
              display: flex !important;
              justify-content: center !important;
              align-items: flex-start !important;
              padding-top: 24mm !important;
              margin: 0 !important;
              background: white !important;
            }

            .weight-slip {
              width: 240mm !important;
              height: 148mm !important;
              box-shadow: none !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-100 p-8 font-sarabun screen-layout">
        <div className="max-w-7xl mx-auto flex gap-8 screen-layout">
          <div className="w-full lg:w-1/2 no-print">
            <div className="bg-white rounded-lg shadow p-6 flex justify-end">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Printer size={22} />
                พิมพ์ใบชั่ง
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center print-page">
            <div className="weight-slip shadow-lg font-sarabun">
              <div className="pt-[8mm] px-[8mm] pb-[2mm]">
                <h1 className="text-center font-bold text-[25px] leading-none mb-[4px]">
                  บริษัท แอล.ที. การยาง จำกัด
                </h1>

                <p className="text-center text-[16px] leading-none mb-[7mm]">
                  541 ม.3 จันดี ฉวาง นครศรีธรรมราช - 80250&nbsp;&nbsp;
                  โทร 075-445-930&nbsp;&nbsp;
                  เลขประจำตัวผู้เสียภาษี 0805523000071
                </p>

                <div className="grid grid-cols-12 text-[18px] leading-[1.35]">
                  <div className="col-span-5">
                    <div className="font-bold">เลขที่ใบชั่ง</div>
                    <div className="font-bold">ชื่อลูกค้า</div>
                    <div className="font-bold">สินค้า</div>
                    <div className="font-bold">ประเภทรถ</div>
                  </div>

                  <div className="col-span-2 text-center pt-[2px]">
                    ใบชั่งน้ำหนัก
                  </div>

                  <div className="col-span-2"></div>

                  <div className="col-span-3">
                    <div>
                      <span className="font-bold inline-block w-[27mm]">วันที่</span>
                    </div>
                    <div>
                      <span className="font-bold inline-block w-[27mm]">พนักงานชั่ง</span>
                    </div>
                    <div>
                      <span className="font-bold inline-block w-[27mm]">ราคา</span>
                      <span>0.00 บาท</span>
                    </div>
                  </div>

                  <div className="col-span-5"></div>
                  <div className="col-span-2 font-bold text-center mt-[2mm]">
                    หมายเหตุ
                  </div>
                  <div className="col-span-5"></div>
                </div>
              </div>

              <div className="px-[8mm]">
                <table className="w-full border border-black border-collapse text-[18px] leading-[1.25]">
                  <tbody>
                    <tr className="h-[10mm]">
                      <td className="border border-black w-[24mm] text-center font-bold">รายการ</td>
                      <td className="border border-black w-[75mm] text-center font-bold">ทะเบียนรถ</td>
                      <td className="border border-black w-[32mm] text-center font-bold">วันที่</td>
                      <td className="border border-black w-[42mm] text-center font-bold">เวลา</td>
                      <td className="border border-black text-center font-bold">น้ำหนัก</td>
                    </tr>

                    <tr className="h-[10mm]">
                      <td className="border border-black text-center font-bold">เข้า</td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                    </tr>

                    <tr className="h-[10mm]">
                      <td className="border border-black text-center font-bold">ออก</td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                      <td className="border border-black"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="px-[8mm] flex">
                <div className="w-[55%] pt-[43mm] pr-[4mm]">
                  <div className="flex justify-center gap-[12mm]">
                    <div className="w-[58mm] text-center">
                      <div className="border-b border-black h-[1px] mb-[3mm]"></div>
                      <div className="text-[18px]">พนักงานชั่ง</div>
                    </div>

                    <div className="w-[58mm] text-center">
                      <div className="border-b border-black h-[1px] mb-[3mm]"></div>
                      <div className="text-[18px]">พนักงานขับรถ</div>
                    </div>
                  </div>
                </div>

                <div className="w-[45%] border-l border-r border-b border-black h-[52mm]">
                  <div className="grid grid-cols-2 text-[18px] leading-[1.48] pt-[3mm] px-[2mm]">
                    <div className="text-right font-bold pr-[2mm]">นน. สุทธิ</div>
                    <div></div>

                    <div className="text-right pr-[2mm]">ความชื้น/สิ่งเจือปน</div>
                    <div className="text-right">0</div>

                    <div className="text-right font-bold pr-[2mm]">นน. คงเหลือ</div>
                    <div></div>

                    <div className="text-right pr-[2mm]">จำนวนเงิน</div>
                    <div className="text-right">0.00</div>

                    <div className="text-right pr-[2mm]">เงินหัก</div>
                    <div className="text-right">0.00</div>

                    <div className="text-right font-bold pr-[2mm]">เงินคงเหลือ</div>
                    <div className="text-right font-bold">0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App