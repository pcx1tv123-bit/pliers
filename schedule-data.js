// ข้อมูลตารางเรียนหลัก ม. 5/15 (รหัสวิชาอยู่ในช่องห้อง)
const MASTER_SCHEDULE = {
    mon: {
        dayName: "วันจันทร์",
        bgColor: "bg-red-500 dark:bg-red-900/80",
        borderColor: "border-red-200 dark:border-red-900/50",
        accentBg: "bg-red-50 dark:bg-red-950/30",
        classes: [
            { 
                id: "m1", 
                timeStart: "08:30", 
                timeEnd: "09:20", 
                subject: "โฮมรูม จริยธรรม", 
                room: "-", 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "โฮมรูมและจริยธรรม",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "m2", 
                timeStart: "09:20", 
                timeEnd: "10:10", 
                subject: "การงานอาชีพ", 
                room: "ง32102", 
                instructor: "ครูพรปวีณ์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "การงานอาชีพ",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "m3", 
                timeStart: "10:10", 
                timeEnd: "11:00", 
                subject: "ภาษาไทย", 
                room: "ท32102", 
                instructor: "ครูบุญยาพร", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาไทย",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "m4", 
                timeStart: "11:00", 
                timeEnd: "11:50", 
                subject: "ว่าง", 
                room: "-", 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "-",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "mL", 
                timeStart: "11:50", 
                timeEnd: "12:40", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พักกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "m5", 
                timeStart: "12:40", 
                timeEnd: "14:20", 
                subject: "วิทยาศาสตร์", 
                room: "ว30101", 
                instructor: "ครูพงษ์ดนัย", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "วิทยาศาสตร์กาย",
                color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" 
            },
            { 
                id: "m6", 
                timeStart: "14:20", 
                timeEnd: "15:10", 
                subject: "ว่าง", 
                room: "-", 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "-",
                color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" 
            }
        ]
    },
    tue: {
        dayName: "วันอังคาร",
        bgColor: "bg-pink-500 dark:bg-pink-900/80",
        borderColor: "border-pink-200 dark:border-pink-900/50",
        accentBg: "bg-pink-50 dark:bg-pink-950/30",
        classes: [
            { 
                id: "t1", 
                timeStart: "08:30", 
                timeEnd: "09:20", 
                subject: "ภาษาอังกฤษ", 
                room: "อ32102", 
                instructor: "ครูนัตชลีย์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษ",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "t2", 
                timeStart: "09:20", 
                timeEnd: "10:10", 
                subject: "ภาษาอังกฤษฟัง-พูด", 
                room: "อ32212", 
                instructor: "ครูณิฎา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษฟัง-พูด",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "t3", 
                timeStart: "10:10", 
                timeEnd: "11:00", 
                subject: "คณิตศาสตร์เพิ่มเติม", 
                room: "ค32202", 
                instructor: "ครูปณิธาน", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์เพิ่มเติม",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "t4", 
                timeStart: "11:00", 
                timeEnd: "11:50", 
                subject: "พลศึกษา", 
                room: "พ32202", 
                instructor: "ครูกรชิต", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พลศึกษา",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "tL", 
                timeStart: "11:50", 
                timeEnd: "12:40", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พักกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "t5", 
                timeStart: "12:40", 
                timeEnd: "13:30", 
                subject: "สังคมศึกษา", 
                room: "ส32102", 
                instructor: "ครูกาญจนา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "สังคมศึกษา",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "t6", 
                timeStart: "13:30", 
                timeEnd: "14:20", 
                subject: "คณิตศาสตร์พื้นฐาน", 
                room: "ค32102", 
                instructor: "ครูสิรินทร์พร", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์พื้นฐาน",
                color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" 
            },
            { 
                id: "t7", 
                timeStart: "14:20", 
                timeEnd: "15:10", 
                subject: "ภาษาไทย", 
                room: "ท32102", 
                instructor: "ครูบุญยาพร", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาไทย",
                color: "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/60 text-teal-900 dark:text-teal-200" 
            }
        ]
    },
    wed: {
        dayName: "วันพุธ",
        bgColor: "bg-emerald-500 dark:bg-emerald-900/80",
        borderColor: "border-emerald-200 dark:border-emerald-900/50",
        accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
        classes: [
            { 
                id: "w1", 
                timeStart: "08:30", 
                timeEnd: "09:20", 
                subject: "การงานอาชีพเพิ่มเติม", 
                room: "ง32266", 
                instructor: "ครูรารักษ์ ประดิษฐ์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "การงานอาชีพเพิ่มเติม",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "w2", 
                timeStart: "09:20", 
                timeEnd: "10:10", 
                subject: "การงานอาชีพเพิ่มเติม", 
                room: "ง32266", 
                instructor: "ครูรารักษ์ ประดิษฐ์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "การงานอาชีพเพิ่มเติม",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "w3", 
                timeStart: "10:10", 
                timeEnd: "11:00", 
                subject: "คณิตศาสตร์เพิ่มเติม", 
                room: "ค32202", 
                instructor: "ครูปณิธาน", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์เพิ่มเติม",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "w4", 
                timeStart: "11:00", 
                timeEnd: "11:50", 
                subject: "ภาษาอังกฤษเพิ่มเติม", 
                room: "อ32204", 
                instructor: "ครูสิทธิพงษ์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษเพิ่มเติม",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "wL", 
                timeStart: "11:50", 
                timeEnd: "12:40", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พักกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "w5", 
                timeStart: "12:40", 
                timeEnd: "13:30", 
                subject: "ประวัติศาสตร์", 
                room: "ส32104", 
                instructor: "ครูวรรณภา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ประวัติศาสตร์",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "w6", 
                timeStart: "13:30", 
                timeEnd: "14:20", 
                subject: "สังคมศึกษา", 
                room: "ส32102", 
                instructor: "ครูกาญจนา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "สังคมศึกษา",
                color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" 
            },
            { 
                id: "w7", 
                timeStart: "14:20", 
                timeEnd: "15:10", 
                subject: "ภาษาอังกฤษอ่าน-เขียน", 
                room: "อ32208", 
                instructor: "ครูปิยาพินี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษอ่าน-เขียน",
                color: "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/60 text-teal-900 dark:text-teal-200" 
            }
        ]
    },
    thu: {
        dayName: "วันพฤหัสบดี",
        bgColor: "bg-orange-500 dark:bg-orange-900/80",
        borderColor: "border-orange-200 dark:border-orange-900/50",
        accentBg: "bg-orange-50 dark:bg-orange-950/30",
        classes: [
            { 
                id: "th1", 
                timeStart: "08:30", 
                timeEnd: "09:20", 
                subject: "ภาษาอังกฤษเพิ่มเติม", 
                room: "อ32202", 
                instructor: "ครูพชรา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษเพิ่มเติม",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "th2", 
                timeStart: "09:20", 
                timeEnd: "10:10", 
                subject: "สุขศึกษา", 
                room: "พ32102", 
                instructor: "ครูจินตนา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "สุขศึกษา",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "th3", 
                timeStart: "10:10", 
                timeEnd: "11:00", 
                subject: "วิทยาการคำนวณ", 
                room: "ว32182", 
                instructor: "ครูนฤมล(จับ)", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "วิทยาการคำนวณ",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "th4", 
                timeStart: "11:00", 
                timeEnd: "11:50", 
                subject: "แนะแนว", 
                room: "ก32902", 
                instructor: "ครูอุไรวรรณ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "แนะแนว",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "thL", 
                timeStart: "11:50", 
                timeEnd: "12:40", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พักกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "th5", 
                timeStart: "12:40", 
                timeEnd: "13:30", 
                subject: "ภาษาอังกฤษสื่อสาร", 
                room: "อ30204", 
                instructor: "Joy Irvin", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษสื่อสาร",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "th6", 
                timeStart: "13:30", 
                timeEnd: "14:20", 
                subject: "ภาษาอังกฤษฟัง-พูด", 
                room: "อ32212", 
                instructor: "ครูณิฎา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษฟัง-พูด",
                color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" 
            },
            { 
                id: "th7", 
                timeStart: "14:20", 
                timeEnd: "15:10", 
                subject: "คณิตศาสตร์เพิ่มเติม", 
                room: "ค32202", 
                instructor: "ครูปณิธาน", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์เพิ่มเติม",
                color: "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/60 text-teal-900 dark:text-teal-200" 
            }
        ]
    },
    fri: {
        dayName: "วันศุกร์",
        bgColor: "bg-amber-500 dark:bg-amber-900/80",
        borderColor: "border-amber-200 dark:border-amber-900/50",
        accentBg: "bg-amber-50 dark:bg-amber-950/30",
        classes: [
            { 
                id: "f1", 
                timeStart: "08:30", 
                timeEnd: "09:20", 
                subject: "คณิตศาสตร์เพิ่มเติม", 
                room: "ค32202", 
                instructor: "ครูปณิธาน", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์เพิ่มเติม",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "f2", 
                timeStart: "09:20", 
                timeEnd: "10:10", 
                subject: "ภาษาอังกฤษเพิ่มเติม", 
                room: "อ32202", 
                instructor: "ครูพชรา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษเพิ่มเติม",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "f3", 
                timeStart: "10:10", 
                timeEnd: "11:00", 
                subject: "ภาษาอังกฤษอ่าน-เขียน", 
                room: "อ32208", 
                instructor: "ครูปิยาพินี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษอ่าน-เขียน",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "f4", 
                timeStart: "11:00", 
                timeEnd: "11:50", 
                subject: "ดนตรีไทย", 
                room: "ศ32102", 
                instructor: "ครูวัชระ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ดนตรีไทย",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "fL", 
                timeStart: "11:50", 
                timeEnd: "12:40", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "พักกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "f5", 
                timeStart: "12:40", 
                timeEnd: "13:30", 
                subject: "คณิตศาสตร์พื้นฐาน", 
                room: "ค32102", 
                instructor: "ครูสิรินทร์พร", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "คณิตศาสตร์พื้นฐาน",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "f6", 
                timeStart: "13:30", 
                timeEnd: "14:20", 
                subject: "ภาษาอังกฤษเพิ่มเติม", 
                room: "อ32204", 
                instructor: "ครูสิทธิพงษ์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ภาษาอังกฤษเพิ่มเติม",
                color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" 
            },
            { 
                id: "f7", 
                timeStart: "14:20", 
                timeEnd: "15:10", 
                subject: "ชุมนุม", 
                room: "-", 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ชุมนุม",
                color: "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/60 text-teal-900 dark:text-teal-200" 
            }
        ]
    }
};
