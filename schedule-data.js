// ข้อมูลตารางเรียน ม. 5/15 ภาคเรียนที่ 2/2569
// เริ่มต้นสัปดาห์ตั้งแต่วันจันทร์ที่ 2 พฤศจิกายน 2569 เป็นต้นไป

const scheduleData = {
  className: "ม. 5/15",
  semester: "2/2569",
  startDate: "2026-11-02", // วันจันทร์ที่ 2 พฤศจิกายน 2569
  timeSlots: [
    { period: 1, time: "08.30-09.20", startTime: "08:30", endTime: "09:20" },
    { period: 2, time: "09.20-10.10", startTime: "09:20", endTime: "10:10" },
    { period: 3, time: "10.10-11.00", startTime: "10:10", endTime: "11:00" },
    { period: 4, time: "11.00-11.50", startTime: "11:00", endTime: "11:50" },
    { period: 5, time: "11.50-12.40", startTime: "11:50", endTime: "12:40" },
    { period: 6, time: "12.40-13.30", startTime: "12:40", endTime: "13:30" },
    { period: 7, time: "13.30-14.20", startTime: "13:30", endTime: "14:20" },
    { period: 8, time: "14.20-15.10", startTime: "14:20", endTime: "15:10" },
    { period: 9, time: "15.10-16.00", startTime: "15:10", endTime: "16:00" }
  ],
  days: {
    monday: [
      { period: 1, code: "", subject: "โฮมรูม จริยธรรม", teacher: "", room: "" },
      { period: 2, code: "ง32102", subject: "การงานอาชีพ", teacher: "ครูพรปวีณ์", room: "กล 1" },
      { period: 3, code: "ท32102", subject: "ภาษาไทย", teacher: "ครูบุญยาพร", room: "1041" },
      { period: 4, code: "", subject: "ว่าง", teacher: "", room: "" },
      { period: 5, code: "", subject: "พักกลางวัน", teacher: "", room: "" },
      { period: 6, code: "ว30101", subject: "วิทยาศาสตร์กายภาพ", teacher: "ครูพงษ์ดนัย", room: "333" },
      { period: 7, code: "ว30101", subject: "วิทยาศาสตร์กายภาพ", teacher: "ครูพงษ์ดนัย", room: "333" },
      { period: 8, code: "", subject: "ว่าง", teacher: "", room: "" },
      { period: 9, code: "", subject: "ว่าง", teacher: "", room: "" }
    ],
    tuesday: [
      { period: 1, code: "อ32102", subject: "ภาษาอังกฤษ", teacher: "ครูนัตชลีย์", room: "737" },
      { period: 2, code: "อ32212", subject: "ภาษาอังกฤษฟัง-พูด", teacher: "ครูณิฎา", room: "736" },
      { period: 3, code: "ค32202", subject: "คณิตศาสตร์เพิ่มเติม", teacher: "ครูปณิธาน", room: "144" },
      { period: 4, code: "พ32202", subject: "พลศึกษา", teacher: "ครูกรชิต", room: "ยิม 2" },
      { period: 5, code: "", subject: "พักกลางวัน", teacher: "", room: "" },
      { period: 6, code: "ส32102", subject: "สังคมศึกษา", teacher: "ครูกาญจนา", room: "745" },
      { period: 7, code: "ค32102", subject: "คณิตศาสตร์พื้นฐาน", teacher: "ครูสิรินทร์พร", room: "923" },
      { period: 8, code: "ท32102", subject: "ภาษาไทย", teacher: "ครูบุญยาพร", room: "1044" },
      { period: 9, code: "", subject: "ว่าง", teacher: "", room: "" }
    ],
    wednesday: [
      { period: 1, code: "ง32266", subject: "การงานอาชีพเพิ่มเติม", teacher: "ครูรารักษ์ ประดิษฐ์", room: "" },
      { period: 2, code: "ง32266", subject: "การงานอาชีพเพิ่มเติม", teacher: "ครูรารักษ์ ประดิษฐ์", room: "" },
      { period: 3, code: "ค32202", subject: "คณิตศาสตร์เพิ่มเติม", teacher: "ครูปณิธาน", room: "147" },
      { period: 4, code: "อ32204", subject: "ภาษาอังกฤษเพิ่มเติม", teacher: "ครูสิทธิพงษ์", room: "732" },
      { period: 5, code: "", subject: "พักกลางวัน", teacher: "", room: "" },
      { period: 6, code: "ส32104", subject: "ประวัติศาสตร์", teacher: "ครูวรรณภา", room: "121" },
      { period: 7, code: "ส32102", subject: "สังคมศึกษา", teacher: "ครูกาญจนา", room: "112" },
      { period: 8, code: "อ32208", subject: "ภาษาอังกฤษอ่าน-เขียน", teacher: "ครูปิยาพินี", room: "733" },
      { period: 9, code: "", subject: "ว่าง", teacher: "", room: "" }
    ],
    thursday: [
      { period: 1, code: "อ32202", subject: "ภาษาอังกฤษเพิ่มเติม", teacher: "ครูพชรา", room: "734" },
      { period: 2, code: "พ32102", subject: "สุขศึกษา", teacher: "ครูจินตนา", room: "กล 1" },
      { period: 3, code: "ว32182", subject: "วิทยาการคำนวณ", teacher: "ครูนฤมล(จับ)", room: "com7-23" },
      { period: 4, code: "ก32902", subject: "แนะแนว", teacher: "ครูอุไรวรรณ", room: "124" },
      { period: 5, code: "", subject: "พักกลางวัน", teacher: "", room: "" },
      { period: 6, code: "อ30204", subject: "ภาษาอังกฤษสื่อสาร", teacher: "Joy Irvin", room: "748" },
      { period: 7, code: "อ32212", subject: "ภาษาอังกฤษฟัง-พูด", teacher: "ครูณิฎา", room: "944" },
      { period: 8, code: "ค32202", subject: "คณิตศาสตร์เพิ่มเติม", teacher: "ครูปณิธาน", room: "132" },
      { period: 9, code: "", subject: "ว่าง", teacher: "", room: "" }
    ],
    friday: [
      { period: 1, code: "ค32202", subject: "คณิตศาสตร์เพิ่มเติม", teacher: "ครูปณิธาน", room: "742" },
      { period: 2, code: "อ32202", subject: "ภาษาอังกฤษเพิ่มเติม", teacher: "ครูพชรา", room: "738" },
      { period: 3, code: "อ32208", subject: "ภาษาอังกฤษอ่าน-เขียน", teacher: "ครูปิยาพินี", room: "741" },
      { period: 4, code: "ศ32102", subject: "ศิลปะ (ดนตรีไทย)", teacher: "ครูวัชระ", room: "ดนตรีไทย" },
      { period: 5, code: "", subject: "พักกลางวัน", teacher: "", room: "" },
      { period: 6, code: "ค32102", subject: "คณิตศาสตร์พื้นฐาน", teacher: "ครูสิรินทร์พร", room: "142" },
      { period: 7, code: "อ32204", subject: "ภาษาอังกฤษเพิ่มเติม", teacher: "ครูสิทธิพงษ์", room: "732" },
      { period: 8, code: "", subject: "ชุมนุม", teacher: "", room: "" },
      { period: 9, code: "", subject: "ว่าง", teacher: "", room: "" }
    ]
  }
};