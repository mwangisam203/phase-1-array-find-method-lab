function superbowlWin(record) {
    for (let i = 0; i < record.length; i++) {
      if (record[i].result === "W" && record[i].team === "Denver Broncos") {
        return record[i].year;
      }
    }
    return undefined;
  }