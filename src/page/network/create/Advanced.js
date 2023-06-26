import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"

const Advanced = () => {
  return (<>
    {/*
      If "modal-wrap" has class "scrollable" then "modal-body" will scroll.
      <section className="modal-wrap scrollable">
    */}
    <section className="modal-wrap">
      {/* Start : Modal */}
      <article className="modal">
        {/* Start : Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">네트워크 등록</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          {/* Start : Tab */}
          <ul className="progress-card">
            <li className="done">
              <span className="icon"><IconFileGray /></span>
              <p>
                <strong>기본 설정</strong>
                <span>Current</span>
              </p>
            </li>
            <li className="current">
              <span className="icon"><IconHexagonGray /></span>
              <p>
                <strong>세부 설정</strong>
                <span>To do</span>
              </p>
            </li>
            <li></li>
          </ul>
          {/* End : Tab */}

          <div className="modal-content">
            <div className="d-flex flex-1 gap-24 align-start">
              <div className="content-box">
                <label htmlFor="">DNS</label>

                <div className="box-radius bg-lightgray none-shadow p-12">
                  <div className="box-radius box-line none-shadow px-12 mb-12">
                    <table className="tbl-list">
                      <caption></caption>
                      <colgroup>
                        <col style={{width: '40px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input type="checkbox" name="chk-1-1" id="chk-1-1"/>
                            <label htmlFor="chk-1-1"></label>
                          </div>
                        </th>
                        <th><strong>IP</strong></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-1-2" id="chk-1-2"/>
                            <label htmlFor="chk-1-2"></label>
                          </div>
                        </td>
                        <td>
                          <input type="text"/>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-end gap-4">
                    <button type="button" className="btn btn-default text-gray">삭제</button>
                    <button type="button" className="btn btn-default">추가</button>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <label htmlFor="">Host Routes</label>

                <div className="box-radius bg-lightgray none-shadow p-12">
                  <div className="box-radius box-line none-shadow px-12 mb-12">
                    <div className="fixed-head-wrap" style={{maxHeight: '428px'}}>
                      <table className="tbl-list">
                        <caption></caption>
                        <colgroup>
                          <col style={{width: 'auto'}}/>
                          <col style={{width: '175px'}}/>
                          <col style={{width: '175px'}}/>
                        </colgroup>
                        <thead>
                        <tr>
                          <th>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-1" id="chk-2-1"/>
                              <label htmlFor="chk-2-1"></label>
                            </div>
                          </th>
                          <th><strong>Destination</strong></th>
                          <th><strong>Nexthop</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-2" id="chk-2-2"/>
                              <label htmlFor="chk-2-2"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-3" id="chk-2-3"/>
                              <label htmlFor="chk-2-3"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-4" id="chk-2-4"/>
                              <label htmlFor="chk-2-4"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-5" id="chk-2-5"/>
                              <label htmlFor="chk-2-5"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-6" id="chk-2-6"/>
                              <label htmlFor="chk-2-6"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-7" id="chk-2-7"/>
                              <label htmlFor="chk-2-7"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-8" id="chk-2-8"/>
                              <label htmlFor="chk-2-8"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" name="chk-2-9" id="chk-2-9"/>
                              <label htmlFor="chk-2-9"></label>
                            </div>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td>
                            <input type="text"/>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="d-flex justify-end gap-4">
                    <button type="button" className="btn btn-default">전체 삭제</button>
                    <button type="button" className="btn btn-default">추가</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-default">이전</button>
          <button type="button" className="btn btn-control">다음</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Advanced
