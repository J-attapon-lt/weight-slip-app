import { useState } from 'react'
import { Printer } from 'lucide-react'

function App() {
  const [form, setForm] = useState({
    slipNo: '',
    customerName: '',
    product: '',
    carType: '',
    weightDate: '',
    staffName: '',
    price: '0.00',
    remark: '',
    plateIn: '',
    dateIn: '',
    timeIn: '',
    weightIn: '',
    plateOut: '',
    dateOut: '',
    timeOut: '',
    weightOut: '',
    moisture: '0',
    netWeight: '',
    remainWeight: '',
    amount: '0.00',
    deduct: '0.00',
    balance: '0.00',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500'

  const labelClass = 'text-[16px] font-medium text-gray-700'

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
            max-width: 1500px;
            margin: 0 auto;
            display: flex;
            gap: 32px;
            align-items: flex-start;
          }

          .control-panel {
            width: 38%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.12);
            padding: 24px;
          }

          .preview-wrap {
            width: 62%;
            display: flex;
            justify-content: center;
            overflow: auto;
          }

          .slip {
            position: relative;
            width: 9.5in;
            height: 5.5in;
            background: white;
            color: black;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.28);
            overflow: hidden;
            font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
            flex-shrink: 0;
          }

          .slip-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 595pt;
            height: 367pt;
            transform-origin: top left;
            transform: scale(1.14958, 1.07902);
          }

          .txt {
            position: absolute;
            white-space: nowrap;
            font-size: 18pt;
            line-height: 1;
            font-weight: 400;
          }

          .value {
            position: absolute;
            white-space: nowrap;
            font-size: 17pt;
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
              size: 9.5in 5.5in;
              margin: 0;
            }

            html,
            body,
            #root {
              width: 9.5in;
              height: 5.5in;
              margin: 0;
              padding: 0;
              background: white !important;
            }

            .app {
              width: 9.5in;
              height: 5.5in;
              min-height: 5.5in;
              padding: 0;
              background: white !important;
            }

            .layout {
              display: block;
              width: 9.5in;
              height: 5.5in;
              max-width: none;
              margin: 0;
              padding: 0;
            }

            .control-panel {
              display: none !important;
            }

            .preview-wrap {
              width: 9.5in;
              height: 5.5in;
              display: block;
              padding: 0;
              margin: 0;
              overflow: hidden;
            }

            .slip {
              width: 9.5in !important;
              height: 5.5in !important;
              box-shadow: none !important;
            }
          }
        `}
      </style>

      <div className="app">
        <div className="layout">
          <div className="control-panel">
            <h2 className="text-2xl font-bold mb-5">กรอกข้อมูลใบชั่ง</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>เลขที่ใบชั่ง</label>
                <input name="slipNo" value={form.slipNo} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>วันที่</label>
                <input name="weightDate" value={form.weightDate} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>ชื่อลูกค้า</label>
                <input name="customerName" value={form.customerName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>พนักงานชั่ง</label>
                <input name="staffName" value={form.staffName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>สินค้า</label>
                <input name="product" value={form.product} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>ประเภทรถ</label>
                <input name="carType" value={form.carType} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>ราคา</label>
                <input name="price" value={form.price} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>หมายเหตุ</label>
                <input name="remark" value={form.remark} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">รายการเข้า</h3>
            <div className="grid grid-cols-4 gap-3">
              <input name="plateIn" placeholder="ทะเบียนรถ" value={form.plateIn} onChange={handleChange} className={inputClass} />
              <input name="dateIn" placeholder="วันที่" value={form.dateIn} onChange={handleChange} className={inputClass} />
              <input name="timeIn" placeholder="เวลา" value={form.timeIn} onChange={handleChange} className={inputClass} />
              <input name="weightIn" placeholder="น้ำหนัก" value={form.weightIn} onChange={handleChange} className={inputClass} />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">รายการออก</h3>
            <div className="grid grid-cols-4 gap-3">
              <input name="plateOut" placeholder="ทะเบียนรถ" value={form.plateOut} onChange={handleChange} className={inputClass} />
              <input name="dateOut" placeholder="วันที่" value={form.dateOut} onChange={handleChange} className={inputClass} />
              <input name="timeOut" placeholder="เวลา" value={form.timeOut} onChange={handleChange} className={inputClass} />
              <input name="weightOut" placeholder="น้ำหนัก" value={form.weightOut} onChange={handleChange} className={inputClass} />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">สรุป</h3>
            <div className="grid grid-cols-3 gap-3">
              <input name="netWeight" placeholder="นน. สุทธิ" value={form.netWeight} onChange={handleChange} className={inputClass} />
              <input name="moisture" placeholder="ความชื้น/สิ่งเจือปน" value={form.moisture} onChange={handleChange} className={inputClass} />
              <input name="remainWeight" placeholder="นน. คงเหลือ" value={form.remainWeight} onChange={handleChange} className={inputClass} />
              <input name="amount" placeholder="จำนวนเงิน" value={form.amount} onChange={handleChange} className={inputClass} />
              <input name="deduct" placeholder="เงินหัก" value={form.deduct} onChange={handleChange} className={inputClass} />
              <input name="balance" placeholder="เงินคงเหลือ" value={form.balance} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold"
              >
                <Printer size={22} />
                พิมพ์ใบชั่ง
              </button>
            </div>
          </div>

          <div className="preview-wrap">
            <div className="slip">
              <div className="slip-content">
                <div className="title">บริษัท แอล.ที. การยาง จำกัด</div>

                <div className="address">
                  541 ม.3 จันดี ฉวาง นครศรีธรรมราช - 80250&nbsp;&nbsp;
                  โทร 075-445-930&nbsp;&nbsp;
                  เลขประจำตัวผู้เสียภาษี 0805523000071
                </div>

                <div className="txt bold" style={{ left: '20pt', top: '67pt' }}>เลขที่ใบชั่ง</div>
                <div className="value" style={{ left: '105pt', top: '67pt' }}>{form.slipNo}</div>

                <div className="txt" style={{ left: '267pt', top: '67pt' }}>ใบชั่งน้ำหนัก</div>

                <div className="txt bold" style={{ left: '361pt', top: '67pt' }}>วันที่</div>
                <div className="value" style={{ left: '410pt', top: '67pt' }}>{form.weightDate}</div>

                <div className="txt bold" style={{ left: '20pt', top: '89pt' }}>ชื่อลูกค้า</div>
                <div className="value" style={{ left: '105pt', top: '89pt' }}>{form.customerName}</div>

                <div className="txt bold" style={{ left: '361pt', top: '89pt' }}>พนักงานชั่ง</div>
                <div className="value" style={{ left: '460pt', top: '89pt' }}>{form.staffName}</div>

                <div className="txt bold" style={{ left: '20pt', top: '112pt' }}>สินค้า</div>
                <div className="value" style={{ left: '105pt', top: '112pt' }}>{form.product}</div>

                <div className="txt bold" style={{ left: '361pt', top: '112pt' }}>ราคา</div>
                <div className="value" style={{ left: '426pt', top: '112pt' }}>{form.price} บาท</div>

                <div className="txt bold" style={{ left: '20pt', top: '134pt' }}>ประเภทรถ</div>
                <div className="value" style={{ left: '105pt', top: '134pt' }}>{form.carType}</div>

                <div className="txt bold" style={{ left: '267pt', top: '134pt' }}>หมายเหตุ</div>
                <div className="value" style={{ left: '350pt', top: '134pt' }}>{form.remark}</div>

                <div className="line-h" style={{ left: '20pt', top: '155pt', width: '555pt' }} />
                <div className="line-h" style={{ left: '20pt', top: '179pt', width: '555pt' }} />
                <div className="line-h" style={{ left: '20pt', top: '225pt', width: '555pt' }} />

                <div className="line-v" style={{ left: '20pt', top: '155pt', height: '70pt' }} />
                <div className="line-v" style={{ left: '77pt', top: '155pt', height: '70pt' }} />
                <div className="line-v" style={{ left: '252pt', top: '155pt', height: '70pt' }} />
                <div className="line-v" style={{ left: '326pt', top: '155pt', height: '203pt' }} />
                <div className="line-v" style={{ left: '421pt', top: '155pt', height: '203pt' }} />
                <div className="line-v" style={{ left: '575pt', top: '155pt', height: '203pt' }} />

                <div className="txt bold" style={{ left: '30pt', top: '158pt' }}>รายการ</div>
                <div className="txt bold" style={{ left: '138pt', top: '158pt' }}>ทะเบียนรถ</div>
                <div className="txt bold" style={{ left: '278pt', top: '158pt' }}>วันที่</div>
                <div className="txt bold" style={{ left: '362pt', top: '158pt' }}>เวลา</div>
                <div className="txt bold" style={{ left: '480pt', top: '158pt' }}>น้ำหนัก</div>

                <div className="txt bold" style={{ left: '40pt', top: '182pt' }}>เข้า</div>
                <div className="value" style={{ left: '92pt', top: '182pt' }}>{form.plateIn}</div>
                <div className="value" style={{ left: '260pt', top: '182pt' }}>{form.dateIn}</div>
                <div className="value" style={{ left: '345pt', top: '182pt' }}>{form.timeIn}</div>
                <div className="value" style={{ left: '430pt', top: '182pt', width: '135pt',textAlign: 'right',}}>{form.weightIn}</div>

                <div className="txt bold" style={{ left: '38pt', top: '204pt' }}>ออก</div>
                <div className="value" style={{ left: '92pt', top: '204pt' }}>{form.plateOut}</div>
                <div className="value" style={{ left: '260pt', top: '204pt' }}>{form.dateOut}</div>
                <div className="value" style={{ left: '345pt', top: '204pt' }}>{form.timeOut}</div>
                <div className="value" style={{ left: '430pt', top: '204pt', width: '135pt',textAlign: 'right',  }}>{form.weightOut}</div>

                <div className="line-h" style={{ left: '326pt', top: '358pt', width: '249pt' }} />

                <div className="txt bold" style={{ left: '374pt', top: '228pt' }}>นน. สุทธิ</div>
              <div
  className="value bold"
  style={{
    left: '430pt',
    top: '228pt',
    width: '135pt',
    textAlign: 'right',
    fontWeight: 700,
  }}
>
  {form.netWeight}
</div>
                <div className="txt" style={{ left: '329pt', top: '250pt' }}>ความชื้น/สิ่งเจือปน</div>
                <div className="value" style={{ left: '563pt', top: '250pt' }}>{form.moisture}</div>

                <div className="txt bold" style={{ left: '357pt', top: '272pt' }}>นน. คงเหลือ</div>
<div
  className="value bold"
  style={{
    left: '430pt',
    top: '272pt',
    width: '135pt',
    textAlign: 'right',
    fontWeight: 700,
  }}
>
  {form.remainWeight}
</div>

                <div className="txt" style={{ left: '366pt', top: '294pt' }}>จำนวนเงิน</div>
                <div className="value" style={{ left: '547pt', top: '294pt' }}>{form.amount}</div>

                <div className="txt" style={{ left: '385pt', top: '316pt' }}>เงินหัก</div>
                <div className="value" style={{ left: '547pt', top: '316pt' }}>{form.deduct}</div>

                <div className="txt bold" style={{ left: '362pt', top: '337pt' }}>เงินคงเหลือ</div>
                <div className="value bold" style={{ left: '547pt', top: '337pt' }}>{form.balance}</div>

                <div className="line-h" style={{ left: '30pt', top: '333pt', width: '133pt' }} />
                <div className="line-h" style={{ left: '183pt', top: '333pt', width: '133pt' }} />

                <div className="txt" style={{ left: '70pt', top: '337pt' }}>พนักงานชั่ง</div>
                <div className="txt" style={{ left: '215pt', top: '337pt' }}>พนักงานขับรถ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
