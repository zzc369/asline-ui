export default function layout (originData) {
  const copyData = originData.map(item => {
    return {...item}
  })
  const rowData = copyData.sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x
    return b.y - a.y
  })
  const compositionData = []
  rowData.forEach((item, index) => {
    if (!rowData[index].hasRow) {
      const tempHeight = item.height
      let tempList = [item]
      rowData.forEach((temp, tempIndex) => {
        if (tempIndex === index) return
        if (temp.hasRow) return
        if (item.y === temp.y || (item.y > temp.y && item. y < temp.y + tempHeight) || (item.y < temp.y && item.y + item.height > temp.y)) {
          tempList.push(temp)
          rowData[tempIndex].hasRow = true
        }
      })
      rowData[index].hasRow = true
      compositionData.push({row: tempList})
    }
  })
  const resultList = []
  let singleList = []
  let flag = false
  compositionData.forEach((item, i) => {
    if (!Array.isArray(item.row)) resultList.push(item.row)
    if (item.row.length > 1) {
      let tempList = []
      item.row.forEach((temp1, index) => {
        if (!compositionData[i].row[index].hasColumn) {
          const tempWidth = temp1.width
          item.row.forEach((temp2, tempIndex) => {
            if (tempIndex === index) return
            // if (temp2.hasColumn) return
            if (temp1.x === temp2.x || (temp1.x > temp2.x && temp1.x < temp2.x + tempWidth) || (temp1.x < temp2.x && temp1.x + temp1.width > temp2.x)) {
              compositionData[i].row[tempIndex].hasColumn = true
              compositionData[i].row[index].hasColumn = true
              tempList.push(temp2)
              flag = true
            }
          })
          if (tempList.length) {
            tempList.push(temp1)
          } else {
            if (!temp1.hasColumn && temp1.hasRow) {
              singleList.push([temp1])
            }
          }
        }
      })
      if (!flag) {
        resultList.push(item)
        singleList = []
        resultList.push(...singleList)
      } else {
        resultList.push({column: [...singleList]})
        resultList.push({column: tempList})
      }
    } else {
      resultList.push(item)
    }
  })
  return resultList
}