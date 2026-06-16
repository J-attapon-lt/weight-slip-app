import { Printer } from 'lucide-react'

function App() {
  const handlePrint = () => {
    window.print()
  }

  const formatNumber = (num, decimals = 2) => {
    return Number(num || 0).toLocaleString('th-TH', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

          .font-sarabun {
            font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
          }

          @media print {
            @page {
              size: A4 landscape;
              margin: 8mm;
            }

            body {
              margin: 0;
              background: white;
            }

            .no-print {
              display: none !important;
            }

            .print-area-wrapper {
              width: 100% !important;
              display: block !important;
              margin: 0 !important;
            }

            .print-area {
              width: 100% !important;
              max-width: none !important;
              box-shadow: none !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sarabun print:p-0 print:bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 print:block print:max-w-none">
          
          {/* ฝั่งฟอร์ม */}
          <div className="w-full lg:w-1/2 no-print">
            <form className="bg-white p-6 rounded-lg shadow">
              {/* ใส่ฟอร์มของคุณตรงนี้ */}

              <div className="pt-4 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors font-sans"
                >
                  <Printer size={20} /> พิมพ์ใบชั่ง
                </button>
              </div>
            </form>
          </div>

          {/* ฝั่งใบชั่งสำหรับพิมพ์ */}
          <div className="w-full lg:w-1/2 flex justify-center print-area-wrapper">
            <div className="bg-white shadow-lg print-area w-full max-w-[240mm] border-2 border-black flex flex-col text-black text-[18px] font-sarabun leading-snug">
              
              <div className="pt-6 px-6 pb-2">
                <h1 className="text-center font-bold text-[26px] mb-1">
                  บริษัท แอล.ที. การยาง จำกัด
                </h1>

                <p className="text-center text-[16px] mb-6">
                  541 ม.3 จันดี ฉวาง นครศรีธรรมราช - 80250 โทร 075-445-930 เลขประจำตัวผู้เสียภาษี 0805523000071
                </p>

                <div className="grid grid-cols-12 gap-y-2 mb-4">
                  {/* ใส่ข้อมูลหัวใบชั่งของคุณตรงนี้ */}
                </div>
              </div>

              <table className="w-full border-t border-black border-collapse">
                <tbody>
                  <tr>
                    <td colSpan="3" className="border-r border-black relative pb-6 px-10 align-bottom">
                      <div className="flex justify-between items-end mt-24">
                        <div className="w-40 text-center flex flex-col items-center">
                          <div className="border-b border-black w-full mb-2"></div>
                          <span className="font-normal text-[18px]">พนักงานชั่ง</span>
                        </div>

                        <div className="w-40 text-center flex flex-col items-center">
                          <div className="border-b border-black w-full mb-2"></div>
                          <span className="font-normal text-[18px]">พนักงานขับรถ</span>
                        </div>
                      </div>
                    </td>

                    <td className="border-r border-black p-3 align-top">
                      {/* ใส่ข้อมูลช่องขวาตรงนี้ */}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App