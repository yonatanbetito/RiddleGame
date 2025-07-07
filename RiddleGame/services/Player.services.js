export class Player {
  constructor(name) {
    this.name = name;
    this.timeList = [];
  }
  //קולט זמן התחלה וסיום ומכניס לרשימה
  recordTime(start, end) {
    let sumTime = end - start;
    this.timeList.push(sumTime);
    return sumTime;
  }

  //מראה לי את הנתונים (סהכ זמן או ממוצע חידה)
  showStats() {
    let total = 0;
    for (let i = 0; i < this.timeList.length; i++) {
      total += this.timeList[i];
    }

    let average = total / this.timeList.length;
    return {
      total: (total / 1000).toFixed(2),
      average: (average / 1000).toFixed(2),
    };
  }
}
