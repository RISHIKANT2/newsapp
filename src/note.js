<div className="d-flex justify-content-between"> 
             <button type="button" className="btn btn-primary" onClick={handlePrevious} >&laquo;Previous</button>
             <button type="button" className="btn btn-primary" onClick={handleNext}>Next&raquo;</button>
          </div>
          // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
  id="scrollableDiv"
  style={{
  height: 300,
  overflow: 'auto',
 display: 'flex',
  flexDirection: 'column-reverse',
    }}
    &page=${data.page}
    &pageSize=${props.pagesize}

    REACT_APP_NEWS_API_KEY= '2b1d91988f2f4a22a8785b8658b30f91'