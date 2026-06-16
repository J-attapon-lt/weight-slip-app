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

          html,
          body,
          #root {
            margin: 0;
            min-height: 100%;
            background: #f3f4f6;
          }

          .app {
            min-height: 100vh;
            padding: 32px;
            font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
          }

          .layout {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            gap: 32px;
            align-items: flex-start;
          }

          .control-panel {
            width: 50%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 8px rgba(0,0,0,0.12);
            padding: 28px;
            display: flex;
            justify-content: flex-end;
          }

          .print-button {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 0;
            border-radius: 6px;
            background: #2563eb;
            color: white;
            padding: 12px 28px;
            font-size: 18px;
            font-weight: 600;
            font-family: Arial, sans-serif;
            cursor: pointer;
          }

          .preview-wrap {
            width: 50%;
            display: flex;
            justify-content: center;
          }

          .slip {
            position: relative;
            width: 595pt;
            height: 367pt;
            background: white;
            color: black;
            box-shadow: 0 1px 6px rgba(0,0,0,0.28);
            overflow: hidden;
            font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
          }

          .txt {
            position: absolute;
            white-space: nowrap;
            font-size: 18pt;
            line-height: 1;
            font-weight: 400;
          }

          .bold {
            font-weight: 700;
          }

          .title {
            position: absolute;
            left: 0;
            top: 10pt;
            width: 595pt;
            text-align: center;
            font-size: 22pt;
            line-height: 1;
            font-weight: 700;
          }

          .address {
            position: absolute;
            left: 0;
            top: 39pt;
            width: 595pt;
            text-align: center;
            font-size: 16pt;
            line-height: 1;
            font-weight: 400;
          }

          .line-h {
            position: absolute;
            height: 0;
            border-top: 1pt solid black;
          }

          .line-v {
            position: absolute;
            width: 0;
            border-left: 1pt solid black;
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

            .app {
              width: 297mm;
              height: 210mm;
              padding: 0;
              background: white !important;
            }

            .layout {
              display: block;
              width: 297mm;
              height: 210mm;
              max-width: none;
              margin: 0;
            }

            .control-panel {
              display: none !important;
            }

            .preview-wrap {
              width: 297mm;
              height: 210mm;
              display: flex;
              align-items: flex-start;
              justify-content: center;
              padding-top: 20mm;
              box-sizing: border-box;
            }

            .slip {
              box-shadow: none !important;
            }
          }
        `}
      </style>

      <div className="app">
        <div className="layout">
          <div className="control-panel">
            <button type="button" onClick={handlePrint} className="print-button">
              <Printer size={22} />
              พิมพ์ใบชั่ง
            </button>
          </div>

          <div className="preview-wrap">
            <div className="slip">
              <div className="title">บริษัท แอล.ที. การยาง จำกัด</div>
              <div className="address">
                541 ม.3 จันดี ฉวาง นครศรีธรรมราช - 80250&nbsp;&nbsp;
                โทร 075-445-930&nbsp;&nbsp;
                เลขประจำตัวผู้เสียภาษี 0805523000071
              </div>

              {/* Header text */}
              <div className="txt bold" style={{ left: '20pt', top: '67pt' }}>เลขที่ใบชั่ง</div>
              <div className="txt" style={{ left: '267pt', top: '67pt' }}>ใบชั่งน้ำหนัก</div>
              <div className="txt bold" style={{ left: '361pt', top: '67pt' }}>วันที่</div>

              <div className="txt bold" style={{ left: '20pt', top: '89pt' }}>ชื่อลูกค้า</div>
              <div className="txt bold" style={{ left: '361pt', top: '89pt' }}>พนักงานชั่ง</div>

              <div className="txt bold" style={{ left: '20pt', top: '112pt' }}>สินค้า</div>
              <div className="txt bold" style={{ left: '361pt', top: '112pt' }}>ราคา</div>
              <div className="txt" style={{ left: '426pt', top: '112pt' }}>0.00 บาท</div>

              <div className="txt bold" style={{ left: '20pt', top: '134pt' }}>ประเภทรถ</div>
              <div className="txt bold" style={{ left: '267pt', top: '134pt' }}>หมายเหตุ</div>

              {/* Main table horizontal lines */}
              <div className="line-h" style={{ left: '20pt', top: '155pt', width: '555pt' }} />
              <div className="line-h" style={{ left: '20pt', top: '179pt', width: '555pt' }} />
              <div className="line-h" style={{ left: '20pt', top: '225pt', width: '555pt' }} />

              {/* Main table vertical lines */}
              <div className="line-v" style={{ left: '20pt', top: '155pt', height: '70pt' }} />
              <div className="line-v" style={{ left: '77pt', top: '155pt', height: '70pt' }} />
              <div className="line-v" style={{ left: '252pt', top: '155pt', height: '70pt' }} />
              <div className="line-v" style={{ left: '326pt', top: '155pt', height: '203pt' }} />
              <div className="line-v" style={{ left: '421pt', top: '155pt', height: '203pt' }} />
              <div className="line-v" style={{ left: '575pt', top: '155pt', height: '203pt' }} />

              {/* Table labels */}
              <div className="txt bold" style={{ left: '30pt', top: '158pt' }}>รายการ</div>
              <div className="txt bold" style={{ left: '138pt', top: '158pt' }}>ทะเบียนรถ</div>
              <div className="txt bold" style={{ left: '278pt', top: '158pt' }}>วันที่</div>
              <div className="txt bold" style={{ left: '362pt', top: '158pt' }}>เวลา</div>
              <div className="txt bold" style={{ left: '480pt', top: '158pt' }}>น้ำหนัก</div>

              <div className="txt bold" style={{ left: '40pt', top: '182pt' }}>เข้า</div>
              <div className="txt bold" style={{ left: '38pt', top: '204pt' }}>ออก</div>

              {/* Right summary box horizontal lines */}
              <div className="line-h" style={{ left: '326pt', top: '358pt', width: '249pt' }} />

              {/* Summary text */}
              <div className="txt bold" style={{ left: '374pt', top: '228pt' }}>นน. สุทธิ</div>

              <div className="txt" style={{ left: '329pt', top: '250pt' }}>ความชื้น/สิ่งเจือปน</div>
              <div className="txt" style={{ left: '563pt', top: '250pt' }}>0</div>

              <div className="txt bold" style={{ left: '357pt', top: '272pt' }}>นน. คงเหลือ</div>

              <div className="txt" style={{ left: '366pt', top: '294pt' }}>จำนวนเงิน</div>
              <div className="txt" style={{ left: '547pt', top: '294pt' }}>0.00</div>

              <div className="txt" style={{ left: '385pt', top: '316pt' }}>เงินหัก</div>
              <div className="txt" style={{ left: '547pt', top: '316pt' }}>0.00</div>

              <div className="txt bold" style={{ left: '362pt', top: '337pt' }}>เงินคงเหลือ</div>
              <div className="txt bold" style={{ left: '547pt', top: '337pt' }}>0.00</div>

              {/* Signature lines */}
              <div className="line-h" style={{ left: '30pt', top: '333pt', width: '133pt' }} />
              <div className="line-h" style={{ left: '183pt', top: '333pt', width: '133pt' }} />

              <div className="txt" style={{ left: '70pt', top: '337pt' }}>พนักงานชั่ง</div>
              <div className="txt" style={{ left: '215pt', top: '337pt' }}>พนักงานขับรถ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App