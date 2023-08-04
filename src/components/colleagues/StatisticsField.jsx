const StatisticsField = ({ collegues }) => {
  const dataLength = collegues?.length

  const completeList = collegues?.reduce((count, item) => {
    if (item.phoneNumber.length > 0) {
      count++
    }

    return count
  }, 0)

  return (
    <div className="statistics">
      <div className="statistic-container">
        <div className="text-container">
          <p className="number">{dataLength}</p>
          <p className="appellation">COLLEAGUES</p>
        </div>
      </div>

      <div className="statistic-container green">
        <div className="text-container">
          <p className="number">{completeList}</p>
          <p className="appellation">COMPLETE</p>
        </div>
      </div>

      <div className="statistic-container red">
        <div className="text-container">
          <p className="number">{dataLength - completeList}</p>
          <p className="appellation">INCOMPLETE</p>
        </div>
      </div>
    </div>
  )
}

export default StatisticsField
