駕駛執照/State ID
=================

歡迎來到北卡，本州有全美國最獨特的駕照系統。北卡與台灣並無簽訂駕照交換協議 (Driver License Reciprocity Agreement)，因此無法直接換駕照。


迷思
----

### Q1: 我一定需要有汽車保險才能取得駕照

A1: 不用，你不需要有任何汽車保險 (auto insurance, non-owner car insurance) 也能取得駕照。

你只需要簽署 DL-123A (certification of exemption) 就可以拿到一張有 Fleet Restriction (*9-FLEET VEHICLE ONLY) 的駕照。持有 fleet restriction 限制的駕照只能駕駛租賃車，不能駕駛一般私人汽車。[^ncdmv-p23]

當你有自己的汽車保險後，可以至 NCDMV 申請解除 fleet restriction。

如果 NCDMV 現場的考官跟強硬的說一定要有保險才能拿到駕照，請篤定的跟他說不用，我簽 DL-123A 駕照有 fleet restriction 就不用保險。

### Q2: 我如果沒有自己的車，就只能拿有 fleet restriction 的駕照開租賃車

A2: 不用。

你可以購買 Non-owner car insurance，或是將自己的名子放到其他人的 auto insurance policy 底下，來符合 liability insurance requirement.

將自己的名子放在他人的 auto insurance policy 底下有幾個需要注意的狀況:

1. 可能會增加 insurance premium.


### Q2: 我一定要先拿到 Lerner Permit 才能再考 Driver License

A2: 不用。

如果 NCDMV 現場的考官跟你說你要先拿 Lerner Permit 才能再考 Driver License，請堅定的跟他說我今天就是要考 Driver License，謝謝你的關心。

### Q3: 我一定要有 Social Security Number (SSN) 才能辦理駕照

A3: 不用。

I-20 with I-94, DS2019 with I-94, I-94 都可以當作 Proof of Legal Presence Requirements.

### Q4: 我不會開車或是在北卡沒有打算開車，我就不辦駕照了

A4: 50/50。

至少辦一個 State ID/REAL ID，這樣買酒，去酒吧，搭美國國內線班機就不用帶護照證明年紀跟身份。


如何取得駕照
------------

請參考下面的流程圖：

```mermaid
graph TD
    %% 定義特殊樣式
    classDef status fill:#f9f,stroke:#333,stroke-width:2px;
    classDef bank fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef alert fill:#ffe0b2,stroke:#fb8c00,stroke-width:2px;
    classDef ncdmv fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    Start([開始考取北卡駕照]) --> NCDMV_Pre

    %% 前期：NCDMV 櫃檯作業
    subgraph NCDMV_Pre ["🏛️ NCDMV 監理所現場 (前期報到與測驗)"]
        direction TB
        Doc["📝 提交身分與居住證明文件<br>・身分與出生證明 (Table 1)<br>・SSN/合法居留 (Table 2, 5)<br>・北卡居住證明 (Table 3 或 4)"]
        Tests["👁️ 依序通過視力、交通標誌與筆試"]

        Doc --> Tests
    end

    %% 中期：路考 (車輛選擇)
    Tests --> RoadTestPrep{"準備進行路考<br>(Driving Skills Test)"}

    %% ★ 租車線：強調合約必須有名字
    RoadTestPrep -- 模式 A: 使用租賃車輛 --> RentCar["🔑 使用台灣駕照與國際駕照 (IDP) 租車"]
    RentCar --> Test_Rental["🚗 駕駛租賃車輛進行路考<br>(考官現場查驗租賃車車輛保險與註冊狀態)"]

    %% ★ 借車線：強調保險必須有名字
    RoadTestPrep -- 模式 B: 借用他人車輛 --> AddName["🏦 請車主將你加入該車保險<br>(⚠️ 保險證明上必須有你的名字)"]
    AddName --> Test_Borrow["🚗 駕駛借用的私人車輛進行路考<br>(考官現場查驗車輛保險與註冊狀態)"]

    Test_Rental --> RoadTest
    Test_Borrow --> RoadTest["✅ 通過路考"]:::status

    %% 後期：NCDMV 櫃檯發證與保險處理
    RoadTest --> NCDMV_Post

    subgraph NCDMV_Post ["🏛️ NCDMV 監理所現場 (考後核發與保險查驗)"]
        direction TB
        InsuranceChoice{"處理北卡責任險要求<br>(Liability Insurance)"}

        InsuranceChoice -- 有北卡責任險 --> Ins_Yes["🏦 提交保險證明 (參考 Table 7)<br>例如: DL-123 表格或保險單 (必須有你的名字)"]:::bank
        InsuranceChoice -- 無北卡責任險 --> Ins_No["⚠️ 簽署免責聲明 (Form DL-123A)<br>聲明不擁有車輛，接受 Fleet Vehicles Only 限制"]:::alert

        Ins_Yes --> Final1
        Ins_No --> Final1

        Final1["📸 現場繳費、拍照並領取 60 天臨時紙本駕照"]
    end

    Final1 --> End([約 60 天內透過信件收到正式實體駕照])
```



[^ncdmv-p23]: NCDOT. (2024). North Carolina Driver Handbook, p. 23. Retrieved from [PDF](https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Documents/driver-handbook.pdf).

[^ncdmv-t1]: NCDOT North Carolina Driver Handbook, Table (1), p. 16.
[^ncdmv-t1]: NCDOT North Carolina Driver Handbook, Table (1), p. 16.
