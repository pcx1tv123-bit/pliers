document.addEventListener("DOMContentLoaded", () => {
  initSchedule();
  startClock();
});

function initSchedule() {
  const titleElem = document.getElementById("schedule-title");
  if (titleElem) {
    titleElem.innerText = `ตารางเรียน ชั้น ${scheduleData.className} ภาคเรียนที่ ${scheduleData.semester}`;
  }

  renderScheduleTable();
  updateCurrentStatus();
}

function renderScheduleTable() {
  const tableBody = document.getElementById("schedule-body");
  if (!tableBody) return;

  const daysMap = {
    monday: "จันทร์",
    tuesday: "อังคาร",
    wednesday: "พุธ",
    thursday: "พฤหัสบดี",
    friday: "ศุกร์"
  };

  tableBody.innerHTML = "";

  Object.keys(scheduleData.days).forEach((dayKey) => {
    const row = document.createElement("tr");
    row.id = `row-${dayKey}`;

    const dayTd = document.createElement("td");
    dayTd.className = "day-header";
    dayTd.innerText = daysMap[dayKey];
    row.appendChild(dayTd);

    scheduleData.days[dayKey].forEach((period) => {
      const td = document.createElement("td");
      td.className = "period-cell";
      td.dataset.period = period.period;

      if (period.code || period.teacher || period.room) {
        td.innerHTML = `
          <div class="code">${period.code || ""}</div>
          <div class="subject">${period.subject}</div>
          <div class="teacher">${period.teacher || ""}</div>
          <div class="room">${period.room ? "ห้อง " + period.room : ""}</div>
        `;
      } else {
        td.innerHTML = `<div class="empty-subject">${period.subject}</div>`;
      }

      row.appendChild(td);
    });

    tableBody.appendChild(row);
  });
}

function startClock() {
  setInterval(() => {
    updateClockDisplay();
    updateCurrentStatus();
  }, 1000);
  updateClockDisplay();
}

function updateClockDisplay() {
  const now = new Date();
  const clockElem = document.getElementById("clock");
  const weekElem = document.getElementById("week-info");

  if (clockElem) {
    clockElem.innerText = now.toLocaleTimeString("th-TH");
  }

  if (weekElem) {
    const weekNum = getWeekNumber(now, scheduleData.startDate);
    weekElem.innerText = weekNum > 0 ? `สัปดาห์ที่ ${weekNum}` : "ช่วงก่อนเปิดภาคเรียน";
  }
}

function getWeekNumber(currentDate, startDateStr) {
  const start = new Date(startDateStr);
  start.setHours(0, 0, 0, 0);
  
  const current = new Date(currentDate);
  current.setHours(0, 0, 0, 0);

  const diffTime = current - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 0;
  return Math.floor(diffDays / 7) + 1;
}

function updateCurrentStatus() {
  const now = new Date();
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const currentDayKey = dayNames[now.getDay()];

  document.querySelectorAll(".period-cell").forEach(cell => cell.classList.remove("active-period"));
  document.querySelectorAll("tr").forEach(row => row.classList.remove("active-day"));

  if (!scheduleData.days[currentDayKey]) return;

  const activeRow = document.getElementById(`row-${currentDayKey}`);
  if (activeRow) activeRow.classList.add("active-day");

  const currentTimeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  scheduleData.timeSlots.forEach((slot) => {
    if (currentTimeStr >= slot.startTime && currentTimeStr < slot.endTime) {
      const activeCell = activeRow ? activeRow.querySelector(`td[data-period="${slot.period}"]`) : null;
      if (activeCell) {
        activeCell.classList.add("active-period");
      }
    }
  });
}